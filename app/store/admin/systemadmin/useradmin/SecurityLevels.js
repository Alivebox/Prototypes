Ext.define('Prototypes.store.admin.systemadmin.useradmin.SecurityLevels', {

    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'Prototypes.model.admin.systemadmin.useradmin.SecurityLevel',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
