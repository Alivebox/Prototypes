Ext.define('Prototypes.view.vendorscustomers.GridCustomerContacts', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcustomercontacts',
    disableSelection: true,
    enableLocking: true,
    scroll: 'vertical',
    autoScroll: true,
    tooltip: 'Image here',
    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'title', 'phone', 'email'],
        data: [
            { "name": "Kevin Rosen", "title": "CEO", "phone": "(800) 867-5309 ext 718", "email": "kevin.rose@showmgr.com"},
            { "name": "Randy Rosen", "title": "VP of Marketing", "phone": "(800) 867-5309 ext 713", "email": "randy.rose@showmgr.com"}
        ]
    }),
    /*plugins: [
        {
            ptype: 'rowexpander',
            rowBodyTpl: new Ext.XTemplate(
                '<p style = "padding-left: 25px">Phone: {phone}</p>',
                '<p style = "padding-left: 25px">Email: {email}</p><br>')
        }
    ],*/
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
                    flex: 1,
                    renderer: function(value,metaData,record,colIndex,store,view) {
                        var myToolTipText = "<div><img src='resources/images/contact.png' width='32' height='32' style='position:absolute;'></div>";
                        myToolTipText = myToolTipText + "<div style='padding-left: 35px'>Phone:"+record.data.phone+ "<br>Email:"+record.data.email+"</div>";
                        metaData.tdAttr = 'data-qtip="' + myToolTipText + '"';
                        return value;
                    }
                },

                {
                    xtype: 'gridcolumn',
                    text: "Title",
                    dataIndex: 'title',
                    flex: 1,
                    renderer: function(value,metaData,record,colIndex,store,view) {
                        var myToolTipText = "<div><img src='resources/images/contact.png' width='32' height='32' style='position:absolute;'></div>";
                        myToolTipText = myToolTipText + "<div style='padding-left: 35px'>Phone:"+record.data.phone+ "<br>Email:"+record.data.email+"</div>";
                        metaData.tdAttr = 'data-qtip="' + myToolTipText + '"';
                        return value;
                    }
                }
            ]
        });
        this.callParent();
    }

});







