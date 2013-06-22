Ext.define('Prototypes.view.admin.systemadmin.useradmin.useraccount.UserAccountPopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.useraccountpopup',
    resizable: true,
    height: 600,
    width: 900,
    modal: true,
    region: 'center',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'anchor',
                items: [
                    {
                        xtype:'formuseraccount'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        text: 'Close',
                        listeners: {
                            scope: this,
                            click: this.onClosePopUp
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        listeners: {
                            scope: this,
                            click: this.onSubmitPopUp
                        }
                    }
                ]
            }
        ],
            this.callParent(arguments);
    },

    onClosePopUp: function(){
        this.fireEvent('closePopUp', this);
    },

    onSubmitPopUp: function(){
        this.fireEvent('submitPopUp', this);
    },

    onSubmitClosePopUp: function(){
        this.fireEvent('submitClosePopUp', this);
    }
});