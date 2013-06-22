Ext.define('Prototypes.view.project.customerproject.VendorTradesContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.vendortradescontainer',
    layout: 'column',
    autoScroll: true,
    minWidth: 1200,
    width: 1600,
    maxWidth: '100%',
    maxHeight: '100%',
    height: 800,
    minHeight: 800,
    initComponent:function () {
        this.items = [
            {
                xtype: 'vendoradvancesearch'
            },
            {
                xtype: 'customervendorgrid'
            },
            {
                xtype: 'panel',
                title: 'Contacts',
                collapsible: 'true',
                collapseDirection: 'right',
                height: 400,
                width: 400,
                items: [
                    {
                        xtype: 'customervendorgridcontacts'
                    }
                ]
            },
            {
                xtype: 'panel',
                title: 'Contacts',
                collapsible: 'true',
                collapseDirection: 'right',
                height: 400,
                width: 400,
                items: [
                    {
                        xtype: 'customervendorgridorders'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});