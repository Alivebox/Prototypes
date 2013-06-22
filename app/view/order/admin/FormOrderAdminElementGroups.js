Ext.define('Prototypes.view.order.admin.FormOrderAdminElementGroups', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.order.admin.ElementGroup',
    alias: 'widget.formorderadminelementgroups',

    initComponent: function(){
        this.items = [
            {
                xtype: 'textfield',
                name:'groupName',
                itemId: 'txtDynamicGroupName',
                fieldLabel: 'Dynamic Group Name',
                labelStyle: 'color: #f00;'
            },
            {
                xtype: 'combobox',
                itemId: 'shareTypeComboBox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: 'System Position',
                displayField: 'name',
                valueField: 'name',
                store: 'order.admin.ShareTypes',
                editable: false,
                queryMode:'local',
                labelStyle: 'color: #f00;'
            }
        ];
        this.callParent(arguments);
    }

});