Ext.define('Prototypes.view.timeaway.timeawayrequest.summaryinformation.GridRequestHistory', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridrequesthistory',
    store: Ext.create('Ext.data.Store', {
        fields: ['date', 'category', 'type', 'number', 'status', 'approver', 'comment'],
        data: [
            { "date": "11/01/2012", "category": "PTO", "type": "PTO", "number": "8.0", "status" : "tentative", "approver" : "Clark Kent", "comment" : "Lorem ipsum ad his scripta blandit partiendo."},
            { "date": "11/02/2012", "category": "PTO", "type": "PTO", "number": "8.0", "status" : "tentative", "approver" : "Clark Kent", "comment" : "Lorem ipsum ad his scripta blandit partiendo."},
            { "date": "10/30/2012", "category": "PTO", "type": "UTO", "number": "4.0", "status" : "tentative", "approver" : "Clark Kent", "comment" : "Lorem ipsum ad his scripta blandit partiendo."},
            { "date": "10/04/2012", "category": "PTO", "type": "UTO", "number": "8.0", "status" : "tentative", "approver" : "Clark Kent", "comment" : "Lorem ipsum ad his scripta blandit partiendo."}
        ]
    }),
    disableSelection: true,
    enableLocking: true,
    width: 250,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p style = "padding-left: 25px">Status: {status}</p>',
            '<p style = "padding-left: 25px">Approver: {approver}</p>',
            '<p style = "padding-left: 25px">Comment: {comment}</p><br>',
            '<a style = "padding-left: 50px; color:#0d0eff; text-decoration:underline">Modify</a>',
            '<a style = "padding-left: 25px; color:#0d0eff; text-decoration:underline">Delete</a><br>')
    }],
    renderTo: Ext.getBody(),
    initComponent: function () {
        Ext.apply(this, {
            renderTo: Ext.getBody(),
            columns:[
                {
                    xtype: 'gridcolumn',
                    text: "Date",
                    dataIndex: 'date',
                    flex: 1
                },
                {
                    xtype:'gridcolumn',
                    text: "Category",
                    dataIndex: 'category',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: "Type",
                    dataIndex: 'type',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: "#",
                    dataIndex: 'number',
                    flex: 1
                }
            ]
        }),
        this.callParent(arguments)
    }
});