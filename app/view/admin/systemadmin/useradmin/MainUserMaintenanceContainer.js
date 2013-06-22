Ext.define('Prototypes.view.admin.systemadmin.useradmin.MainUserMaintenanceContainer', {
    extend:'Ext.container.Container',
    alias: 'widget.mainusermaintenancecontainer',

    initComponent:function () {

        this.items = [
            {
                xtype: 'griduseraccount'
            }
        ];
        this.callParent(arguments);
    }
});