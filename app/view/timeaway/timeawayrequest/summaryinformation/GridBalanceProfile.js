Ext.define('Prototypes.view.timeaway.timeawayrequest.summaryinformation.GridBalanceProfile', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridbalanceprofile',
    disableSelection: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['category', 'balance', 'policyType', 'approver'],
        data: [
            { "category": "PTO", "balance": "60.0", "policyType": "PTO", "approver": "Clark Kent"},
            { "category": "Training", "balance": "80.0", "policyType": "Training", "approver": "Clark Kent" }
        ]
    }),

    enableLocking: true,
    width: 250,
    plugins: [
        {
            ptype: 'rowexpander',
            rowBodyTpl: new Ext.XTemplate(
                '<p style = "padding-left: 25px">Policy Type: {policyType}</p>',
                '<p style = "padding-left: 25px">Approver: {approver}</p><br>')
        }
    ],
    initComponent: function () {
        var currentDate = Ext.Date.format(new Date(), 'm-d-Y');
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Name: Bruce Wayne'
                                },
                                {
                                    xtype: 'label',
                                    text: 'Service Date: 01/01/2008 As of: '+ currentDate
                                }
                            ]
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: "Category",
                    dataIndex: 'category',
                    flex: 3
                },
                {
                    xtype: 'gridcolumn',
                    text: "Balance",
                    dataIndex: 'balance'
                }
            ]
        }),
            this.callParent(arguments)
    }
});