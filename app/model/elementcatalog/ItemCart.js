Ext.define('Prototypes.model.elementcatalog.ItemCart', {
    extend: 'Ext.data.Model',

    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'id'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'quantity',
            type: 'int',
            defaultValue: 2
        },
        {
            name: 'units',
            type: 'int',
            defaultValue: 0
        },
        {
            name: 'hourRate',
            type: 'string'
        },
        {
            name: 'total',
            type: 'string'
        }
    ]
});
