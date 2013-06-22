Ext.define('Prototypes.controller.selfservice.importwizard.ImportWizardController', {

    extend: "Ext.app.Controller",

    refs:[
        {
            ref: 'importButton',
            selector: 'importwizardcardcontainer button[itemId=btnImport]'
        },
        {
            ref: 'nextButton',
            selector: 'importwizardcardcontainer button[itemId=btnNext]'
        }
    ],
    init: function () {
        this.control({
            importwizardcardcontainer: {
                afterrender: this.onCardContainerBeforerender,
                importButtonEnable: this.onEnableImportButton,
                importButtonDisable: this.onDisableImportButton
            }
        })
    },

    onCardContainerBeforerender: function(){
        this.getImportButton().setVisible(false);
    },

    onEnableImportButton: function(){
        this.getImportButton().setVisible(true);
        this.getNextButton().setVisible(false);
    },

    onDisableImportButton: function(){
        this.getImportButton().setVisible(false);
        this.getNextButton().setVisible(true);
    }
});