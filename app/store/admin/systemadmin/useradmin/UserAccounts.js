Ext.define('Prototypes.store.admin.systemadmin.useradmin.UserAccounts', {

    extend: 'Ext.data.Store',
    autoLoad: false,
    model: 'Prototypes.model.admin.systemadmin.useradmin.UserAccount',
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
