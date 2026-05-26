sap.ui.define([
    "sap/ui/core/UIComponent",
<<<<<<< HEAD
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {

    "use strict";

    return UIComponent.extend("demo.model.odatamodel.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {

            UIComponent.prototype.init.apply(this, arguments);

            // Create JSON Model
            var oModel = new JSONModel();

            // Load local data
            oModel.loadData("model/data.json");

            // Set model to app
            this.setModel(oModel);

        }

    });

=======
    "demo/model/odatamodel/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("demo.model.odatamodel.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
>>>>>>> update
});