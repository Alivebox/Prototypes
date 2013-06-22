Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.GridAvailableResources', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridavailableresources',
    uses: [
        'Ext.grid.*',
        'Ext.data.*',
        'Ext.dd.*',
        'Ext.selection.CheckboxModel'
    ],

    store: Ext.create('Ext.data.Store', {
        fields: ['resource', 'serviceDate', 'division', 'department', 'effective', 'expires'],
        data: [
            { 'resource': 'Wayne, Bruce', 'serviceDate': '1/01/2008', 'division': 'NY-ART', 'department': 'PHOTO', 'effective': '1/1/2013', 'expires': '2/31/2013'},
            { 'resource': 'Kent, Clark', 'serviceDate': '10/05/2007', 'division': 'NY-ART', 'department': 'PHOTO', 'effective': '1/1/2013', 'expires': '2/31/2013'}


        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            selType: 'checkboxmodel',
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Resource',
                    dataIndex: 'resource',
                    align: 'left',
                    flex: 1.5
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Service Date',
                    dataIndex: 'serviceDate',
                    align: 'center',
                    flex: 1
                },
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
                    text: 'Effective',
                    dataIndex: 'effective',
                    align: 'center',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Expires',
                    dataIndex: 'expires',
                    align: 'center',
                    flex: 1
                }
            ]
        }),
            this.callParent()
    }
});