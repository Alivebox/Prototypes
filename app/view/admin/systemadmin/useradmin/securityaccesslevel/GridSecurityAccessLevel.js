Ext.define('Prototypes.view.admin.systemadmin.useradmin.securityaccesslevel.GridSecurityAccessLevel', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsecurityaccesslevel',
    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'description'],
        data:[
            {'name':'24P General User', 'description':'24P General User'},
            {'name':'AccessJohn', 'description':'The best of the best of the best!'},
            {'name':'Coordinating Producer', 'description':'Coordinating Producer'},
            {'name':'Crew Portal', 'description':'Crew Portal'},
            {'name':'Crewer', 'description':'Crewer'},
            {'name':'CrewMgr', 'description':''},
            {'name':'DisplayMgr', 'description':'DisplayMgr'},
            {'name':'Finance Management', 'description':'Finance Management'},
            {'name':'Key Requestor', 'description':'Key Requestor'},
            {'name':'Network Technical', 'description':'Producers	Remote users (Technical)'},
            {'name':'New Access', 'description':'New Access Level for Test'},
            {'name':'Payroll Admin', 'description':'Payroll Admin'},
            {'name':'Production Portal', 'description':'Production Portal'},
            {'name':'Productions/Operations Staff', 'description':'Productions/Operations Staff'},
            {'name':'Read Only - Gantt', 'description':'View only the schedule without adding or changing'},
            {'name':'Regional Administrator', 'description':'Regional Administrator'},
            {'name':'Regional Field Personnel', 'description':'Regional Field Personnel'}
        ]
    }),
    initComponent: function () {

        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'top',
                    displayInfo: true,
                    items: [
                        {
                            xtype: 'button',
                            text: null,
                            icon: '/resources/icons/ShowMgrImages/16x16/save.gif',
                            listeners:{
                                scope:this,
                                click:this.onSaveButtonClick
                            }
                        },
                        {
                            xtype:'combobox',
                            editable:false,
                            store:[
                                [1,'HTML'],
                                [2,'Word'],
                                [3,'Excel'],
                                [4,'XML'],
                                [5,'CSV']
                            ]
                        },
                        {
                            xtype: 'button',
                            text: null,
                            icon: '/resources/icons/ShowMgrImages/16x16/printer.png',
                            listeners:{
                                scope:this,
                                click:this.onPrintButtonClick
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Add New',
                            icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                            listeners:{
                                scope:this,
                                click:this.onAddAccessLevelButtonClick
                            }
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns:[
                {
                    xtype:'gridcolumn',
                    dataIndex: 'name',
                    text: "Name",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'description',
                    text: "Description",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    sortable:false,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            icon:'/resources/icons/ShowMgrImages/20x20/button_blank_edit.gif',
                            handler: this.onEditRowAction,
                            scope: this
                        }
                    ]
                },{
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    sortable:false,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            icon:'/resources/icons/ShowMgrImages/20x20/button_check.gif',
                            handler: this.onPermissionsRowAction,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    sortable:false,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            icon:'/resources/icons/ShowMgrImages/20x20/button_blank_delete.gif',
                            handler: this.onDeleteRowAction,
                            scope: this
                        }
                    ]
                }
            ]
        });
        this.callParent();
    },

    onSaveButtonClick: function(){
        alert('Save Event');
    },

    onPrintButtonClick: function(){
        alert('Print Event');
    },

    onAddAccessLevelButtonClick: function(){
        this.fireEvent('addRowAction', this);
    },

    onEditRowAction: function(argGrid, argRowIndex){
        this.fireEvent('editRowAction', argGrid, argRowIndex);
    },
    onPermissionsRowAction: function(argGrid, argRowIndex){
        alert('View Permissions Event');
    },

    onDeleteRowAction: function(argGrid, argRowIndex){
        alert('Delete Event');
    }
});