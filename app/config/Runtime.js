Ext.define(‘MyApp.config.Runtime’,{
    singleton : true,
    config : {
        myRequiredVariable : 0   // initialize to 0
    },
    constructor : function(config){
        this.initConfig(config);
    }
});