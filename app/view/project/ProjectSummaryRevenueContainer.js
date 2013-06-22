Ext.define('Prototypes.view.project.ProjectSummaryRevenueContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.projectsummaryrevenuecontainer',
    height: 100,
    width: 500,
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        width: '90%',
                        text: 'REVENUE SOURCES'
                    },
                    {
                        xtype: 'label',
                        padding: '10 0 0 0',
                        text: '10%'
                    },
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onAddSources
                        }
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'elementsContainer',
                autoScroll: true,
                height: 80,
                width: '100%',
                border: 1,
                style: {
                    borderColor: '#aacccc',
                    borderStyle: 'inset'
                }
            }
        ]
        this.callParent(arguments)
    },

    onAddSources: function(){
        this.onCreateSourcesElements();
    },

    onCreateSourcesElements: function(){
        var tmpElement = Ext.create('Ext.container.Container', {
            layout: 'column',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            padding: '10 0 0 0',
                            text: '_Test Customer 00010'
                        },
                        {
                            xtype: 'label',
                            padding: '10 0 0 0',
                            text: '06/06/2013'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            padding: '10 0 0 0',
                            text: 'SAP Code: 5555-555556-8888888'
                        },
                        {
                            xtype: 'label',
                            padding: '10 0 0 0',
                            text: 'SAP Code: 1010-555555-5555555'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    padding: '10 0 0 0',
                    text: 'Percent: 70.00%'
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/pencil.png',
                    border: false
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/delete.png',
                    border: false
                }

            ]
        });
        var tmpElementsContainer = this.down('container[itemId=elementsContainer]');
        tmpElementsContainer.add(tmpElement);
    }
});