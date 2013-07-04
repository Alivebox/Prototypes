Ext.define('Prototypes.view.timeaway.timeawaymanager.summaryinfo.SummaryInformation', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.summaryinformation',


    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Actions',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        padding : '25 0 0 50',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 150,
                                iconCls: 'delete-button-icon',
                                text: 'Request Delete'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding : '5 0 0 50',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 150,
                                text: 'View in Scheduler',
                                iconCls: 'find-button-icon'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding : '5 0 0 50',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 150,
                                text: 'Manage Group',
                                iconCls: 'group-button-icon'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding : '5 0 25 50',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 150,
                                text: 'Manage Approvers',
                                iconCls: 'user-button-icon'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Request Details',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'gridrequestdetails',
                        columnLines: false,
                        rowLines: false,
                        height: 130,
                        width: '100%'
                    },
                    {
                        xtype: 'formrequestdetails',
                        height: 210,
                        width: '100%',
                        padding: '5 0 0 10'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Balance Information',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'gridbalanceinformation',
                        columnLines: false,
                        rowLines: false,
                        height: 150,
                        width: '100%'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Reports',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Balance Detail Report',
                        padding: '25 25 0 75'
                    },
                    {
                        xtype: 'label',
                        text: 'Request Summary',
                        padding: '15 25 0 75'
                    },
                    {
                        xtype: 'label',
                        text: 'Print Request',
                        padding: '15 25 25 75'
                    }
                ]
            }
        ]
        this.callParent()
    }


});