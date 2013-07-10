Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.DailySchedule', {

    extend: 'Ext.container.Container',
    alias: 'widget.dailySchedule',
    title: 'Edit Policy',
    layout: {
        type: 'vbox'
    },

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
                            { xtype: 'radiofield', name: 'rb', inputValue: '1', checked: true },
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
                    { boxLabel: 'Every Weekday', name: 'rb', inputValue: '2' }
                ]
            }
        ];
        this.callParent(arguments);
    }

});