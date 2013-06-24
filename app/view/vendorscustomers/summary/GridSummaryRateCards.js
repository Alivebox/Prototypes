Ext.define('Prototypes.view.vendorscustomers.summary.GridSummaryRateCards', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsummaryratecards',
    disableSelection: true,
    height: 300,
    store: Ext.create('Ext.data.Store', {
        fields: ['rateCard', 'effectiveDate', 'expiryDate', 'discount', 'markUp'],
        data: [
            { 'rateCard': 'Master Rate Card', 'effectiveDate': '01/01/2013', 'expiryDate': '12/31/2013', 'discount': '5 %', 'markUp': '10 %'}
        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        '->',
                        {
                            xtype: 'button',
                            text: 'Add',
                            iconCls: 'add-button-icon'
                        },
                        {
                            xtype: 'button',
                            text: 'Modify',
                            iconCls: 'table-edit-button-icon'
                        },
                        {
                            xtype: 'button',
                            text: 'Delete',
                            iconCls: 'delete-button-icon'
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Rate Card',
                    dataIndex: 'rateCard',
                    align: 'left',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Effective Date',
                    dataIndex: 'effectiveDate',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Expiry Date',
                    dataIndex: 'expiryDate',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Discount',
                    dataIndex: 'discount',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Mark-Up',
                    dataIndex: 'markUp',
                    align: 'center',
                    flex: 1
                }
            ]
        });
        this.callParent()
    }
});