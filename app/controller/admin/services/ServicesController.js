Ext.define('Prototypes.controller.admin.services.ServicesController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref:'category',
            selector:'formcategory'
        },
        {
            ref:'categoryType',
            selector:'formcategorytype'
        }
    ],

    init: function () {
        this.control({
            'gridservices': {
                editRowAction: this.onEditRowCategoryAction,
                addRowAction: this.onAddRowCategoryAction,
                deleteRowAction: this.onShowDeleteCategoryConfirm
            },
            'gridservicetypes':{
                editRowAction: this.onEditRowCategoryTypeAction,
                deleteRowAction: this.onShowDeleteCategoryTypeConfirm,
                rateCardRowAction: this.onRateCardCategoryTypeAction
            },
            'categorypopup': {
                closeCategoryPopUp: this.onClosePopUp/*,
                submitCategoryPopUp:this.onSubmitCategoryPopUp*/
            },
            'categorytypepopup': {
                closeCategoryTypePopUp: this.onClosePopUp/*,
                submitCategoryTypePopUp: this.onSubmitCategoryTypePopUp*/
            }
        })
    },

    onEditRowCategoryTypeAction: function(argGrid,argRow) {
        var tmpCategoryType = argGrid.store.getAt(argRow);
        this.editCategoryTypePopUp = Ext.create('Prototypes.view.admin.services.categorytype.CategoryTypePopUp');
        this.editCategoryTypePopUp.title = 'Add New Type';
        this.editCategoryTypePopUp.show();
        this.getCategoryType().loadRecord(tmpCategoryType);
    },

    onEditRowCategoryAction: function(argGrid,argRow) {
        var tmpCategory = argGrid.store.getAt(argRow);
        this.editCategoryPopUp = Ext.create('Prototypes.view.admin.services.category.CategoryPopUp');
        this.editCategoryPopUp.title = 'Modify Category Type';
        this.editCategoryPopUp.show();
        this.getCategory().loadRecord(tmpCategory);
    },

    onRateCardCategoryTypeAction: function(argGrid,argRow) {
        alert('Category Type Rate Card');
    },

    onAddRowCategoryAction: function(argGrid,argRow) {
        this.editCategoryTypePopUp = Ext.create('Prototypes.view.admin.services.categorytype.CategoryTypePopUp');
        this.editCategoryTypePopUp.title = 'Add New Type';
        this.editCategoryTypePopUp.show();
    },

    onClosePopUp: function(argEvent){
        var tmpWindow = argEvent;
        tmpWindow.close();
    },

    onShowDeleteCategoryConfirm: function(argGrid, argIndex){
        this.toDeleteIndex = argIndex;
        Ext.MessageBox.confirm('Please Confirm', 'Confirm: Are you sure you would like to delete this Category?',this.deleteConfirmCategoryCallback, this);
    },

    deleteConfirmCategoryCallback:function(argButton){
        if(argButton == 'yes'){
            Ext.getStore('admin.services.Services').removeAt(this.toDeleteIndex);
        }
    },

    onShowDeleteCategoryTypeConfirm: function(argGrid, argIndex){
        this.toDeleteIndex = argIndex;
        Ext.MessageBox.confirm('Please Confirm', 'Confirm: Are you sure you would like to delete this Type?',this.deleteConfirmCategoryTypeCallback, this);
    },

    deleteConfirmCategoryTypeCallback:function(argButton){
        if(argButton == 'yes'){
            Ext.getStore('admin.services.ServiceTypes').removeAt(this.toDeleteIndex);
        }
    }
});