Ext.define('Prototypes.view.selfservice.importwizard.PreviewFile', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.previewfile',
    disableSelection: true,
    store: Ext.create('Ext.data.Store', {
        fields: ['firstName', 'lastName', 'phone', 'email'],
        data: [
            { 'firstName': 'Bruce', 'lastName': 'Wayne', 'phone': '212-867-5309', 'email': 'dbat@we.com'},
            { 'firstName': 'Flash', 'lastName': 'Gordon', 'phone': '212-123-4567', 'email': 'flash@abc.com'},
            { 'firstName': 'Clark', 'lastName': 'Kent', 'phone': '718-932-0123', 'email': '718-932-0123'},
            { 'firstName': 'Tony', 'lastName': 'Stark', 'phone': '212-567-1212', 'email': 'stark@stark.com'},
            { 'firstName': 'Thor', 'lastName': 'Oden', 'phone': '', 'email': 'thor@light.com'},
            { 'firstName': 'Bruce', 'lastName': 'Banner', 'phone': '', 'email': 'smash@hlk.org'},
            { 'firstName': 'Peter', 'lastName': 'Parker', 'phone': '949-777-1200', 'email': 'spidey@rad.com'},
            { 'firstName': 'Jay', 'lastName': 'Madison', 'phone': '949-713-1900', 'email': 'jay@showmgr.com'},
            { 'firstName': 'Steve', 'lastName': 'Rogers', 'phone': '', 'email': 'cap@old.org'},
            { 'firstName': 'Barry', 'lastName': 'Obama', 'phone': '210-783-1279', 'email': 'obi@wh.gov'}


        ]
    }),
    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'Column Name is in row',
                            minValue: 0,
                            maxValue: 100
                        },
                        '->',
                        {
                            xtype: 'label',
                            text: 'Count of rows in file: 100'
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
                    text: 'Telephone Number',
                    dataIndex: 'phone',
                    align: 'left',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Email Address',
                    dataIndex: 'email',
                    align: 'left',
                    flex: 1
                }
            ]
        }),
            this.callParent()
    }
});