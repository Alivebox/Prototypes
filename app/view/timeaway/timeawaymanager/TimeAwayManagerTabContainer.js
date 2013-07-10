Ext.define('Prototypes.view.timeaway.timeawaymanager.TimeAwayManagerTabContainer', {

    extend: 'Ext.tab.Panel',
    tabPosition: 'right',
    alias: 'widget.timeawaymanagertabcontainer',

    initComponent: function () {

        this.items = [
            { title: null, iconCls: 'page-horizontal-button-icon', xtype: 'timeawaygridcontainer', showRigthWing: true, displayPeriod: false},
            { title: null, iconCls: 'tag-button-icon', xtype: 'managepolicycontainer', showRigthWing: false, displayPeriod: true},
            { title: null, iconCls: 'delete-button-icon', xtype: 'groupsrestrictionscontainer', showRigthWing: false, displayPeriod: false},
            { title: null, iconCls: 'calendar-button-icon', xtype: 'specialdatesmanager', showRigthWing: false, displayPeriod: false}
        ],
        this.callParent();
    }
});