Ext.define('Prototypes.store.admin.services.ServiceTypes', {

    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'Prototypes.model.admin.services.ServiceType',
    proxy: {
        type: 'ajax',
        url: 'resources/data/serviceTypes.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});