Ext.define('Prototypes.store.order.admin.ElementGroups', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.order.admin.ElementGroup',
    proxy: {
        type: 'ajax',
        url: 'resources/data/elementGroups.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    sorters: [{
        property: 'id'
    }]
});
