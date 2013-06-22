Ext.define('Prototypes.view.selfservice.importwizard.PreviewImport', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.previewimport',
    disableSelection: true,

    store: Ext.create('Ext.data.Store', {
        fields: ['firstName', 'lastName', 'crewingCategory', 'position'],
        data: [
            { 'firstName': 'Bruce', 'lastName': 'Wayne', 'crewingCategory': 'Above The Line', 'position': 'AD'},
            { 'firstName': 'Flash', 'lastName': 'Gordon', 'crewingCategory': 'Below The Line', 'position': 'HH CAM'},
            { 'firstName': 'Clark', 'lastName': 'Kent', 'crewingCategory': 'Vendor', 'position': 'V1'},
            { 'firstName': 'Tony', 'lastName': 'Stark', 'crewingCategory': 'Staff', 'position': 'ENG'},
            { 'firstName': 'Thor', 'lastName': 'Oden', 'crewingCategory': 'Above The Line', 'position': 'Actor'},
            { 'firstName': 'Bruce', 'lastName': 'Banner', 'crewingCategory': 'Below The Line', 'position': 'Grip'},
            { 'firstName': 'Peter', 'lastName': 'Parker', 'crewingCategory': 'Below The Line', 'position': 'Cam 1'},
            { 'firstName': 'Jay', 'lastName': 'Madison', 'crewingCategory': 'Below The Line', 'position': 'Engineer'},
            { 'firstName': 'Steve', 'lastName': 'Rogers', 'crewingCategory': 'Vendor', 'position': 'Security'},
            { 'firstName': 'Barry', 'lastName': 'Obama', 'crewingCategory': 'Staff', 'position': 'Scriptwriter'}


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
                            xtype: 'label',
                            text: 'Preview - Top 10 Rows'
                        }
                    ]
                }
            ],
            renderTo: Ext.getBody(),
            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'First Name',
                    dataIndex: 'firstName',
                    align: 'left',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Last Name',
                    dataIndex: 'firstName',
                    align: 'left',
                    flex: 2
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Crewing Category',
                    dataIndex: 'crewingCategory',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Position',
                    dataIndex: 'position',
                    align: 'left',
                    flex: 1
                }
            ]
        }),
            this.callParent()
    }
});