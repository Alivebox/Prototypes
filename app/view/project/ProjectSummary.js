Ext.define('Prototypes.view.project.ProjectSummary', {

    extend: 'Ext.container.Container',
    alias: 'widget.projectsummary',
    layout: 'column',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'projectsummaryheader'
                    },
                    {
                        xtype: 'projectsummarytab'
                    }
                ]
            },
            {
                xtype: 'projectsummaryoptions'
            }
        ]
        this.callParent(arguments)
    }
});