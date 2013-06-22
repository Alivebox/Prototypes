Ext.define('Prototypes.view.resources.positions.FormCheckResoucesPositions', {

    extend: 'Ext.container.Container',
    alias: 'widget.formcheckresoucespositions',
    items: [
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype: 'label',
                    text: 'Active'
                },
                {
                    xtype: 'label',
                    text: 'Position Categories'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbbtlActive'
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbbtlPosition'
                },
                {
                    xtype:'label',
                    text:'BTL - Below The Line'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbatlActive'
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbatlPosition'
                },
                {
                    xtype:'label',
                    text:'BTL - Above The Line'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbvenActive'
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbvenPosition'
                },
                {
                    xtype:'label',
                    text:'VEN - Vendor'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbstfActive'
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbstfPosition'
                },
                {
                    xtype:'label',
                    text:'Staff'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbxcnActive'
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbxcnPosition'
                },
                {
                    xtype:'label',
                    text:'External Contact'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbgstActive'
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbgstPosition'
                },
                {
                    xtype:'label',
                    text:'Guess'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbtrdActive',
                    disabled: true
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbtrdPosition',
                    disabled: true
                },
                {
                    xtype:'label',
                    text:'SYS_TRD - System Trade '
                },
                {
                    xtype:'label',
                    text:'--- System Defined ---'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbtrvActive',
                    disabled: true
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbtrvPosition',
                    disabled: true
                },
                {
                    xtype:'label',
                    text:'SYS_TRV - System Travel'
                },
                {
                    xtype:'label',
                    text:'--- System Defined ---'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'column',
            items: [
                {
                    xtype:'checkbox',
                    itemdId:'cbsysvenActive',
                    disabled: true
                },
                {
                    xtype:'checkbox',
                    itemdId:'cbsysvenPosition',
                    disabled: true
                },
                {
                    xtype:'label',
                    text:'SYS_VEN - System Vendor'
                },
                {
                    xtype:'label',
                    text:'--- System Defined ---'
                }
            ]
        }
    ]
});