Ext.define('Prototypes.model.order.admin.ElementGroup', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'string'
        },
        {
            name:'groupName',
            type:'string'
        },
        {
            name:'shareType',
            type:'string'
        },
        {
            name:'createdBy',
            type:'string'
        },
        {
            name:'lastUpdated',
            type:'string'
        }
    ]

});