Ext.define('Prototypes.view.vendorscustomers.GridCustomerCenter', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcustomercenter',
    disableSelection: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['companyName', 'address', 'phone', 'email', 'website'],
        data: [
            { 'companyName': 'ShowMgr.com', 'address': '227762 Antonio Pkwy L1-650 Ladera Ranch CA 92694', 'phone': '(949) 713-1900', 'email': 'moreinfo@ShowMgr.com', 'website': 'www.showmgr.com'},
            { 'companyName': 'Wayne Enterprises', 'address': '789 Gotham Ave Gotham City IL 12053', 'phone': '(800) 555-7895', 'email': 'cs@wayne.org', 'website': 'www.wayne.org'},
            { 'companyName': 'Stark Industries', 'address': '56 Madison Ave Ste.100 New York NY 10001', 'phone': '(212 867-5309)', 'email': '', 'website': 'www.stark.com'}
        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'textfield',
                            emptyText: 'Search for Name, Address, Phone...',
                            width: 350
                        },
                        '->',
                        {
                            xtype: 'button',
                            text: 'New',
                            iconCls: 'add-button-icon'
                        },
                        {
                            xtype: 'button',
                            text: 'Open',
                            iconCls: 'page-open-icon'
                        }
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Company Name',
                    dataIndex: 'companyName',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Address',
                    dataIndex: 'address',
                    align: 'left',
                    flex: 3
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Phone',
                    dataIndex: 'phone',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Email',
                    dataIndex: 'email',
                    align: 'left',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Website',
                    dataIndex: 'website',
                    align: 'left',
                    flex: 1
                }
            ]
        });
        this.callParent()
    }
});