Ext.define('Prototypes.ux.NestedGrid', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.nestedgrid',

    requires: [
        'Ext.grid.plugin.RowExpander'
    ],

    plugins: [
        {
            ptype: 'rowexpander',
            rowBodyTpl: [
                '<div id="internalGridRow-{id}" ></div>'
            ]
        }
    ],
    enableLocking: false,
    disableSelection: true,
    internalGridPackage: undefined,
    internalGridConfig: undefined,
    rowExpander: undefined,
    loadStoreFunction: undefined,
    loadStoreFunctionScope: undefined,

    initComponent: function () {
        this.addListener('beforerender',this.onBeforeRender,this);
        if( !Ext.isEmpty(this.internalGridConfig) ){
            this.internalGridConfig.forceFit = true;
        }
        this.callParent();
    },

    onBeforeRender: function(){
        var tmpView = this.getView();
        tmpView.addListener('expandbody',this.onExpandBody,this);
    },

    onExpandBody: function(argRowNode,argRecord,argExpandBody){
        var tmpTargetId = 'internalGridRow-' + argRecord.get('id');
        var tmpCurrentGridComponent = Ext.getCmp(tmpTargetId + "-grid");
        if( Ext.isEmpty(tmpCurrentGridComponent) ){
            var tmpGrid = this.createInternalGrid(tmpTargetId,argRowNode,argRecord);
        }
    },

    createInternalGrid: function(argTargetId,argRowNode,argRecord){
        this.internalGridConfig.id = argTargetId + "-grid";
        this.internalGridConfig.renderTo = argTargetId;
        var tmpGrid = Ext.create(this.internalGridPackage, this.internalGridConfig);
        this.callLoadStoreFunction(argRecord,tmpGrid.store);
        argRowNode.grid = tmpGrid;
        tmpGrid.getEl().swallowEvent(['mouseover', 'mousedown', 'click', 'dblclick', 'onRowFocus']);
        tmpGrid.fireEvent("bind", tmpGrid, { id: argRecord.get('id') });
    },

    callLoadStoreFunction: function(argRecord,argStore){
        if( Ext.isEmpty(this.loadStoreFunction) || !Ext.isFunction(this.loadStoreFunction) ){
            return;
        }
        this.loadStoreFunction.call(this.loadStoreFunctionScope,argRecord,argStore);
    }

});