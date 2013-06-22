Ext.define('Prototypes.view.project.customerproject.CustomerVendorGridOrders', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.customervendorgridorders',
    store: Ext.create('Ext.data.Store', {
        fields: ['class', 'order', 'start', 'end'],
        data: [
            { "class": "Edit", "order": "12345 - Edit Order", "start": "05/11/13", "end": "05/30/13"}
        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            renderTo: Ext.getBody(),
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: "Class",
                    dataIndex: 'class',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: "Order #",
                    dataIndex: 'order',
                    flex: 2,
                    renderer: this.setHiperLink
                },
                {
                    xtype: 'gridcolumn',
                    text: "Start",
                    dataIndex: 'start',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: "End",
                    dataIndex: 'end',
                    flex: 1
                }
            ],
            listeners: {
                cellclick: this.onCellClicked
            }
        }),
        this.callParent(arguments)
    },

    setHiperLink: function(argValue, argMetaData, argRecord, argRow, argCol, argStore, argGridView){
        if(argValue == null || argValue == undefined){
            return;
        }
        return '<a href="#" >'+ argValue +'</a>'
    }
    ,
    onCellClicked: function(argComponent, argTD, argCellIndex, argRecord, argTr, argRowIndex, argEvent) {
        if(argCellIndex == 1 && argEvent.target.localName == 'a'){
            alert('Order Selected');
        }
    }

});