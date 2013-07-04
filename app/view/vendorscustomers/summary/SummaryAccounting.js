Ext.define('Prototypes.view.vendorscustomers.summary.SummaryAccounting', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.summaryaccounting',
    collapsible: 'true',
    collapseDirection: 'left',
    heigth: '100%',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'container',
                padding: '10 0 0 0',
                layout: 'hbox',
                items:[
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        items:[
                            {
                                xtype: 'label',
                                text: 'Payment and Billing',
                                padding: '15 0 0 10',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Outstanding Balance:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Terms:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Payment Method:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Billing Recurrence:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Tax Information',
                                padding: '15 0 0 10',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Tax Group Code:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Tax ID:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Tax Exempt:',
                                padding: '10 0 25 25'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: '0 0 0 25',
                        layout: 'vbox',
                        items:[

                            {
                                xtype: 'label',
                                text: 'Net 30',
                                padding: '66 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Check',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'NY123',
                                padding: '68 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: '086-75-3009',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'checkboxfield',
                                text: 'null',
                                padding: '5 0 0 25'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: '0 0 0 50',
                        layout: 'vbox',
                        items:[
                            {
                                xtype: 'label',
                                text: 'Credit Details',
                                padding: '15 0 0 10',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Credit Status:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Effective Date:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Credit Rating:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Approver:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Insurance Details',
                                padding: '15 0 0 10',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'label',
                                text: 'Start Date:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Expiry Date:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Insured Amount:',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Deductible Amount:',
                                padding: '10 0 25 25'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: '0 0 0 25',
                        layout: 'vbox',
                        items:[

                            {
                                xtype:'combobox',
                                fieldLabel: null,
                                editable:false,
                                value: 3,
                                padding: '32 0 0 25',
                                store:[
                                    [1, 'Declined'],
                                    [2, 'Tentative'],
                                    [3, 'Approved']
                                ]
                            },
                            {
                                xtype: 'datefield',
                                fieldLabel: null,
                                value: '01/01/2013',
                                format: 'm/d/Y',
                                padding: '0 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Check',
                                padding: '1 0 0 25'
                            },
                            {
                                xtype: 'label',
                                text: 'Carissa Brown',
                                padding: '10 0 0 25'
                            },
                            {
                                xtype: 'datefield',
                                fieldLabel: null,
                                value: '01/01/2013',
                                format: 'm/d/Y',
                                padding: '28 0 0 25'
                            },
                            {
                                xtype: 'datefield',
                                fieldLabel: null,
                                value: '12/31/2013',
                                format: 'm/d/Y',
                                padding: '0 0 0 25'
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items:[
                                    {
                                        xtype:'combobox',
                                        fieldLabel: null,
                                        editable:false,
                                        value: 1,
                                        width: 75,
                                        padding: '0 0 0 25',
                                        store:[
                                            [1, 'USD'],
                                            [2, 'Euro'],
                                            [3, 'Pound']
                                        ]
                                    },
                                    {
                                        xtype: 'label',
                                        text: '9,000.00',
                                        padding: '3 0 0 5'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                padding: '4 0 0 0',
                                layout: 'hbox',
                                items:[
                                    {
                                        xtype:'combobox',
                                        fieldLabel: null,
                                        editable:false,
                                        value: 1,
                                        width: 75,
                                        padding: '0 0 0 25',
                                        store:[
                                            [1, 'USD'],
                                            [2, 'Euro'],
                                            [3, 'Pound']
                                        ]
                                    },
                                    {
                                        xtype: 'label',
                                        text: '9,000.00',
                                        padding: '3 0 0 5'
                                    }
                                ]
                            }
                        ]
                    }

                ]
            }

        ];

        this.callParent(arguments);
    }


});
