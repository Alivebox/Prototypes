Ext.define('Prototypes.view.admin.systemadmin.useradmin.securityaccesslevel.FormSecurityLevel', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.admin.systemadmin.useradmin.SecurityLevel',
    alias: 'widget.formsecuritylevel',

    initComponent: function () {
        this.items = [
            {
                xtype: 'textfield',
                fieldLabel: 'Access Name',
                allowBlank: false,
                name: 'name',
                width: 350
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Description',
                name: 'description',
                width: 350
            }

        ]
        this.callParent();
    }
});