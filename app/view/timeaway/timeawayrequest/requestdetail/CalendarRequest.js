Ext.define('Prototypes.view.timeaway.timeawayrequest.requestdetail.CalendarRequest', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.calendarrequest',
    title: 'Calendar Request',
    height: 310,
    width: 280,
    initComponent:function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                padding: '10 0 0 10',
                items: [
                    {
                        xtype: 'label',
                        text: 'Request For:'
                    },
                    {
                        xtype: 'label',
                        itemId: 'lblRequest',
                        padding: '0 0 0 10',
                        text: 'Bruce Wayne'
                    }
                ]
            },
           {
               xtype: 'combobox',
               itemId: 'cbCategory',
               fieldLabel: 'Category',
               displayField: 'name',
               valueField: 'name',
               padding: '10 0 10 10',
               store: Ext.create('Ext.data.Store', {
                   fields: ['id', 'name'],
                   data: [
                       {
                           "id": "1",
                           "name": "PTO"
                       },
                        {
                            "id": "2",
                            "name": "Training"
                        },
                        {
                            "id": "3",
                            "name": "Order"
                        }
                   ]
               }),
               editable: false,
               queryMode: 'local'
           },
           {
               xtype: 'doubleenhanceddatepicker',
               padding: '0 0 0 10',
               itemId: 'doubleEnhancedDatePicker'
           }
        ]
        this.callParent(arguments)
    }

});