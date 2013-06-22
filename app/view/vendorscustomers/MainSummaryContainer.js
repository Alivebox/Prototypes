Ext.define('Prototypes.view.vendorscustomers.MainSummaryContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainsummarycontainer',
    autoScroll: true,
    scroll: 'both',

    initComponent: function () {
//        this.items = [
//            {
//                xtype: 'tabpanel',
//                items: [
//                    {
//                        title: 'Summary',
//                        xtype: 'container',
//                        items: [
//                            {
//                                xtype: 'container',
//                                layout: 'hbox',
//                                items: [
//                                    {
//                                        xtype: 'container',
//                                        layoyt: 'vbox',
//                                        padding: '10 10 10 10',
//                                        items: [
//                                            {
//                                                xtype: 'fieldset',
//                                                title: 'Details',
//                                                items: [
//                                                    {
//                                                        xtype: 'container',
//                                                        layout: 'vbox',
//                                                        items: [
//                                                            {
//                                                                xtype: 'image',
//                                                                src: 'resources/icons/ShowMgrImages/logo_showmgr_wide.png'
//                                                            },
//                                                            {
//                                                                xtype: 'container',
//                                                                layout: 'hbox',
//                                                                padding: '10 0 0 0',
//                                                                items: [
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'Company Name:'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Company Code:'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Website:'
//                                                                            }
//                                                                        ]
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        padding: '0 0 0 25',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'ShowMgr.com, Inc'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'ShowMgr'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'www.showmgr.com'
//                                                                            }
//                                                                        ]
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        padding: '0 0 0 50',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'Phone:'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Fax:'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Email:'
//                                                                            }
//                                                                        ]
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        padding: '0 0 0 25',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: '949-713-1900'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: '949-713-1902'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'moreinfo@showmgr.com'
//                                                                            }
//                                                                        ]
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        padding: '0 0 0 50',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'Status:'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Type of Business:'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Parent Company:'
//                                                                            }
//                                                                        ]
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        padding: '0 0 0 25',
//                                                                        layout: 'vbox',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'Active'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                padding: '10 0 0 0',
//                                                                                text: 'Software Development'
//                                                                            }
//                                                                        ]
//                                                                    }
//                                                                ]
//                                                            },
//                                                            {
//                                                                xtype: 'container',
//                                                                layout: 'hbox',
//                                                                padding: '10 0 0 0',
//                                                                items: [
//                                                                    {
//                                                                        xtype: 'label',
//                                                                        text: 'Description:'
//                                                                    },
//                                                                    {
//                                                                        xtype: 'label',
//                                                                        padding: '0 0 0 50',
//                                                                        text: 'ShowMgr.com is a configurable Enterprise Resource Planning software platform that allows you to manage clients, work, resources & business'
//                                                                    }
//                                                                ]
//                                                            },
//                                                            {
//                                                                xtype: 'label',
//                                                                padding: '3 0 10 114',
//                                                                text: 'processes with ease and confidence.'
//                                                            }
//                                                        ]
//                                                    }
//                                                ]
//                                            },
//                                            {
//                                                xtype: 'fieldset',
//                                                title: 'Addresses',
//                                                items: [
//                                                    {
//                                                        xtype: 'container',
//                                                        padding: '10 0 10 25',
//                                                        layout: 'vbox',
//                                                        items: [
//                                                            {
//                                                                xtype: 'container',
//                                                                layout: 'hbox',
//                                                                items: [
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'Billing Address',
//                                                                                style: 'font-weight:bold;'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'container',
//                                                                                layout: 'vbox',
//                                                                                width: '40%',
//                                                                                width: 400,
//                                                                                border: 1,
//                                                                                style: {
//                                                                                    borderColor: 'black',
//                                                                                    borderStyle: 'solid'
//                                                                                },
//                                                                                items: [
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '10 0 0 10',
//                                                                                        text: '227762 Antonio Pkwy'
//                                                                                    },
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '3 0 0 10',
//                                                                                        text: 'L1-650'
//                                                                                    },
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '3 0 0 10',
//                                                                                        text: 'Ladera Ranch, CA 92694'
//                                                                                    },
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '3 0 10 10',
//                                                                                        text: 'United States of America'
//                                                                                    }
//                                                                                ]
//                                                                            }
//                                                                        ]
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        padding: '0 0 0 50',
//                                                                        layout: 'vbox',
//                                                                        items: [
//                                                                            {
//                                                                                xtype: 'label',
//                                                                                text: 'Shipping Address',
//                                                                                style: 'font-weight:bold;'
//                                                                            },
//                                                                            {
//                                                                                xtype: 'container',
//                                                                                layout: 'vbox',
//                                                                                width: 400,
//                                                                                border: 1,
//                                                                                style: {
//                                                                                    borderColor: 'black',
//                                                                                    borderStyle: 'solid'
//                                                                                },
//                                                                                items: [
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '10 0 0 10',
//                                                                                        text: '227762 Antonio Pkwy'
//                                                                                    },
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '3 0 0 10',
//                                                                                        text: 'L1-650'
//                                                                                    },
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '3 0 0 10',
//                                                                                        text: 'Ladera Ranch, CA 92694'
//                                                                                    },
//                                                                                    {
//                                                                                        xtype: 'label',
//                                                                                        padding: '3 0 10 10',
//                                                                                        text: 'United States of America'
//                                                                                    }
//                                                                                ]
//                                                                            }
//                                                                        ]
//                                                                    }
//                                                                ]
//                                                            },
//                                                            {
//                                                                xtype: 'container',
//                                                                padding: '10 0 0 0',
//                                                                layout: 'vbox',
//                                                                items: [
//                                                                    {
//                                                                        xtype: 'label',
//                                                                        text: 'Additional Addresses',
//                                                                        style: 'font-weight:bold;'
//                                                                    },
//                                                                    {
//                                                                        xtype: 'container',
//                                                                        layout: 'vbox',
//                                                                        border: 1,
//                                                                        width: 850,
//                                                                        style: {
//                                                                            borderColor: 'black',
//                                                                            borderStyle: 'solid'
//                                                                        },
//                                                                        items: [
////                                                                            {
////                                                                                xtype: 'gridadditionaladdresses'
////                                                                            }
//                                                                        ]
//                                                                    }
//                                                                ]
//                                                            }
//                                                        ]
//                                                    }
//                                                ]
//                                            }
//                                        ]
//                                    },
//                                    {
//                                        xtype: 'container',
//                                        padding: '10 10 10 0',
//                                        items:[
//                                            {
//                                                xtype: 'fieldset',
//                                                title: 'Notes',
//                                                items: [
//                                                    {
//                                                        xtype: 'textareafield',
//                                                        emptyText: 'Write a note...'
//                                                    },
//                                                    {
//                                                        xtype: 'container',
//                                                        cls: 'bottom-border',
//                                                        items:[
//                                                            {
//                                                                xtype: 'button',
//                                                                iconCls: 'bin-closed-icon',
//                                                                border: false
//                                                            },
//                                                            {
//                                                                xtype: 'button',
//                                                                iconCls: 'disk-icon',
//                                                                border: false
//                                                            }
//                                                        ]
//                                                    },
//                                                    {
//                                                        xtype: 'label',
//                                                        text: 'Recent Notes',
//                                                        style: 'font-weight:bold;'
//                                                    }
//                                                ]
//                                            }
//                                        ]
//                                    }
//                                ]
//                            }
//
//                        ]
//                    },
//                    {
//                        title: 'Accounting'
//                    },
//                    {
//                        title: 'Documents'
//                    },
//                    {
//                        title: 'Contacts'
//                    },
//                    {
//                        title: 'Linked Entities'
//                    }
//                ]
//            }
//        ];
        this.callParent(arguments);
    }

});