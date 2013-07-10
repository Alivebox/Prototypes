Ext.define('Prototypes.view.timeaway.timeawayrequest.graphical.GraphicalAvailabilityTool', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.graphicalavailabilitytool',
    width: '100%',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                padding: '10 0 0 10',
                items: [
                    {
                        xtype: 'datefield',
                        itemId: 'dfStartDate',
                        fieldLabel: 'Start date',
                        value: new Date(),
                        editable: false,
                        listeners: {
                            scope: this,
                            select: this.onSelectedDateField
                        }
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbDisplay',
                        fieldLabel: 'Display',
                        displayField: 'name',
                        valueField: 'name',
                        padding: '0 0 0 10',
                        value: '3 Days',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "3 Days"
                                },
                                {
                                    "id": "2",
                                    "name": "5 Days"
                                },
                                {
                                    "id": "3",
                                    "name": "7 Days"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        listeners: {
                            scope: this,
                            select: this.onSelectedDaysDisplay
                        }
                    }
                ]
            },
            {
                xtype: 'graphicalgridcontainer'
            }
        ]
        this.callParent(arguments)
    },

    getDfStartDate: function(){
        return this.down('datefield[itemId=dfStartDate]');
    },

    onSelectedDateField: function(argField, argValue){
        this.fireEvent('selectedDateField', argField, argValue);
    },

    onSelectedDaysDisplay: function(argCombo, argRecords){
        this.fireEvent('selectedDaysDisplay', argCombo, argRecords);
    }
});