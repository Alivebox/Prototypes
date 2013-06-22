Ext.define('Prototypes.view.admin.services.categorytype.FormCategoryType', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.admin.services.Service',
    alias: 'widget.formcategorytype',

    initComponent: function () {
        this.items = [
            {
                xtype: 'combobox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: 'Service Category',
                displayField: 'serviceCategory',
                valueField: 'serviceCategory',
                allowBlank: false,
                store: 'admin.services.Services',
                editable: false,
                queryMode: 'local'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Service Type',
                name: 'type'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'System Division',
                editable: false,
                store: [
                    [1, 'N/A'],
                    [2, '24P'],
                    [3, 'System Division 1'],
                    [4, 'System Division 2'],
                    [5, 'Testing']
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        text: 'Accounting Service:'
                    },
                    {
                        xtype: 'checkboxfield',
                        boxLabel: '* This service is for accounting purposes only.'
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }

});