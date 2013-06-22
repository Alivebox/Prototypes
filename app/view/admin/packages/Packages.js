Ext.define('Prototypes.view.admin.packages.Packages', {
    extend:'Ext.container.Container',
    alias: 'widget.adminpackages',

    initComponent:function () {

        this.items = [
            {
                xtype: 'gridpackages',
                store: 'admin.packages.Packages'
            }
        ];
        this.callParent(arguments);
    }
});