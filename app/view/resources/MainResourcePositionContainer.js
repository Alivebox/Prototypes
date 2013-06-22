Ext.define('Prototypes.view.resources.MainResourcePositionContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainresourcepositioncontainer',
    items: [
        {
            itemId: 'gridresourcespositions',
            xtype: 'gridresourcespositions',
            region: 'center'
        }
    ]
});