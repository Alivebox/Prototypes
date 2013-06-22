Ext.define('Prototypes.view.admin.services.category.CategoryPopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.categorypopup',
    resizable: true,
    height: 200,
    width: 375,
    modal: true,
    region: 'center',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'anchor',
                items: [
                    {
                        xtype:'formcategory'
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
        this.fireEvent('closeCategoryPopUp', this);
    },

    onSubmitPopUp: function(){
         this.fireEvent('submitCategoryPopUp', this);
    }
});