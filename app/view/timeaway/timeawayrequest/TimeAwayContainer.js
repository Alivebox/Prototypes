Ext.define('Prototypes.view.timeaway.timeawayrequest.TimeAwayContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.timeawaycontainer',
    height: '100%',
    width: '100%',
    layout: 'vbox',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                flex: 2,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'calendarrequest',
                        flex: 1
                    },
                    {
                        xtype: 'requestdetail',
                        flex: 2
                    }
                ]
            },
            {
                xtype: 'viewavailability',
                flex: 1
            }
        ]
        this.callParent(arguments)
    }
});