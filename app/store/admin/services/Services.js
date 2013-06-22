Ext.define('Prototypes.store.admin.services.Services', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.admin.services.Service',
    proxy: {
        type: 'ajax',
        url: 'resources/data/services.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
