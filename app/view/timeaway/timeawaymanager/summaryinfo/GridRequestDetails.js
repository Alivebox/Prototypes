Ext.define('Prototypes.view.timeaway.timeawaymanager.summaryinfo.GridRequestDetails', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridrequestdetails',
    enableColumnResize: false,
    sortableColumns: false,
    enableColumnHide: false,
    disableSelection: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['date', 'duration', 'startTime', 'endTime', 'timeZone'],
        data: [
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
                            xtype: 'container',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Name: Bruce Wayne'
                                }
                            ]
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: "Date",
                    dataIndex: 'date',
                    style: 'font-size:8px;',
                    align: 'left',
                    flex: 1.5
                },
                {
                    xtype: 'gridcolumn',
                    text: "Duration",
                    dataIndex: 'duration',
                    style: 'font-size:8px;',
                    flex: 1,
                    align: 'left'
                },
                {
                    xtype: 'gridcolumn',
                    text: "Start Time",
                    dataIndex: 'startTime',
                    style: 'font-size:8px;',
                    flex: 1,
                    align: 'left'
                },
                {
                    xtype: 'gridcolumn',
                    text: "End Time",
                    dataIndex: 'endTime',
                    style: 'font-size:8px;',
                    flex: 1,
                    align: 'left'
                },
                {
                    xtype: 'gridcolumn',
                    text: "Time Zone",
                    style: 'font-size:8px;',
                    dataIndex: 'timeZone',
                    flex: 1,
                    align: 'left'
                }
            ]
        }),
            this.callParent()
    }
});