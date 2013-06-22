Ext.define('Prototypes.controller.order.admin.ElementGroupsController', {

    extend: "Ext.app.Controller",

    refs: [
        {
            ref:'formOrderAdminElementGroups',
            selector:'formorderadminelementgroups'
        },
        {
            ref:'logProjectComboBox',
            selector:'formorderadminelementgroups [itemId=logProjectComboBox]'
        },
        {
            ref:'shareTypeComboBox',
            selector:'formorderadminelementgroups [itemId=shareTypeComboBox]'
        }
    ],

    init: function () {
        this.control({
            'gridorderadminelementgroups': {
                displaySearchWindow:this.onDisplaySearchWindow,
                createGroup:this.onCreateGroup,
                btnReload:this.onBtnReload,
                btnSearch:this.onBtnSearch,
                btnBlankAdd:this.onBtnBlankAdd,
                btnGroupAdd:this.onBtnGroupAdd,
                btnGreenLock:this.onBtnGreenLock,
                btnEmail:this.onBtnEmail,
                btnBlankEdit:this.onBtnBlankEdit,
                blankDelete:this.onBlankDelete
            },
            'orderadminelementgroupspopup': {
                closePositionPopUp:this.onClosePositionPopUp,
                submitPositionPopUp:this.onSubmitPositionPopUp
            }
        })
    },

    onDisplaySearchWindow:function() {
        alert('Display search windows Event')
    },

    onCreateGroup:function() {
        alert('Create Group Event')
    },

    onBtnReload:function() {
        alert('Reload Event')
    },

    onBtnSearch:function() {
        alert('Search Event')
    },

    onBtnBlankAdd:function() {
        alert('Blank Add Event')
    },

    onBtnGroupAdd:function() {
        alert('Group Add Event')
    },

    onBtnGreenLock:function() {
        alert('Green Lock Event')
    },

    onBtnEmail:function() {
        alert('Email Event')
    },

    onBtnBlankEdit:function(argGrid,argRow) {
        var tmpElementGroup = argGrid.store.getAt(argRow)
        this.elementGroupsPopUp = Ext.create('Prototypes.view.order.admin.OrderAdminElementGroupsPopUp')
        this.elementGroupsPopUp.title = 'Modify Dynamic Group'
        this.elementGroupsPopUp.show()
        this.getFormOrderAdminElementGroups().loadRecord(tmpElementGroup)
        this.getShareTypeComboBox().setValue(tmpElementGroup.data.shareType)
    },

    onBlankDelete:function() {
        alert('Blank delete Event')
    },

    onClosePositionPopUp: function(argEvent){
        var tmpWindow = argEvent;
        tmpWindow.close();
    },

    onSubmitPositionPopUp: function(argEvent){
        var tmpFormPosition = this.getFormOrderAdminElementGroups().getRecord()
        var tmpStore = this.getStore('order.admin.ElementGroups')
        var tmpIndex = tmpStore.find('id', tmpFormPosition.data.id)
        var tmpModel = tmpStore.getAt(tmpIndex)
        tmpModel.set('groupName' , tmpFormPosition.data.groupName)
        tmpModel.set('shareType' , this.getShareTypeComboBox().getValue())
        tmpStore.sort('id', 'DESC');
        tmpStore.commitChanges()
        this.onClosePositionPopUp(argEvent)
    }
});