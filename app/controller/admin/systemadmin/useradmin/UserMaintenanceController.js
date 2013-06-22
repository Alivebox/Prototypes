Ext.define('Prototypes.controller.admin.systemadmin.useradmin.UserMaintenanceController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref:'userAccount',
            selector:'formuseraccount'
        }
    ],

    init: function () {
        this.control({
            griduseraccount:{
                addRowAction: this.onAddUserAction,
                editRowAction: this.onEditUserAction
            }
        })
    },

    onAddUserAction: function(){
        this.addUserPopUp = Ext.create('Prototypes.view.admin.systemadmin.useradmin.useraccount.UserAccountPopUp');
        this.addUserPopUp.title = 'New User Account';
        this.addUserPopUp.show();
    },

    onEditUserAction: function(argGrid,argRow) {
        var tmpUser = argGrid.store.getAt(argRow);
        this.editCategoryPopUp = Ext.create('Prototypes.view.admin.systemadmin.useradmin.useraccount.UserAccountPopUp');
        this.editCategoryPopUp.title = 'Modify User Account';
        this.editCategoryPopUp.show();
        this.getUserAccount().loadRecord(tmpUser);
    }
});