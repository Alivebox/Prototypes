Ext.define('Prototypes.view.vendorscustomers.summary.AdittionInfoSummary', {

    extend: 'Ext.container.Container',
    alias: 'widget.adittioninfosummary',
    layout: 'vbox',
    initComponent: function () {

        this.items = [
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '5 0 0 0',
                items: [
                    {
                        xtype: 'label',
                        text: 'Billing Address:',
                        padding: '5 0 0 0',
                        width: 170
                    },
                    {
                        xtype:'image',
                        src: 'resources/icons/ShowMgrImages/flags/United States of America.png',
                        padding: '0 0 0 3'
                    },
                    {
                        xtype: 'label',
                        text: '227762 Antonio Pkwy L1-650 Ladera Ranch, CA 92694',
                        padding: '0 0 0 5'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '5 0 0 0',
                items: [
                    {
                        xtype: 'label',
                        text: 'Shipping Address:',
                        padding: '5 0 0 0',
                        width: 170
                    },
                    {
                        xtype:'image',
                        src: 'resources/icons/ShowMgrImages/flags/United States of America.png',
                        padding: '0 0 0 3'
                    },
                    {
                        xtype: 'label',
                        text: '227762 Antonio Pkwy L1-650 Ladera Ranch, CA 92694',
                        padding: '0 0 0 5'
                    }
                ]
            },
            {
                xtype: 'addresscontactcontainer',
                padding: '0 0 0 0',
                valuesPadding: '0 0 0 64',
                containersPadding: '5 0 0 0',
                linkButtonPadding:'5 0 0 175',
                labelsWidth: 109,
                descriptionWidth: 350,
                descriptionMaxLength: 175,
                dataMaxLength: 15,
                imputsWidth: 125
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '5 0 0 0',
                items: [
                    {
                        xtype: 'label',
                        text: 'Description:'
                    },
                    {
                        xtype: 'label',
                        padding: '0 0 0 105',
                        width: 600,
                        text: 'ShowMgr.com is a configurable Enterprise Resource Planning software platform that allows you to manage clients, work, resources & business processes with ease and confidence.'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: 'hbox',
                padding: '5 0 0 0',
                items: [
                    {
                        xtype: 'label',
                        text: 'More Info:'
                    },
                    {
                        xtype: 'label',
                        padding: '0 0 0 117',
                        width: 600,
                        text: 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer signiferumque eu per. In usu latine equidem dolores. Quo no falli viris intellegam, ut fugit veritus placerat per. Ius id vidit volumus mandamus, vide veritus democritum te nec, ei eos debet libris consulatu. No mei ferri graeco dicunt, ad cum veri accommodare. Sed at malis omnesque delicata, usu et iusto zzril meliore. Dicunt maiorum eloquentiam cum cu, sit summo dolor essent te. Ne quodsi nusquam legendos has, ea dicit voluptua eloquentiam pro, ad sit quas qualisque. Eos vocibus deserunt quaestio ei. Blandit incorrupte quaerendum in quo, nibh impedit id vis, vel no nullam semper audiam. Ei populo graeci consulatu mei, has ea stet modus phaedrum. Inani oblique ne has, duo et veritus detraxit. Tota ludus oratio ea mel, offendit persequeris ei vim. Eos dicat oratio partem ut, id cum ignota senserit intellegat. Sit inani ubique graecis ad, quando graecis liberavisse et cum, dicit option eruditi at duo. Homero salutatus suscipiantur eum id, tamquam voluptaria expetendis ad sed, nobis feugiat similique usu ex. Eum hinc argumentum te, no sit percipit adversarium, ne qui feugiat persecuti.'
                    }
                ]
            }
        ]
        this.callParent(arguments)
    }

});