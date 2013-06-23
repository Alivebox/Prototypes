Ext.define('Prototypes.view.admin.services.categorytype.CategoryTypePopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.categorytypepopup',
    resizable: true,
    height: 200,
    width: 350,
    modal: true,
    region: 'center',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'anchor',
                items: [
                    {
                        xtype:'formcategorytype'
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
        this.fireEvent('closeCategoryTypePopUp', this);
    },

    onSubmitPopUp: function(){
        // this.fireEvent('submitPositionPopUp', this);
    }
});