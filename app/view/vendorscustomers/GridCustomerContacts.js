Ext.define('Prototypes.view.vendorscustomers.GridCustomerContacts', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcustomercontacts',
    disableSelection: true,
    enableLocking: true,
    scroll: 'vertical',
    autoScroll: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'title', 'phone', 'email'],
        data: [
            { "name": "Kevin Rosen", "title": "CEO", "phone": "(800) 867-5309 ext 718", "email": "kevin.rose@showmgr.com"},
            { "name": "Randy Rosen", "title": "VP of Marketing", "phone": "(800) 867-5309 ext 713", "email": "randy.rose@showmgr.com"}
        ]
    }),

    plugins: [
        {
            ptype: 'rowexpander',
            rowBodyTpl: new Ext.XTemplate(
                '<p style = "padding-left: 25px">Phone: {phone}</p>',
                '<p style = "padding-left: 25px">Email: {email}</p><br>')
        }
    ],
    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        '->',
                        {
                            xtype: 'button',
                            text: 'View all contacts'
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: "Name",
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: "Title",
                    dataIndex: 'title',
                    flex: 1
                }
            ]
        });
        this.callParent();
    }
});







