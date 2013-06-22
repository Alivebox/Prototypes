Ext.define('Prototypes.view.report.reportLibrary.GridReportLibrary', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridreportlibrary',
    store: 'report.Categories',
    initComponent: function () {

        Ext.apply(this, {
            columns:[{
                xtype:'gridcolumn',
                text: "Category Name",
                dataIndex: 'name',
                flex: 3,
                sortable: true
            }],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'top',
                    store: 'report.Categories',
                    displayInfo: true,
                    items: [
                        {
                            xtype: 'button',
                            icon: 'resources/icons/ShowMgrImages/16x16/search.png',
                            listeners: {
                                scope: this,
                                click: this.onDisplaySearchWindow
                            }

                        }
                    ]
                }
            ]
        });
        this.callParent();
    },

    onDisplaySearchWindow:function() {
        this.fireEvent('displaySearchWindow', this);
    }

});