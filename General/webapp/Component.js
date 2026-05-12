sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("demo.krishna.calculator.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            // Call parent init
            UIComponent.prototype.init.apply(this, arguments);

        }
    });
});