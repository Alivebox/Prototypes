Ext.define('Prototypes.view.vendorscustomers.VendorCustomerSidePanel', {

    extend: 'Ext.container.Container',
    alias: 'widget.vendorcustomersidepanel',

    initComponent: function () {

        this.items = [
            {
                title: 'Notes',
                xtype: 'panel',
                height: 475,
                collapsible: true,
                collapseDirection: 'top',
                items:[
                    {
                        xtype: 'label',
                        text: 'Write a note',
                        padding: '0 0 0 10',
                        style: 'font-weight:bold;'
                    },
                    {
                        xtype: 'textareafield',
                        itemId: 'notestextareafield',
                        width: '95%',
                        padding: '0 5 0 10'
                    },
                    {
                        xtype: 'container',
                        cls: 'bottom-border',
                        padding: '0 0 0 10',
                        items:[
                            {
                                xtype: 'button',
                                text: 'Clear',
                                listeners: {
                                    scope: this,
                                    click: this.onClearNoteAction
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Submit',
                                listeners: {
                                    scope: this,
                                    click: this.onSubmitNoteAction
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        text: 'Recent Notes',
                        padding: '0 0 0 10',
                        style: 'font-weight:bold;'
                    },
                    {
                        xtype: 'container',
                        autoScroll: true,
                        scroll: 'vertical',
                        height: 315,
                        items:[
                            {
                                xtype: 'noteslistview',
                                padding: '0 0 0 10'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Contacts',
                xtype: 'panel',
                height: 200,
                autoScroll: true,
                scroll: 'vertical',
                collapsible: true,
                collapseDirection: 'top',
                items:[
                    {
                        xtype: 'gridcustomercontacts'
                    }
                ]
            },
            {
                title: 'Orders',
                xtype: 'panel',
                height: 200,
                autoScroll: true,
                scroll: 'vertical',
                collapsible: true,
                collapseDirection: 'top',
                items:[
                    {
                        xtype: 'customervendorgridorders'
                    }
                ]
            }
        ],
        this.callParent(arguments);
    },

    onClearNoteAction: function(){
        var tmpNoteTextField = this.down('textareafield[itemId=notestextareafield]');
        this.fireEvent('clearNote', this, tmpNoteTextField);
    },

    onSubmitNoteAction: function(){
        var tmpNoteTextField = this.down('textareafield[itemId=notestextareafield]');
        var currentDate = Ext.Date.format(new Date(), 'm-d-Y');
        var tmpRecord = {
            name: 'Current User',
            date: currentDate,
            description: tmpNoteTextField.getValue()
        }
        tmpNoteTextField.reset();
        this.fireEvent('submitNote', tmpRecord);
    }

});