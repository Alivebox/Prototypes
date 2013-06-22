Ext.define('Prototypes.view.admin.systemadmin.useradmin.MainSecurityAccessLevelsContainer', {
    extend:'Ext.container.Container',
    alias: 'widget.mainsecurityaccesslevelscontainer',

    initComponent:function () {

        this.items = [
            {
                xtype: 'gridsecurityaccesslevel'
            }
        ];
        this.callParent(arguments);
    }
});