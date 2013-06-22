Ext.define('Prototypes.store.report.FolderLibraries', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.report.FolderLibrary',
    proxy: {
        type: 'ajax',
        url: 'resources/data/folderLibraries.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
