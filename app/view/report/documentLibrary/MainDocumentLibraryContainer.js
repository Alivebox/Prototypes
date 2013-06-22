Ext.define('Prototypes.view.report.documentLibrary.MainDocumentLibraryContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.maindocumentlibrarycontainer',
    items: [
        {
            itemId: 'griddocumentlibrary',
            xtype: 'griddocumentlibrary',
            region: 'center'
        }
    ]
});