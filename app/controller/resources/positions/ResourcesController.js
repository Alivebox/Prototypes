Ext.define('Prototypes.controller.resources.positions.ResourcesController', {

    extend: "Ext.app.Controller",

    refs: [
        {
            ref:'formResoucesPositions',
            selector:'formresoucespositions'
        },
        {
            ref:'position',
            selector:'formresoucespositions textfield[name=position]'
        },
        {
            ref:'gridResourcesPositions',
            selector:'gridresourcespositions'
        },
        {
            ref:'logProjectComboBox',
            selector:'formresoucespositions [itemId=logProjectComboBox]'
        }
    ],

    init: function () {
        this.control({
            'gridresourcespositions': {
                displaySearchWindow:this.onDisplaySearchWindow,
                addPosition:this.onAddPosition,
                viewPositionCategory:this.onViewPositionCategory,
                editRowAction:this.onShowEditPositionPopUp
            },
            'positionpopup': {
                closePositionPopUp:this.onClosePositionPopUp,
                submitPositionPopUp:this.onSubmitPositionPopUp
            },
            'formresoucespositions': {
                boxready: this.onSetPositionReadOnly
            }
        })
    },

    onDisplaySearchWindow:function() {
        alert('Display Search Window Event')
    },

    onAddPosition:function() {
        alert('Add Position Event')
    },

    onViewPositionCategory:function() {
        alert('View Position Category Event')
    },

    onShowEditPositionPopUp: function(argGrid,argRow) {
        var tmpPosition = argGrid.store.getAt(argRow)
        this.elementGroupsPopUp = Ext.create('Prototypes.view.resources.positions.PositionPopUp')
        this.elementGroupsPopUp.title = 'Modify Positions'
        this.elementGroupsPopUp.show()
        this.getFormResoucesPositions().loadRecord(tmpPosition)
        this.getLogProjectComboBox().setValue(tmpPosition.data.systemDefinition)
    },

    onClosePositionPopUp: function(argEvent){
        var tmpWindow = argEvent;
        tmpWindow.close();
    },

    onSubmitPositionPopUp: function(argEvent){
        var tmpFormPosition = this.getFormResoucesPositions().getValues()
        var tmpStore = this.getStore('resources.positions.Positions')
        var tmpIndex = tmpStore.find('position', tmpFormPosition.position)
        var tmpStorePosition = tmpStore.getAt(tmpIndex)
        tmpStorePosition.set('description' , tmpFormPosition.description)
        tmpStorePosition.set('systemDefinition' , this.getLogProjectComboBox().getValue())
        tmpStorePosition.set('sortOrder' , tmpFormPosition.sortOrder)
        tmpStore.sort('sortOrder', 'DESC');
        tmpStore.commitChanges()
        this.onClosePositionPopUp(argEvent)
    },

    onSetPositionReadOnly: function(argEvent){
        this.getPosition().setReadOnly(true)
    }
});