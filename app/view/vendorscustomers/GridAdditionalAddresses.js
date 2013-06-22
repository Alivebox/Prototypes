Ext.define('Prototypes.view.vendorscustomers.GridAdditionalAddresses', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridadditionaladdresses',
    disableSelection: true,

    store: Ext.create('Ext.data.Store', {
        fields: ['type', 'address'],
        data: [
            {'type': 'Shipping', 'address': '1234 Fakest Street Ever City CA 92773 USA'},
            {'type': 'Billing', 'address': '4567 Even Faker Ave. Somewhere ID 456789 USA'}
        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        '->',
                        {
                            xtype: 'button',
                            text: 'Add New Address',
                            listeners: {
                                scope: this,
                                click: this.onAddNewAddress
                            }
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns: [
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    text: 'Type',
                    dataIndex: 'type',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    text: 'Address',
                    dataIndex: 'address',
                    align: 'left',
                    flex: 1
                }
            ]
        }),
            this.callParent()
    },

    onAddNewAddress: function(arguments){
        var tmpAddNewAddressPopUp = Ext.create('Prototypes.view.vendorscustomers.WindowNewAddress');
        tmpAddNewAddressPopUp.show();
    }

});