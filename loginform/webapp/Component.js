sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/krishna/loginform/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.krishna.loginform.Component", {
        metadata: {
<<<<<<< HEAD
<<<<<<< HEAD
            manifest: "json"
=======
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
>>>>>>> Project
=======
            manifest: "json"
>>>>>>> update
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
<<<<<<< HEAD
<<<<<<< HEAD
=======

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
>>>>>>> Project
=======
>>>>>>> update
        }
    });
});