Ext.define('Prototypes.view.order.admin.GridOrderAdminElementGroups', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridorderadminelementgroups',
    store: 'order.admin.ElementGroups',
    initComponent: function () {

        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'top',
                    store: 'order.admin.ElementGroups',
                    displayInfo: true,
                    items: [
                        {
                            xtype: 'button',
                            icon: 'resources/icons/ShowMgrImages/16x16/search.png',
                            listeners: {
                                scope: this,
                                click: this.onDisplaySearchWindow
                            }

                        },
                        {
                            xtype: 'button',
                            text: 'Create Group',
                            icon: 'resources/icons/ShowMgrImages/16x16/add.png',
                            listeners: {
                                scope: this,
                                click: this.onCreateGroup
                            }
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns:[{
                xtype:'gridcolumn',
                text: "Group Name",
                dataIndex: 'groupName',
                flex: 3,
                sortable: true
            },{
                xtype:'gridcolumn',
                text: "Share Type",
                dataIndex: 'shareType',
                flex: 3,
                sortable: true
            },{
                xtype:'gridcolumn',
                text: "Created By",
                dataIndex: 'createdBy',
                flex: 3,
                sortable: true
            },{
                xtype:'gridcolumn',
                text: "Last Updated(ET)",
                dataIndex: 'lastUpdated',
                flex: 3,
                sortable: true
            },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_reload.gif',
                            handler:this.onBtnReload,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_search.gif',
                            handler:this.onBtnSearch,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',

                            icon: 'resources/icons/ShowMgrImages/20x20/button_blank_add.gif',
                            handler:this.onBtnBlankAdd,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_group_add.gif',
                            handler:this.onBtnGroupAdd,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_greenlock.gif',
                            handler:this.onBtnGreenLock,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_email.gif',
                            handler:this.onBtnEmail,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_blank_edit.gif',
                            handler:this.onBtnBlankEdit,
                            scope: this
                        }
                    ]
                },
                {
                    xtype:'actioncolumn',
                    menuDisabled:true,
                    align : 'center',
                    width: 25,
                    items:[
                        {
                            xtype:'button',
                            icon: 'resources/icons/ShowMgrImages/20x20/button_blank_delete.gif',
                            handler:this.onBlankDelete,
                            scope: this
                        }
                    ]
                }]
        });
        this.callParent();
    },

    onDisplaySearchWindow:function() {
        this.fireEvent('displaySearchWindow', this);
    },

    onCreateGroup:function() {
        this.fireEvent('createGroup', this);
    },

    onBtnReload:function() {
        this.fireEvent('btnReload', this);
    },

    onBtnSearch:function() {
        this.fireEvent('btnSearch', this);
    },

    onBtnBlankAdd:function() {
        this.fireEvent('btnBlankAdd', this);
    },

    onBtnGroupAdd:function() {
        this.fireEvent('btnGroupAdd', this);
    },

    onBtnGreenLock:function() {
        this.fireEvent('btnGreenLock', this);
    },

    onBtnEmail:function() {
        this.fireEvent('btnEmail', this);
    },

    onBtnBlankEdit:function(argGrid, argRow) {
        this.fireEvent('btnBlankEdit', argGrid, argRow);
    },

    onBlankDelete:function() {
        this.fireEvent('blankDelete', this);
    }
});