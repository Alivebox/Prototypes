var tmpStore = Ext.create('Ext.data.Store', {
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
        },
        {
            name:'approver',
            type:'string'
        },
        {
            name:'reason',
            type:'string'
        }
    ],
    data: [
    ]
});

Ext.define('Prototypes.view.timeaway.timeawayrequest.summaryinformation.GridRequestDetail', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridrequestdetail',
    store: tmpStore,
    amText: 'AM',
    pmText: 'PM',
    height: 150,
    initComponent: function () {
        this.cbTimeZone = this.onTimeZoneComboBox();
        this.startTime = this.onCreateTimeField(this.amText);
        this.endTime = this.onCreateTimeField(this.pmText);
        Ext.apply(this, {
            renderTo: Ext.getBody(),
            columns:[{
                xtype:'gridcolumn',
                text: "Date",
                dataIndex: 'date',
                renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                flex: 3
            },
                {
                    xtype: 'gridcolumn',
                    text: "Duration",
                    dataIndex: 'duration'
                },
                {
                    xtype: 'checkcolumn',
                    text: "Update Time",
                    dataIndex: 'updateTime',
                    listeners: {
                        scope: this,
                        checkchange: this.onUpdateTimeCheckChange
                    },
                    flex: 3
                },
                {
                    xtype: 'gridcolumn',
                    text: "Start Time",
                    dataIndex: 'startTime',
                    editor: this.startTime,
                    flex: 3
                },
                {
                    xtype: 'gridcolumn',
                    text: "End Time",
                    dataIndex: 'endTime',
                    editor: this.endTime,
                    flex: 3
                },
                {
                    xtype: 'gridcolumn',
                    menuDisabled: true,
                    text: 'Time Zone',
                    dataIndex: 'timeZone',
                    editor: this.cbTimeZone
                }
            ],
            selType: 'cellmodel',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1,
                    listeners: {
                        beforeedit: function (argEditor, argObject) {
                            if (!argObject.record.data.updateTime) {
                                return false;
                            }
                        }
                    }
                })
            ]
        }),

            this.callParent(arguments)
    },
    onTimeZoneComboBox: function () {
        var tmpComboBox = Ext.create('Ext.form.field.ComboBox', {
            name: 'cbTimeZoneRoles',
            allowBlank: true,
            store: Ext.create('Ext.data.Store', {
                fields: ['id', 'name'],
                data: [
                    { "id": 1, "name": "(GMT-8:00)" },
                    { "id": 2, "name": "(EDT-5:00)" },
                    { "id": 3, "name": "(EAT+1:00)" },
                    { "id": 4, "name": "(VET+2:00)" },
                    { "id": 5, "name": "(UYT-8:00)" }
                ]
            }),
            displayField: 'name',
            queryMode: 'local',
            editable: false
        });

        return tmpComboBox;
    },

    onCreateTimeField: function (argTimeText) {
        var tmpEmptyText = '';
        if(argTimeText == this.amText){
            tmpEmptyText =  '8:00 AM'
        } else {
            tmpEmptyText =  '10:00 PM'
        }
        var tmpTimeField = Ext.create('Ext.form.field.Text', {
            vtype: 'time',
            emptyText: tmpEmptyText
        });

        return tmpTimeField;
    },

    onUpdateTimeCheckChange: function (argEvent, argRowIndex, argChecked) {
        this.fireEvent('updateTimeCheckChange', argEvent, argRowIndex, argChecked);
    }

});