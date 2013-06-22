Ext.define('Prototypes.view.timeaway.timeawaymanager.policymanager.GridGroupsRestrictionsToolbar', {

    extend: 'Ext.grid.Panel',
    alias: 'widget.gridgroupsrestrictionstoolbar',
    disableSelection: true,
    sortableColumns: false,

    initComponent: function () {
        Ext.apply(this, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'divisionField',
                            listeners: {
                                scope: this,
                                specialkey: this.onAddNewRow
                            },
                            flex: 1
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'departmentField',
                            listeners: {
                                scope: this,
                                specialkey: this.onAddNewRow
                            },
                            flex: 1
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'groupField',
                            listeners: {
                                scope: this,
                                specialkey: this.onAddNewRow
                            },
                            flex: 1
                        },
                        {
                            xtype: 'numberfield',
                            itemId: 'limitField',
                            listeners: {
                                scope: this,
                                specialkey: this.onAddNewRow
                            },
                            flex: 1
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'efectiveStartField',
                            format: 'm-d-Y',
                            listeners: {
                                scope: this,
                                specialkey: this.onAddNewRow
                            },
                            flex: 1
                        },
                        {
                            xtype: 'datefield',
                            itemId: 'efectiveEndField',
                            format: 'm-d-Y',
                            listeners: {
                                scope: this,
                                specialkey: this.onAddNewRow
                            },
                            flex: 1
                        }
                    ]
                }
            ],

            columns: [
                {
                    xtype: 'gridcolumn',
                    text: 'Division',
                    menuDisabled: true,
                    resizable: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Department',
                    menuDisabled: true,
                    resizable: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Group',
                    menuDisabled: true,
                    resizable: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Limit',
                    menuDisabled: true,
                    resizable: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Efective Start',
                    menuDisabled: true,
                    resizable: false,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Efective End',
                    menuDisabled: true,
                    resizable: false,
                    flex: 1
                }
            ]
        }),
            this.callParent();
    },

    onAddNewRow: function (argComponent, argEvent, argOptions) {
        if (argEvent.getKey() == 13) {
            var tmpDivision = this.down('textfield[itemId=divisionField]');
            var tmpDepartment = this.down('textfield[itemId=departmentField]');
            var tmpGroup = this.down('textfield[itemId=groupField]');
            var tmpLimit = this.down('numberfield[itemId=limitField]');
            var tmpEfectiveStart = this.down('datefield[itemId=efectiveStartField]');
            var tmpEfectiveEnd = this.down('datefield[itemId=efectiveEndField]');
            var tmpRecord = {
                division: tmpDivision.getValue(),
                department: tmpDepartment.getValue(),
                group: tmpGroup.getValue(),
                limit: tmpLimit.getValue(),
                efectiveStart: Ext.Date.format(tmpEfectiveStart.getValue(), 'm-d-Y'),
                efectiveEnd: Ext.Date.format(tmpEfectiveEnd.getValue(), 'm-d-Y')
            }
            this.fireEvent('groupRestrictionsAddRow', tmpRecord);
            tmpDivision.reset();
            tmpDepartment.reset();
            tmpGroup.reset();
            tmpLimit.reset();
            tmpEfectiveStart.reset();
            tmpEfectiveEnd.reset();

        }
    }

});