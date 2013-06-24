Ext.define('Prototypes.view.vendorscustomers.summary.SummaryTabContainer', {

    extend: 'Ext.tab.Panel',
    tabPosition: 'top',
    alias: 'widget.summarytabcontainer',

    initComponent: function () {

        this.items = [
            { title: 'Accounting', xtype: 'summaryaccounting'},
            { title: 'Rate Cards', xtype: 'gridsummaryratecards'},
            { title: 'Documents', xtype: 'gridsummarydocuments'},
            { title: 'Elements', xtype: 'gridsummaryelements'},
            { title: 'Linked Entities', xtype: 'gridsummarylinkedentities'}
        ],
        this.callParent();
    }
});