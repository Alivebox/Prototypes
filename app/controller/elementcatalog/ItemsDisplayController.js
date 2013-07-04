Ext.define('Prototypes.controller.elementcatalog.ItemsDisplayController', {

    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'itemsGrid',
            selector: 'itemsgrid'
        },
        {
            ref: 'emptyText',
            selector: 'cart [itemId=emptyTextPanel]'
        }
    ],

    init: function () {
        this.control({
            itemsgrid: {
                beforerender: this.onBeforerender,
                afterrender: this.onAfterRenderer
            }
        });
    },

    onBeforerender: function (argItemsGrid) {
        argItemsGrid.setVisible(false);
    },

    onAfterRenderer: function () {
        var tmpItemDisplayEl = this.getItemsGrid().getEl();
        tmpItemDisplayEl.on('click', this.onAddElementToCart, this, { delegate: '#addToListButton' });
        tmpItemDisplayEl.on('click', this.onViewItemDetails, this, { delegate: '#viewDetailsButton' });
    },

    onAddElementToCart: function (argEvent, argButton, argDelegate) {
        if (argButton.innerText === "Added") {
            return;
        }
        argButton.innerText = "Added";
        var tmpRecord = this.getEspecifiedItemRecord(argButton.name);
        var tmpCartRecord = Ext.create('Prototypes.model.elementcatalog.ItemCart', tmpRecord.data);
        var tmpItemCartStore = Ext.getStore('elementcatalog.ItemCarts');
        tmpItemCartStore.add(tmpCartRecord);
        this.getEmptyText().setVisible(false);
    },

    onViewItemDetails: function (argEvent, argButton, argDelegate) {
        Ext.Msg.alert('Details', 'View details clicked');
    },

    getEspecifiedItemRecord: function (argId) {
        var tmpStoreDataIndex = this.getItemsGrid().store.find('id', argId);
        return this.getItemsGrid().store.getAt(tmpStoreDataIndex);
    }
});


