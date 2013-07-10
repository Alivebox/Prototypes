Ext.define('Prototypes.view.timeaway.timeawayrequest.graphical.ApprovedRequestDetails', {

    extend: 'Ext.panel.Panel',
    alias: 'widget.approvedrequestdetails',
    initComponent:function () {
        this.items = [
            {
                xtype: 'fieldset',
                title: 'Approved Requests',
                items: [
                    {
                        xtype: 'container',
                        layout: 'column',
                        padding: '10 10 10 10',
                        items: [
                            {
                                xtype: 'coloredsquare'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblPTODescription',
                                padding: '0 0 0 10',
                                text: 'PTO'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblPTOQuantity',
                                text: '2'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        padding: '10 10 10 10',
                        items: [
                            {
                                xtype: 'coloredsquare',
                                color: '#669900'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lbltrainingDescription',
                                padding: '0 0 0 10',
                                text: 'Training'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblTrainingQuantity',
                                text: '1'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'column',
                        padding: '10 10 10 10',
                        items: [
                            {
                                xtype: 'coloredsquare',
                                color: '#0099FF'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblOrderDescription',
                                padding: '0 0 0 10',
                                text: 'Order'
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblOrderQuantity',
                                text: '1'
                            }
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }
});