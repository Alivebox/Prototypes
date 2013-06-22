Ext.define('Prototypes.model.timeaway.timeawaymanager.RequestDetails', {

    extend:'Ext.data.Model',
    idProperty:'date',
    fields:[
        {
            name:'date',
            type:'string'
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
        }
    ]

});