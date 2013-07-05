Ext.define('Prototypes.view.vendorscustomers.summary.GeneralSummaryInfoContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.generalsummaryinfocontainer',
    layout: 'vbox',
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '25 0 0 0',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                itemId: 'logoimage',
                                src: 'resources/icons/ShowMgrImages/logo_showmgr_wide.png'
                            },
                            {
                                xtype: 'fileuploadfield',
                                buttonOnly: true,
                                buttonText: null,
                                buttonConfig: {
                                    iconCls: 'pencil-button-icon'
                                },
                                listeners: {
                                    scope: this,
                                    change: this.onUploadFilePathChange
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: '0 0 0 250'
                    },
                    {
                        xtype: 'button',
                        itemId: 'externallinkbutton',
                        text: 'Link to External System',
                        iconCls: 'link-icon',
                        listeners: {
                            scope: this,
                            click: this.onExternalLinkAction
                        }
                    },
                    {
                        xtype: 'container',
                        itemId: 'externallinkcontainer',
                        listeners: {
                            scope: this,
                            afterrender: this.onExternalLinkAfterrender
                        },
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'label',
                                text: 'Linked',
                                style: 'font-weight:bold;font-size:12px;color:#009b00;',
                                padding: '0 0 0 45'
                            },
                            {
                                xtype: 'label',
                                text: 'Last Modified On 09/17/2012',
                                style: 'font-size:10px;'
                            }
                        ]
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
                xtype: 'adittioninfosummary',
                itemId: 'additionalInfo',
                padding: '0 0 0 10',
                listeners:{
                    scope: this,
                    beforerender: this.onHideMoreAction
                }
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '15 0 0 10',
                items: [
                    {
                        xtype: 'button',
                        tooltip: 'View More',
                        itemId: 'viewMoreButton',
                        text: '...',
                        listeners:{
                            scope: this,
                            click: this.onShowMoreAction
                        }
                    },
                    {
                        xtype: 'container',
                        padding: '75 0 0 0',
                        items: [
                            {
                                xtype: 'button',
                                tooltip: 'Hide',
                                itemId: 'hideButton',
                                text: '-',
                                listeners:{
                                    scope: this,
                                    click: this.onHideMoreAction
                                }
                            }
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments)
    },

    onExternalLinkAction: function () {
        var tmpLinkButton = this.down('button[itemId=externallinkbutton]');
        var tmpLinkContainer = this.down('container[itemId=externallinkcontainer]');
        tmpLinkButton.setVisible(false);
        tmpLinkContainer.setVisible(true);
    },

    onExternalLinkAfterrender: function () {
        var tmpLinkContainer = this.down('container[itemId=externallinkcontainer]');
        tmpLinkContainer.setVisible(false);
    },

    onUploadFilePathChange: function (argComponent, argValue) {
        var tmpLogoImage = this.down('image[itemId=logoimage]');
        tmpLogoImage.setSrc('resources/icons/ShowMgrImages/logos/' + argValue.replace("C:\\fakepath\\", ""));
        tmpLogoImage.doLayout();
    },

    onHideMoreAction: function () {
        var tmpHideButton = this.down('button[itemId=hideButton]');
        var tmpViewMoreButton = this.down('button[itemId=viewMoreButton]');
        var tmpAdditionlInfo = this.down('container[itemId=additionalInfo]');
        tmpAdditionlInfo.setVisible(false);
        tmpHideButton.setVisible(false);
        tmpViewMoreButton.setVisible(true);
        this.fireEvent('showTabContainer');
    },

    onShowMoreAction: function () {
        var tmpHideButton = this.down('button[itemId=hideButton]');
        var tmpViewMoreButton = this.down('button[itemId=viewMoreButton]');
        var tmpAdditionlInfo = this.down('container[itemId=additionalInfo]');
        tmpAdditionlInfo.setVisible(true);
        tmpHideButton.setVisible(true);
        tmpViewMoreButton.setVisible(false);
        this.fireEvent('hideTabContainer');
    }

});