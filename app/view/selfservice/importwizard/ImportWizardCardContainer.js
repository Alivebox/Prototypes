Ext.define('Prototypes.view.selfservice.importwizard.ImportWizardCardContainer', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.importwizardcardcontainer',
    layout: 'card',
    height: 400,
    width: 600,
    initComponent:function () {
        this.items = [
            {
                xtype: 'choosefile',
                height: '100%',
                width: '100%'
            },
            {
                xtype: 'previewfile',
                height: '100%',
                width: '100%'
            },
            {
                xtype: 'datefieldmapping',
                height: '100%',
                width: '100%'
            },
            {
                xtype: 'previewimport',
                height: '100%',
                width: '100%'
            }
        ],
        this.bbar = [
            '->',
            {
                xtype: 'button',
                text: 'Cancel'
            },
            {
                xtype: 'button',
                text: '<< Back',
                itemId: 'btnBack',
                disabled: true,
                listeners: {
                    scope: this,
                    click: this.navigationHandler
                }
            },
            {
                xtype: 'button',
                text: 'Next >>',
                itemId: 'btnNext',
                listeners: {
                    scope: this,
                    click: this.navigationHandler
                }
            },
            {
                xtype: 'button',
                text: 'Import',
                itemId: 'btnImport',
                visible: false,
                listeners: {
                    scope: this,
                    click: this.importHandler
                }
            }
        ],
        this.callParent(arguments);
    },

    navigationHandler: function(argComponent, argEvent){
        var tmpLayout = this.getLayout();
        if(argComponent.itemId === 'btnNext'){
            tmpLayout['next']();
        }else{
            tmpLayout['prev']();
        }
        var tmpBtnBack = this.down('button[itemId=btnBack]')
        tmpBtnBack.setDisabled(!tmpLayout.getPrev());
        var tmpBtnNext = this.down('button[itemId=btnNext]')
        tmpBtnNext.setDisabled(!tmpLayout.getNext());
        if(!tmpLayout.getNext()){
            this.fireEvent('importButtonEnable', this);
        }else{
            this.fireEvent('importButtonDisable', this);
        }
    },

    importHandler: function(argComponent, argEvent){
        alert('Alright! Your imported file has been received and is currently in progess. As soon as the routine is finished, we will send you an email notification letting you know that the upload is complete.You can view the status of your import request at any time by going to Admin > Data Load > Upload Queue.');
    }
});