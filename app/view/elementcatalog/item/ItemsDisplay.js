Ext.define('Prototypes.view.elementcatalog.item.ItemsDisplay', {
    extend: 'Ext.panel.Panel',
    xtype: 'itemsdisplay',
    autoScroll: true,
    height: '100%',
    layout: 'vbox',
    title: 'Assets',
    initComponent: function () {
        this.items = [
            ,
            {
                xtype: 'panel',
                itemId: 'emptyTextPanel',
                width: '100%',
                items: [
                    {
                        xtype: 'label',
                        itemId: 'emptyTextValue',
                        text: 'There is no element selected'
                    }
                ]
            },
            {
                xtype: 'itemsgrid',
                itemId: 'itemsgrid',
                store: 'elementcatalog.Items'
            }
        ];

        this.callParent(arguments);
    }
});
