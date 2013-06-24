Ext.define('Prototypes.ux.AddressContactContainer', {

    extend: 'Ext.container.Container',
    alias: 'widget.addresscontactcontainer',
    layout: 'vbox',
    valuesPadding: undefined,
    containersPadding: undefined,
    labelsWidth: undefined,
    descriptionWidth: undefined,
    dataMaxLength: undefined,
    descriptionMaxLength: undefined,
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
                        afterrender: this.onCloseNewContact
                    },
                    items:[
                        {
                            xtype:'combobox',
                            fieldLabel: null,
                            itemId: 'newAddressCombo',
                            emptyText: 'Select address label...',
                            editable:false,
                            width: this.imputsWidth,
                            store:[
                                ['Billing Address','Billing Address'],
                                ['Shipping Address','Shipping Address'],
                                ['Custom','Custom']
                            ],
                            listeners: {
                                scope: this,
                                change: this.onLabelSelectionChange
                            }
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'newAddressLabel',
                            emptyText: 'Set address label...',
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
                            itemId: 'newAddressValue',
                            emptyText: 'Set address...',
                            width: this.descriptionWidth,
                            maxLength: this.descriptionMaxLength
                        },
                        {
                            xtype: 'button',
                            iconCls: 'bin-closed-icon',
                            border: false,
                            listeners: {
                                scope: this,
                                click: this.onCloseNewContact
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'disk-icon',
                            border: false,
                            listeners: {
                                scope: this,
                                click: this.onSaveNewContact
                            }
                        }
                    ]
                },
                {
                    xtype: 'linkbutton',
                    text: 'Add address',
                    padding: this.linkButtonPadding,
                    handler: function () {
                        me.onAddNewContact();
                    }
                }
            ]
        });

        this.callParent(arguments)
    },

    onLabelSelectionChange:function(argComponent, argNewValue, argOldValue, argEventOpts){
        var tmpNewAddressLabel = this.down('textfield[itemId=newAddressLabel]');
        if(argNewValue==='Custom'){
            var tmpNewAddressCombo = this.down('combobox[itemId=newAddressCombo]');
            tmpNewAddressLabel.setVisible(true);
            tmpNewAddressCombo.setVisible(false);
            tmpNewAddressLabel.setValue('');
            tmpNewAddressLabel.focus();
        }else{
            tmpNewAddressLabel.setValue(argNewValue);
        }
    },

    onCloseNewContact: function(){
        var tmpElementsContainer = this.down('container[itemId=newElementContainer]');
        var tmpNewAddressLabel = this.down('textfield[itemId=newAddressLabel]');
        var tmpNewAddressValue = this.down('textfield[itemId=newAddressValue]');
        var tmpFlagSelected = this.down('combobox[itemId=newFlagSelected]');
        tmpNewAddressLabel.reset();
        tmpNewAddressValue.reset();
        tmpFlagSelected.reset();
        tmpElementsContainer.setVisible(false);
    },

    onSaveNewContact: function(){
        var tmpElementsContainer = this.down('container[itemId=elementscontainer]');
        var tmpNewAddressLabel = this.down('textfield[itemId=newAddressLabel]');
        var tmpNewAddressValue = this.down('textfield[itemId=newAddressValue]');
        var tmpFlagSelected = this.down('combobox[itemId=newFlagSelected]');
        var tmpElement = this.onCreateContactElement(tmpNewAddressLabel.getValue(),tmpNewAddressValue.getValue(), tmpFlagSelected.displayTplData[0].fileName);
        tmpElementsContainer.add(tmpElement);
        this.onCloseNewContact();
    },

    onAddNewContact: function () {
        var tmpNewAddressLabel = this.down('textfield[itemId=newAddressLabel]');
        var tmpNewAddressCombo = this.down('combobox[itemId=newAddressCombo]');
        var tmpNewAddressValue = this.down('textfield[itemId=newAddressValue]');
        var tmpElementsContainer = this.down('container[itemId=newElementContainer]');
        var tmpFlagSelected = this.down('combobox[itemId=newFlagSelected]');
        tmpNewAddressLabel.setVisible(false);
        tmpNewAddressCombo.setVisible(true);
        tmpElementsContainer.setVisible(true);
        tmpNewAddressLabel.reset();
        tmpNewAddressCombo.reset();
        tmpNewAddressValue.reset();
        tmpFlagSelected.reset();
    },

    onCreateContactElement: function (argLabel, argValue, argPath) {
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
                    width: this.descriptionWidth,
                    padding: '0 0 0 5'
                }
            ]
        });
        return tmpElement;
    }
});