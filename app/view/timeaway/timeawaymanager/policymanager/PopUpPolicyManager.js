Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.PopUpPolicyManager', {
    extend:'Ext.window.Window',
    alias:'widget.popuppolicymanager',
    height: 300,
    width: 1210,
    resizable: false,
    modal: true,

    initComponent:function () {
        this.items = [
            {
                xtype: 'panel',
                layout: 'hbox',
                height: 300,
                items: [

                    {
                        xtype: 'gridpolicymanager',
                        width: 600,
                        height: 300,
                        scroll: 'vertical'
                    },
                    {
                        xtype: 'gridavailableresources',
                        width: 600,
                        height: 300,
                        scroll: 'vertical'
                    }
                ]
            }
        ],
        this.callParent(arguments);
    }
});

