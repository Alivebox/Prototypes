Ext.define('Prototypes.view.admin.systemadmin.useradmin.securityaccesslevel.SecurityLevelPopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.securitylevelpopup',
    resizable: true,
    height: 150,
    width: 400,
    modal: true,
    region: 'center',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'anchor',
                items: [
                    {
                        xtype:'formsecuritylevel'
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