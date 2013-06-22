Ext.define('Prototypes.view.resources.positions.GridResourcesPositions', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridresourcespositions',
    store: 'resources.positions.Positions',
    initComponent: function () {

        Ext.apply(this, {
            dockedItems: [
                {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'resources.positions.Positions',
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
                        text: 'Add Position',
                        icon: 'resources/icons/ShowMgrImages/16x16/add.png',
                         listeners: {
                             scope: this,
                             click: this.onAddPosition
                         }
                     },
                    {
                        xtype: 'button',
                        text: 'View By Position Category',
                        listeners: {
                            scope: this,
                            click: this.onViewPositionCategory
                        }
                    }
                ]
                }
            ],
            renderTo: Ext.getBody(),
            columns:[{
                xtype:'gridcolumn',
                text: "Position",
                dataIndex: 'position',
                flex: 3,
                sortable: true
            },{
                xtype:'gridcolumn',
                text: "Description",
                dataIndex: 'description',
                flex: 3,
                sortable: true
            },{
                xtype:'gridcolumn',
                text: "System Definition",
                dataIndex: 'systemDefinition',
                flex: 3,
                sortable: true
            },{
                xtype:'gridcolumn',
                text: "Sort Order",
                dataIndex: 'sortOrder',
                sortable: true,
                flex: 1,
                editor: {
                    xtype: 'numberfield'
                }

            },{
                xtype:'gridcolumn',
                text: "Is Active",
                dataIndex: 'isActive',
                flex: 1,
                sortable: true
            },{
                xtype:'actioncolumn',
                menuDisabled:true,
                align : 'center',
                width: 25,
                items:[
                    {
                        xtype:'button',
                        icon: 'resources/icons/ShowMgrImages/20x20/button_blank_edit.gif',
                        handler:this.onEditRowAction,
                        scope: this
                    }
                ]
            }],
            selType: 'cellmodel',
            plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1,
                listeners:{
                    scope: this,
                    edit: this.onEditCell
                }
            })
        ]
        });
        this.callParent();
    },

    onDisplaySearchWindow:function() {
        this.fireEvent('displaySearchWindow', this);
    },

    onAddPosition:function() {
        this.fireEvent('addPosition', this);
    },

    onViewPositionCategory:function() {
        this.fireEvent('viewPositionCategory', this);
    },

    onEditCell: function(argGrid, argRecord){
        this.fireEvent('editCell', argRecord);
    },

    onEditRowAction: function (argGrid, argRowIndex) {
    this.fireEvent('editRowAction', argGrid, argRowIndex);
    }

});