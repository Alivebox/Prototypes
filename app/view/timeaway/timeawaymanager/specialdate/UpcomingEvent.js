Ext.define('Prototypes.view.timeaway.timeawaymanager.specialdate.UpcomingEvent', {

    extend: 'Ext.container.Container',
    alias: 'widget.upcomingevent',
    layout: 'column',
    initComponent:function () {
        this.items = [
            {
                xtype: 'linkbutton',
                itemId: 'lbtnDate',
                listener: {
                    click: this.onDateSelected
                }
            },
            {
                xtype: 'label',
                padding: '0 0 0 10',
                itemId: 'lblName'
            }
        ]
        this.callParent(arguments)
    },

    setUpComingEventData: function(argDate, argName){
        var tmpDate = this.down('linkbutton[itemId=lbtnDate]');
        var tmpStringDate = Ext.Date.format(argDate, "m-d-Y");
        tmpDate.renderData.text = tmpStringDate;
        tmpDate.setText(tmpStringDate);
        var tmpName = this.down('label[itemId=lblName]');
        tmpName.setText(argName);
    },

    onDateSelected: function(){
        var tmpDate = this.down('linkbutton[itemId=lbtnDate]');
        var tmpName = this.down('label[itemId=lblName]');
        this.fireEvent('dateSelected', tmpDate.getValue(), tmpName.getValue());
    }
});