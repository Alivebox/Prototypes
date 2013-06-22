Ext.define('Prototypes.view.vendorscustomers.AdvancedSearch', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.advancedsearch',
    collapsible: 'true',
    collapseDirection: 'left',

    initComponent: function () {
        this.items = [
            {
                xtype:'combobox',
                fieldLabel: 'Name',
                editable:false,
                padding: '25 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'ShowMgr.com'],
                    [2, 'Wayne Enterprises'],
                    [3, 'Stark Industries']
                ]
            },
            {
                xtype:'textfield',
                fieldLabel: 'Address',
                padding: '0 0 0 2'
            },{
                xtype:'combobox',
                fieldLabel: 'Contact',
                editable:false,
                padding: '0 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'Contact 1'],
                    [2, 'Contact 2'],
                    [3, 'Contact 3']
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Status',
                editable:false,
                padding: '0 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'Declined'],
                    [2, 'Tentative'],
                    [3, 'Verified']
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Added in last',
                editable:false,
                padding: '0 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, '5 days'],
                    [2, '7 days'],
                    [3, '15 days']
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '25 0 0 85',
                items:[
                    {
                        xtype: 'button',
                        text: 'Clear'
                    },
                    {
                        xtype: 'button',
                        text: 'Search'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '50 0 0 2',
                items: [
                    {
                        xtype: 'label',
                        text: 'Save as:'
                    },
                    {
                        xtype: 'label',
                        text: 'Adhoc',
                        padding: '0 75 0 78'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'save-button-icon',
                        listeners:{
                            scope: this,
                            click: this.onSaveButtonAction
                        }
                    }
                ]
            },
            {
                xtype:'gridsavedsearches'
            }
        ];

        this.callParent(arguments);
    },

    onSaveButtonAction: function(){
    }

});
