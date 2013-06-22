Ext.define('Prototypes.model.admin.services.ServiceType', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'type',
            type:'string'
        }
    ]

});