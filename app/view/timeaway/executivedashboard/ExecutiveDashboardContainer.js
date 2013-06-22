Ext.define('Prototypes.view.timeaway.executivedashboard.ExecutiveDashboardContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.executivedashboardcontainer',
    layout: 'column',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                region: 'left',
                items: [
                    {
                        xtype: 'searchexecutivedashboard'
                    }
                ]
            }
            ,
            {
                xtype: 'container',
                region: 'center',
                items: [
                    {
                        xtype: 'textfield'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});