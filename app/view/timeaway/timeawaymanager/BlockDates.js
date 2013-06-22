Ext.define('Prototypes.view.timeaway.timeawaymanager.BlockDates', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.blockdates',
    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    padding: '75 0 0 50',
                    items: [
                        {
                            xtype: 'label',
                            padding: '0 0 0 25',
                            text: 'Click the calendar to block a specified date.'
                        },
                        {
                            xtype: 'doubleenhanceddatepicker'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    padding: '50 0 0 75',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Save as:'
                        },
                        {
                            xtype: 'label',
                            text: 'White House Ball',
                            padding: '0 75 0 78'
                        },
                        {
                            xtype: 'button',
                            iconCls: 'save-button-icon'
                        }
                    ]
                }
            ]
        }),
            this.callParent()
    }
});