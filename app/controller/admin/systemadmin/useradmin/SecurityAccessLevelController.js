Ext.define('Prototypes.controller.admin.systemadmin.useradmin.SecurityAccessLevelController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref:'securityLevel',
            selector:'formsecuritylevel'
        }
    ],

    init: function () {
        this.control({
            gridsecurityaccesslevel:{
                addRowAction: this.onAddSecurityLevelAction,
                editRowAction: this.onEditSecurityLevelAction
            }
        })
    },

    onEditSecurityLevelAction: function(argGrid,argRow){
        var tmpSecurityLevel = argGrid.store.getAt(argRow);
        this.editCategoryPopUp = Ext.create('Prototypes.view.admin.systemadmin.useradmin.securityaccesslevel.SecurityLevelPopUp');
        this.editCategoryPopUp.title = 'Modify Security Level';
        this.editCategoryPopUp.show();
        this.getSecurityLevel().loadRecord(tmpSecurityLevel);
    },

    onAddSecurityLevelAction: function(){
        this.addUserPopUp = Ext.create('Prototypes.view.admin.systemadmin.useradmin.securityaccesslevel.SecurityLevelPopUp');
        this.addUserPopUp.title = 'New Security Level';
        this.addUserPopUp.show();
    }
});