Ext.define('Prototypes.view.vendorscustomers.summary.GridSummaryDocuments', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsummarydocuments',
    disableSelection: true,
    height: 300,
    store: Ext.create('Ext.data.Store', {
        fields: ['documentTitle', 'effectiveDate', 'purgeDate'],
        data: [
            { 'documentTitle': 'Customer Questionnaire', 'effectiveDate': '01/01/2013', 'purgeDate': '12/31/2013'}
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
                    text: 'Document Title',
                    dataIndex: 'documentTitle',
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
                    text: 'Purge Date',
                    dataIndex: 'purgeDate',
                    align: 'left',
                    flex: 1
                }
            ]
        });
        this.callParent()
    }
});