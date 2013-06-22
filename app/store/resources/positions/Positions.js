Ext.define('Prototypes.store.resources.positions.Positions', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.resources.positions.Position',
    proxy: {
        type: 'ajax',
        url: 'resources/data/positions.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    sorters: [{
        property: 'sortOrder'
    }]
});
