Ext.define('Prototypes.view.project.ProjectSummaryRightForm', {

    extend: 'Ext.container.Container',
    alias: 'widget.projectsummaryrightform',
    padding: '10 10 10 0',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onInfoApprovalTeam
                        }
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbApprovalTeam',
                        name: 'cbApprovalTeam',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Approval Team:',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "New Operations"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        labelAlign: 'right'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onInfoMasterProject
                        }
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbMasterProject',
                        name: 'cbMasterProject',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Master Project:',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Jay 1"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        labelAlign: 'right'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onInfoChartOfAccount
                        }
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbChartOfAccount',
                        name: 'cbChartOfAccount',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Chart Of Account',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Primary"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        labelAlign: 'right'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onInfoRateCard
                        }
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbRateCard',
                        name: 'cbRateCard',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Rate Card',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Master Card"
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        labelAlign: 'right'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onInfoTaxRate
                        }
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbTaxRate',
                        name: 'cbTaxRate',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Tax Rate ',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "CA Tax "
                                }
                            ]
                        }),
                        editable: false,
                        queryMode: 'local',
                        labelAlign: 'right'
                    }
                ]
            },
            {
                xtype: 'specialtextarea',
                itemId: 'pstaProjectDescription',
                name: 'pstaProjectDescription',
                textLabel: 'Project Description',
                areaLabelLayout: 'hbox',
                textStatusSuffix: 'Characters',
                layout: 'anchor',
                textWidth: 200,
                textAreaWidth: 300,
                textMaxLength: 4000
            },
            {
                xtype: 'projectsummarycontactscontainer',
                margin: '0 0 10 0',
                border: 1,
                style: {
                    borderColor: '#aacccc',
                    borderStyle: 'inset'
                }
            },
            {
                xtype: 'commentscontainer',
                margin: '0 0 10 0',
                commetsTitle: 'External Comments',
                border: 1,
                style: {
                    borderColor: '#aacccc',
                    borderStyle: 'inset'
                }
            },
            {
                xtype: 'commentscontainer',
                margin: '0 0 10 0',
                commetsTitle: 'Internal Comments',
                border: 1,
                style: {
                    borderColor: '#aacccc',
                    borderStyle: 'inset'
                }
            }
        ]
        this.callParent(arguments)
    },

    onInfoApprovalTeam: function(){

    },

    onInfoMasterProject: function(){

    },

    onInfoChartOfAccount: function(){

    },

    onInfoRateCard: function(){

    },

    onInfoTaxRate: function(){
    }
});