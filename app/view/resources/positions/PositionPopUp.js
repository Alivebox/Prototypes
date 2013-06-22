Ext.define('Prototypes.view.resources.positions.PositionPopUp', {

    extend:'Ext.window.Window',
    alias: 'widget.positionpopup',
    resizable: true,
    height: 300,
    width: 600,
    modal: true,
    region: 'center',
    requieres:[
        'Prototypes.view.resources.positions.FormResoucesPositions',
        'Prototypes.view.resources.positions.FormCheckResoucesPositions'
    ],
    initComponent:function () {
        this.items = [
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'formresoucespositions'
                    },
                    {
                        xtype: 'formcheckresoucespositions'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'button',
                        text: 'Cancel',
                        listeners: {
                            scope: this,
                            click: this.onClosePositionPopUp
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        listeners: {
                            scope: this,
                            click: this.onSubmitPositionPopUp
                        }
                    }
                ]
            }
        ],
        this.callParent(arguments);
    },

    onClosePositionPopUp: function(){
        this.fireEvent('closePositionPopUp', this);
    },

    onSubmitPositionPopUp: function(){
        this.fireEvent('submitPositionPopUp', this);
    }
});