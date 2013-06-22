Ext.define('Prototypes.view.project.customerproject.CustomerVendorGrid', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.customervendorgrid',
    height: '100%',
    minHeight: 800,
    width: 800,
    autoScroll: 'true',
    maxWidth: 1200,
    title: 'Customer',
    initComponent: function () {
        this.items = [
            {
              xtype: 'container',
              padding: '10 10 10 10',
              items: [
                  {
                      xtype: 'textfield',
                      width: '50%',
                      emptyText: 'Search for Company Name, Address, Contact, etc...'
                  },
                  {
                      xtype: 'grid',
                      store: Ext.create('Ext.data.Store', {
                          fields: ['companyName', 'address', 'phone', 'email', 'webSite'],
                          data: [
                              { "companyName": "ShowMgr", "address": "227762 Antonio Pkwy L1-650 Ladera Ranch CA 92694", "phone": "(949)713-1900", "email": "admin@showmgr.com", "webSite" : "www.showmgr.com"},
                              { "companyName": "Wayne Enterprises", "address": "2789 Gotham Rd. Gotham City NY 01234", "phone": "(212)555-5522", "email": "admin@wayne.com", "webSite" : "www.wayneenterprises.com"},
                              { "companyName": "Stark Industries", "address": "101 Madison Ave. New York NY 11012", "phone": "(212)867-5309", "email": "admin@starkindustries.com", "webSite" : "www.starkindustries.com"}
                          ]
                      }),
                      columns: [
                          {
                              xtype: 'gridcolumn',
                              text: "Company Name",
                              dataIndex: 'companyName',
                              flex: 1
                          },
                          {
                              xtype: 'gridcolumn',
                              text: "Address",
                              dataIndex: 'address',
                              flex: 3,
                              align: 'center'
                          },
                          {
                              xtype: 'gridcolumn',
                              text: "Phone",
                              dataIndex: 'phone',
                              flex: 1,
                              align: 'center'
                          },
                          {
                              xtype: 'gridcolumn',
                              text: "Email",
                              dataIndex: 'email',
                              flex: 1,
                              align: 'center'
                          },
                          {
                              xtype: 'gridcolumn',
                              text: "Web site",
                              dataIndex: 'webSite',
                              flex: 1
                          }
                      ]
                  }
              ]
            }
        ];

        this.callParent(arguments);
    }
});
