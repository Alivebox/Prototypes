Ext.define('Prototypes.model.admin.services.Service', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'serviceCategory',
            type:'string'
        },
        {
            name:'categoryCode',
            type:'string'
        }
    ]

});