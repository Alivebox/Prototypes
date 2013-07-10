Ext.define('Prototypes.view.timeaway.timeawaymanager.specialdate.SpecialDatesManager', {

    extend: 'Ext.container.Container',
    alias: 'widget.specialdatesmanager',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'container',
                padding: '50 0 0 0',
                flex: 1,
                layout: 'column',
                items: [
                    {
                        xtype: 'container',
                        padding: '10 0 0 10',
                        items: [
                            {
                                xtype: 'label',
                                padding: '0 0 0 30',
                                text: 'Click the calendar to edit or modify a especified date.',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'doubleenhanceddatepicker',
                                itemId: 'dhdpSpecialDates',
                                padding: '10 0 0 0'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'ctnUpcomingEvent',
                        height: 200,
                        autoScroll: true,
                        padding: '35 10 10 50',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Upcoming Event',
                                style: 'font-weight:bold;'
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'linkbutton',
                                        text: '06/13/2013'
                                    },
                                    {
                                        xtype: 'label',
                                        text: 'White House Ball',
                                        padding: '0 0 0 5'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'linkbutton',
                                        text: '06/29/2013'
                                    },
                                    {
                                        xtype: 'label',
                                        text: 'Company Picnic',
                                        padding: '0 0 0 5'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'linkbutton',
                                        text: '07/04/2013'
                                    },
                                    {
                                        xtype: 'label',
                                        text: 'Independence Day',
                                        padding: '0 0 0 5'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 2,
                width: '40%',
                title: 'Edit Event',
                padding: '10 0 0 0',
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                padding: '10 0 0 10',
                                items: [
                                    {
                                        xtype: 'label',
                                        text: 'Date:'
                                    },
                                    {
                                        xtype: 'label',
                                        itemId: 'lblDate',
                                        padding: '0 0 0 80',
                                        style: 'font-weight:bold;',
                                        text: '06/13/2013'
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Event Name',
                                width: 500,
                                padding: '0 0 0 10'
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                padding: '0 0 0 10',
                                items: [
                                    {
                                        xtype: 'label',
                                        text: 'Block Date For: '
                                    },
                                    {
                                        xtype: 'container',
                                        padding: '10 10 10 10',
                                        items: [
                                            {
                                                xtype: 'combobox',
                                                itemId: 'cbDivision',
                                                fieldLabel: 'Division',
                                                displayField: 'name',
                                                valueField: 'name',
                                                value: 'NY-ART',
                                                store: Ext.create('Ext.data.Store', {
                                                    fields: ['id', 'name'],
                                                    data: [
                                                        {
                                                            "id": "1",
                                                            "name": "NY-ART"
                                                        }
                                                    ]
                                                }),
                                                editable: false,
                                                queryMode: 'local'
                                            },
                                            {
                                                xtype: 'combobox',
                                                itemId: 'cbDepartment',
                                                fieldLabel: 'Department',
                                                displayField: 'name',
                                                valueField: 'name',
                                                value: 'NY-ART',
                                                store: Ext.create('Ext.data.Store', {
                                                    fields: ['id', 'name'],
                                                    data: [
                                                        {
                                                            "id": "1",
                                                            "name": "NY-ART"
                                                        }
                                                    ]
                                                }),
                                                editable: false,
                                                queryMode: 'local'
                                            },
                                            {
                                                xtype: 'combobox',
                                                itemId: 'cbGroup',
                                                fieldLabel: 'Group',
                                                displayField: 'name',
                                                valueField: 'name',
                                                value: 'CAM',
                                                store: Ext.create('Ext.data.Store', {
                                                    fields: ['id', 'name'],
                                                    data: [
                                                        {
                                                            "id": "1",
                                                            "name": "CAM"
                                                        }
                                                    ]
                                                }),
                                                editable: false,
                                                queryMode: 'local'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                    ,
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Submit'
                            },
                            {
                                xtype: 'button',
                                text: 'Delete'
                            }
                        ]

                    }
                ]
            }
        ],
            this.callParent();
    },

    getDHDPSpecialDates: function(){
        return this.down('doubleenhanceddatepicker[itemId=dhdpSpecialDates]')
    },

    getCTNUpcomingEvent: function(){
        return this.down('container[itemId=ctnUpcomingEvent]')
    }

});