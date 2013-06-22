Ext.define('Prototypes.view.timeaway.timeawayrequest.summaryinformation.SummaryRequestInformation', {

    extend: 'Ext.container.Container',
    alias: 'widget.summaryrequestinformation',
    width: 350,
    height: 900,
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Balance Profile',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'gridbalanceprofile',
                        padding: '10 10 10 10',
                        columnLines: false,
                        rowLines: false,
                        width: '100%',
                        height: 300
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Request History',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'gridrequesthistory',
                        columnLines: false,
                        padding: '10 10 10 10',
                        rowLines: false,
                        width: '100%',
                        height: 300
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Reports',
                collapsible: true,
                layout: 'vbox',
                height: 300,
                items: [
                    {
                        xtype: 'label',
                        text: 'Balance Detail Report',
                        padding: '25 25 0 50'
                    },
                    {
                        xtype: 'label',
                        text: 'Request Summary',
                        padding: '25 25 0 50'
                    },
                    {
                        xtype: 'label',
                        text: 'Print Request',
                        padding: '25 25 25 50'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});