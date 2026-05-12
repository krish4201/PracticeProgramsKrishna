sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.krishna.calculator.controller.App7", {

        onSelectionChange: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");
            var sText = oSelectedItem.getText();

            MessageToast.show("Selected: " + sText);
        }

    });
});