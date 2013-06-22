Ext.define('Prototypes.view.project.ProjectSummaryForm', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.projectsummaryform',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'projectsummaryleftform'
                    },
                    {
                        xtype: 'projectsummaryrightform'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                padding: '0 0 0 400',
                items: [
                    {
                        xtype: 'button',
                        margin: '10 0 10 0',
                        text: 'Close'
                    },
                    {
                        xtype: 'button',
                        margin: '10 0 10 10',
                        text: 'Save As Draft'
                    },
                    {
                        xtype: 'button',
                        margin: '10 0 10 10',
                        text: 'Submit'
                    },
                    {
                        xtype: 'button',
                        margin: '10 0 10 10',
                        text: 'Submit & Close'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});