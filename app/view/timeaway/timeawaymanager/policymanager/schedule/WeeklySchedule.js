Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.WeeklySchedule', {

    extend: 'Ext.container.Container',
    alias: 'widget.weeklySchedule',
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
                        text: 'week(s) on:',
                        padding: '3 0 0 5'
                    }
                ]
            },
            {
                xtype: 'checkboxgroup',
                columns: 3,
                width: 280,
                items: [
                    { boxLabel: 'Sunday', name: 'ws', inputValue: '1' },
                    { boxLabel: 'Monday', name: 'ws', inputValue: '2'},
                    { boxLabel: 'Tuesday', name: 'ws', inputValue: '3' },
                    { boxLabel: 'Wednesday', name: 'ws', inputValue: '4' },
                    { boxLabel: 'Thurday', name: 'ws', inputValue: '5' },
                    { boxLabel: 'Friday', name: 'ws', inputValue: '6' },
                    { boxLabel: 'Saturday', name: 'ws', inputValue: '7' }
                ]
            }
        ];
        this.callParent(arguments);
    }

});