Ext.define('Prototypes.view.project.customerproject.VendorAdvanceSearch', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.vendoradvancesearch',
    collapsible: 'true',
    collapseDirection: 'left',
    height: '100%',
    minHeight: 800,
    width: 300,
    title: 'Advance Search',
    initComponent: function () {
        this.items = [
            {
                xtype: 'container',
                padding: '10 10 10 10',
                items: [
                    {
                        xtype:'combobox',
                        fieldLabel: 'Company Name',
                        editable:false
                    },
                    {
                        xtype:'combobox',
                        fieldLabel: 'Address',
                        editable:false
                    },
                    {
                        xtype:'combobox',
                        fieldLabel: 'Contact Name',
                        editable:false
                    },
                    {
                        xtype:'combobox',
                        fieldLabel: 'Status',
                        editable:false
                    },
                    {
                        xtype:'combobox',
                        fieldLabel: 'Added in list',
                        editable:false
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '0 0 0 20',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Clear'
                            },
                            {
                                xtype: 'button',
                                text: 'Search',
                                margin: '0 0 0 10'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '10 0 0 0',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Save as:'
                            },
                            {
                                xtype: 'label',
                                text: 'Adhoc',
                                padding: '0 0 0 10'
                            },
                            {
                                xtype: 'button',
                                iconCls: 'save-button-icon',
                                margin: '0 0 0 10',
                                listeners:{
                                    scope: this,
                                    click: this.onSaveButtonAction
                                }
                            }
                        ]
                    },
                    {
                        xtype:'combobox',
                        fieldLabel: 'Saved Searches',
                        editable:false,
                        value: 1,
                        store:[
                            [1, 'Adhoc'],
                            [2, 'Adhoc 2']
                        ]
                    }
                ]
            }
        ];

        this.callParent(arguments);
    },

    onSaveButtonAction: function(){
    }
});
