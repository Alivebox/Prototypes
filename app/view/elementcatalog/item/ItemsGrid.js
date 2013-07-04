Ext.define('Prototypes.view.elementcatalog.item.ItemsGrid', {

    extend: 'Ext.grid.Panel',
    xtype: 'itemsgrid',
    width: '100%',
    requires: [
        'Ext.grid.*'
    ],

    collapsible: true,
    enableLocking: true,
    animCollapse: false,
    header: false,
    hideHeaders: true,
    iconCls: 'icon-grid',

    plugins: [
        {
            ptype: 'rowexpander',
            rowBodyTpl: new Ext.XTemplate(
                '<div style="clear: both" >',
                '<div style="float: left; width: 128px;overflow: hidden; " >',
                '<img src="{imgSrc}">',
                '</div>',
                '<div style="float: left; width: 80%" >',
                '<p><b>Camera:</b> {name}</p>',
                '<p><b>Make:</b> {manufacturer}</p>',
                '<p><b>Model:</b> {model}</p><br>',
                '<p><b>Summary:</b> {descrition}</p>',
                '<div width: 100%;" >',
                '<div style="float:left" >',
                '<p><b>{hourRate}</b></p>',
                '<p><b>{dayRate}</b></p>',
                '</div>',
                '<div style="float: right" >',
                '<p><button id="addToListButton" type="button" name="{id}" >Add to List</button></p>',
                '<p><button id="viewDetailsButton" type="button">View Details</button></p>',
                '</div>',
                '</div>',
                '</div>',
                '</div>'
            )
        }
    ],

    initComponent: function () {
        this.columns = [
            {
                header: 'Camera',
                width: '33%',
                dataIndex: 'name'
            },
            {
                header: 'Make',
                width: '33%',
                dataIndex: 'manufacturer'
            },
            {
                header: 'Model',
                width: '33%',
                dataIndex: 'model'
            }
        ];
        this.callParent(arguments);

    }

});