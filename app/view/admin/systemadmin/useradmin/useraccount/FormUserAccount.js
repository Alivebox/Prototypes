Ext.define('Prototypes.view.admin.systemadmin.useradmin.useraccount.FormUserAccount', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.admin.systemadmin.useradmin.UserAccount',
    alias: 'widget.formuseraccount',

    initComponent: function () {
        this.items = [
            {
                xtype: 'combobox',
                fieldLabel: 'Order Class',
                editable: false,
                name: 'oderClass',
                emptyText: '...Choose',
                width: 400,
                store: [
                    [1, '_Hajje1, Nazir´s'],
                    [2, 'ABBENDA, JOE'],
                    [3, 'ABE, BRIAN'],
                    [4, 'ABERNETHY, BOB'],
                    [5, 'ABRAHMSON, JEFF'],
                    [6, 'Abrams, Bill'],
                    [7, 'ABRAMSON, SAM'],
                    [8, 'ABRASAMBRA, SAM'],
                    [9, 'ACKER, GEORGE'],
                    [10, 'ACKER, SLAYTON'],
                    [11, 'AUDIO - Surround Post'],
                    [12, 'Ackerman, Brady'],
                    [13, 'Build'],
                    [14, 'ACKERMAN, CHARLES'],
                    [15, 'ACKERMAN, ELI'],
                    [16, 'ACKS , HARVEY'],
                    [17, 'ACOSTAS, GREG'],
                    [18, 'Adair, Bryan'],
                    [19, 'Adair, Tracey'],
                    [20, 'Adam, Brad'],
                    [21, 'ADAMS, BART'],
                    [22, 'ADAMS, CHIP'],
                    [23, 'ADAMS, CHIP'],
                    [24, 'ADAMS, CHRIS'],
                    [25, 'ADAMS, HANK'],
                    [26, 'Adams, Jeffery'],
                    [27, 'ADAMS, JOSH'],
                    [28, 'ADAMS, MAX'],
                    [30, 'ADAMS, ROB'],
                    [29, 'ADAMS, SCOTT'],
                    [31, 'Adams, Shannon'],
                    [32, 'ADAMS, SYLVIA']
                ]
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Last Name',
                name: 'lastName',
                width: 400
            },
            {
                xtype: 'textfield',
                fieldLabel: 'First Name',
                name: 'firstName',
                width: 400
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Email',
                name: 'email',
                width: 400
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Username',
                name: 'username',
                width: 400
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password',
                width: 400
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Password Confirm',
                inputType: 'password',
                width: 400
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Time Zone',
                editable: false,
                name: 'timeZone',
                emptyText: '...Choose',
                width: 400,
                store: [
                    [ 1, 'IDLW (-12:00)' ],
                    [ 2, 'BET (-11:00)' ],
                    [ 3, 'HAT (-10:00)' ],
                    [ 4, 'AKT (-09:00)' ],
                    [ 5, 'PT (-08:00)' ],
                    [ 6, 'MT (-07:00)' ],
                    [ 7, 'CT (-06:00)' ],
                    [ 8, 'ET (-05:00)' ],
                    [ 9, 'AT (-04:00)' ],
                    [ 10, 'BST (-03:00)' ],
                    [ 11, 'FST (-02:00)' ],
                    [ 12, 'AZOT (-01:00)' ],
                    [ 13, 'GMT (00:00)' ],
                    [ 14, 'CET (01:00)' ],
                    [ 15, 'EET (02:00)' ],
                    [ 16, 'MSK (03:00)' ]
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Daylight Savings',
                editable: false,
                name: 'lightSavings',
                emptyText: '...Choose',
                width: 400,
                store: [
                    [ 1, 'AZ - HI' ],
                    [ 2, 'US' ],
                    [ 3, 'AUS' ]
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Product',
                editable: false,
                name: 'product',
                emptyText: '...Choose',
                width: 400,
                store: [
                    [ 1, 'Remote (ROV)' ]
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Security Question',
                editable: false,
                name: 'securityQuestion',
                emptyText: '...Choose',
                width: 400,
                store: [
                    [ 1, 'Mothers birth place' ],
                    [ 2, 'Best childhood friend' ],
                    [ 3, 'Name of first pet' ],
                    [ 4, 'Favorite teacher' ],
                    [ 5, 'Favorite historical person' ],
                    [ 6, 'Grandfather´s occupation' ]
                ]
            },
            ,
            {
                xtype: 'specialtextarea',
                textLabel: 'Security Answer',
                textWidth: 105,
                textAreaWidth: 400,
                textMaxLength: 100
            }

        ]
        this.callParent();
    }

});