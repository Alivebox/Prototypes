Ext.define('Prototypes.view.timeaway.timeawaymanager.summaryinfo.SummaryInformation', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.summaryinformation',
    collapsible: true,
    collapseDirection: 'right',
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Actions',
                collapsible: true,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'container',
                        padding : '15 0 0 0',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 200,
                                iconCls: 'delete-button-icon',
                                text: 'Request Delete'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding : '5 0 0 0',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 200,
                                text: 'View in Scheduler',
                                iconCls: 'find-button-icon'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding : '5 0 0 0',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 200,
                                text: 'Manage Group',
                                iconCls: 'group-button-icon'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding : '5 0 15 0',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'button',
                                width: 200,
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
                collapseDirection: 'top',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'gridrequestdetails',
                        columnLines: false,
                        rowLines: true,
                        height: 150,
                        autoScroll: true,
                        scroll: 'vertical',
                        flex: 1,
                        width: '100%'
                    },
                    {
                        xtype: 'formrequestdetails',
                        padding: '25 0 0 0',
                        cls: 'top-border',
                        flex: 2,
                        width: '90%',
                        padding: '5 0 0 0'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Balance Information',
                collapsible: true,
                collapseDirection: 'top',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'gridbalanceinformation',
                        columnLines: false,
                        rowLines: true,
                        height: 125,
                        width: '100%'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Reports',
                collapsible: true,
                collapseDirection: 'top',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Balance Detail Report',
                        padding: '10 25 0 75'
                    },
                    {
                        xtype: 'label',
                        text: 'Request Summary',
                        padding: '5 25 0 75'
                    },
                    {
                        xtype: 'label',
                        text: 'Print Request',
                        padding: '5 25 10 75'
                    }
                ]
            }
        ]
        this.callParent()
    }


});