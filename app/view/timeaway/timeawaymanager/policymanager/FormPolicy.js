Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.FormPolicy', {

    extend: 'Ext.form.Panel',
    alias: 'widget.formpolicy',
    title: 'Edit Policy',
    layout: {
        type: 'vbox',
        align: 'center'
    },

    initComponent: function () {
        this.items = [

            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        padding: '10 0 0 0',
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Policy',
                                width: 200
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Category',
                                width: 200
                            },
                            {
                                xtype: 'fieldset',
                                title: 'Accrual Schedule',
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        fieldLabel: 'Allowance',
                                        width: 200
                                    },
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        cls: 'top-border',
                                        items: [
                                            {
                                                xtype: 'fieldcontainer',
                                                defaultType: 'radiofield',
                                                layout: 'vbox',
                                                cls: 'rigth-border',
                                                items: [
                                                    {
                                                        boxLabel: 'Daily'
                                                    },
                                                    {
                                                        boxLabel: 'Weekly'
                                                    },
                                                    {
                                                        boxLabel: 'Monthly'
                                                    },
                                                    {
                                                        boxLabel: 'Yearly'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'fieldcontainer',
                                                        padding: '0 0 0 10',
                                                        defaultType: 'radiofield',
                                                        layout: 'vbox',
                                                        items: [
                                                            {
                                                                boxLabel: 'Sunday'
                                                            },
                                                            {
                                                                boxLabel: 'Wednesday'
                                                            },
                                                            {
                                                                boxLabel: 'Saturday'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'fieldcontainer',
                                                        padding: '0 0 0 5',
                                                        defaultType: 'radiofield',
                                                        layout: 'vbox',
                                                        items: [
                                                            {
                                                                boxLabel: 'Monday'
                                                            },
                                                            {
                                                                boxLabel: 'Thursday'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'fieldcontainer',
                                                        padding: '0 0 0 5',
                                                        defaultType: 'radiofield',
                                                        layout: 'vbox',
                                                        items: [
                                                            {
                                                                boxLabel: 'Tuesday'
                                                            },
                                                            {
                                                                boxLabel: 'Friday'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }

                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        padding: '10 0 0 30',
                        items: [
                            {
                                xtype: 'numberfield',
                                fieldLabel: 'Limit',
                                width: 200
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Expires',
                                width: 200
                            },
                            {
                                xtype: 'fieldset',
                                title: 'Carryover Schedule',
                                items: [
                                    {
                                        xtype: 'numberfield',
                                        fieldLabel: 'Carryover',
                                        width: 200
                                    },
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        cls: 'top-border',
                                        items: [
                                            {
                                                xtype: 'fieldcontainer',
                                                defaultType: 'radiofield',
                                                layout: 'vbox',
                                                cls: 'rigth-border',
                                                items: [
                                                    {
                                                        boxLabel: 'Daily'
                                                    },
                                                    {
                                                        boxLabel: 'Weekly'
                                                    },
                                                    {
                                                        boxLabel: 'Monthly'
                                                    },
                                                    {
                                                        boxLabel: 'Yearly'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                layout: 'vbox',
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        layout: 'hbox',
                                                        padding: '5 0 0 5',
                                                        items: [
                                                            {
                                                                xtype: 'label',
                                                                text: 'Recur every',
                                                                padding: '3 0 0 0'
                                                            },
                                                            {
                                                                xtype: 'numberfield',
                                                                width: 35,
                                                                maxValue: 10,
                                                                minValue: 1
                                                            },
                                                            {
                                                                xtype: 'label',
                                                                text: 'year(s)',
                                                                padding: '3 0 0 0'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        layout: 'hbox',
                                                        padding: '5 0 0 10',
                                                        items: [
                                                            {
                                                                xtype: 'radiofield',
                                                                boxLabel: 'On',
                                                                padding: '0 2 0 0'
                                                            },
                                                            {
                                                                xtype:'combobox',
                                                                editable:false,
                                                                width: 75,
                                                                value: 1,
                                                                store:[
                                                                    [1, 'January'],
                                                                    [2, 'February'],
                                                                    [3, 'March'],
                                                                    [4, 'April'],
                                                                    [5, 'May'],
                                                                    [6, 'June'],
                                                                    [7, 'July'],
                                                                    [8, 'August'],
                                                                    [9, 'September'],
                                                                    [10, 'October'],
                                                                    [11, 'November'],
                                                                    [12, 'December']

                                                                ]
                                                            },
                                                            {
                                                                xtype: 'numberfield',
                                                                width: 35,
                                                                maxValue: 31,
                                                                minValue: 1
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        layout: 'hbox',
                                                        padding: '5 0 0 10',
                                                        items: [
                                                            {
                                                                xtype: 'radiofield',
                                                                boxLabel: 'On the',
                                                                padding: '0 2 0 0'
                                                            },
                                                            {
                                                                xtype:'combobox',
                                                                editable:false,
                                                                width: 75,
                                                                value: 1,
                                                                store:[
                                                                    [1, 'First'],
                                                                    [2, 'Second'],
                                                                    [3, 'Third'],
                                                                    [4, 'Fourth']

                                                                ]
                                                            },
                                                            {
                                                                xtype:'combobox',
                                                                editable:false,
                                                                width: 75,
                                                                value: 1,
                                                                store:[
                                                                    [1, 'Monday'],
                                                                    [2, 'Thursday'],
                                                                    [3, 'Wednesday'],
                                                                    [4, 'Thuesday'],
                                                                    [5, 'Friday']

                                                                ]
                                                            },
                                                            {
                                                                xtype: 'label',
                                                                text: 'of',
                                                                padding: '3 2 0 2'
                                                            },
                                                            {
                                                                xtype:'combobox',
                                                                editable:false,
                                                                width: 75,
                                                                value: 1,
                                                                store:[
                                                                    [1, 'January'],
                                                                    [2, 'February'],
                                                                    [3, 'March'],
                                                                    [4, 'April'],
                                                                    [5, 'May'],
                                                                    [6, 'June'],
                                                                    [7, 'July'],
                                                                    [8, 'August'],
                                                                    [9, 'September'],
                                                                    [10, 'October'],
                                                                    [11, 'November'],
                                                                    [12, 'December']

                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                       ]
                                    }
                                ]
                            }
                        ]
                    }


                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                padding: '15 0 0 0',
                items: [
                    {
                        xtype: 'button',
                        text: 'Submit'
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});