Ext.define('Prototypes.controller.report.ReportLibraryController', {

    extend: "Ext.app.Controller",

    init: function () {
        this.control({
            'gridreportlibrary':{
                displaySearchWindow:this.onDisplaySearchWindow
            }
        })
    },

    onDisplaySearchWindow:function() {
        alert('Display Search Window Event')
    }
});