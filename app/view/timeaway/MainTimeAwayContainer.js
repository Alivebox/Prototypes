Ext.define('Prototypes.view.timeaway.MainTimeAwayContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.maintimeawaycontainer',
    height: '100%',
    width: '100%',
    initComponent:function () {

        this.items = [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        title: 'Time Away Request Center',
                        width: '100%',
                        items: [
                            {
                                xtype: 'panel',
                                layout: 'hbox',
                                height: '100%',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'timeawaycontainer',
                                        flex: 5
                                    },
                                    {
                                        xtype: 'summaryrequestinformation',
                                        flex: 1,
                                        border: 1,
                                        collapsible: true,
                                        collapseDirection: 'left'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});