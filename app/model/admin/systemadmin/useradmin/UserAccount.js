Ext.define('Prototypes.model.admin.systemadmin.useradmin.UserAccount', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'int'
        },
        {
            name:'userId',
            type:'string'
        },
        {
            name:'lastName',
            type:'string'
        },
        {
            name:'firstName',
            type:'string'
        },
        {
            name:'username',
            type:'string'
        },
        {
            name:'accessLevel',
            type:'string'
        },
        {
            name:'resourceRecord',
            type:'string'
        },
        {
            name:'lastLogOn',
            type:'string'
        }
    ]

});