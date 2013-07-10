var tmpStoreRequest = Ext.create('Ext.data.Store', {
    fields:[
        {
            name: 'date',
            type: 'date',
            dateFormat: 'Y-m-d',
            submitFormat: 'Y-m-d'
        },
        {
            name:'duration',
            type:'string'
        },
        {
            name:'startTime',
            type:'string'
        },
        {
            name:'endTime',
            type:'string'
        },
        {
            name:'timeZone',
            type:'string'
        },
        {
            name:'status',
            type:'string'
        },
        {
            name:'approver',
            type:'string'
        },
        {
            name:'reason',
            type:'string'
        }
    ],
    data: [
        { "date": "2013-06-20", "status": "Reached", "startTime": "8:00 AM", "endTime": "4:00 PM", "approver": "Kent, Clark", "reason": "Test approver time away", "timeZone": "(GMT-8:00)"},
        { "date": "2013-07-21", "status": "NotReached", "startTime": "8:00 AM", "endTime": "4:00 PM", "approver": "Kent, Clark", "reason": "Test approver time away", "timeZone": "(GMT-8:00)"},
        { "date": "2013-07-22", "status": "Reached", "startTime": "8:00 AM", "endTime": "2:00 PM", "approver": "Kent, Clark", "reason": "Test approver time away", "timeZone": "(GMT-8:00)"},
        { "date": "2013-08-23", "status": "NotReached", "startTime": "8:00 AM", "endTime": "4:00 PM", "approver": "Kent, Clark", "reason": "Test approver time away", "timeZone": "(GMT-8:00)"},
        { "date": "2013-07-24", "status": "Unavailable", "startTime": "8:00 AM", "endTime": "12:00 PM", "approver": "Kent, Clark", "reason": "Test approver time away", "timeZone": "(GMT-8:00)"}
    ]
});

Ext.define('Prototypes.controller.timeaway.TimeAwayController', {

    extend: "Ext.app.Controller",

    amText: 'AM',
    pmText: 'PM',

    refs: [
        {
            ref: 'gridRequestDetail',
            selector: 'gridrequestdetail'
        },
        {
            ref: 'cbApprover',
            selector: 'requestdetail [itemId=cbApprover]'
        },
        {
            ref: 'taReason',
            selector: 'requestdetail [itemId=taReason]'
        },
        {
            ref: 'taReason',
            selector: 'requestdetail [itemId=taReason]'
        },
        {
            ref: 'dateRangeSelectorContainer',
            selector: 'daterangeselectorcontainer'
        },
        {
            ref: 'doubleEnhancedDatePicker',
            selector: 'calendarrequest [itemId=doubleEnhancedDatePicker]'
        },
        {
            ref: 'graphicalGridContainer',
            selector: 'graphicalgridcontainer'
        },
        {
            ref: 'dfStartDate',
            selector: 'graphicalavailabilitytool [itemId=dfStartDate]'
        },
        {
            ref: 'cbDisplay',
            selector: 'graphicalavailabilitytool [itemId=cbDisplay]'
        },
        {
            ref: 'gGraphicalRequest',
            selector: 'graphicalgridcontainer [itemId=gGraphicalRequest]'
        }
    ],

    init: function () {
        this.control({
            'gridrequestdetail': {
                'updateTimeCheckChange': this.onUpdateTimeCheckChange

            },
            'requestdetail': {
                'confirmAndSend': this.onConfirmAndSend,
                'clear' : this.onClear
            },
            'calendarrequest > doubleenhanceddatepicker': {
                'dayMonthSelected': this.onDayMonthSelected,
                'monthChanged': this.onMonthChanged,
                'afterrender': this.onAfterRenderCalendarRequest
            },
            'graphicalgridcontainer': {
                'backwardclick': this.onBackwardClick,
                'fowardclick': this.onFowardClick
            },
            'graphicalavailabilitytool': {
                'selectedDateField': this.onSelectedDateField,
                'selectedDaysDisplay': this.onSelectedDaysDisplay
            }
        })
    },

    onUpdateTimeCheckChange: function (argEvent, argRowIndex, argChecked) {
        var tmpCheck = 0;
        var tmpStore = this.getGridRequestDetail().store;
        var tmpRequestModel = tmpStore.getAt(argRowIndex)
        if (tmpRequestModel.data.updateTime == false) {
            this.updateDurationTime(tmpRequestModel);
            this.clearRequestDetail();
        }
        for (var tmpCont = 0; tmpCont < tmpStore.getCount() ; tmpCont++) {
            if (tmpStore.getAt(tmpCont).data.updateTime == true) {
                tmpCheck++;
                if (tmpCheck > 1) {
                    tmpStore.getAt(argRowIndex).data.updateTime = false
                    this.getGridRequestDetail().getView().refresh();
                    break;
                }
            }
        }
        this.showUpdateDetailFields(tmpRequestModel);
    },

    showUpdateDetailFields: function(argRequestModel){
        this.getCbApprover().setValue(argRequestModel.data.approver);
        this.getTaReason().setValue(argRequestModel.data.reason);
    },

    updateDurationTime: function(argRequest) {
        var tmpStartTime = this.getTimeValue(argRequest.data.startTime);
        var tmpEndTime = this.getTimeValue(argRequest.data.endTime);
        var tmpDurationTime = tmpEndTime - tmpStartTime;
        if(tmpDurationTime <= 0) {
            argRequest.data.duration = '0'
        }
        argRequest.data.duration = tmpDurationTime.toString()
    },

    getTimeValue: function(argStrTime){
        if(Ext.isEmpty(argStrTime)) {
            return 0;
        }
        var tmpHoursArray = argStrTime.split(":", 2);
        var tmpMinutesArray = tmpHoursArray[1].split(" ", 2);
        var tmpHours = tmpHoursArray[0];
        if(parseInt(tmpHours) == 12){
            tmpHours = parseInt(tmpHours) - 12;
        }
        var tmpStrTime =tmpMinutesArray[1] ;
        if(tmpStrTime.toUpperCase() === this.pmText) {
            tmpHours = parseInt(tmpHours) + 12;
        }
        return parseInt(tmpHours);
    },

    onConfirmAndSend: function () {
        var tmpRequestModel = this.getSelectedUpdateRequestModel()
        this.updateDurationTime(tmpRequestModel);
        tmpRequestModel.data.startTime = tmpRequestModel.data.startTime.toUpperCase();
        tmpRequestModel.data.endTime = tmpRequestModel.data.endTime.toUpperCase();
        tmpRequestModel.data.approver =  this.getCbApprover().getValue();
        tmpRequestModel.data.reason = this.getTaReason().getValue();
        tmpStoreRequest.add(tmpRequestModel);
        this.setUpdateTimeFalse();
        this.clearRequestDetail();
        this.getGridRequestDetail().getView().refresh();
    },

    getSelectedUpdateRequestModel: function() {
        var tmpStore = this.getGridRequestDetail().store;
        for (var tmpCont = 0; tmpCont < tmpStore.getCount() ; tmpCont++) {
            var tmpRequestModel = tmpStore.getAt(tmpCont)
            if (tmpRequestModel.data.updateTime == true) {
                return tmpRequestModel;
            }
        }
        return undefined;
    },

    onClear: function () {
        this.getGridRequestDetail().store.removeAll()
        this.getGridRequestDetail().getView().refresh()
        this.clearRequestDetail()
    },

    setUpdateTimeFalse: function () {
        var tmpStore = this.getGridRequestDetail().store
        for (var tmpCont = 0; tmpCont < tmpStore.getCount() ; tmpCont++) {
            tmpStore.getAt(tmpCont).data.updateTime = false
        }
        this.getGridRequestDetail().getView().refresh()
    },

    clearRequestDetail: function () {
        this.getTaReason().setValue('')
        this.getCbApprover().reset()
    },

    onDayMonthSelected: function (argEvent, argDate, argCurrentMonth, argNextMonth) {
        var tmpRequest = this.findRequestByDate(argDate, tmpStoreRequest);
        if(tmpRequest == undefined) {
            var tmpNewRequestModel = Ext.create('Prototypes.model.timeaway.Request', {
                date : Ext.Date.format(argDate, "Y-m-d"),
                status: "",
                startTime: "",
                endTime: "",
                approver: "",
                reason: ""
            });
            this.addRequestToGrid(tmpNewRequestModel);
            return;
        }
        this.updateDurationTime(tmpRequest);
        this.setDoubleDatePickerClass(tmpRequest, true);
    },

    findRequestByDate: function (argDate, argStore) {
        var tmpSelectedDate = Ext.Date.format(argDate, "Y-m-d");
        for(var tmpCont=0; tmpCont < argStore.data.items.length; tmpCont++){
            var tmpRequest = argStore.getAt(tmpCont);
            var tmpDate = Ext.Date.format(tmpRequest.data.date, "Y-m-d");
            if(tmpDate == tmpSelectedDate) {
                return tmpRequest;
            }
        }
        return undefined;
    },

    /**
     * Yellow = Reached
     * Green = NotReached
     * Red = Unavailable
     * */
    setDoubleDatePickerClass: function(argRequest, argAddGridFlat) {
        if(argAddGridFlat){
            this.addRequestToGrid(argRequest);
        }
        if(argRequest.data.status === 'Unavailable'){
            this.getDoubleEnhancedDatePicker().onSetMonthsDateClass(argRequest.data.date, "cell-red");
            return;
        }
        if(argRequest.data.status === 'Reached'){
            this.getDoubleEnhancedDatePicker().onSetMonthsDateClass(argRequest.data.date, "cell-yellow");
            return;
        }
        if(argRequest.data.status === 'NotReached'){
            this.getDoubleEnhancedDatePicker().onSetMonthsDateClass(argRequest.data.date, "cell-green");
            return;
        }
    },

    addRequestToGrid: function(argRequest){
        var tmpGridRequestDetailStore = this.getGridRequestDetail().getStore();
        var tmpRequest = this.findRequestByDate(argRequest.data.date, tmpGridRequestDetailStore);
        if(tmpRequest == undefined) {
            tmpGridRequestDetailStore.add(argRequest);
        }
    },

    onSelectedDateField: function(argField, argValue){
        this.refreshGridView(argValue);
    },

    onBackwardClick: function(){
        var tmpDate = Ext.Date.add(this.getGraphicalGridContainer().selectedDate, Ext.Date.DAY, this.getDisplayDays() * -1);
        this.refreshGridView(tmpDate);
    },

    onFowardClick: function(){
        var tmpDate = Ext.Date.add(this.getGraphicalGridContainer().selectedDate, Ext.Date.DAY, this.getDisplayDays());
        this.refreshGridView(tmpDate);
    },

    refreshGridView: function(argDate) {
        this.getGraphicalGridContainer().setDateFilters(argDate);
        this.getGGraphicalRequest().store.removeAll();
        this.loadGenericStore(this.getGGraphicalRequest().store);
        this.getGGraphicalRequest().getView().refresh();
    },

    loadGenericStore: function(argStore){
        argStore.add({ "name": "Bruce Wayne", "position": "CAM1", "dateFilter1": this.getRandomAvailabilityStoreValue(), "dateFilter2": this.getRandomAvailabilityStoreValue(), "dateFilter3": this.getRandomAvailabilityStoreValue(),
        "dateFilter4": this.getRandomAvailabilityStoreValue(), "dateFilter5": this.getRandomAvailabilityStoreValue(), "dateFilter6": this.getRandomAvailabilityStoreValue(), "dateFilter7": this.getRandomAvailabilityStoreValue()});
        argStore.add({ "name": "Tony Stark", "position": "CAM1", "dateFilter1": this.getRandomAvailabilityStoreValue(), "dateFilter2": this.getRandomAvailabilityStoreValue(), "dateFilter3": this.getRandomAvailabilityStoreValue(),
        "dateFilter4": this.getRandomAvailabilityStoreValue(), "dateFilter5": this.getRandomAvailabilityStoreValue(), "dateFilter6": this.getRandomAvailabilityStoreValue(), "dateFilter7": this.getRandomAvailabilityStoreValue()});
        argStore.add({ "name": "Clark Kent", "position": "CAM1", "position": "CAM1", "dateFilter1": this.getRandomAvailabilityStoreValue(), "dateFilter2": this.getRandomAvailabilityStoreValue(), "dateFilter3": this.getRandomAvailabilityStoreValue(),
        "dateFilter4": this.getRandomAvailabilityStoreValue(), "dateFilter5": this.getRandomAvailabilityStoreValue(), "dateFilter6": this.getRandomAvailabilityStoreValue(), "dateFilter7": this.getRandomAvailabilityStoreValue()});
    },

    getRandomAvailabilityStoreValue: function(){
        var tmpNumber = this.getRandomMinMax(0,7);
        switch(tmpNumber)
        {
            case 0:
                return '';
            case 1:
                return 'PTO';
            case 2:
                return 'ORDER';
            case 3:
                return 'TRAINING';
        }
        return '';
    },

    getRandomMinMax :  function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    onMonthChanged: function(){
    },

    onSelectedDaysDisplay: function(argCombo, argRecords){
       this.getGraphicalGridContainer().recofigureDisplayDays(this.getDisplayDays());
       this.getGraphicalGridContainer().setDateFilters(this.getDfStartDate().getValue());
       this.refreshGridView(this.getDfStartDate().getValue());
    },

    getDisplayDays : function(){
        return parseInt(this.getCbDisplay().getValue().split(' ', 1));
    },

    onAfterRenderCalendarRequest: function(){
        debugger;
        for(var tmpCont=0; tmpCont < tmpStoreRequest.data.items.length; tmpCont++){
            var tmpRequest = tmpStoreRequest.data.items[tmpCont];
            this.setDoubleDatePickerClass(tmpRequest, false);
        }
    }
});