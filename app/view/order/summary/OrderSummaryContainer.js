Ext.define('Prototypes.view.order.summary.OrderSummaryContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.ordersummarycontainer',
    autoScroll: true,
    scroll: 'both',
    layout: 'column',
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                width: 1200,
                height: 700,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'container',
                        width: 500,
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Build Code'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Order Name'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Status',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'Requested']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Status',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'Requested']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'combobox',
                                        width: '78%',
                                        padding: '0 0 0 20',
                                        fieldLabel: 'Multi Level Facility',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, '-01-01-Founders Room - 1A seated [Space]'],
                                            [2, '-01-Layout 01 [Layout]'],
                                            [3, '-HD1.0-Prod-High Definition Mobile Unit special [Room]'],
                                            [4, '-HD1.0-Production [Level]'],
                                            [5, '-WHSE01-01 [Shelf]'],
                                            [6, '-WHSE01-01-BN-01 [Bin]'],
                                            [7, 'Candlestick Park [Site]'],
                                            [8, 'Candlestick-CSPW01-CSPW1F2-Main storage [Room]'],
                                            [9, 'Candlestick-CSPW01-Floor 2 [Floor]'],
                                            [10, 'Candlestick-Wharehouse One [Building]'],
                                            [11, 'High Definition Mobile Unit [Mobile Unit]'],
                                            [12, 'Location 01 [Location]'],
                                            [13, 'Low rate [Mobile Unit]'],
                                            [14, 'Mexico Radio House [Site]'],
                                            [15, 'PCP-America West Arena [Building]'],
                                            [16, 'PCP-AWA-AWAF1-Audio 1 [Room]']
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        iconCls: 'delete-button-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'button',
                                        iconCls: 'ises-icon',
                                        border: false
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Category',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                padding: '0 0 0 20',
                                width: '75%',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'datefield',
                                        width: '60%',
                                        fieldLabel: 'Due Date',
                                        emptyText: '...Choose...',
                                        editable: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '15%',
                                        vtype: 'time'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Type',
                                        emptyText: '...Select [Category]...',
                                        editable: false,
                                        store: [
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Customer',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'Test & Test Some More'],
                                            [2, '3 Door Productions'],
                                            [3, 'ABC Films'],
                                            [4, 'AP-do not use-FACILITIES TRADING AS'],
                                            [5, 'BATMAN RETURNS (2008) [M10223.0032]'],
                                            [6, 'CAFM Solution´s Inc'],
                                            [7, 'chill productions'],
                                            [8, 'CrewMgr.com'],
                                            [9, 'Customer'],
                                            [10, 'Customer 2'],
                                            [11, 'Customer A']
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        iconCls: 'delete-button-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'button',
                                        iconCls: 'pencil-button-icon',
                                        border: false
                                    },{
                                        xtype: 'button',
                                        iconCls: 'add-button-icon',
                                        border: false
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Project/Show',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'A Test Micro Project For John'],
                                            [2, 'Accounting Service Test A'],
                                            [3, 'Accounting Service Test A'],
                                            [4, 'Against All Odds'],
                                            [5, 'Another Project hists the dust'],
                                            [6, 'Another Test for Creating Project that has Vendor'],
                                            [7, 'Another Test for Creating Project that has Vendor'],
                                            [8, 'Another Test Project For John']
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        iconCls: 'delete-button-icon',
                                        border: false
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'container',
                                        width: '75%',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'datefield',
                                                width: '60%',
                                                fieldLabel: 'Start Date',
                                                emptyText: '...Choose...',
                                                editable: false
                                            },
                                            {
                                                xtype: 'textfield',
                                                width: '15%',
                                                vtype: 'time'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'container',
                                        width: '75%',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'datefield',
                                                width: '60%',
                                                fieldLabel: 'End Date',
                                                emptyText: '...Choose...',
                                                editable: false
                                            },
                                            {
                                                xtype: 'textfield',
                                                width: '15%',
                                                vtype: 'time'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Address 1'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Address 2'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Country',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'Australia'],
                                            [2, 'AUSTRALIA'],
                                            [3, 'BELGIUM'],
                                            [4, 'BERMUDA'],
                                            [5, 'BRAZIL'],
                                            [6, 'CANADA'],
                                            [7, 'Chad'],
                                            [8, 'ENGLAND'],
                                            [9, 'FRANCE'],
                                            [10, 'GERMANY'],
                                            [11, 'GUAM'],
                                            [12, 'ITALY'],
                                            [13, 'Japan'],
                                            [14, 'MEXICO'],
                                            [15, 'New Zealand'],
                                            [16, 'Philippines'],
                                            [17, 'PUERTO RICO'],
                                            [18, 'SPAIN'],
                                            [19, 'UNITED STATES'],
                                            [20, 'VIRGIN ISLANDS']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'State',
                                        emptyText: '...Select [Country]...',
                                        editable: false,
                                        store: [
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'City',
                                        emptyText: '...Select [State]...',
                                        editable: false,
                                        store: [
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Zip'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Format Type'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Aspect Ratio',
                                        emptyText: '...Select [Format Type]...',
                                        editable: false,
                                        store: [
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'In house Channel'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'Episode#'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'House#'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Division',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'another testing division'],
                                            [2, 'Corporate'],
                                            [3, 'Division 1'],
                                            [4, 'Just a test'],
                                            [5, 'NAzir Div1']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Department',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, '8855_45151 [NAzir Div1] '],
                                            [2, '7788445_Another Test Dept [NAzir Div1]'],
                                            [3, '4587_another try [NAzir Div1]'],
                                            [4, '1145_Complete test [NAzir Div1]'],
                                            [5, '9988_dept 1 [NAzir Div1]'],
                                            [6, '3366_dept nh new 1 [NAzir Div1]'],
                                            [7, '112244_dept nh test [NAzir Div1]'],
                                            [8, '103_dept3 [NAzir Div1]'],
                                            [9, '98745_Final Test run1 [NAzir Div1]'],
                                            [10, 'test123_funal run 2 [NAzir Div1]'],
                                            [11, 'Dep1254_Main Name [NAzir Div1]'],
                                            [12, 'Nazir Dep1 [NAzir Div1]'],
                                            [13, '112897_New Test NH Dept [NAzir Div1]'],
                                            [14, 'test_teset [NAzir Div1]'],
                                            [15, 'dev444_test [NAzir Div1]']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'textfield',
                                        width: '75%',
                                        fieldLabel: 'RLTV ID:'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        width: 700,
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Rate Card',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, '*Master Rate Card'],
                                            [2, 'Customer Type 1'],
                                            [3, 'Customer Type 2'],
                                            [4, 'Customer Type 3'],
                                            [5, 'Customer Type 4'],
                                            [6, 'Discover Channel Discounted Rate Card 2008'],
                                            [7, 'Discover Channel Discounted Rate Card 2008 (1)'],
                                            [8, 'Discovery Channel Base Rate Card 2008'],
                                            [9, 'Discovery Channel Base Rate Card 2009'],
                                            [10, 'Dreamworks Discount'],
                                            [11, 'Dreamworks Standard'],
                                            [12, 'Edit Customer A'],
                                            [13, 'Edit Customer A (1)'],
                                            [14, 'General Rate Card'],
                                            [15, 'Generic Rate Card'],
                                            [16, 'New Client Rate Card']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Taxt Rate',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'CA Tax'],
                                            [2, 'Canada'],
                                            [3, 'DC Tax'],
                                            [4, 'NYC Tax'],
                                            [5, 'Standar'],
                                            [6, 'Texas']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'button',
                                        iconCls: 'information-icon',
                                        border: false
                                    },
                                    {
                                        xtype: 'combobox',
                                        width: '75%',
                                        fieldLabel: 'Event Type',
                                        emptyText: '...Choose...',
                                        editable: false,
                                        store: [
                                            [1, 'BOX (Boxing)'],
                                            [2, 'CBK (College Basketball)'],
                                            [3, 'CFB (College Football)'],
                                            [4, 'CON (Concert)'],
                                            [5, 'ENG (ENG)'],
                                            [6, 'JOHN (John´s Event Type Here)'],
                                            [7, 'MLB (Major League Baseball)'],
                                            [8, 'MLB: HOF (MLB: Hall of Fame)'],
                                            [9, 'MLB: RS (MLB: Regular Season)'],
                                            [10, 'MLB: SP (MLB: Spring Training)'],
                                            [11, 'NAS (Nascar)'],
                                            [12, 'NBA (National Basketball Association)'],
                                            [13, 'NFL (National Football League)'],
                                            [14, 'NHL (National Hockey League)']
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'specialtextarea',
                                textLabel: 'Order Description',
                                titleStyle: 'font-weight:bold;',
                                padding: '10 0 0 0',
                                textMaxLength: 4000,
                                textAreaWidth: 650,
                                layout: 'anchor'

                            },
                            {
                                xtype: 'container',
                                itemId: 'contactscontainer',
                                autoScroll: true,
                                width: '93%',
                                height: 150,
                                border: 1,
                                style: {
                                    borderColor: '#aacccc',
                                    borderStyle: 'inset'
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        layout: 'hbox',
                                        border: 1,
                                        style: {
                                            borderColor: '#aacccc',
                                            borderStyle: 'inset'
                                        },
                                        items: [
                                            {
                                                xtype: 'label',
                                                style: 'font-weight:bold;',
                                                text: 'CONTACTS'
                                            },
                                            {
                                                xtype: 'linkbutton',
                                                width: '85%',
                                                padding: '0 0 0 5',
                                                text: 'reload'
                                            },
                                            {
                                                xtype: 'button',
                                                icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                                                border: false,
                                                listeners: {
                                                    scope: this,
                                                    click: this.onAddContacts
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                padding: '10 0 0 0',
                                width: '93%',
                                height: 150,
                                items: [
                                    {
                                        xtype: 'commentscontainer',
                                        commetsTitle: 'External Comments',
                                        width: '100%',
                                        height: '100%',
                                        border: 1,
                                        style: {
                                            borderColor: '#aacccc',
                                            borderStyle: 'inset'
                                        }
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                padding: '10 0 0 0',
                                width: '93%',
                                height: 150,
                                items: [
                                    {
                                        xtype: 'commentscontainer',
                                        commetsTitle: 'Internal Comments',
                                        width: '100%',
                                        height: '100%',
                                        border: 1,
                                        style: {
                                            borderColor: '#aacccc',
                                            borderStyle: 'inset'
                                        }
                                    }
                                ]
                            }

                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                width: 300,
                height: 700,
                collapseDirection: 'left',
                collapsible: true,
                items: [
                    {
                        xtype: 'detailinformation'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    },

    onAddContacts: function(){
        var tmpContactContainer = this.down('container[itemId=contactscontainer]');
        var tmpContactElements =  this.onCreateContactsElements();
        tmpContactContainer.add(tmpContactElements);
    },

    onCreateContactsElements: function(){
        var tmpContactElement = Ext.create('Ext.container.Container', {
            layout: 'column',
            width: '100%',
            border: 1,
            style: {
                borderColor: 'gray',
                borderStyle: 'solid'
            },
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    width: '70%',
                    items: [
                        {
                            xtype: 'label',
                            text: 'requestor'
                        },
                        {
                            xtype: 'linkbutton',
                            text: 'Razo, Tanya'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    width: '20%',
                    items: [
                        {
                            xtype: 'label',
                            text: '(ofc) 866-370-1169'
                        },
                        {
                            xtype: 'linkbutton',
                            text: '(cell) 123-444-5555'
                        }
                    ]
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/email.png',
                    border: false
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/pencil.png',
                    border: false
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/delete.png',
                    border: false
                }

            ]
        });
        return tmpContactElement;
    }

});