Ext.define('Prototypes.view.project.ProjectSummaryLeftForm', {

    extend: 'Ext.container.Container',
    alias: 'widget.projectsummaryleftform',
    padding: '10 10 10 10',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'txtProjectCode',
                        name: 'txtProjectCode',
                        fieldLabel: 'Project Code',
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
                        border: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'txtProjectTitle',
                        name: 'txtProjectTitle',
                        fieldLabel: 'Project Title',
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'datefield',
                                itemId: 'dfStartDate',
                                name: 'dfStartDate',
                                fieldLabel: 'Start Date',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'txtStartDate',
                                name: 'txtStartDate'
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/form/TimeField_Clear.gif'
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'datefield',
                                itemId: 'dfEndDate',
                                name: 'dfEndDate',
                                fieldLabel: 'End Date',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'txtEndDate',
                                name: 'txtEndDate'
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/form/TimeField_Clear.gif'
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'datefield',
                                itemId: 'dfDueDate',
                                name: 'dfDueDate',
                                fieldLabel: 'Due Date',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'txtDueDate',
                                name: 'txtDueDate'
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/form/TimeField_Clear.gif'
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'combobox',
                                itemId: 'cbResourceffs3',
                                name: 'cbResourceffs3',
                                displayField: 'name',
                                valueField: 'name',
                                fieldLabel: 'Resource FFS3',
                                value: 'ABE, BRIAN C',
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['id', 'name'],
                                    data: [
                                        {
                                            "id": "1",
                                            "name": "ABE, BRIAN C"
                                        }
                                    ]
                                }),
                                editable: false,
                                queryMode: 'local',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/delete.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onDeleteResourceFFS3
                                }
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbStatus',
                        name: 'cbStatus',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Status',
                        value: 'In Progress',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "In Progress"
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
                xtype: 'textfield',
                padding: '0 0 0 20',
                itemId: 'txtPO',
                name: 'txtPO',
                fieldLabel: 'P0 #',
                labelAlign: 'right'
            },
            {
                xtype: 'textfield',
                padding: '0 0 0 20',
                itemId: 'txtAccount',
                name: 'txtAccount',
                fieldLabel: 'Account #',
                labelAlign: 'right'
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/icon_info.gif',
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbPriority',
                        name: 'cbPriority',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Priority',
                        value: 'Normal',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Normal"
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
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbCategory',
                        name: 'cbCategory',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Category',
                        value: 'Category 1',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Category 1"
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
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbType',
                        name: 'cbType',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Type',
                        value: 'Type 2A',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Type 2A"
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'combobox',
                                itemId: 'cbCustomer',
                                name: 'cbCustomer',
                                displayField: 'name',
                                valueField: 'name',
                                fieldLabel: 'Customer:',
                                value: 'Test Customers 00001',
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['id', 'name'],
                                    data: [
                                        {
                                            "id": "1",
                                            "name": "Test Customers 00001"
                                        }
                                    ]
                                }),
                                editable: false,
                                queryMode: 'local',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/delete.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onDeleteCustomer
                                }
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/pencil.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onEditCustomer
                                }
                            }
                            ,
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onAddCustomer
                                }
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbDivision',
                        name: 'cbDivision',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Division:',
                        value: 'Divisions 00001',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Divisions 00001"
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
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbDepartment',
                        name: 'cbDepartment',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Department:',
                        value: 'Departments 00001',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "Departments 00001"
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
                        border: false
                    },
                    {
                        xtype: 'combobox',
                        itemId: 'cbSysDivision',
                        name: 'cbSysDivision',
                        displayField: 'name',
                        valueField: 'name',
                        fieldLabel: 'Sys Division:',
                        value: 'SysDivisions 00001',
                        store: Ext.create('Ext.data.Store', {
                            fields: ['id', 'name'],
                            data: [
                                {
                                    "id": "1",
                                    "name": "SysDivisions 00001"
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'combobox',
                                itemId: 'cbVendor',
                                name: 'cbVendor',
                                displayField: 'name',
                                valueField: 'name',
                                fieldLabel: 'Vendor:',
                                value: 'Game Creek',
                                store: Ext.create('Ext.data.Store', {
                                    fields: ['id', 'name'],
                                    data: [
                                        {
                                            "id": "1",
                                            "name": "Game Creek"
                                        }
                                    ]
                                }),
                                editable: false,
                                queryMode: 'local',
                                labelAlign: 'right'
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/delete.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onDeleteVendor
                                }
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/pencil.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onEditVendor
                                }
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onAddVendor
                                }
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'specialtextarea',
                                itemId: 'staShipToAdress',
                                name: 'staShipToAdress',
                                textLabel: 'Ship to Address',
                                textStatusSuffix: 'Characters',
                                textWidth: 105,
                                textAreaWidth: 300,
                                textMaxLength: 500
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/20x20/button_search.gif',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onSearchShipToAddress
                                }
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        items: [
                            {
                                xtype: 'specialtextarea',
                                itemId: 'staShipFromAdress',
                                name: 'staShipFromAdress',
                                textLabel: 'Ship from Address',
                                textStatusSuffix: 'Characters',
                                textWidth: 105,
                                textAreaWidth: 300,
                                textMaxLength: 500
                            },
                            {
                                xtype: 'button',
                                icon: '/resources/icons/ShowMgrImages/20x20/button_search.gif',
                                border: false,
                                listeners: {
                                    scope: this,
                                    click: this.onSearchShipFromAddress
                                }
                            }
                        ]
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
                        border: false
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'txtEmailAddress',
                        name: 'txtEmailAddress',
                        fieldLabel: 'Email Address',
                        labelAlign: 'right'
                    }
                ]
            },
            {
                xtype: 'combobox',
                padding: '0 0 0 20',
                itemId: 'cbAspectRadioIN',
                name: 'cbAspectRadioIN',
                displayField: 'name',
                valueField: 'name',
                fieldLabel: 'Aspect Radio IN:',
                value: '... Choose ...',
                store: Ext.create('Ext.data.Store', {
                    fields: ['id', 'name'],
                    data: [
                        {
                            "id": "1",
                            "name": "... Choose ..."
                        }
                    ]
                }),
                editable: false,
                queryMode: 'local',
                labelAlign: 'right'
            },
            {
                xtype: 'projectsummaryrevenuecontainer',
                border: 1,
                style: {
                    borderColor: '#aacccc',
                    borderStyle: 'inset'
                }
            }
        ]
        this.callParent(arguments)
    },

    onDeleteResourceFFS3: function() {

    },

    onDeleteCustomer: function() {

    },

    onEditCustomer: function() {

    },

    onAddCustomer: function() {

    },

    onDeleteVendor: function() {

    },

    onEditVendor: function() {

    },

    onAddVendor: function() {

    },

    onSearchShipToAddress: function() {

    },

    onSearchShipFromAddress: function() {

    }
});