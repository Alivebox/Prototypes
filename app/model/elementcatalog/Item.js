Ext.define('Prototypes.model.elementcatalog.Item', {
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
            name: 'manufacturer',
            type: 'string'
        },
        {
            name: 'model',
            type: 'string'
        },
        {
            name: 'descrition',
            type: 'string'
        },
        {
            name: 'hourRate',
            type: 'string'
        },
        {
            name: 'dayRate',
            type: 'string'
        },
        {
            name: 'imgSrc',
            type: 'string'
        },
        {
            name: 'total',
            type: 'int'
        }
    ]
});