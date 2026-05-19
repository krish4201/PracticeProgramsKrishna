sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/krishna/loginform/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.krishna.loginform.Component", {
        metadata: {
            manifest: "json"
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});