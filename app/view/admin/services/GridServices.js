Ext.define('Prototypes.view.admin.services.GridServices', {

    extend: 'Prototypes.ux.NestedGrid',
    alias: 'widget.gridservices',

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
                            ],
                            listeners:{
                                scope:this,
                                change:this.onFormatComboChanged
                            }
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
                            text: 'Add New Category',
                            icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                            listeners:{
                                scope:this,
                                click:this.onAddCategoryButtonClick
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Load System Services',
                            icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                            listeners:{
                                scope:this,
                                click:this.onLoadSystemServicesButtonClick
                            }
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns:[
                {
                    xtype:'gridcolumn',
                    dataIndex: 'serviceCategory',
                    text: "Service Category",
                    flex: 1,
                    menuDisabled:true,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    dataIndex: 'categoryCode',
                    text: "Category Code",
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
                            icon:'/resources/icons/ShowMgrImages/20x20/button_blank_add.gif',
                            handler: this.onAddRowAction,
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

    onAddCategoryButtonClick: function(){
        alert('Add Category Event');
    },

    onLoadSystemServicesButtonClick: function(){
        alert('Load System Services Event');
    },

    onFormatComboChanged: function(){
    },

    onEditRowAction: function (argGrid, argRowIndex) {
        this.fireEvent('editRowAction', argGrid, argRowIndex);
    },

        onAddRowAction: function (argGrid, argRowIndex) {
        this.fireEvent('addRowAction', argGrid, argRowIndex);
    },

    onDeleteRowAction: function (argGrid, argRowIndex) {
        this.fireEvent('deleteRowAction', argGrid, argRowIndex);
    }

});