Ext.define('Prototypes.model.report.DocumentLibrary', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'string'
        },
        {
            name:'group',
            type:'string'
        },
        {
            name:'type',
            type:'string'
        },
        {
            name:'title',
            type:'string'
        },
        {
            name:'file',
            type:'string'
        }
    ]

});