Ext.define('Prototypes.view.order.admin.MainOrderAdminElementGroupsContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainorderadminelementgroupscontainer',
    initComponent: function(){
        this.items = [
            {
                xtype: 'gridorderadminelementgroups',
                region: 'center'
            }
        ];
        this.callParent(arguments);
    }
});