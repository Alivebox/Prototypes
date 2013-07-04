Ext.define('Prototypes.view.elementcatalog.cart.CartGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'cartgrid',
    requires: [
        'Ext.grid.*'
    ],

    viewConfig: {
        emptyText: '<div >There are no records to display</div>',
        deferEmptyText: false
    },

    initComponent: function () {
        this.columns = [
            {
                text: 'Element',
                flex: 1,
                dataIndex: 'name'
            },
            {
                text: 'Qty',
                width: 45,
                dataIndex: 'quantity',
                align: 'center'
            },
            {
                text: 'Actual Revenue',
                columns: [
                    {
                        dataIndex: 'units',
                        header: 'Units',
                        align: 'right'
                    },
                    {
                        dataIndex: 'hourRate',
                        header: 'Rate',
                        align: 'right'
                    },
                    {
                        dataIndex: 'total',
                        header: 'Total',
                        align: 'right'
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
    collapsible: false,
    animCollapse: false,
    header: false,
    iconCls: 'icon-grid',
    margin: '0 0 0 0'

});