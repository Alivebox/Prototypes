Ext.define('Prototypes.ux.CommentsContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.commentscontainer',
    height: 100,
    width: 500,
    commetsTitle: 'Title',
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        width: '90%',
                        name: 'lblCommentTitle',
                        itemId: 'lblCommentTitle',
                        style: 'font-weight:bold;',
                        text: this.commetsTitle
                    },
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/add.png',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onAddComments
                        }
                    },
                    {
                        xtype: 'button',
                        icon: '/resources/icons/ShowMgrImages/16x16/disk.png',
                        border: false,
                        listeners: {
                            scope: this,
                            click: this.onSaveComments
                        }
                    },
                    {
                        xtype: 'container',
                        itemId: 'elementscontainer',
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
            }
        ]
        this.callParent(arguments)
    },

    setTitle: function(argTitle){
        var tmpTitle = this.down('label[itemId=lblCommentTitle]');
        tmpTitle.text = argTitle;
    },

    onAddComments: function(){
        this.onCreateCommentElement();
    },

    onSaveComments: function() {

    },

    getDateFormat: function() {
        var tmpDate = new Date();
        var tmpString = Ext.Date.format(tmpDate, "Y-m-d g:i A");
        return tmpString;
    },

    onCreateCommentElement: function(){
        var tmpElement = Ext.create('Ext.container.Container', {
            layout: 'column',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Wayne, Bruce'
                        },
                        {
                            xtype: 'text',
                            text: this.getDateFormat()
                        },
                        {
                            xtype: 'container',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'linkbutton',
                                    text: 'Modify'
                                },
                                {
                                    xtype: 'linkbutton',
                                    text: 'Delete'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'textarea',
                    width: 250
                },
                {
                    xtype: 'fieldcontainer',
                    defaultType: 'checkboxfield',
                    items: [
                        {
                            boxLabel  : 'Print On Orders',
                            inputValue: '1',
                            checked   : true
                        }, {
                            boxLabel  : 'Print On Invoice',
                            inputValue: '2'
                        }, {
                            boxLabel  : 'Print On PO',
                            inputValue: '3'
                        }
                    ]
                }
            ]
        });
        var tmpElementsContainer = this.down('container[itemId=elementscontainer]');
        tmpElementsContainer.add(tmpElement);
    }
});