Ext.define('Prototypes.view.vendorscustomers.summary.GeneralSummaryInfoContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.generalsummaryinfocontainer',
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
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '10 0 0 10',
                        items: [
                            {
                                xtype: 'image',
                                src: 'resources/icons/ShowMgrImages/logo_showmgr_wide.png'
                            },
                            {
                                xtype: 'container',
                                padding: '0 0 0 200'
                            },
                            {
                                xtype: 'button',
                                text: 'Link to External System',
                                iconCls: 'link-icon'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '10 0 0 10',
                        items: [
                            {
                                xtype: 'detailedsummaryinfocontainer'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '0 0 0 10',
                        items: [
                            {
                                xtype: 'addresscontactcontainer',
                                padding: '0 0 0 0',
                                valuesPadding: '0 0 0 64',
                                containersPadding: '5 0 0 0',
                                linkButtonPadding:'5 0 0 114',
                                labelsWidth: 50,
                                descriptionWidth: 500,
                                descriptionMaxLength: 250,
                                dataMaxLength: 15,
                                imputsWidth: 125
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '10 0 0 10',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Description:'
                            },
                            {
                                xtype: 'label',
                                padding: '0 0 0 50',
                                text: 'ShowMgr.com is a configurable Enterprise Resource Planning software platform that allows you to'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        padding: '3 0 10 124',
                        text: ' manage clients, work, resources & business processes with ease and confidence.'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});