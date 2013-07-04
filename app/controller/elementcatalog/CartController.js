Ext.define('Prototypes.controller.elementcatalog.CartController', {

    extend: 'Ext.app.Controller',
    refs: [
        {
            ref: "cartGrid",
            selector: "cartgrid"
        },
        {
            ref: 'totalLabel',
            selector: 'cart [itemId=totalLabel]'
        }
    ],

    init: function () {
        var tmpCartStore = Ext.getStore('elementcatalog.ItemCarts');
        tmpCartStore.addListener('add',this.onItemAddedToCart,this);
        var that = this;
        this.control({
            cart: {
                createOrder: this.onCreateOrder,
                afterrender: function(){
                    that.getCartGrid().view.refresh();
                }
            }
        });
    },

    onCreateOrder: function(){
        Ext.Msg.alert('Create Order','Create order clicked');
    },

    onItemAddedToCart: function(argStore){
        var tmpItems = argStore.data.items;
        var tmpTotal = 0.0;
        for (var i = 0; i < tmpItems.length; i++) {
            var tmpElement = tmpItems[i];
            tmpTotal += Number(tmpElement.data.total);
        }
        this.getTotalLabel().setText('Total: $'+tmpTotal);
    }

});