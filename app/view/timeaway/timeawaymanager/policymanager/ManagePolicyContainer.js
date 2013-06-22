Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.ManagePolicyContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.managepolicycontainer',
    layout: 'column',
    height: 900,
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Resources',
                height: 900,
                items: [
                    {
                        xtype: 'gridavailableresources',
                        width: 450,
                        height: 900
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Policies',
                width: 780,
                height: 900,
                items: [
                    {
                        xtype: 'gridpolicymanager',
                        height: 600
                    },
                    {
                        xtype: 'formpolicy',
                        height: 300
                    }
                ]
            }
        ],
            this.callParent();
    }
});