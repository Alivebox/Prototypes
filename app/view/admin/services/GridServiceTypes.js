Ext.define('Prototypes.view.admin.services.GridServiceTypes', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridservicetypes',

    initComponent: function () {

        Ext.apply(this, {
            columns:[
                {
                    xtype:'gridcolumn',
                    dataIndex: 'type',
                    text: "Type",
                    flex: 1,
                    menuDisabled:true
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
                            icon:'/resources/icons/ShowMgrImages/20x20/button_money.gif',
                            handler: this.onRateCardAction,
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

    onEditRowAction: function (argGrid, argRowIndex) {
        this.fireEvent('editRowAction', argGrid, argRowIndex);
    },

    onDeleteRowAction: function (argGrid, argRowIndex) {
        this.fireEvent('deleteRowAction', argGrid, argRowIndex);
    },

    onRateCardAction: function(argGrid, argRowIndex) {
        this.fireEvent('rateCardRowAction', argGrid, argRowIndex);
    }

});