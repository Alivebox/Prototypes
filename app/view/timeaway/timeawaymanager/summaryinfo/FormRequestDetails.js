Ext.define('Prototypes.view.timeaway.timeawaymanager.summaryinfo.FormRequestDetails', {

    extend: 'Ext.container.Container',
    alias: 'widget.formrequestdetails',

    initComponent: function(){
        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Category:'
                    },
                    {
                        xtype: 'label',
                        itemId: 'requestdetailscategory',
                        padding: '0 0 5 57'
                    }
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Type',
                itemId: 'requestdetailstype',
                editable:false,
                width: '60%',
                store:[
                    [1, 'PTO'],
                    [2, 'UTO']
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Reason:'
                    },
                    {
                        xtype: 'label',
                        itemId: 'requestdetailsreason',
                        padding: '0 0 5 67'
                    }
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Status',
                itemId: 'requestdetailsstatus',
                editable:false,
                width: '60%',
                store:[
                    [1, 'Declined'],
                    [2, 'Tentative'],
                    [3, 'Verified']
                ]
            },
            {
                xtype     : 'textareafield',
                grow      : false,
                fieldLabel: 'Comment',
                emptyText: 'Add comment here...'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '5 0 0 75',
                items: [
                    {
                        xtype: 'button',
                        text: 'Clear',
                        listeners:{
                            scope: this,
                            click: this.onClearForm
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit'
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },

    onClearForm: function(){
        this.fireEvent('clearFrom',this);
    }
});