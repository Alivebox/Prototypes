Ext.define('Prototypes.view.vendorscustomers.summary.GridSummaryElements', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsummaryelements',
    disableSelection: true,
    height: 300,
    store: Ext.create('Ext.data.Store', {
        fields: ['group', 'element', 'elementCode', 'publicDisplayName', 'defaultOrderClass'],
        data: [
            { 'group': 'Asset', 'element': 'Sony HD CAM', 'elementCode': '987654', 'publicDisplayName': 'Purple Camera', 'defaultOrderClass': 'Shoot'}
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
                    text: 'Group',
                    dataIndex: 'group',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Element',
                    dataIndex: 'element',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Element Code',
                    dataIndex: 'elementCode',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Public Display Name',
                    dataIndex: 'publicDisplayName',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Default Order Class',
                    dataIndex: 'defaultOrderClass',
                    align: 'left',
                    flex: 1
                }
            ]
        });
        this.callParent()
    }
});