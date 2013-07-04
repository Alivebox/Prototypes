Ext.define('Prototypes.view.elementcatalog.menu.Details', {
    extend: 'Ext.form.Panel',
    xtype: 'details',
    height: 200,
    title: 'More Details',

    initComponent: function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '25 25 5 25',
                items: [
                    {
                        xtype: 'label',
                        text: 'Availability Date Range'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                width: '100%',
                padding: '0 25 5 25',
                items: [
                    {
                        xtype:'datefield',
                        //width: 100,
                        width: '40%',
                        fieldLabel: null
                    },
                    {
                        xtype: 'label',
                        text: 'to',
                        padding: '3 5 0 5'
                    },
                    {
                        xtype:'datefield',
                        //width: 100,
                        width: '40%',
                        fieldLabel: null
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'vbox',
                padding: '10 25 5 25',
                items: [
                    {
                        xtype: 'label',
                        text: 'Rate Card:'

                    },
                    {
                        xtype:'combobox',
                        //width: 222,
                        width: '100%',
                        editable:false,
                        padding: '10 0 0 0',
                        store:[
                            [1, 'Option 1'],
                            [2, 'Option 2'],
                            [3, 'Option 3'],
                            [4, 'Option 4']
                        ]
                    }
                ]
            }
        ];

        this.callParent(arguments);
    }
});


