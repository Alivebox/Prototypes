Ext.define('Prototypes.controller.admin.packages.PackagesController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref:'packageSummary',
            selector:'formpackagesummary'
        }
    ],

    init: function () {
        this.control({
            'gridpackages': {
                editRowAction: this.onEditPackageSummaryAction,
                newPackageAction: this.onAddPackageSummaryAction
            }
        })
    },

    onEditPackageSummaryAction: function(argGrid,argRow){
        var tmpPackage = argGrid.store.getAt(argRow);
        this.packageSummaryPopUp = Ext.create('Prototypes.view.admin.packages.summary.SummaryPopUp');
        this.packageSummaryPopUp.title = 'Modify Package';
        this.packageSummaryPopUp.show();
        this.getPackageSummary().loadRecord(tmpPackage);
    },

    onAddPackageSummaryAction: function(){
        this.packageSummaryPopUp = Ext.create('Prototypes.view.admin.packages.summary.SummaryPopUp');
        this.packageSummaryPopUp.title = 'New Package';
        this.packageSummaryPopUp.show();
    }
});