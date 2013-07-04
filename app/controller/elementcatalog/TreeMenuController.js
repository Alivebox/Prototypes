Ext.define('Prototypes.controller.elementcatalog.TreeMenuController', {

    extend: 'Ext.app.Controller',

    requires: [
        'Ext.form.Label'
    ],

    refs: [
        {
            ref: 'treemenu',
            selector: 'treemenuview'
        },
        {
            ref: 'itemsgrid',
            selector: 'itemsgrid'
        },
        {
            ref: 'itemsDisplay',
            selector: 'itemsdisplay'
        },
        {
            ref: 'emptyText',
            selector: 'itemsdisplay [itemId=emptyTextPanel]'
        },
        {
            ref: 'emptyTextValue',
            selector: 'itemsdisplay [itemId=emptyTextValue]'
        }
    ],
    init: function () {
        this.control({
            treemenuview: {
                select: this.onTreeItemSelected
            }
        });
    },

    onTreeItemSelected: function(argRowSelectionModel,argRecord,argIndex){
        if(argRecord.get('showData')){
            this.getItemsDisplay().setTitle(argRecord.get('title'));
            this.getItemsgrid().setVisible(true);
            this.getEmptyText().setVisible(false);
            return;
        }
        this.getItemsDisplay().setTitle(argRecord.get('title'));
        this.getItemsgrid().setVisible(false);
        this.getEmptyText().setVisible(true);
        this.getEmptyTextValue().setText('There are no assets matching the element selected');
    }

});