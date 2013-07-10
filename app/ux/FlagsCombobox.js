Ext.define('Prototypes.ux.FlagsCombobox', {

    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.flagscombobox',
    emptyText: 'Select country...',
    displayField : 'name',
    valueField   : 'code',
    valuePath   : 'fileName',
    grow         : true,
//    listeners: {
//        scope: this,
//        change: this.onValueChanged
//    },
    store: Ext.create('Ext.data.Store', {
        fields: ['fileName', 'code', 'name'],
        data: [
            {"fileName":"resources/icons/ShowMgrImages/flags/Argentina.png","code":"1","name":"Argentina"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Australia.png","code":"2","name":"Australia"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Austria.png","code":"3","name":"Austria"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Belgium.png","code":"4", "name":"Belgium"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Bolivia.png","code":"5", "name":"Bolivia"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Brazil.png","code":"6", "name":"Brazil"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Canada.png","code":"7", "name":"Canada"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Chile.png","code":"8", "name":"Chile"},
            {"fileName":"resources/icons/ShowMgrImages/flags/China.png","code":"9", "name":"China"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Colombia.png","code":"10","name":"Colombia"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Costa-Rica.png","code":"11","name":"Costa Rica"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Denmark.png","code":"12","name":"Denmark"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Ecuador.png","code":"13","name":"Ecuador"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Egypt.png","code":"14","name":"Egypt"},
            {"fileName":"resources/icons/ShowMgrImages/flags/England.png","code":"15","name":"England"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Finland.png","code":"16","name":"Finland"},
            {"fileName":"resources/icons/ShowMgrImages/flags/France.png","code":"17","name":"France"},
            {"fileName":"resources/icons/ShowMgrImages/flags/India.png","code":"18","name":"India"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Indonesia.png","code":"19","name":"Indonesia"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Israel.png","code":"20","name":"Israel"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Italy.png","code":"21","name":"Italy"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Jamaica.png","code":"22","name":"Jamaica"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Japan.png","code":"23","name":"Japan"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Mexico.png","code":"24","name":"Mexico"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Netherlands.png","code":"25","name":"Netherlands"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Norway.png","code":"26","name":"Norway"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Russian Federation.png","code":"27","name":"Russian Federation"},
            {"fileName":"resources/icons/ShowMgrImages/flags/Spain.png","code":"28","name":"Spain"},
            {"fileName":"resources/icons/ShowMgrImages/flags/United States of America.png","code":"29","name":"United States"}




        ]
    }),

    queryMode    : 'local',

   /* displayTpl: Ext.create('Ext.XTemplate', [
        '<tpl for=".">',
        'resources/icons/ShowMgrImages/flags/{fileName}.png',
        //'<img src="resources/icons/ShowMgrImages/flags/{fileName}.png">',
        '</tpl>'
    ]),*/

    listConfig: {
        getInnerTpl: function() {
            var tpl = '<div>'+
                '<img src="{fileName}" align="left">&nbsp'+
                '{name}</div>';
            return tpl;
        }
    },
    renderTo: Ext.getBody(),

    initComponent: function () {
        this.callParent(arguments);
    },

    onValueChanged: function(argComponent, argNewValue, argOldValue, argEventOptions){
    }
});


