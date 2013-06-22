Ext.define('Prototypes.view.timeaway.timeawaymanager.TimeAwayManagerContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.timeawaymanagercontainer',
    layout: 'column',
    initComponent: function () {

        this.items = [
            {
                xtype: 'managerfilter',
                title: 'Filters',
                width: 260,
                height: 900
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'timeawaymanagertabcontainer'
                    }
                ]
            },
            {
                xtype: 'summaryinformation',
                //width: 315,
                width: 275,
                height: 900
            }
        ],
            this.callParent();
    }
});