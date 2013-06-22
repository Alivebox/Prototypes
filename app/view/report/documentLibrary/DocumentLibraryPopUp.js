Ext.define('Prototypes.view.report.documentLibrary.DocumentLibraryPopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.documentlibrarypopup',
    resizable: true,
    height: 400,
    width: 400,
    modal: true,
    region: 'center',
    requieres:[
        'Prototypes.view.report.documentLibrary.FormDocumentLibrary'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'formdocumentlibrary'
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
    }
});