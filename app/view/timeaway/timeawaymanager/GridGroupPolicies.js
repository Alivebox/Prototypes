Ext.define('Prototypes.view.timeaway.timeawaymanager.GridGroupPolicies', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridgrouppolicies',
    disableSelection: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['division', 'department', 'group', 'limit', 'carryover', 'carryoverSchedule', 'limit', 'expires', 'effectiveStart', 'effectiveEnd'],
        data: [
            { 'division': 'NY-ART', 'department': 'PHOTO', 'group': 'CAM1', 'limit': '3', 'effectiveStart': '05/19/2013', 'effectiveEnd': '05/19/2013'}


        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Add New',
                            margin: '0 0 0 350',
                            iconCls: 'add-button-icon'
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Division',
                    dataIndex: 'division',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Department',
                    dataIndex: 'department',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Group',
                    dataIndex: 'group',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Limit',
                    dataIndex: 'limit',
                    align: 'center',
                    flex: 0.5
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Effective Start',
                    dataIndex: 'effectiveStart',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Effective End',
                    dataIndex: 'effectiveEnd',
                    align: 'left',
                    flex: 1
                }
            ]
        }),
            this.callParent()
    }
});