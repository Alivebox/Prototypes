Ext.define('Prototypes.store.report.TypeLibraries', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.report.TypeLibrary',
    proxy: {
        type: 'ajax',
        url: 'resources/data/typeLibraries.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
