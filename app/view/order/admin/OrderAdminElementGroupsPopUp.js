Ext.define('Prototypes.view.order.admin.OrderAdminElementGroupsPopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.orderadminelementgroupspopup',
    resizable: true,
    height: 150,
    width: 300,
    modal: true,
    region: 'center',
    requieres:[
        'Prototypes.view.order.admin.FormOrderAdminElementGroups'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'formorderadminelementgroups',
                        region: 'center'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        text: 'Cancel',
                        listeners: {
                            scope: this,
                            click: this.onClosePositionPopUp
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        listeners: {
                            scope: this,
                            click: this.onSubmitPositionPopUp
                        }
                    }
                ]
            }
        ],
        this.callParent(arguments);
    },

    onClosePositionPopUp: function(){
        this.fireEvent('closePositionPopUp', this);
    },

    onSubmitPositionPopUp: function(){
        this.fireEvent('submitPositionPopUp', this);
    }
});