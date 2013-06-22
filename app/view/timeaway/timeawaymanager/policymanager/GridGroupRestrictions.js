Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.GridGroupRestrictions', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridgrouprestrictions',
    disableSelection: true,
    header: false,
    frame: false,
    hideHeaders: true,
    requires: [
        'Ext.grid.plugin.CellEditing'
    ],

    store: Ext.create('Ext.data.Store', {
        fields: ['division', 'department', 'group', 'limit', 'efectiveStart', 'efectiveEnd'],
        data: [
            {'division': 'NY-ART', 'department': 'PHOTO', 'group': 'CAM 1', 'limit': '3', 'efectiveStart': '05-19-2013', 'efectiveEnd': '05-19-2013'}
        ]
    }),
    initComponent: function () {
        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        Ext.apply(this, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'division',
                    align: 'left',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'department',
                    align: 'left',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'group',
                    align: 'left',
                    flex: 1,
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'limit',
                    align: 'left',
                    flex: 1,
                    editor: {
                        xtype: 'numberfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'efectiveStart',
                    align: 'center',
                    flex: 1,
                    editor: {
                        xtype: 'datefield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'efectiveEnd',
                    align: 'center',
                    flex: 1,
                    editor: {
                        xtype: 'datefield'
                    }
                }
            ],
            selType: 'cellmodel',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            ]
        }),
            this.callParent()
    }

});