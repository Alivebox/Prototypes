Ext.define('Prototypes.view.report.reportLibrary.MainReportLibraryContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainreportlibrarycontainer',
    items: [
        {
            itemId: 'gridreportlibrary',
            xtype: 'gridreportlibrary',
            region: 'center'
        }
    ]
});