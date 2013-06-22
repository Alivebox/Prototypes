Ext.define('Prototypes.view.resources.positions.FormResoucesPositions', {

    //Ext.form.Panel
    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.resources.positions.Position',
    alias: 'widget.formresoucespositions',

    initComponent: function(){
        this.items = [
            {
                xtype: 'combobox',
                itemId: 'logProjectComboBox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: 'System Position',
                displayField: 'systemDefinition',
                valueField: 'systemDefinition',
                store: 'resources.positions.Positions',
                editable: false,
                queryMode:'local'
            },
            {
                xtype: 'textfield',
                name:'position',
                itemId: 'txtResourcesPosition',
                fieldLabel: '* Position Code',
                labelStyle: 'color: #f00;'
            },
            {
                xtype: 'textfield',
                name:'description',
                fieldLabel: '* Description Name',
                labelStyle: 'color: #f00;'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Alternate Code'
            },
            {
                xtype: 'textfield',
                name:'sortOrder',
                fieldLabel: 'Sort Order'
            }
        ];
        this.callParent(arguments);
    }

});