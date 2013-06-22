Ext.define('Prototypes.view.layouttest.LayoutTest', {

    extend: 'Ext.container.Container',
    alias: 'widget.layouttest',

    layout: 'column',

    initComponent: function(){
        this.items = [
            {
                xtype: 'container',
                width: 200,
                height: 900
            },
            {
                xtype: 'container',
                width: 200,
                height: 900
            },
            {
                xtype: 'container',
                width: 200,
                height: 900
            }
        ];
        this.callParent(arguments);
    }

});