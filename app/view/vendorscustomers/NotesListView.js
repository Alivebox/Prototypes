Ext.define('Prototypes.view.vendorscustomers.NotesListView', {
    extend: 'Ext.view.View',
    alias: 'widget.noteslistview',

    store: Ext.create('Ext.data.Store', {
        fields: ['name', 'date', 'description'],
        data: [
            {'name': 'Carissa Brown', 'date': '04/26/2013', 'description': 'Requires PO aproval from Board of Directors for orders in excess of $50,000.00'},
            {'name': 'Nathan Ayers', 'date': '02/04/2013', 'description': 'Send brochure to Randi. DO NOT CALL ON WEDNESDAYS!'}
        ]
    }),
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
        '<div class="thumb-wrap">',
        '<p> <span style = "color:#092178; font-weight:bold;;">{date}</span>',
        '<span style = "padding-left: 75px; color:#092178; font-weight:bold;">{name}</span></p>',
        '<p>{description}</p>',
        '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.thumb-wrap',
    renderTo: Ext.getBody(),

    initComponent: function () {
        this.callParent(arguments);
    }
});