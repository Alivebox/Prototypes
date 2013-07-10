Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.WeeklySchedule', {

    extend: 'Ext.container.Container',
    alias: 'widget.weeklySchedule',
    title: 'Edit Policy',
    layout: {
        type: 'vbox'
    },

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
                    { boxLabel: 'Sunday', name: 'rb', inputValue: '1' },
                    { boxLabel: 'Monday', name: 'rb', inputValue: '2'},
                    { boxLabel: 'Tuesday', name: 'rb', inputValue: '3' },
                    { boxLabel: 'Wednesday', name: 'rb', inputValue: '4' },
                    { boxLabel: 'Thurday', name: 'rb', inputValue: '5' },
                    { boxLabel: 'Friday', name: 'rb', inputValue: '6' },
                    { boxLabel: 'Saturday', name: 'rb', inputValue: '7' }
                ]
            }
        ];
        this.callParent(arguments);
    }

});