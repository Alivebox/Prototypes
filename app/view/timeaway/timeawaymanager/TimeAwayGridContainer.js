Ext.define('Prototypes.view.timeaway.timeawaymanager.TimeAwayGridContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.timeawaygridcontainer',
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Requests',
                items:[
                    {
                        xtype: 'gridtimeawayrequest'
                    }
                ]
            }

        ],
            this.callParent();
    }
});