Ext.define('Prototypes.view.report.documentLibrary.FormDocumentLibrary', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.report.DocumentLibrary',
    alias: 'widget.formdocumentlibrary',

    initComponent: function(){
        this.items = [
            {
                xtype: 'combobox',
                itemId: 'groupLibraryComboBox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: '* Group',
                displayField: 'name',
                valueField: 'name',
                store: 'report.GroupLibraries',
                editable: false,
                queryMode:'local',
                labelStyle: 'color: #f00;'
            },
            {
                xtype: 'combobox',
                itemId: 'typeLibraryComboBox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: '* Type',
                displayField: 'name',
                valueField: 'name',
                store: 'report.TypeLibraries',
                editable: false,
                queryMode:'local',
                labelStyle: 'color: #f00;'
            },
            {
                xtype: 'combobox',
                itemId: 'folderLibraryComboBox',
                fieldCls: 'groupdetail-view-form',
                fieldLabel: 'Folder',
                displayField: 'name',
                valueField: 'name',
                store: 'report.FolderLibraries',
                editable: false,
                queryMode:'local'
            },
            {
                xtype: 'textfield',
                fieldLabel: '* Document Title: ',
                name: 'title',
                labelStyle: 'color: #f00;'
            },
            {
                xtype: 'datefield',
                itemId: 'txtResourcesPosition',
                fieldLabel: 'Expiration Date: '
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Purge Date'
            },
            {
                xtype: 'textarea',
                fieldLabel: 'Description'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'File Name: ',
                name: 'file'
            }
        ];
        this.callParent(arguments);
    }

});