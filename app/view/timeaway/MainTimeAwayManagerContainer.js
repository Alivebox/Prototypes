Ext.define('Prototypes.view.timeaway.MainTimeAwayManagerContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.maintimeawaymanagercontainer',
    autoScroll: true,
    scroll: 'both',
    initComponent:function () {

        this.items = [
            {
                xtype: 'tabpanel',
                renderTo: document.body,
                items: [
                    {
                        title: 'Time Away Request Manager',
                        xtype: 'timeawaymanagercontainer',
                        height: '100%',
                        width: '100%',
                        scroll: 'both'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});