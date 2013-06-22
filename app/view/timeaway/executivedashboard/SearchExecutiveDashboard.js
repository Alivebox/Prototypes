Ext.define('Prototypes.view.timeaway.executivedashboard.SearchExecutiveDashboard', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.report.DocumentLibrary',
    alias: 'widget.searchexecutivedashboard',
    width: 300,
    initComponent:function () {

        this.items = [
            {
                xtype: 'combobox',
                itemId: 'shareTypeComboBox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: 'System Position',
                displayField: 'name',
                valueField: 'name',
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'name'],
                    data: [
                        {
                            "id": "1",
                            "name": "Not Shared"
                        },
                        {
                            "id": "2",
                            "name": "Shared (Unrestricted)"
                        },
                        {
                            "id": "3",
                            "name": "Shared (Restricted)"
                        }
                    ]
                }),
                editable: false,
                queryMode:'local'
            }
        ]
        this.callParent(arguments)
    }

});