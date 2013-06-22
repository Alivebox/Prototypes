Ext.define('Prototypes.view.admin.packages.GridPackages', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridpackages',

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
                            text: 'Create New Bundle',
                            icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                            listeners:{
                                scope:this,
                                click:this.onNewBundleButtonClick
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Create New Package',
                            icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                            listeners:{
                                scope:this,
                                click:this.onNewPackageButtonClick
                            }
                        },
                        {
                            xtype:'combobox',
                            editable:false,
                            fieldLabel: 'View By',
                            store:[
                                [1,'Bundle'],
                                [2,'Package']
                            ]
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns:[
                {
                    xtype:'gridcolumn',
                    dataIndex: 'packageName',
                    text: "Package Name",
                    flex: 2,
                    menuDisabled:true,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'packageCode',
                    text: "Package Code",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'packageType',
                    text: "Package Type",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'tradeVendor',
                    text: "Trade / Vendor",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'oderClass',
                    text: "Oder Class",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true
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
                            icon:'/resources/icons/ShowMgrImages/20x20/button_group_add.gif',
                            handler: this.onAddGroupAction,
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
                            icon:'/resources/icons/ShowMgrImages/20x20/button_money.gif',
                            handler: this.onRateCardRowAction,
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
        this.callParent(arguments);
    },

    onNewPackageButtonClick: function(){
        this.fireEvent('newPackageAction',this);
    },

    onNewBundleButtonClick: function(){
        alert('New Bundle Event');
    },

    onEditRowAction: function(argGrid, argRowIndex){
        this.fireEvent('editRowAction', argGrid, argRowIndex);
    },

    onDeleteRowAction: function(){
        alert('Delete Package Event');
    },

    onRateCardRowAction: function(){
        alert('Rate Card Event');
    },

    onAddGroupAction: function(){
        alert('Add Group Event');
    }
});