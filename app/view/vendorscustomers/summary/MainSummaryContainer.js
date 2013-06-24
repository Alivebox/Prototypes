Ext.define('Prototypes.view.vendorscustomers.summary.MainSummaryContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainsummarycontainer',
    autoScroll: true,
    scroll: 'both',
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'generalsummaryinfocontainer'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: 300,
                items: [
                    {
                        xtype: 'summarytabcontainer'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});