Ext.define('Prototypes.ux.UnsortedList', {

    extend: 'Ext.view.View',
    alias : 'widget.unsortedlist',
    requires: ['Ext.data.Store'],
    autoScroll: true,
    itemSelector: 'div.thumb-wrap',
    tpl: [
        '<div class="thumb-wrap">',
        '<ul style="list-style-type: square;">',
        '<tpl for=".">',
        '<li type="square">{option}</li>',
        '</tpl>',
        '</ul>',
        '</div>'
    ]
});
