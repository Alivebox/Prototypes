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
                                                xtype: 'radiogroup',
                                                columns: 1,
                                                cls: 'rigth-border',
                                                items: [
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Daily',
                                                        itemId: 'rfAccrualDaily',
                                                        name: 'fpAccrual',
                                                        inputValue: '1',
                                                        checked: true,
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('dailyAccrualChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Weekly',
                                                        itemId: 'rfAccrualWeekly',
                                                        name: 'fpAccrual',
                                                        inputValue: '2',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('weeklyAccrualChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Monthly',
                                                        itemId: 'rfAccrualMonthly',
                                                        name: 'fpAccrual',
                                                        inputValue: '3',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('monthlyAccrualChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Yearly',
                                                        itemId: 'rfAccrualYearly',
                                                        name: 'fpAccrual',
                                                        inputValue: '4',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('yearlyAccrualChanged');
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                itemId: 'ctnAccrualSchedule',
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
                                                        itemId: 'rfCarryoverDaily',
                                                        name: 'fpCarryover',
                                                        inputValue: '1',
                                                        checked: true,
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('dailyCarryoverChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Weekly',
                                                        itemId: 'rfCarryoverWeekly',
                                                        name: 'fpCarryover',
                                                        inputValue: '2',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('weeklyCarryoverChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Monthly',
                                                        itemId: 'rfCarryoverMonthly',
                                                        name: 'fpCarryover',
                                                        inputValue: '3',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('monthlyCarryoverChanged');
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype: 'radiofield',
                                                        boxLabel: 'Yearly',
                                                        itemId: 'rfCarryoverYearly',
                                                        name: 'fpCarryover',
                                                        inputValue: '4',
                                                        listeners: {
                                                            scope: this,
                                                            change: function(){
                                                                this.fireEvent('yearlyCarryoverChanged');
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                itemId: 'ctnCarryoverSchedule',
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