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
                        padding: '5 0 0',
                        text: 'Type:'
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
                        xtype: 'phonecontactcontainer',
                        padding: '0 0 0 100',
                        valuesPadding: '0 0 0 75',
                        containersPadding: '5 0 0 0',
                        linkButtonPadding:'5 0 0 125',
                        labelsWidth: 50,
                        dataMaxLength: 15,
                        imputsWidth: 125
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});