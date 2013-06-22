Ext.define('Prototypes.model.timeaway.Request', {

    extend:'Ext.data.Model',
    idProperty:'id',
    fields:[
        {
            name: 'date',
            type: 'date',
            dateFormat: 'Y-m-d',
            submitFormat: 'Y-m-d'
        },
        {
            name:'duration',
            type:'string'
        },
        {
            name:'startTime',
            type:'string'
        },
        {
            name:'endTime',
            type:'string'
        },
        {
            name:'timeZone',
            type:'string'
        },
        {
            name:'status',
            type:'string'
        }
    ]

});