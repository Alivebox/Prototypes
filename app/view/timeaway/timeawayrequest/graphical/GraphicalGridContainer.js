Ext.define('Prototypes.view.timeaway.timeawayrequest.graphical.GraphicalGridContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.graphicalgridcontainer',
    height: 250,
    selectedDate: undefined,
    padding: '0 10 10 10',
    initComponent:function () {
        this.addListener('boxready',this.onBoxReady,this);
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        margin: '0 0 5 0',
                        icon: '/resources/icons/ShowMgrImages/graphicalgrid/back.png',
                        listeners: {
                            scope: this,
                            click: this.onBackwardClick
                        }


                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        style: 'float:right',
                        margin: '0 0 5 0',
                        icon: '/resources/icons/ShowMgrImages/graphicalgrid/foward.png',
                        listeners: {
                            scope: this,
                            click: this.onFowardClick
                        }
                    }
                ]
            },
            {
                xtype: 'gridpanel',
                itemId: 'gGraphicalRequest',
                height: 180,
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'position', 'dateFilter1', 'dateFilter2', 'dateFilter3', 'dateFilter4', 'dateFilter5', 'dateFilter6', 'dateFilter7'],
                    data: [
                        { "name": "Bruce Wayne", "position": "CAM1", "dateFilter1": "PTO", "dateFilter2": "PTO"},
                        { "name": "Tony Stark", "position": "CAM1", "dateFilter1": "TRAINING", "dateFilter3": "TRAINING"},
                        { "name": "Clark Kent", "position": "CAM1", "dateFilter1": "ORDER", "dateFilter3": "ORDER"}
                    ]
                }),
                columns: [
                    {
                        xtype: 'gridcolumn',
                        text: 'Name',
                        dataIndex: 'name',
                        flex: 3
                    },
                    {
                        xtype: 'gridcolumn',
                        text: 'Position',
                        dataIndex: 'position'
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'dateFilter1',
                        itemId: 'gcDateFilter1',
                        align: 'center',
                        renderer: this.onLoadImage
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'dateFilter2',
                        itemId: 'gcDateFilter2',
                        align: 'center',
                        renderer: this.onLoadImage
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'dateFilter3',
                        itemId: 'gcDateFilter3',
                        align: 'center',
                        renderer: this.onLoadImage
                    }
                ]
            }
        ]
        this.callParent(arguments)
    },

    onBoxReady: function() {
        this.setDateFilters(new Date());
    },

    setDateFilters: function(argDate){
        this.selectedDate = argDate;
        var tmpDate = argDate;
        for(var tmpCont = 1; tmpCont <= 7; tmpCont++) {
            var tmpStrinDate = Ext.Date.format(tmpDate, "m-d-Y");
            var tmpArrayDate = tmpStrinDate.split("-", 3);
            var tmpDateFilter = this.down('gridcolumn[itemId=gcDateFilter' + tmpCont + ']');
            if(tmpDateFilter == null){
                return;
            }
            tmpDateFilter.setText(this.getDateFilterFormat(tmpArrayDate));
            tmpDate = Ext.Date.add(argDate, Ext.Date.DAY, tmpCont);
        }

    },

    getDateFilterFormat: function(argArrayDate) {
        return argArrayDate[0] + '/' + argArrayDate[1];
    },

    onLoadImage: function(argValue, argMetaData, argRecord, argRow, argCol, argStore, argGridView){
        if(argValue == null || argValue == undefined){
            return;
        }
        if(argValue.toUpperCase() == 'PTO'){
            return '<img src="/resources/icons/ShowMgrImages/squares/redSquare.jpg" />';
        }
        if(argValue.toUpperCase() == 'TRAINING'){
            return '<img src="/resources/icons/ShowMgrImages/squares/greenSquare.jpg" />';
        }
        if(argValue.toUpperCase() == 'ORDER'){
            return '<img src="/resources/icons/ShowMgrImages/squares/blueSquare.jpg" />';
        }

    },

    onBackwardClick: function(){
        this.fireEvent('backwardclick', this);
    },

    onFowardClick: function(){
        this.fireEvent('fowardclick', this);
    },

    recofigureDisplayDays: function(argColumnsNumbers){
        var tmpArrayColumns = [
            {
                xtype: 'gridcolumn',
                text: 'Name',
                dataIndex: 'name',
                flex: 3
            },
            {
                xtype: 'gridcolumn',
                text: 'Position',
                dataIndex: 'position',
                flex: 2
            }
        ]
        for(var tmpCont = 1; tmpCont <= argColumnsNumbers; tmpCont++){
            tmpArrayColumns.push(
                {
                xtype: 'gridcolumn',
                dataIndex: 'dateFilter' + tmpCont,
                itemId: 'gcDateFilter' + tmpCont,
                align: 'center',
                renderer: this.onLoadImage,
                flex: 1
            });
        }
        var tmpGridGraphicalRequest = this.down('gridpanel[itemId=gGraphicalRequest]');
        tmpGridGraphicalRequest.reconfigure(undefined, tmpArrayColumns);
    }
});