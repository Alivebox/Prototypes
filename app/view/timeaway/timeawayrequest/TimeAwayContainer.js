Ext.define('Prototypes.view.timeaway.timeawayrequest.TimeAwayContainer', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.timeawaycontainer',
    width: '100%',
    height: '85%',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    initComponent:function () {
        this.items = [
            {
                xtype: 'panel',
                flex: 1,
                width: '100%',
                layout: 'hbox',
                items: [
                    {

                        xtype: 'calendarrequest',
                        flex: 1,
                        border: 1
                    },
                    {
                        xtype: 'requestdetail',
                        flex: 2,
                        border: 1
                    }
                ]
            },
            {
                xtype: 'viewavailability',
                flex: 1,
                width: '100%',
                collapsible: 'true',
                collapseDirection: 'bottom'
            }
        ]
        this.callParent(arguments)
    }
});