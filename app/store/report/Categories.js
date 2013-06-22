Ext.define('Prototypes.store.report.Categories', {

    extend: 'Ext.data.Store',
    model: 'Prototypes.model.report.Category',
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: 'ajax',
        url: 'resources/data/categories.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
