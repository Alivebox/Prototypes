Ext.define('Prototypes.view.elementcatalog.menu.Menu', {
    extend: 'Ext.panel.Panel',
    xtype: 'menuview',
    height: '100%',
    tbar: [
        {
            xtype: 'textfield',
            width: '100%',
            fieldLabel: null,
            emptyText: 'Search...'
        }
    ],

    initComponent: function () {
        this.items = [

            {
                xtype: 'treemenuview'
            },
            {
                xtype: 'details'
            }
        ];

        this.callParent(arguments);
    }
});


