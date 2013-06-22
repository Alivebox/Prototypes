Ext.define('Prototypes.view.order.summary.DetailInformation', {

    extend: 'Ext.container.Container',
    alias: 'widget.detailinformation',

    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Details',
                iconCls: 'information-icon',
                collapsible: true,
                layout: 'column',
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        padding: '5 0 0 25',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Type:',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Status:',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Start:',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'End:',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Project:',
                                style: 'font-weight:bold;'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        padding: '5 0 75 10',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Type 2A',
                                padding: '0 0 0 10'
                            },
                            {
                                xtype: 'label',
                                text: 'Request',
                                padding: '0 0 0 10'
                            },
                            {
                                xtype: 'label',
                                text: '5/1/2013 12:00:00 PM',
                                padding: '0 0 0 10'
                            },
                            {
                                xtype: 'label',
                                text: '5/3/2013 8:00:00 PM',
                                padding: '0 0 0 10'
                            },
                            {
                                xtype: 'linkbutton',
                                text: 'Weekly Schedule Facility In One Day',
                                padding: '0 0 0 10'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Actions',
                iconCls: 'lightning-icon',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'unsortedlist',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'option'],
                            data: [
                                {'id': 1, 'option': 'Cascade Attributes'},
                                {'id': 2, 'option': 'Recurring Order'},
                                {'id': 3, 'option': 'Clone Order'},
                                {'id': 4, 'option': 'Management Documents'},
                                {'id': 5, 'option': 'Packing List'},
                                {'id': 6, 'option': 'View Conflicts'},
                                {'id': 7, 'option': 'Order Batch Update'},
                                {'id': 8, 'option': 'Resource Worklog'},
                                {'id': 9, 'option': 'Email Order Resources'}

                            ]
                        })
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Reports',
                iconCls: 'layout-content-icon',
                collapsible: true,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'unsortedlist',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'option'],
                            data: [
                                {'id': 1, 'option': 'Print to PDF'},
                                {'id': 2, 'option': 'View Report'},
                                {'id': 3, 'option': 'Studio Report'},
                                {'id': 4, 'option': 'Weekly Report'},
                                {'id': 5, 'option': 'Sign In Sheet'},
                                {'id': 6, 'option': 'Project Report'},
                                {'id': 7, 'option': 'Vault Receip'},
                                {'id': 8, 'option': 'Shipping Memo'}

                            ]
                        })
                    }
                ]
            }
        ]
        this.callParent()
    }


});