Ext.define('Prototypes.store.order.admin.ShareTypes', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.order.admin.ShareType',
    proxy: {
        type: 'ajax',
        url: 'resources/data/shareTypes.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
