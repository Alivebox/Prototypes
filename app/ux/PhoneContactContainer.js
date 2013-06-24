Ext.define('Prototypes.ux.PhoneContactContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.phonecontactcontainer',
    layout: 'vbox',
    valuesPadding: undefined,
    containersPadding: undefined,
    labelsWidth: undefined,
    dataMaxLength: undefined,
    imputsWidth: undefined,
    linkButtonPadding: undefined,
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            items: [
                {
                    xtype: 'container',
                    itemId: 'elementscontainer',
                    autoScroll: true
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    padding: this.containersPadding,
                    itemId: 'newElementContainer',
                    listeners: {
                        scope: this,
                        afterrender: this.onCloseNewPhoneContact
                    },
                    items:[
                        {
                            xtype:'combobox',
                            fieldLabel: null,
                            itemId: 'newPhoneCombo',
                            emptyText: 'Select phone label...',
                            editable:false,
                            width: this.imputsWidth,
                            store:[
                                ['Phone','Phone'],
                                ['Mobile','Mobile'],
                                ['Fax','Fax'],
                                ['Custom','Custom']
                            ],
                            listeners: {
                                scope: this,
                                change: this.onLabelSelectionChange
                            }
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'newPhoneLabel',
                            emptyText: 'Set phone label...',
                            width: this.imputsWidth,
                            maxLength: this.dataMaxLength
                        },
                        {
                            xtype: 'flagscombobox',
                            itemId: 'newFlagSelected',
                            width: this.imputsWidth
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'newPhoneValue',
                            emptyText: 'Set phone number...',
                            width: this.imputsWidth,
                            maxLength: this.dataMaxLength
                        },
                        {
                            xtype: 'button',
                            iconCls: 'bin-closed-icon',
                            border: false,
                            listeners: {
                                scope: this,
                                click: this.onCloseNewPhoneContact
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'disk-icon',
                            border: false,
                            listeners: {
                                scope: this,
                                click: this.onSaveNewPhoneContact
                            }
                        }
                    ]
                },
                {
                    xtype: 'linkbutton',
                    text: 'Add phone',
                    padding: this.linkButtonPadding,
                    handler: function () {
                        me.onAddNewPhoneContact();
                    }
                }
            ]
        });

        this.callParent(arguments)
    },

    onLabelSelectionChange:function(argComponent, argNewValue, argOldValue, argEventOpts){
        var tmpNewPhoneLabel = this.down('textfield[itemId=newPhoneLabel]');
        if(argNewValue==='Custom'){
            var tmpNewPhoneCombo = this.down('combobox[itemId=newPhoneCombo]');
            tmpNewPhoneLabel.setVisible(true);
            tmpNewPhoneCombo.setVisible(false);
            tmpNewPhoneLabel.setValue('');
            tmpNewPhoneLabel.focus();
        }else{
            tmpNewPhoneLabel.setValue(argNewValue);
        }
    },

    onCloseNewPhoneContact: function(){
        var tmpElementsContainer = this.down('container[itemId=newElementContainer]');
        var tmpNewPhoneLabel = this.down('textfield[itemId=newPhoneLabel]');
        var tmpNewPhoneValue = this.down('textfield[itemId=newPhoneValue]');
        var tmpFlagSelected = this.down('combobox[itemId=newFlagSelected]');
        tmpNewPhoneLabel.reset();
        tmpNewPhoneValue.reset();
        tmpFlagSelected.reset();
        tmpElementsContainer.setVisible(false);
    },

    onSaveNewPhoneContact: function(){
        var tmpElementsContainer = this.down('container[itemId=elementscontainer]');
        var tmpNewPhoneLabel = this.down('textfield[itemId=newPhoneLabel]');
        var tmpNewPhoneValue = this.down('textfield[itemId=newPhoneValue]');
        var tmpFlagSelected = this.down('combobox[itemId=newFlagSelected]');
        var tmpElement = this.onCreatePhoneContactElement(tmpNewPhoneLabel.getValue(),tmpNewPhoneValue.getValue(), tmpFlagSelected.displayTplData[0].fileName);
        tmpElementsContainer.add(tmpElement);
        this.onCloseNewPhoneContact();
    },

    onAddNewPhoneContact: function () {
        var tmpNewPhoneLabel = this.down('textfield[itemId=newPhoneLabel]');
        var tmpNewPhoneCombo = this.down('combobox[itemId=newPhoneCombo]');
        var tmpNewPhoneValue = this.down('textfield[itemId=newPhoneValue]');
        var tmpFlagSelected = this.down('combobox[itemId=newFlagSelected]');
        var tmpElementsContainer = this.down('container[itemId=newElementContainer]');
        tmpNewPhoneLabel.setVisible(false);
        tmpNewPhoneCombo.setVisible(true);
        tmpElementsContainer.setVisible(true);
        tmpNewPhoneLabel.reset();
        tmpNewPhoneCombo.reset();
        tmpNewPhoneValue.reset();
        tmpFlagSelected.reset();
    },

    onCreatePhoneContactElement: function (argLabel, argValue, argPath) {
        var tmpElement = Ext.create('Ext.container.Container', {
            layout: 'column',
            padding: this.containersPadding,
            items: [
                {
                    xtype: 'label',
                    text: argLabel+':',
                    width: this.labelsWidth
                },
                {
                    xtype:'image',
                    src: argPath,
                    padding: this.valuesPadding
                },
                {
                    xtype: 'label',
                    text: argValue,
                    padding: '0 0 0 5'
                }
            ]
        });
        return tmpElement;
    }
});