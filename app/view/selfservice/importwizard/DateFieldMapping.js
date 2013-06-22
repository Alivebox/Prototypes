Ext.define('Prototypes.view.selfservice.importwizard.DateFieldMapping', {

    extend: 'Ext.container.Container',
    alias: 'widget.datefieldmapping',
    initComponent:function () {
        this.cbDefaultValue = this.onCreateFieldComboBox();
        this.cbFileField  = this.onCreateFieldComboBox();
        this.items = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'combobox',
                                padding: '0 10 0 10',
                                width: 300,
                                emptyText: 'Field Mapping Template ..'
                            },
                            {
                                xtype: 'button',
                                padding: '0 10 0 10',
                                text: 'Load'
                            },
                            {
                                xtype: 'button',
                                padding: '0 10 0 10',
                                text: 'Save'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'grid',
                height: 300,
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'systemAttribute', 'defaultValue', 'fileField'],
                    data: [
                        { "id": 1, "systemAttribute": "FIRST NAME" },
                        { "id": 2, "systemAttribute": "LAST NAME" },
                        { "id": 3, "systemAttribute": "M.I." },
                        { "id": 4, "systemAttribute": "NICKNAME" },
                        { "id": 5, "systemAttribute": "PROPER LAST NAME" },
                        { "id": 6, "systemAttribute": "PROPER FIRST NAME" },
                        { "id": 7, "systemAttribute": "PROPER M.I." },
                        { "id": 8, "systemAttribute": "REGION/BUsiness UNIT" },
                        { "id": 9, "systemAttribute": "PAYMENT METHOD" },
                        { "id": 10, "systemAttribute": "EXEMPT" },
                        { "id": 11, "systemAttribute": "UNION" },
                        { "id": 12, "systemAttribute": "LOCAL UNION NAME" },
                        { "id": 13, "systemAttribute": "CREWING CATEGORY" },
                        { "id": 14, "systemAttribute": "POSITION" },
                        { "id": 15, "systemAttribute": "OCCUPATION CODE" },
                        { "id": 16, "systemAttribute": "PAYMENT METHOD" },
                        { "id": 17, "systemAttribute": "EXEMPT" },
                        { "id": 18, "systemAttribute": "DRIVERS LICENSE" },
                        { "id": 19, "systemAttribute": "INSURANCE" }
                    ]
                }),
                selType: 'cellmodel',
                plugins: [
                    Ext.create('Ext.grid.plugin.CellEditing', {
                        clicksToEdit: 1
                    })
                ],
                columns:[
                    {
                        xtype: 'gridcolumn',
                        text: "System Attribute",
                        dataIndex: 'systemAttribute',
                        flex: 1
                    },
                    {
                        xtype: 'gridcolumn',
                        text: "Default Value",
                        dataIndex: 'defaultValue',
                        editor: this.cbDefaultValue,
                        flex: 1

                    },
                    {
                        xtype: 'gridcolumn',
                        text: "File Field",
                        dataIndex: 'fileField',
                        editor: this.cbFileField,
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '0 0 0 10',
                items: [
                    {
                        xtype: 'linkbutton',
                        padding: '0 10 0 10',
                        text: 'Click here'
                    },
                    {
                        xtype: 'label',
                        text: 'to view specifications of each of the above-listed system attributes'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    },

    onCreateFieldComboBox: function(){
        var tmpComboBox = Ext.create('Ext.form.field.ComboBox', {
            name: 'cbFileValue',
            allowBlank: true,
            store: Ext.create('Ext.data.Store', {
                fields: ['id', 'systemAttribute'],
                data: [
                    { "id": 1, "systemAttribute": "FIRST systemAttribute" },
                    { "id": 2, "systemAttribute": "LAST systemAttribute" },
                    { "id": 3, "systemAttribute": "M.I." },
                    { "id": 4, "systemAttribute": "NICKsystemAttribute" },
                    { "id": 5, "systemAttribute": "PROPER LAST systemAttribute" },
                    { "id": 6, "systemAttribute": "PROPER FIRST systemAttribute" },
                    { "id": 7, "systemAttribute": "PROPER M.I." },
                    { "id": 8, "systemAttribute": "REGION/BUsiness UNIT" },
                    { "id": 9, "systemAttribute": "PAYMENT METHOD" },
                    { "id": 10, "systemAttribute": "EXEMPT" },
                    { "id": 11, "systemAttribute": "UNION" },
                    { "id": 12, "systemAttribute": "LOCAL UNION systemAttribute" },
                    { "id": 13, "systemAttribute": "CREWING CATEGORY" },
                    { "id": 14, "systemAttribute": "POSITION" },
                    { "id": 15, "systemAttribute": "OCCUPATION CODE" },
                    { "id": 16, "systemAttribute": "PAYMENT METHOD" },
                    { "id": 17, "systemAttribute": "EXEMPT" },
                    { "id": 18, "systemAttribute": "DRIVERS LICENSE" },
                    { "id": 19, "systemAttribute": "INSURANCE" }
                ]
            }),
            displayField: 'systemAttribute',
            queryMode: 'local',
            editable: false
        });
        return tmpComboBox;
    }
});