Ext.define('Prototypes.view.vendorscustomers.summary.MainSummaryContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainsummarycontainer',

    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    width: 1225,
    height: 900,
    layout: 'border',
    defaults: {
        split: true,
        bodyStyle: 'padding:15px'
    },
    initComponent: function () {

        this.items = [
            {
                xtype: 'panel',
                region: 'center',
                //height: 350,
                flex: 1.2,
                layout: {
                    type: 'vbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'generalsummaryinfocontainer'
                    }
                ]
            },
            {
                xtype: 'panel',
                region: 'south',
                itemId: 'summarySouthPanel',
                flex: 2,
                width: '100%',
                items: [
                    {
                        xtype: 'summarytabcontainer',
                        height: '100%',
                        width: '100%'
                    }
                ],
                listeners:{
                    scope: this,
                    expand: this.onSouthWingExpand
                }
            }
        ]
        this.callParent(arguments)
    },

    onSouthWingExpand: function(){
        this.fireEvent('southWingExpand');
    }

});