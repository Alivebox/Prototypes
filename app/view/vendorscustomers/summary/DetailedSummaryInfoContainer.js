Ext.define('Prototypes.view.vendorscustomers.summary.DetailedSummaryInfoContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.detailedsummaryinfocontainer',
    autoScroll: true,
    scroll: 'both',
    layout: 'hbox',
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Name:',
                        style: 'color:#dd0b08;'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Code:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Status:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Type:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0',
                        text: 'Parent Category:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Account Numer:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'ABN:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Region:'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0',
                        text: 'School Type:'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                padding: '0 0 0 75',
                items: [
                    {
                        xtype: 'label',
                        text: 'ShowMgr.com, Inc'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'ShowMgr'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'active'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Software Development'
                    },
                    {
                        xtype: 'label',
                        padding: '46 0 0 0',
                        text: 'ShowMgr'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Active'
                    },
                    {
                        xtype: 'label',
                        padding: '5 0 0 0',
                        text: 'Software Development'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                padding: '0 0 0 0',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '0 0 0 0',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                padding: '0 0 0 100',
                                items: [
                                    {
                                        xtype: 'label',
                                        text: 'Website:'
                                    },
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'Email:'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                padding: '0 0 0 75',
                                items: [
                                    {
                                        xtype: 'label',
                                        text: 'www.showmgr.com'
                                    },
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'moreinfo@showmgr.com'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '5 0 0 100',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Phone:',
                                padding: '5 0 0 0',
                                width: 125
                            },
                            {
                                xtype:'image',
                                src: 'resources/icons/ShowMgrImages/flags/United States of America.png',
                                padding: '0 0 0 2'
                            },
                            {
                                xtype: 'label',
                                text: '(949) 713-1900',
                                padding: '0 0 0 5'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '5 0 0 100',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Fax:',
                                padding: '5 0 0 0',
                                width: 125
                            },
                            {
                                xtype:'image',
                                src: 'resources/icons/ShowMgrImages/flags/United States of America.png',
                                padding: '0 0 0 2'
                            },
                            {
                                xtype: 'label',
                                text: '(949) 713-1902',
                                padding: '0 0 0 5'
                            }
                        ]
                    },
                    {
                        xtype: 'phonecontactcontainer',
                        padding: '0 0 0 100',
                        valuesPadding: '0 0 0 75',
                        containersPadding: '5 0 0 0',
                        linkButtonPadding:'0 0 0 128',
                        labelsWidth: 52,
                        dataMaxLength: 15,
                        imputsWidth: 125
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '0 0 0 0',
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                padding: '0 0 0 100',
                                items: [
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'Business Unit:'
                                    },
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'Division:'
                                    },
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'Department:'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                padding: '0 0 0 42',
                                items: [
                                    {
                                        xtype: 'label',
                                        text: 'ShowMgr',
                                        padding: '5 0 0 0'
                                    },
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'Active'
                                    },
                                    {
                                        xtype: 'label',
                                        padding: '5 0 0 0',
                                        text: 'Software Development'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});