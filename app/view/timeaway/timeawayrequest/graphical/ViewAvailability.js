Ext.define('Prototypes.view.timeaway.timeawayrequest.graphical.ViewAvailability', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.viewavailability',
    border: 1,
    width: '100%',
    title: 'View Availability',
    initComponent:function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                padding: '10 0 10 10',
                items: [
                    {
                        xtype: 'label',
                        text: 'View availability for: ',
                        style: 'font-weight:bold;',
                        padding: '3 0 0 10'
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbDivision',
                        displayField: 'name',
                        padding: '0 0 0 10',
                        valueField: 'name',
                        value: 'Division/Dept',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Division/Dept"
                                },
                                {
                                    "id": "2",
                                    "name": "Element Group"
                                },
                                {
                                    "id": "3",
                                    "name": "Position"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local'
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbDeparment',
                        displayField: 'name',
                        padding: '0 0 0 10',
                        valueField: 'name',
                        value: 'ATL/Operations',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "ATL/Operations"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'approvedrequestdetails',
                        flex: 0.5
                    },
                    {
                        xtype: 'graphicalavailabilitytool',
                        flex: 5
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});