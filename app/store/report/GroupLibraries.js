Ext.define('Prototypes.store.report.GroupLibraries', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.report.GroupLibrary',
    proxy: {
        type: 'ajax',
        url: 'resources/data/groupLibraries.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
