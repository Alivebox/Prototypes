Ext.define('Prototypes.view.admin.services.category.FormCategory', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.admin.services.Service',
    alias: 'widget.formcategory',

    initComponent: function(){
        this.items = [
            {
                xtype:'textfield',
                fieldLabel: 'Service Category',
                name: 'serviceCategory',
                allowBlank:false
            },
            {
                xtype:'textfield',
                fieldLabel: 'Category Code',
                name: 'categoryCode'
            }
        ];
        this.callParent(arguments);
    }

});