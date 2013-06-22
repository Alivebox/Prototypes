Ext.define('Prototypes.view.project.ProjectSummaryOptions', {

    extend: 'Ext.panel.Panel',
    title: 'Options',
    alias: 'widget.projectsummaryoptions',
    height: 800,
    width: 200,
    initComponent:function () {
        this.items = [
            {
              xtype: 'container',
                padding: '10 10 10 10',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'label',
                        text: 'Back To BillBoard'
                    },
                    {
                        xtype: 'label',
                        text: 'View Project Report'
                    },
                    {
                        xtype: 'label',
                        text: 'View Project Order Report'
                    },
                    {
                        xtype: 'label',
                        text: 'Documents'
                    },
                    {
                        xtype: 'label',
                        text: 'WIP Report'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});