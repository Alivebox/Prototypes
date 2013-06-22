Ext.define('Prototypes.view.project.ProjectSummaryTab', {

    extend: 'Ext.tab.Panel',
    alias: 'widget.projectsummarytab',
    initComponent:function () {
        this.items = [
            {
                title: 'Summary',
                xtype: 'projectsummaryform'
            },
            {
                title: 'Orders'
            },
            {
                title: 'Worksheet'
            },
            {
                title: 'Billing'
            },
            {
                title: 'PO'
            },
            {
                title: 'Shipping'
            },
            {
                title: 'Rate Agreement'
            },
            {
                title: 'Resources'
            },
            {
                title: 'Forms'
            }
        ]
        this.callParent(arguments)
    }
});