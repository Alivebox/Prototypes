Ext.define('Prototypes.view.vendorscustomers.WindowNewAddress', {
    extend:'Ext.window.Window',
    alias:'widget.windownewaddress',
    height: 250,
    width: 300,
    resizable: false,
    modal: true,
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Address Type'
                    }
                ]
            }
        ],
            this.callParent(arguments);
    }

});

