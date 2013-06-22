Ext.define('Prototypes.view.selfservice.importwizard.ChooseFile', {

    extend: 'Ext.container.Container',
    alias: 'widget.choosefile',
    padding: '10 0 0 0',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '50 0 0 75',
                items: [
                    {
                        xtype: 'filefield',
                        name: 'ffChooseFile',
                        padding: '0 0 0 10',
                        hideLabel: true,
                        msgTarget: 'side',
                        allowBlank: false,
                        anchor: '100%',
                        buttonOnly: true,
                        buttonText: 'Choose File ..',
                        listeners: {
                            scope: this,
                            change: this.onValueChanged
                        }
                    },
                    {
                        xtype: 'label',
                        padding: '3 0 0 10',
                        text: 'No file chosen'
                    }
                    /*{
                        xtype: 'textfield',
                        itemId: 'txtFileUrl',
                        emptyText: 'No file choosen',
                        name: 'txtFileUrl',
                        width: 300,
                        padding: '0 10 0 10',
                        readOnly: true
                    },
                    {
                        xtype: 'button',
                        text: 'Upload',
                        listeners: {
                            scope: this,
                            click: this.onUploadFile
                        }
                    }*/
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '10 0 0 185',
                items: [
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'Delimeter',
                        width: 300,
                        items: [
                            { boxLabel: 'Comma', name: 'rb', inputValue: '1',  boxLabelAlign: 'before' },
                            { boxLabel: 'Tab', name: 'rb', inputValue: '2', boxLabelAlign: 'before' },
                            { boxLabel: 'Colon', name: 'rb', inputValue: '3',boxLabelAlign: 'before' }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'txtOther',
                        name: 'txtOther',
                        labelAlign: 'right',
                        padding: '0 0 0 -60',
                        fieldLabel: 'Other'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '10 0 0 185',
                items: [
                    {
                        xtype: 'label',
                        text: 'You can upload spreadsheets and delimited text files(.csv, .tsv, or .txt).'
                    },
                    {
                        xtype: 'linkbutton',
                        padding: '0 0 0 10',
                        text: 'Learn More'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                padding: '230 0 0 10',
                items: [
                    {
                        xtype: 'label',
                        text: 'Need to download an'
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'label',
                                text: 'import template?'
                            },
                            {
                                xtype: 'linkbutton',
                                padding: '0 0 0 10',
                                text: 'Click here'
                            }
                        ]
                    }

                ]
            }
        ]
        this.callParent(arguments)
    },

    onValueChanged: function(argComponent, argValue){
        var tmpTxtFileUrl = this.down('textfield[itemId=txtFileUrl]');
        tmpTxtFileUrl.setValue(argValue);
    },

    onUploadFile: function(){
        var tmpTxtFileUrl = this.down('textfield[itemId=txtFileUrl]');
        if(Ext.isEmpty(tmpTxtFileUrl.getValue())){
            return;
        }
        tmpTxtFileUrl.emptyText = '';
        tmpTxtFileUrl.setValue('');
        alert('File has been uploaded');
    }
});