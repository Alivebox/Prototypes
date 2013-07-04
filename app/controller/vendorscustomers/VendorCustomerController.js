Ext.define('Prototypes.controller.vendorscustomers.VendorCustomerController', {

    extend: "Ext.app.Controller",

    refs:[
        {
            ref: 'notesList',
            selector: 'noteslistview'
        },
        {
            ref: 'summaryTabContainer',
            selector: 'summarytabcontainer'
        },
        {
            ref: 'infoContainer',
            selector: 'generalsummaryinfocontainer'
        },
{
    ref: 'summarySouthPanel',
        selector: 'mainsummarycontainer [itemId=summarySouthPanel]'
}
    ],

    init: function () {
        this.control({
            'vendorcustomersidepanel': {
                'clearNote': this.onClearNote,
                submitNote: this.onSubmitNote
            },
            'generalsummaryinfocontainer':{
                hideTabContainer: this.onHideTabContainer,
                showTabContainer: this.onShowTabContainer
            },
            'mainsummarycontainer':{
                southWingExpand: this.southWingExpand
            }
        })
    },

    onClearNote: function(argView, argTextArea){
        argTextArea.reset();
    },

    onSubmitNote: function(argRecord){
        this.getNotesList().store.insert(0,argRecord);
    },

    onHideTabContainer: function(){
        this.getSummarySouthPanel().collapse('bottom', true);
    },
    onShowTabContainer: function(){
        this.getSummarySouthPanel().expand(true);
    },
    southWingExpand: function(){
        this.getInfoContainer().onHideMoreAction();
    }

});