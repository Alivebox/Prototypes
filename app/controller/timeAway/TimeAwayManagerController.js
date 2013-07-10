Ext.define('Prototypes.controller.timeaway.TimeAwayManagerController', {

    extend: "Ext.app.Controller",

    refs: [
        {
            ref: 'requestDetailsGrid',
            selector: 'gridrequestdetails'
        },
        {
            ref: 'requestCategory',
            selector: 'formrequestdetails [itemId=requestdetailscategory]'
        },
        {
            ref: 'requestType',
            selector: 'formrequestdetails [itemId=requestdetailstype]'
        },
        {
            ref: 'requestReason',
            selector: 'formrequestdetails [itemId=requestdetailsreason]'
        },
        {
            ref: 'requestStatus',
            selector: 'formrequestdetails [itemId=requestdetailsstatus]'
        },
        {
            ref: 'rightPanel',
            selector: 'summaryinformation'
        },
        {
            ref: 'tabContainer',
            selector: 'timeawaymanagertabcontainer'
        },
        {
            ref: 'resourceFilter',
            selector: 'managerfilter [itemId=resourceFilter]'
        },
        {
            ref: 'statusFilter',
            selector: 'managerfilter [itemId=statusFilter]'
        },
        {
            ref: 'periodFilter',
            selector: 'managerfilter [itemId=periodFilter]'
        },
        {
            ref: 'managerfilter',
            selector: 'managerfilter'
        },
        {
            ref: 'restrictionsGrid',
            selector: 'gridgrouprestrictions'
        },
        {
            ref: 'formPolicy',
            selector: 'formpolicy'
        }

    ],

    init: function () {
        this.control({
            gridtimeawayrequest:{
                select: this.onGridRowSelected
            },
            formrequestdetails:{
                clearFrom: this.onClearRequestDetailsForm
            },
            timeawaymanagertabcontainer:{
                beforetabchange: this.onTabChange
            },
            managerfilter: {
                afterrender: this.hidePeriodDisplay
            },
            gridgroupsrestrictionstoolbar:{
                groupRestrictionsAddRow: this.onGroupRestrictionsAddRow
            },
            formpolicy: {
                dailyCarryoverChanged: 'showDailyCarryoverSchedule',
                monthlyCarryoverChanged: 'showMonthlyCarryoverSchedule',
                weeklyCarryoverChanged: 'showWeeklyCarryoverSchedule',
                yearlyCarryoverChanged: 'showYearlyCarryoverSchedule',
                dailyAccrualChanged: 'showDailyAccrualSchedule',
                monthlyAccrualChanged: 'showMonthlyAccrualSchedule',
                weeklyAccrualChanged: 'showWeeklyAccrualSchedule',
                yearlyAccrualChanged: 'showYearlyAccrualSchedule'
            }
        })
    },

    onGroupRestrictionsAddRow: function(argRecord){
        this.getRestrictionsGrid().store.insert(0,argRecord);
    },

    onTabChange: function( tabPanel, newCard, oldCard, eOpts){
        if(newCard.displayPeriod){
            this.showPeriodDisplay();
        }else{
            this.hidePeriodDisplay();
        }
        if(!newCard.showRigthWing){
            this.getRightPanel().collapse( 'left', false);
            this.getTabContainer().setWidth(1100);
            this.hideFilterDisplay();
        }else{
            this.getRightPanel().expand(false);
            this.getRightPanel().doLayout();
            this.getTabContainer().setWidth(995);
            this.showFilterDisplay();

        }
    },

    hideFilterDisplay: function(){
        this.getResourceFilter().setVisible(false);
        this.getStatusFilter().setVisible(false);
        this.getManagerfilter().doLayout();
    },

    showFilterDisplay: function(){
        this.getResourceFilter().setVisible(true);
        this.getStatusFilter().setVisible(true);
        this.getManagerfilter().doLayout();
    },

    hidePeriodDisplay: function(){
        this.getPeriodFilter().setVisible(false);
        this.getManagerfilter().doLayout();
    },

    showPeriodDisplay: function(){
        this.getPeriodFilter().setVisible(true);
        this.getManagerfilter().doLayout();
    },

    onGridRowSelected: function(argGrid, argRow){
        this.onClearRequestDetailsForm();
        var tmpRequestCategory = this.getRequestCategory();
        var tmpRequestType = this.getRequestType();
        var tmpRequestReason = this.getRequestReason();
        var tmpRequestStatus = this.getRequestStatus();
        tmpRequestCategory.setText(argRow.data['category']);
        tmpRequestType.setValue(argRow.data['typeValue']);
        tmpRequestReason.setText(argRow.data['reason']);
        tmpRequestStatus.setValue(argRow.data['statusValue']);
        this.loadRequestDetailsGridStore(argRow.data['startDate'], argRow.data['endDate']);
    },

    loadRequestDetailsGridStore: function(argStartDate, argEndtDate){
        var tmpRequestDetailsGrid = this.getRequestDetailsGrid();
        var tmpRequestDetailsStore = tmpRequestDetailsGrid.getStore();
        tmpRequestDetailsStore.add(this.createRequestDetailsGridRow(argEndtDate,"4.0","8:00 am","12:00 pm","(GMT -8:00) PT"));
        tmpRequestDetailsStore.add(this.createRequestDetailsGridRow(argStartDate,"8.0","","",""));
        tmpRequestDetailsStore.add(this.createRequestDetailsGridRow(argStartDate,"8.0","","",""));
    },

    createRequestDetailsGridRow: function(argDate, argDuration, argStartTime,argEndTime, argTimeZone){
        var tmpData = Ext.create('Prototypes.model.timeaway.timeawaymanager.RequestDetails',{
            date: argDate, duration: argDuration, startTime: argStartTime, endTime: argEndTime, timeZone: argTimeZone
        });
        return tmpData;
    },

    onClearRequestDetailsForm: function(){
        var tmpRequestCategory = this.getRequestCategory();
        var tmpRequestType = this.getRequestType();
        var tmpRequestReason = this.getRequestReason();
        var tmpRequestStatus = this.getRequestStatus();
        tmpRequestCategory.setText('');
        tmpRequestType.reset();
        tmpRequestReason.setText('');
        tmpRequestStatus.reset();
        this.getRequestDetailsGrid().getStore().removeAll();
    },
    
    showDailyCarryoverSchedule: function(){
        if(!this.getFormPolicy().down('#rfCarryoverDaily').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnCarryoverSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.DailySchedule');
        tmpContainer.add(tmpView);
    },

    showWeeklyCarryoverSchedule: function(){
        if(!this.getFormPolicy().down('#rfCarryoverWeekly').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnCarryoverSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.WeeklySchedule');
        tmpContainer.add(tmpView);
    },

    showMonthlyCarryoverSchedule: function(){
        if(!this.getFormPolicy().down('#rfCarryoverMonthly').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnCarryoverSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.MonthlySchedule');
        tmpContainer.add(tmpView);
    },

    showYearlyCarryoverSchedule: function(){
        if(!this.getFormPolicy().down('#rfCarryoverYearly').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnCarryoverSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.YearlySchedule');
        tmpContainer.add(tmpView);
    },

    showDailyAccrualSchedule: function(){
        if(!this.getFormPolicy().down('#rfAccrualDaily').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnAccrualSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.DailySchedule');
        tmpContainer.add(tmpView);
    },
    
    showWeeklyAccrualSchedule: function(){
        if(!this.getFormPolicy().down('#rfAccrualWeekly').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnAccrualSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.WeeklySchedule');
        tmpContainer.add(tmpView);
    },
    
    showMonthlyAccrualSchedule: function(){
        if(!this.getFormPolicy().down('#rfAccrualMonthly').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnAccrualSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.MonthlySchedule');
        tmpContainer.add(tmpView);
    },
    
    showYearlyAccrualSchedule: function(){
        if(!this.getFormPolicy().down('#rfAccrualYearly').checked){
            return;
        }
        var tmpContainer = this.getFormPolicy().down('#ctnAccrualSchedule');
        tmpContainer.removeAll();
        var tmpView = Ext.create('Prototypes.view.timeaway.timeawaymanager.policymanager.schedule.YearlySchedule');
        tmpContainer.add(tmpView);
    }

});