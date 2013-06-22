Ext.define('Prototypes.store.report.DocumentLibraries', {

    extend: 'Ext.data.Store',
    model: 'Prototypes.model.report.DocumentLibrary',
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url: 'resources/data/documentLibraries.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
