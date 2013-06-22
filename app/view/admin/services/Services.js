Ext.define('Prototypes.view.admin.services.Services', {
    extend:'Ext.container.Container',
    alias: 'widget.adminservices',

    initComponent:function () {

        this.items = [
            {
                xtype: 'gridservices',
                store: 'admin.services.Services',
                internalGridPackage: 'Prototypes.view.admin.services.GridServiceTypes',
                internalGridConfig: {
                    store: 'admin.services.ServiceTypes'
                },
                loadStoreFunction: function(argRecord,argStore){
                    argStore.load();
                },
                loadStoreFunctionScope: this
            }
        ];
        this.callParent(arguments);
    }
});