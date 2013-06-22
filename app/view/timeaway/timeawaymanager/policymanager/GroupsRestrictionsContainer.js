Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.GroupsRestrictionsContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.groupsrestrictionscontainer',
    height: '100%',
    width: '100%',
    layout: 'anchor',
    initComponent:function () {

        this.items = [
            {
                xtype: 'gridgroupsrestrictionstoolbar'
            },
            {
                xtype: 'gridgrouprestrictions'
            }
        ]
        this.callParent(arguments)
    }

});