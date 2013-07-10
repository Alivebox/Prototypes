Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.DailySchedule', {

    extend: 'Ext.container.Container',
    alias: 'widget.dailySchedule',
    title: 'Edit Policy',
    width: 300,
    layout: {
        type: 'vbox'
    },
    padding: '0 0 0 5',
    initComponent: function () {
        this.items = [
            {
                xtype: 'radiogroup',
                width: 300,
                columns: 1,
                padding: '5 0 0 5',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            { xtype: 'radiofield', name: 'ds', inputValue: '1', checked: true },
                            {
                                xtype: 'label',
                                text: 'Every',
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
                                text: 'day(s)',
                                padding: '3 0 0 5'
                            }
                        ]
                    },
                    { boxLabel: 'Every Weekday', name: 'ds', inputValue: '2' }
                ]
            }
        ];
        this.callParent(arguments);
    }

});