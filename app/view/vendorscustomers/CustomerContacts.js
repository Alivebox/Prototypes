Ext.define('Prototypes.view.vendorscustomers.CustomerContacts', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.customercontacts',
    collapsible: true,
    collapseDirection: 'left',

    initComponent: function () {

        this.items = [
            {
                xtype: 'gridcustomercontacts'
            }
        ]
        this.callParent()
    }


});