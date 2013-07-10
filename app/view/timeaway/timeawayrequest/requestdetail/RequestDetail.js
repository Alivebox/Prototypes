Ext.define('Prototypes.view.timeaway.timeawayrequest.requestdetail.RequestDetail', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.requestdetail',
    title: 'Requests Details',
    height: '100%',
    width: '100%',
    layout: {
        type: 'vbox',
        align: 'center'
    },
    initComponent:function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'vbox',
                width: '100%',
                items:[
                    {
                        xtype: 'gridrequestdetail',
                        padding: '10 10 10 10',
                        width: '100%'
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbApprover',
                        fieldLabel: 'Approver',
                        displayField: 'name',
                        valueField: 'name',
                        width: '30%',
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
                        width: '85%',
                        fieldLabel: 'Reason'
                    }
                ]
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