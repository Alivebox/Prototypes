Ext.define('Prototypes.ux.ColoredSquare', {
    extend: 'Ext.container.Container',
    alias: 'widget.coloredsquare',
    layout: 'column',
    width: 15,
    height: 15,
    color: '#FF0000',
    initComponent: function() {
        this.square = this.onCreateSquare()
        this.items = [
           this.square
        ]
        this.callParent(arguments)
    },

    setColor: function(argColor) {
        var tmpSquare = this.square.items[0];
        tmpSquare.setAttributes({
            fill: argColor
        }, true);
    },

    onCreateSquare: function() {
        var tmpDrawComponent = Ext.create('Ext.draw.Component', {
            viewBox: false,
            items: [{
                type: 'rect',
                height : 15,
                width: 15,
                fill: this.color
            }]
        });
        return tmpDrawComponent;
    }
});