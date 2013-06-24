Ext.define('Prototypes.view.vendorscustomers.MainVendorCustomerContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainvendorcustomercontainer',
    autoScroll: true,
    scroll: 'both',
    layout: "column",

    initComponent: function () {

        this.items = [
            {
                xtype: 'advancedsearch',
                title: 'Advanced Search',
                width: 260,
                height: 900
            },
            /*{
                xtype: 'gridcustomercenter'
            },*/
            {
                xtype: 'customercontacts',
                title: 'Customer Contacts',
                width: 275,
                height: 900
            }
        ],
        this.callParent(arguments);
    }

});