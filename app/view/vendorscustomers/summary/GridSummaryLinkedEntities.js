Ext.define('Prototypes.view.vendorscustomers.summary.GridSummaryLinkedEntities', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsummarylinkedentities',
    disableSelection: true,
    height: 300,
    store: Ext.create('Ext.data.Store', {
        fields: ['code', 'name'],
        data: [
            { 'code': 'CAFM', 'name': 'CAFM Solutions, Inc'}
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
                    text: 'Code',
                    dataIndex: 'code',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Name',
                    dataIndex: 'name',
                    align: 'left',
                    flex: 3
                }
            ]
        });
        this.callParent()
    }
});