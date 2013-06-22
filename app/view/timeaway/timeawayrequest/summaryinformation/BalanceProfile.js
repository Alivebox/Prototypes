Ext.define('Prototypes.view.timeaway.timeawayrequest.summaryinformation.BalanceProfile', {

    //extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    alias: 'widget.balanceprofile',
    initComponent: function () {
        this.items = [
            {
                xtype: 'gridbalanceprofile',
                columnLines: false,
                rowLines: false,
                width: '100%'
            }
        ]
        this.callParent(arguments)
    }
});