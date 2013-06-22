Ext.define('Prototypes.view.timeaway.timeawayrequest.TimeAwayContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.timeawaycontainer',
    height: '100%',
    width: 1100,
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'calendarrequest',
                                width: 400
                            },
                            {
                                xtype: 'requestdetail'
                            }
                        ]
                    },
                    {
                        xtype: 'viewavailability'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});