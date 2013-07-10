Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.YearlySchedule', {

    extend: 'Ext.container.Container',
    alias: 'widget.yearlySchedule',
    title: 'Edit Policy',
    layout: {
        type: 'vbox'
    },
    padding: '0 0 0 5',
    initComponent: function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Recur every',
                        padding: '3 5 0 5'
                    },
                    {
                        xtype: 'numberfield',
                        width: 50,
                        maxValue: 10,
                        minValue: 1
                    },
                    {
                        xtype: 'label',
                        text: 'year(s)',
                        padding: '3 0 0 5'
                    }
                ]
            },
            {
                xtype: 'radiogroup',
                columns: 1,
                padding: '5 0 0 5',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            { xtype: 'radiofield', boxLabel: 'on: ', name: 'ys', inputValue: '1', checked: true },
                            {
                                xtype:'combobox',
                                editable:false,
                                width: 100,
                                padding: '0 5 0 5',
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
                                width: 50,
                                maxValue: 10,
                                minValue: 1
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '5 0 0 0',
                        items: [
                            { xtype: 'radiofield', boxLabel: 'on the: ', name: 'ys', inputValue: '2', checked: true },
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
                                width: 75,
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
                                xtype:'combobox',
                                editable:false,
                                width: 100,
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
        ];
        this.callParent(arguments);
    }

});