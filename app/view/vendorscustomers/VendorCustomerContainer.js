Ext.define('Prototypes.view.vendorscustomers.VendorCustomerContainer', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.vendorcustomercontainer',
    //layout: 'border',

    initComponent: function () {

        this.items = [
            {
                title: 'Center Region',
                region: 'center',
                xtype: 'container',
                items:[
                    {
                        xtype: 'label',
                        text: 'Center Region'
                    }
                ]
            }
        ],
        this.callParent(arguments);
    }

});