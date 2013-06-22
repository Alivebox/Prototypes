Ext.define('Prototypes.view.project.contacts.ProjectSummaryContactsContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.projectsummarycontactscontainer',
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
                        text: 'Contacts',
                        width: '10%'
                    },
                    {
                        xtype: 'linkbutton',
                        text: 'reload',
                        width: '50%'
                    },
                    {
                        xtype: 'linkbutton',
                        text: 'Propagate Contacts to Orders'
                    },
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onAddContacts
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

    onAddContacts: function(){
        this.onCreateContatsElements();
    },

    onCreateContatsElements: function(){
        var tmpElement = Ext.create('Ext.container.Container', {
            layout: 'column',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            text: 'requestor'
                        },
                        {
                            xtype: 'linkbutton',
                            text: 'Razo, Tanya'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            text: '(ofc) 866-370-1169'
                        },
                        {
                            xtype: 'linkbutton',
                            text: '(cell) 123-444-5555'
                        }
                    ]
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/email.png',
                    border: false,
                    listeners: {
                        scope: this,
                        click: this.onAddContacts
                    }
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/pencil.png',
                    border: false,
                    listeners: {
                        scope: this,
                        click: this.onAddContacts
                    }
                },
                {
                    xtype: 'button',
                    icon: '/resources/icons/ShowMgrImages/16x16/delete.png',
                    border: false,
                    listeners: {
                        scope: this,
                        click: this.onAddContacts
                    }
                }

            ]
        });
        var tmpElementsContainer = this.down('container[itemId=elementsContainer]');
        tmpElementsContainer.add(tmpElement);
    }
});