Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.GridPolicyManager', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpolicymanager',
    uses: [
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.dd.*',
        'Ext.selection.CheckboxModel'
    ],

    store: Ext.create('Ext.data.Store', {
        fields: ['id', 'policy', 'category', 'allowance', 'accrualSchedule', 'carryover', 'carryoverSchedule', 'limit', 'expires'],
        data: [
            { 'id': 1, 'policy': 'PTO Tier 1', 'category': 'PTO', 'allowance': '7.0', 'accrualSchedule': 'Every 2 weeks on Mondays', 'carryover': '30.0', 'carryoverSchedule': 'Yearly Every 1 Year on the 1st day', 'limit': '12.0', 'expires': '5 years'},
            { 'id': 2, 'policy': 'PTO Tier 2', 'category': 'PTO', 'allowance': '60.0', 'accrualSchedule': 'Yearly Every 1 Year on the 1st day', 'carryover': '20.0', 'carryoverSchedule': 'Yearly Every 1 Year on the 1st day', 'limit': '100.0', 'expires': 'never'},
            { 'id': 3, 'policy': 'Training', 'category': 'PTO', 'allowance': '40.0', 'accrualSchedule': '', 'carryover': '0.0', 'carryoverSchedule': 'Yearly Every 1 Year on the 1st day', 'limit': '40.0', 'expires': 'never'}


        ]
    }),
    tbar:[
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
        }
    ],
    initComponent: function () {

        Ext.apply(this, {
            selType: 'checkboxmodel',
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Policy',
                    dataIndex: 'policy',
                    align: 'left',
                    flex: 1
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
                    text: 'Allowance',
                    dataIndex: 'allowance',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Accrual Schedule',
                    dataIndex: 'accrualSchedule',
                    align: 'left',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Carryover',
                    dataIndex: 'carryover',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Carryover Schedule',
                    dataIndex: 'carryoverSchedule',
                    align: 'left',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Limit',
                    dataIndex: 'limit',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Expires',
                    dataIndex: 'expires',
                    align: 'left',
                    flex: 1
                }
            ]
        });
        this.callParent();
    }
});