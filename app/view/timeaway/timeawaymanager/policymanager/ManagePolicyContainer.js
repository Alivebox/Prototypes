Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.ManagePolicyContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.managepolicycontainer',
    layout: 'hbox',
    height: 1050,
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                title: 'Resources',
                flex: 1,
                border: 1,
                height: 1050,
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
                flex: 2,
                border: 1,
                height: 1050,
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