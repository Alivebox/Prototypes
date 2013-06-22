Ext.define('Prototypes.ux.LinkButton', {
    extend: 'Ext.Component',
    alias: 'widget.linkbutton',
    text: '',
    baseCls: Ext.baseCSSPrefix + 'simplelink',
    autoEl: {
        tag: 'a',
        href: '#'
    },
    renderTpl: '{text}',

    initComponent: function() {
        this.renderData = {
            text: this.text
        };

        this.callParent(arguments);
    },

    afterRender: function() {
        this.mon(this.getEl(), 'click', this.handler, this);
    },

    onSelectedItem: function(){
        this.fireEvent('click');
    },

    setText: function(argText){
        this.text = argText;
    },

    getText: function(){
        return this.text
    },

    handler: Ext.emptyFn
});