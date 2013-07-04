Ext.define('Prototypes.view.timeaway.timeawaymanager.TimeAwayManagerContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.timeawaymanagercontainer',
    layout: 'hbox',
    initComponent: function () {

        this.items = [
            {
                xtype: 'managerfilter',
                title: 'Filters',
                height: 1050,
                flex: 1,
                border: 1
            },
            {
                xtype: 'timeawaymanagertabcontainer',
                flex: 4,
                height: 1050
            },
            {
                xtype: 'summaryinformation',
                height: 1050,
                flex: 1,
                border: 1
            }
        ],
            this.callParent();
    }
});