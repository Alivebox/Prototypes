Ext.define('Prototypes.store.admin.packages.Packages', {

    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Prototypes.model.admin.packages.Package',
    proxy: {
        type: 'ajax',
        url: 'resources/data/packages.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});
