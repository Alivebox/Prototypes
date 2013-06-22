Ext.define('Prototypes.view.project.customerproject.CustomerVendorGridContacts', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.customervendorgridcontacts',
    disableSelection: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'title', 'phone', 'email'],
        data: [
            { "name": "Kevin Rosen", "title": "CEO", "phone": "949)713-1900 x 713", "email": "kevin.rosen@showmgr.com"},
            { "name": "Randi Rosen", "title": "VP of Marketing", "phone": "949)713-1900 x 713", "email": "randi.rosen@showmgr.com"}
        ]
    }),
    enableLocking: true,
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
            renderTo: Ext.getBody(),
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
        }),
        this.callParent(arguments)
    }
});