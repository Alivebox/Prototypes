Ext.define('Prototypes.view.vendorscustomers.MainVendorCustomerContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainvendorcustomercontainer',
    autoScroll: true,
    scroll: 'both',
    layout: "hbox",

    initComponent: function () {

        this.items = [
            {
                xtype: 'advancedsearch',
                title: 'Advanced Search',
                flex: 1,
                height: 1050,
                border: 1

            },
            {
                title: 'Customer Center',
                xtype: 'gridcustomercenter',
                flex: 4,
                height: 1050,
                border: 1

            },
            {
                xtype: 'customercontacts',
                title: 'Customer Contacts',
                flex: 1,
                height: 1050,
                border: 1

            }
        ],
        this.callParent(arguments);
    }

});