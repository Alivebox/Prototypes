Ext.define('Prototypes.view.vendorscustomers.VendorCustomerContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.vendorcustomercontainer',
    autoScroll: true,
    scroll: 'both',
    layout: 'hbox',
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                height: 1050,
                flex: 4,
                border: 1,
                items: [
                    {
                        xtype: 'mainsummarycontainer'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 1050,
                flex: 1,
                border: 1,
                items: [
                    {
                        xtype: 'vendorcustomersidepanel'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});