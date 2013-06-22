Ext.define('Prototypes.controller.report.DocumentLibraryController', {

    extend: "Ext.app.Controller",

    refs: [
        {
            ref:'formDocumentLibrary',
            selector:'formdocumentlibrary'
        },
        {
            ref:'groupLibraryComboBox',
            selector:'formdocumentlibrary [itemId=groupLibraryComboBox]'
        },
        {
            ref:'folderLibraryComboBox',
            selector:'formdocumentlibrary [itemId=folderLibraryComboBox]'
        },
        {
            ref:'typeLibraryComboBox',
            selector:'formdocumentlibrary [itemId=typeLibraryComboBox]'
        }
    ],
    init: function () {
        this.control({
            'griddocumentlibrary':{
                displaySearchWindow:this.onDisplaySearchWindow,
                addNewDocument:this.onAddNewDocument,
                btnFolder:this.onBtnFolder,
                btnBlankEdit:this.onBtnBlankEdit,
                btnBlankDelete:this.onBtnBlankDelete

            },
            'documentlibrarypopup': {
                closePopUp:this.onClosePopUp,
                submitPopUp:this.onSubmitPopUp
            }
        })
    },

    onDisplaySearchWindow:function() {
        alert('Display Search Window Event')
    },

    onAddNewDocument:function() {
        alert('Add New Document Event')
    },

    onBtnFolder:function() {
        alert('Folder Event')
    },

    onBtnBlankEdit:function(argGrid, argRow) {
        var tmpDocumentLibrary = argGrid.store.getAt(argRow)
        this.elementGroupsPopUp = Ext.create('Prototypes.view.report.documentLibrary.DocumentLibraryPopUp')
        this.elementGroupsPopUp.title = 'Modify Document'
        this.elementGroupsPopUp.show()
        this.getFormDocumentLibrary().loadRecord(tmpDocumentLibrary)
        this.getGroupLibraryComboBox().setValue(tmpDocumentLibrary.data.group)
        this.getTypeLibraryComboBox().setValue(tmpDocumentLibrary.data.type)
    },

    onBtnBlankDelete:function() {
        alert('Blank Delete Event')
    },

    onClosePopUp: function(argEvent){
        var tmpWindow = argEvent;
        tmpWindow.close();
    },

    onSubmitPopUp: function(argEvent){
         var tmpDocumentLibrary = this.getFormDocumentLibrary().getValues()
         var tmpStore = this.getStore('report.DocumentLibraries')
         var tmpIndex = tmpStore.find('id', tmpDocumentLibrary.id)
         var tmpStoreDocumentLibrary = tmpStore.getAt(tmpIndex)
         tmpStoreDocumentLibrary.set('group' , this.getGroupLibraryComboBox().getValue())
         tmpStoreDocumentLibrary.set('type' , this.getTypeLibraryComboBox().getValue())
         tmpStoreDocumentLibrary.set('title' , tmpDocumentLibrary.title)
         tmpStoreDocumentLibrary.sort('file', tmpDocumentLibrary.file);
         tmpStoreDocumentLibrary.commitChanges()
         this.onClosePositionPopUp(argEvent)
    }
});