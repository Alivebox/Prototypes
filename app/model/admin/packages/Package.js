Ext.define('Prototypes.model.admin.packages.Package', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'packageName',
            type:'string'
        },
        {
            name:'packageCode',
            type:'string'
        },
        {
            name:'packageType',
            type:'string'
        },
        {
            name:'tradeVendor',
            type:'string'
        },
        {
            name:'oderClass',
            type:'string'
        }
    ]

});