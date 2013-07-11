Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.MonthlySchedule', {

    extend: 'Ext.container.Container',
    alias: 'widget.monthlySchedule',
    title: 'Edit Policy',
    layout: {
        type: 'vbox'
    },
    padding: '0 0 0 5',
    initComponent: function () {
        this.items = [
            {
                xtype: 'radiogroup',
                columns: 1,
                padding: '5 0 0 5',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            { xtype: 'radiofield', boxLabel: 'Day', name: 'monthlySchedule', inputValue: '1'},
                            {
                                xtype: 'numberfield',
                                padding: '0 5 0 5',
                                width: 50,
                                maxValue: 10,
                                minValue: 1
                            },
                            {
                                xtype: 'label',
                                text: 'of every',
                                padding: '5 5 0 5'
                            },
                            {
                                xtype: 'numberfield',
                                width: 50,
                                maxValue: 10,
                                minValue: 1
                            },
                            {
                                xtype: 'label',
                                text: 'month(s)',
                                padding: '5 0 0 5'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        width: 380,
                        padding: '5 0 0 0',
                        items: [
                            { xtype: 'radiofield', boxLabel: 'The: ', name: 'monthlySchedule', inputValue: '2'},
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
                                padding: '0 5 0 5',
                                width: 85,
                                value: 1,
                                store:[
                                    [1, 'Monday'],
                                    [2, 'Thuesday'],
                                    [3, 'Wednesday'],
                                    [4, 'Thursday'],
                                    [5, 'Friday'],
                                    [6, 'Saturday'],
                                    [7, 'Sunday']

                                ]
                            },
                            {
                                xtype: 'label',
                                text: 'of every',
                                padding: '5 5 0 5'
                            },
                            {
                                xtype: 'numberfield',
                                width: 45,
                                maxValue: 10,
                                minValue: 1
                            },
                            {
                                xtype: 'label',
                                text: 'month(s)',
                                padding: '5 0 0 5'
                            }
                        ]
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }

});