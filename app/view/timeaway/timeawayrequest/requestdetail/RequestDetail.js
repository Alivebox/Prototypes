Ext.define('Prototypes.view.timeaway.timeawayrequest.requestdetail.RequestDetail', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.requestdetail',
    title: 'Request Detail',
    width: 700,
    height: 310,
    initComponent:function () {

        this.items = [
            {
                xtype: 'gridrequestdetail',
                padding: '10 10 10 10'
            },
            {
                xtype: 'combobox',
                itemId: 'cbApprover',
                fieldLabel: 'Approver',
                displayField: 'name',
                valueField: 'name',
                padding: '0 0 0 10',
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'name'],
                    data: [
                        {
                            "id": "1",
                            "name": "Kent, Clark"
                        }
                    ]
                }),
                editable: false,
                queryMode: 'local'
            },
            {
                xtype: 'textareafield',
                itemId: 'taReason',
                padding: '0 0 0 10',
                fieldLabel: 'Reason'
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        text: 'Confirm and Send',
                        margin: '0 0 0 10',
                        listeners: {
                            scope: this,
                            click: this.onConfirmAndSend
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Clear',
                        margin: '0 0 0 10',
                        listeners: {
                            scope: this,
                            click: this.onClear
                        }
                    }
                ]
            }
        ]
        this.callParent(arguments)
    },

    onConfirmAndSend: function () {
        this.fireEvent('confirmAndSend')
    },

    onClear: function () {
        this.fireEvent('clear')
    }

});