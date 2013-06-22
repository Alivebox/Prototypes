Ext.define('Prototypes.model.resources.positions.Position', {

    extend:'Ext.data.Model',

    idProperty:'id',

    fields:[
        {
            name:'id',
            type:'string'
        },
        {
            name:'position',
            type:'string'
        },
        {
            name:'description',
            type:'string'
        },
        {
            name:'systemDefinition',
            type:'string'
        },
        {
            name:'sortOrder',
            type:'string'
        },
        {
            name:'isActive',
            type:'string'
        }
    ]

});