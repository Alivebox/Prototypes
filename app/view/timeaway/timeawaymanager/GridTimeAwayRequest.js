Ext.define('Prototypes.view.timeaway.timeawaymanager.GridTimeAwayRequest', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridtimeawayrequest',
    height: '100%',
    width: '100%',
    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'startDate', 'endDate', 'category', 'categoryValue', 'typeValue', 'statusValue', 'policy', 'hours', 'status', 'reason', 'balance', 'imgSrc'],
        data: [
            { 'name': 'Wayne, Bruce', 'startDate': '06/18/2013', 'endDate': '06/19/2013', 'category': 'PTO', 'categoryValue': 1, 'typeValue': 1, 'statusValue': 2, 'policy': 'PTO Tier 1', 'hours': '20.0', 'status': 'Tentative', 'reason': 'Vacation', 'balance': '64.0', 'imgSrc': ''},
            { 'name': 'Wayne, Bruce', 'startDate': '11/01/2012', 'endDate': '11/01/2012', 'category': 'PTO', 'categoryValue': 1, 'typeValue': 1, 'statusValue': 3, 'policy': 'PTO Tier 1', 'hours': '4.0', 'status': 'Verified', 'reason': 'DMV', 'balance': '64.0', 'imgSrc': ''},
            { 'name': 'Wayne, Bruce', 'startDate': '10/31/2013', 'endDate': '10/31/2013', 'category': 'PTO', 'categoryValue': 1, 'typeValue': 1, 'statusValue': 1, 'policy': 'PTO Tier 1', 'hours': '8.0', 'status': 'Declined', 'reason': 'Halloween', 'balance': '68.0', 'imgSrc': '../../../resources/icons/ShowMgrImages/16x16/exclamation.png'}

        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Name',
                    dataIndex: 'name',
                    align: 'center',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Start Date',
                    dataIndex: 'startDate',
                    align: 'center',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Endt Date',
                    dataIndex: 'endDate',
                    align: 'center',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Category',
                    dataIndex: 'category',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Policy',
                    dataIndex: 'policy',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: '# of Hours',
                    dataIndex: 'hours',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Status',
                    dataIndex: 'status',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Reason',
                    dataIndex: 'reason',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Balance',
                    dataIndex: 'balance',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'imgSrc',
                    menuDisabled: true,
                    sortable: false,
                    flex: 0.3,
                    align: 'center',
                    renderer: function (value) {
                        return '<img src="' + value + '" />';
                    }
                }
            ]
        }),
            this.callParent()
    }
});