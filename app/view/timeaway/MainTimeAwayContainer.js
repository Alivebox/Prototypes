Ext.define('Prototypes.view.timeaway.MainTimeAwayContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.maintimeawaycontainer',
    height: '100%',
    initComponent:function () {

        this.items = [
            {
                xtype: 'tabpanel',
                renderTo: document.body,
                items: [
                    {
                        title: 'Time Away Request Center',
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'timeawaycontainer',
                                layout: 'fit'
                            },
                            {
                                xtype: 'summaryrequestinformation'
                            }
                        ]
                    },
                    {
                        title: 'Crew'
                    },
                    {
                        title: 'Order'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});