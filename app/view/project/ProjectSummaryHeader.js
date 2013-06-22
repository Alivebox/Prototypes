Ext.define('Prototypes.view.project.ProjectSummaryHeader', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.projectsummaryheader',
    title: 'Project #: 10604',
    width: 1000,
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '10 10 10 10',
                items: [
                    {
                        xtype: 'container',
                        items:[
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Project Code',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Project Title',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Status',
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: '0 0 0 10',
                        items:[
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Priority',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Category',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Type',
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Customer',
                        padding: '0 0 0 10',
                        readOnly: true
                    },
                    {
                        xtype: 'container',
                        padding: '0 0 0 10',
                        items:[
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Start Date',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'End Date',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Due Date',
                                readOnly: true
                            }
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});