Ext.define('Prototypes.view.vendorscustomers.GridSavedSearches', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsavedsearches',
    disableSelection: true,
    header: false,
    frame: false,
    hideHeaders: true,

    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'date'],
        data: [
            {'name': 'Last Search', 'date': '01/05/2013'}
        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'name',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    resizable: false,
                    dataIndex: 'date',
                    align: 'left',
                    flex: 1
                }
            ]
        }),
            this.callParent()
    }

});