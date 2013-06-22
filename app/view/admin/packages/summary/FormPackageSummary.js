Ext.define('Prototypes.view.admin.packages.summary.FormPackageSummary', {

    extend: 'Mercury.ux.form.FormContainer',
    modelClassName: 'Prototypes.model.admin.packages.PackageSummary',
    alias: 'widget.formpackagesummary',

    initComponent: function(){
        this.items = [
            {
                xtype:'textfield',
                fieldLabel: 'Package Code',
                name: 'packageCode',
                width: 400,
                allowBlank:false
            },
            {
                xtype:'textfield',
                fieldLabel: 'Package Name',
                name: 'packageName',
                width: 400,
                allowBlank:false
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Order Class',
                editable: false,
                name: 'oderClass',
                width: 400,
                store: [
                    [1, '24P'],
                    [2, 'Accounting Service'],
                    [3, 'Animatic'],
                    [4, 'Appointment'],
                    [5, 'Art'],
                    [6, 'Asset'],
                    [7, 'Asset Rental'],
                    [8, 'Asset Services'],
                    [9, 'AUDIO - Audio Post'],
                    [10, 'AUDIO - Edit/Gen Audio Prod'],
                    [11, 'AUDIO - Surround Post'],
                    [12, 'AUDIO - VO Record'],
                    [13, 'Build'],
                    [14, 'CalcRec Sales'],
                    [15, 'Capital Planning'],
                    [16, 'Catering'],
                    [17, 'Cinematic'],
                    [18, 'Cost Allocation'],
                    [19, 'Customer Repair'],
                    [20, 'CW Order'],
                    [21, 'CW Shipping'],
                    [22, 'Debit Adjustment'],
                    [23, 'DELIVERABLE- CD/DVD Burn'],
                    [24, 'DELIVERABLE- Data Transfer'],
                    [25, 'DELIVERABLE- Demo Editing'],
                    [26, 'DELIVERABLE- DVD Authoring'],
                    [27, 'DELIVERABLE- Interactive Press'],
                    [28, 'DELIVERABLE- Loggin or SAMI'],
                    [29, 'DELIVERABLE- Video Dup']
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Package Type',
                name: 'packageType',
                editable: false,
                width: 400,
                store: [
                    [1, 'General'],
                    [2, 'Problem Code'],
                    [3, 'Preventative Maintenance'],
                    [4, 'Deal Demo'],
                    [5, 'Internal'],
                    [6, 'External']
                ]
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        width: 105,
                        text: 'Is Template:'
                    },
                    {
                        xtype: 'checkboxfield',
                        boxLabel: '* This setting will treat the package as a template. Elements will be assigned without the package parentage '
                    }
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Trade/Vendor',
                name: 'tradeVendor',
                editable: false,
                width: 400,
                store: [
                    [1, '[Trade] LOCKS'],
                    [2, '[Trade] Plumbing'],
                    [3, '[Vendor] _A Test'],
                    [4, '[Vendor] _A_SNW_TEST'],
                    [5, '[Vendor] 00paul'],
                    [6, '[Vendor] A_Jay'],
                    [7, '[Vendor] A_Jay 2'],
                    [8, '[Vendor] A_Mark'],
                    [9, '[Vendor] AA_Mark'],
                    [10, '[Vendor] aaa'],
                    [11, '[Vendor] aaa nh test 01'],
                    [12, '[Vendor] aaa nh test 02'],
                    [13, '[Vendor] aaa nh test 1'],
                    [14, '[Vendor] Abacus Merchant'],
                    [15, '[Vendor] Abba Hoteles'],
                    [16, '[Vendor] abc'],
                    [17, '[Vendor] abc'],
                    [18, '[Vendor] Able Rent A Car'],
                    [19, '[Vendor] Able Rent A Car'],
                    [20, '[Vendor] AC Hoteles'],
                    [21, '[Vendor] Acc-Nifos Hotels'],
                    [22, '[Vendor] Accor Hotels'],
                    [23, '[Vendor] Ace Rent A Car'],
                    [24, '[Vendor] Aco Rent A Car'],
                    [25, '[Vendor] Adams Mark Hotels'],
                    [26, '[Vendor] Advantage'],
                    [27, '[Vendor] AEG'],
                    [28, '[Vendor] AFFILIATED TV SERVICES']
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'System Division',
                editable: false,
                width: 400,
                store: [
                    [1, 'N/A'],
                    [2, '24P'],
                    [3, 'System Division 1'],
                    [4, 'System Division 2'],
                    [5, 'Testing']
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Division',
                editable: false,
                width: 400,
                store: [
                    [1, 'another testing division [SNWTEST2]'],
                    [2, 'Corporate [1299]'],
                    [3, 'Division 1 [DIV_01]'],
                    [4, 'Just a test [SNWTEST]'],
                    [5, 'NAzir Div1 [NAzir Div]']
                ]
            },
            {
                xtype: 'combobox',
                fieldLabel: 'Department',
                editable: false,
                width: 400,
                store: [
                    [1, '45151 [8855]'],
                    [2, 'another dept test [SNWTESTING]'],
                    [3, 'Another Test Dept [7788445]'],
                    [4, 'another try [4587]'],
                    [5, 'BATMAN RETURNS (2008) [M10223.0032]'],
                    [6, 'Complete test [1145]'],
                    [7, 'Customer Aa [S220934.8875]'],
                    [8, 'Customer D [S20054.2234]'],
                    [9, 'Customer G [S33955.2232]'],
                    [10, 'Customer I [S00234.8876]'],
                    [11, 'Customer J [S33245.0001]'],
                    [12, 'Customer X [S00943.0034]'],
                    [13, 'Customer Y [S33298.0022]'],
                    [14, 'Dep [TDEP]'],
                    [15, 'Department 123 [Dept123]'],
                    [16, 'dept 1 [9988]'],
                    [17, 'dept nh new 1 [3366]'],
                    [18, 'dept nh test [112244]'],
                    [19, 'dept3 [103]'],
                    [20, 'dev 644 department [121]'],
                    [21, 'Dreamworks [S98807.3344]'],
                    [22, 'final run 3 [9654]'],
                    [23, 'Final Test run1 [98745]'],
                    [24, 'funal run 2 [test123]'],
                    [25, 'Good Morning America [GMA]'],
                    [26, 'Information [999]'],
                    [27, 'jay [jay]'],
                    [28, 'jay2 [jay]'],
                    [29, 'Main Name [Dep1254]'],
                    [30, 'Nazir Dep1 [Nazir Dep1]']
                ]
            },
            {
                xtype: 'specialtextarea',
                textLabel: 'Description',
                textWidth: 105,
                textAreaWidth: 500,
                textMaxLength: 500
            },
            {
                xtype: 'container',
                layout: 'column',
                items: [
                    {
                        xtype: 'label',
                        width: 105,
                        text: 'Assign To New Projects:'
                    },
                    {
                        xtype: 'checkboxfield',
                        boxLabel: '* This setting if checked will indicate that this package should be automatically added to new projects'
                    }
                ]
            },
            {
                xtype: 'specialtextarea',
                textLabel: 'Keywords',
                textWidth: 105,
                textAreaWidth: 500,
                textMaxLength: 2000
            }
        ];
        this.callParent(arguments);
    }

});





