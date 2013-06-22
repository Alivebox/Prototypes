Ext.define('Prototypes.ux.SpecialTextArea', {

    extend: 'Ext.container.Container',
    alias: 'widget.specialtextarea',
    layout: 'column',
    textLabel: undefined,
    textMaxLength: undefined,
    textWidth: undefined,
    textAreaWidth: undefined,
    titleStyle: undefined,
    areaLabelLayout: 'vbox',
    textStatusSuffix: '',
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: this.areaLabelLayout,
                items: [
                    {
                        xtype: 'label',
                        itemId: 'textarealabel',
                        width: this.textWidth,
                        text: this.textLabel+':',
                        style: this.titleStyle
                    },
                    {
                        xtype: 'label',
                        itemId: 'textareastatus',
                        width: this.textWidth
                    }
                ]
            },
            {
                xtype: 'textareafield',
                itemId: 'textareacomponent',
                fieldLabel: null,
                maxLength: this.textMaxLength,
                width: this.textAreaWidth,
                listeners: {
                    scope: this,
                    afterrender: this.updateMessageLenght,
                    change: this.updateMessageLenght,
                    validitychange: this.onValidityChange

                }
            }
        ];
        this.callParent(arguments);
    },

    updateMessageLenght: function () {
        var tmpTextArea = this.down('textareafield[itemId=textareacomponent]');
        var tmpStatusLabel = this.down('label[itemId=textareastatus]');
        tmpStatusLabel.setText(tmpTextArea.getValue().length+' of '+this.textMaxLength + ' ' + this.textStatusSuffix);
    },
    onValidityChange: function(){
        var tmpTextArea = this.down('textareafield[itemId=textareacomponent]');
        if(tmpTextArea.getValue().length > this.textMaxLength){
            tmpTextArea.setValue(tmpTextArea.getValue().slice(0,this.textMaxLength));
            this.updateMessageLenght();
        }
    }
});