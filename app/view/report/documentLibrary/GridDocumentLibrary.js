Ext.define('Prototypes.view.report.documentLibrary.GridDocumentLibrary', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.griddocumentlibrary',
    store: 'report.DocumentLibraries',
    initComponent: function () {

        Ext.apply(this, {
            columns:[
                {
                    xtype:'gridcolumn',
                    text: "Group",
                    dataIndex: 'group',
                    flex: 3,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    text: "Type",
                    dataIndex: 'type',
                    flex: 3,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    text: "Title",
                    dataIndex: 'title',
                    flex: 3,
                    sortable: true
                },
                {
                    xtype:'gridcolumn',
                    text: "File",
                    dataIndex: 'file',
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
                            icon: 'resources/icons/ShowMgrImages/20x20/button_folder.gif',
                            handler:this.onBtnFolder,
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
                            handler:this.onBtnBlankDelete,
                            scope: this
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'top',
                    store: 'report.DocumentLibraries',
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
                            text: 'Add New Document',
                            icon: 'resources/icons/ShowMgrImages/16x16/add.png',
                            listeners: {
                                scope: this,
                                click: this.onAddNewDocument
                            }
                        }
                    ]
                }
            ]
        });
        this.callParent();
    },

    onDisplaySearchWindow:function() {
        this.fireEvent('displaySearchWindow', this);
    },

    onAddNewDocument:function() {
        this.fireEvent('addNewDocument', this);
    },

    onBtnFolder:function() {
        this.fireEvent('btnFolder', this);
    },

    onBtnBlankEdit:function(argGrid, argRow) {
        this.fireEvent('btnBlankEdit', argGrid, argRow);
    },

    onBtnBlankDelete:function() {
        this.fireEvent('btnBlankDelete', this);
    }

});