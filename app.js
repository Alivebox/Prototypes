/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

Ext.application({

    requires: [
        'Mercury.Main',
        'Prototypes.ux.UxDependencies',
        'Prototypes.util.VTypesOverrides'
    ],

    name: 'Prototypes',

    extend: 'Prototypes.Application',
    
    autoCreateViewport: false,

    launch:function () {
        this.loadConfigurationFile();
    },

    loadConfigurationFile: function(){
        Mercury.util.FileLoader.loadAndDecodeJsonFile('resources/config/configFile.json',null,this.onConfigLoaded,this.onConfigFail,this);
    },

    onConfigLoaded: function(argConfigFileObject){
        Prototypes.util.VTypesOverrides.init();
        Mercury.Main.init(argConfigFileObject);
    },

    onConfigFail:function () {
        Mercury.core.ErrorsManager.handleFatalError(Mercury.core.Defaults.FATAL_ERROR_CONFIG_FILE_LOADER_NOT_FOUND_OR_INVALID);
    }

});
