Ext.define('Prototypes.view.elementcatalog.menu.TreeMenu', {

    extend: 'Ext.tree.Panel',
    requires: [
        'Ext.data.TreeStore'
    ],

    xtype: 'treemenuview',
    title: null,
    rootVisible: false,
    height: 350,

    initComponent: function(){
        this.store = Ext.create('Ext.data.TreeStore', {
            fields: [
                {
                    name: 'showData',
                    type:'boolean',
                    defaultValue: false
                },
                {
                    name: 'title'
                },
                {
                    name: 'text'
                }
            ],
            root: {
                expanded: true,
                children: [
                    { text: "Resources", leaf: true, title: "Resources" },
                    { text: "Facilities", leaf: true, title: "Facilities" },
                    { text: "Assets", expanded: true, children: [
                        { text: "Audio", leaf: true, title: "Assets > Audio" },
                        { text: "Video", expanded: true, children: [
                            { text: "3D Cameras", leaf: true, title: "Assets > 3D Cameras" },
                            { text: "HD Cameras", leaf: true, title: "Assets > HD Cameras",showData: true}
                        ] }
                    ] },
                    { text: "Services", leaf: true, title: "Services" },
                    { text: "Packages", leaf: true, title: "Packages" },
                    { text: "Element Groups", leaf: true, title: "Element Groups" }
                ]
            }
        });
        this.callParent(arguments);
    }
});