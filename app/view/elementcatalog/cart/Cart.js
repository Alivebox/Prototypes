Ext.define('Prototypes.view.elementcatalog.cart.Cart', {
    extend: 'Ext.panel.Panel',
    xtype: 'cart',
    height: '100%',
    layout: 'vbox',
    initComponent: function () {
        this.items = [
            {
                xtype: 'cartgrid',
                width: '100%',
                store: Ext.getStore('elementcatalog.ItemCarts')
            },
            {
                xtype: 'panel',
                itemId: 'emptyTextPanel',
                disabled: true,
                width: '100%',
                items: [
                    {
                        xtype: 'label',
                        text: 'There are no elements in your cart'
                    }
                ]
            },
            {
                xtype: 'label',
                padding: '10 0 0 0',
                itemId: 'totalLabel',
                text:'Total: $0,000'
            },
            {
                xtype: 'button',
                itemId: 'createOrderButton',
                text: 'Create Order',
                listeners:{
                    scope:this,
                    click:this.onCreateOrderClick
                }
            }
        ];

        this.callParent(arguments);
    },

    onCreateOrderClick:function () {
        this.fireEvent('createOrder',this);
    }
});


