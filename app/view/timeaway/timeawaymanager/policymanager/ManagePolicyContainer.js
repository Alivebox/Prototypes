Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.ManagePolicyContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.managepolicycontainer',
    layout: 'hbox',
    height: 900,
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Resources',
                flex: 1,
                border: 1,
                height: 900,
                items: [
                    {
                        xtype: 'gridavailableresources',
                        width: '100%',
                        height: 900
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Policies',
                flex: 1.5,
                border: 1,
                height: 900,
                items: [
                    {
                        xtype: 'gridpolicymanager',
                        height: 500
                    },
                    {
                        xtype: 'formpolicy',
                        height: 350
                    }
                ]
            }
        ],
            this.callParent();
    }
});