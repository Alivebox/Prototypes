Ext.define('Prototypes.view.timeaway.timeawaymanager.managerfilter.ManagerFilter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.managerfilter',
    collapsible: 'true',
    collapseDirection: 'left',

    initComponent: function () {
        this.items = [
            {
                xtype:'combobox',
                fieldLabel: 'Division',
                editable:false,
                padding: '25 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'NY-ART'],
                    [2, 'LA-ART'],
                    [3, 'UK-ART']
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Department',
                editable:false,
                padding: '0 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'PHOTO'],
                    [2, 'VIDEO'],
                    [2, 'AUDIO']
                ]
            },{
                xtype:'combobox',
                fieldLabel: 'Group',
                editable:false,
                padding: '0 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'CAM1'],
                    [2, 'CAM2'],
                    [3, 'CAM3']
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Resource',
                itemId: 'resourceFilter',
                editable:false,
                padding: '0 0 0 2',
                emptyText: '...Select',
                store:[
                    [1, 'Bruce Wayne'],
                    [2, 'Tony Stark'],
                    [3, 'Clark Kent']
                ]
            },
            {
                xtype:'combobox',
                fieldLabel: 'Status',
                itemId: 'statusFilter',
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
                itemId: 'periodFilter',
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
                xtype:'combobox',
                fieldLabel: 'Saved Searches',
                editable:false,
                padding: '0 0 0 2',
                value: 1,
                store:[
                    [1, 'Adhoc'],
                    [2, 'Adhoc 2']
                ]
            }
        ];

        this.callParent(arguments);
    },

    onSaveButtonAction: function(){
    }
});
