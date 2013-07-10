Ext.define('Prototypes.view.timeaway.timeawayrequest.requestdetail.CalendarRequest', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.calendarrequest',
    title: 'Calendar Request',
    height: '100%',
    width: '100%',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                items:[
                    {
                        xtype: 'container',
                        layout: 'column',
                        padding: '10 0 0 10',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Request For:'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblRequest',
                                padding: '0 0 0 10',
                                style: 'font-weight:bold;color:#124faa;',
                                text: 'Bruce Wayne'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Category:',
                                padding: '8 0 0 10'
                            },
                            {
                                xtype: 'combobox',
                                itemId: 'cbCategory',
                                fieldLabel: null,
                                displayField: 'name',
                                valueField: 'name',
                                padding: '5 0 10 28',
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['id', 'name'],
                                    data: [
                                        {
                                            "id": "1",
                                            "name": "PTO"
                                        },
                                        {
                                            "id": "2",
                                            "name": "Training"
                                        },
                                        {
                                            "id": "3",
                                            "name": "Order"
                                        }
                                    ]
                                }),
                                editable: false,
                                queryMode: 'local'
                            }
                        ]
                    }
                    ,
                    {
                        xtype: 'doubleenhanceddatepicker',
                        padding: '0 0 0 10',
                        itemId: 'doubleEnhancedDatePicker'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});