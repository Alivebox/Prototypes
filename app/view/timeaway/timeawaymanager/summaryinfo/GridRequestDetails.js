Ext.define('Prototypes.view.timeaway.timeawaymanager.summaryinfo.GridRequestDetails', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridrequestdetails',
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
                    flex: 1.5
                },
                {
                    xtype: 'gridcolumn',
                    text: "Duration",
                    dataIndex: 'duration',
                    flex: 1,
                    align: 'center'
                },
                {
                    xtype: 'gridcolumn',
                    text: "Start Time",
                    dataIndex: 'startTime',
                    flex: 1,
                    align: 'center'
                },
                {
                    xtype: 'gridcolumn',
                    text: "End Time",
                    dataIndex: 'endTime',
                    flex: 1,
                    align: 'center'
                },
                {
                    xtype: 'gridcolumn',
                    text: "Time Zone",
                    dataIndex: 'timeZone',
                    flex: 1.5
                }
            ]
        }),
            this.callParent()
    }
});