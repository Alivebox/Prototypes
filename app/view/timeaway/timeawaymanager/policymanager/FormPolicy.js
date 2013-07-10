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
                                                xtype: 'radiogroup',
                                                columns: 1,
                                                cls: 'rigth-border',
                                                items: [
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Daily',
                                                        itemId: 'rfDaily',
                                                        name: 'fp',
                                                        inputValue: '1',
                                                        checked: true,
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('dailyChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Weekly',
                                                        itemId: 'rfWeekly',
                                                        name: 'fp',
                                                        inputValue: '2',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('weeklyChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Monthly',
                                                        itemId: 'rfMonthly',
                                                        name: 'fp',
                                                        inputValue: '3',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('monthlyChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Yearly',
                                                        itemId: 'rfYearly',
                                                        name: 'fp',
                                                        inputValue: '4',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('yearlyChanged');
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                itemId: 'ctnSchedule',
                                                items: [
                                                    {
                                                        xtype: 'dailySchedule'
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