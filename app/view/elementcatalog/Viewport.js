Ext.define('Prototypes.view.elementcatalog.Viewport', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'column'
    },
    initComponent:function () {
        this.items = [
            {
                xtype: 'menuview',
                collapsible: true,
                width: 250,
                heigth: '100%'
            },
            {
                xtype: 'itemsdisplay',
                width: 725,
                heigth: '100%'
            },
            {
                xtype: 'cart',
                width: 550,
                heigth: '100%'
            }
        ];
        this.callParent(arguments);
    }
});