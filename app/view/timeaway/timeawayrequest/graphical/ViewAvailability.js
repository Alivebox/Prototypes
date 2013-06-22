Ext.define('Prototypes.view.timeaway.timeawayrequest.graphical.ViewAvailability', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.viewavailability',
    title: 'View Availability For',
    width: 1100,
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
                        padding: '0 0 0 10'
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
                layout: 'column',
                items: [
                    {
                        xtype: 'approvedrequestdetails',
                        width: 140,
                        height: 300
                    },
                    {
                        xtype: 'graphicalavailabilitytool',
                        width: 958,
                        height: 300
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});