Ext.define('Prototypes.view.admin.systemadmin.useradmin.useraccount.GridUserAccount', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.griduseraccount',
    store: Ext.create('Ext.data.Store', {
        fields: ['userId', 'lastName', 'firstName', 'username', 'accessLevel', 'resourceRecord', 'lastLogOn'],
        data: [
            {'userId':'207', 'lastName':'_Hajje1', 'firstName':'Nazir´s','username':'LuisApro', 'accessLevel':'Finance Management', 'resourceRecord':'YES','lastLogOn':''},
            {'userId':'1056', 'lastName':'_Hajje1', 'firstName':'Nazir´s', 'username':'DEV6441235', 'accessLevel':'System Administrator', 'resourceRecord':'YES', 'lastLogOn':'13/2/2013'},
            {'userId':'270', 'lastName':'AAGAARD', 'firstName':'TOMMY', 'username':'tommy_aagaard', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'286', 'lastName':'ABBENDA', 'firstName':'JOE', 'username':'JBeckopro', 'accessLevel':'Network Technical Producers', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'1115', 'lastName':'ABBENDA', 'firstName':'JOE', 'username':'nhajje_test', 'accessLevel':'View Only', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'372', 'lastName':'ABERNETHY', 'firstName':'BOB', 'username':'bborgen', 'accessLevel':'Production Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'1019', 'lastName':'ABERNETHY', 'firstName':'BOB', 'username':'0000001A', 'accessLevel':'Crewer', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'271', 'lastName':'ALDOUS', 'firstName':'FRED', 'username':'faldous', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'356', 'lastName':'ALDOUS', 'firstName':'FRED', 'username':'jay_crew', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':'31/1/2008'},
            {'userId':'682', 'lastName':'ALLEN', 'firstName':'CHRIS', 'username':'CAllen', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'654', 'lastName':'ANDERSON', 'firstName':'FRANK', 'username':'FAnderson', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'655', 'lastName':'ANDERSON', 'firstName':'FRANK', 'username':'FAnderson', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'342', 'lastName':'Arden', 'firstName':'Elisa (Bell)', 'username':'EArden', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'384', 'lastName':'ASHENOFSKY', 'firstName':'JAY', 'username':'JAshenofsky', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'641', 'lastName':'Baldwin', 'firstName':'Corliss', 'username':'bcorliss', 'accessLevel':'Productions/Operations Staff', 'resourceRecord':'NO', 'lastLogOn':''},
            {'userId':'675', 'lastName':'BARROW', 'firstName':'ROBIN', 'username':'RBarrow', 'accessLevel':'View Only', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'214', 'lastName':'Benedict', 'firstName':'Matt', 'username':'MBenedictPro', 'accessLevel':'Network Technical Producers', 'resourceRecord':'NO', 'lastLogOn':''},
            {'userId':'798', 'lastName':'Bennett', 'firstName':'Jay', 'username':'jbennett', 'accessLevel':'Productions/Operations Staff', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'197', 'lastName':'Berry', 'firstName':'Andrea', 'username':'aberrypro', 'accessLevel':'Regional Administrator', 'resourceRecord':'NO', 'lastLogOn':''},
            {'userId':'329', 'lastName':'Biederman', 'firstName':'Bryan', 'username':'BBiederman', 'accessLevel':'Production Portal', 'resourceRecord':'NO', 'lastLogOn':'29/9/2008'},
            {'userId':'400', 'lastName':'Bleckner', 'firstName':'Peter', 'username':'PBleckner', 'accessLevel':'Production Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'361', 'lastName':'Boags', 'firstName':'Lisa', 'username':'lboags', 'accessLevel':'Productions/Operations Staff', 'resourceRecord':'NO', 'lastLogOn':''},
            {'userId':'673', 'lastName':'Bogert', 'firstName':'AL', 'username':'ABogert', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'383', 'lastName':'BRAY', 'firstName':'BUD', 'username':'RBray', 'accessLevel':'Crew Portal', 'resourceRecord':'YES', 'lastLogOn':''},
            {'userId':'282', 'lastName':'Brennan', 'firstName':'Kathy', 'username':'KBrennanpro', 'accessLevel':'Finance Management', 'resourceRecord':'NO', 'lastLogOn':''}
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
                            text: 'Add New User',
                            icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                            listeners:{
                                scope:this,
                                click:this.onAddUserButtonClick
                            }
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns:[
                {
                    xtype:'gridcolumn',
                    dataIndex: 'userId',
                    text: "UserID",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'right'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'lastName',
                    text: "Last Name",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'firstName',
                    text: "First Name",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'username',
                    text: "Username",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'accessLevel',
                    text: "Access Level",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'resourceRecord',
                    text: "Have Resource Record",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true,
                    align: 'left'
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'lastLogOn',
                    text: "Last Log On",
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
                            //handler: this.onDeleteRowAction,
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

    onAddUserButtonClick: function(){
        this.fireEvent('addRowAction', this);
    },

    onEditRowAction: function(argGrid, argRowIndex){
        this.fireEvent('editRowAction', argGrid, argRowIndex);
    }
});