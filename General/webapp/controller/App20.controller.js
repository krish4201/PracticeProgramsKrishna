sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat"
], function (Controller, NumberFormat) {
    "use strict";

    return Controller.extend("demo.krishna.calculator.controller.App20", {
        onShowAmount: function () {
            var oText = this.byId("currencyText");

            var fAmount = 12345.67;

            var oCurrencyFormatter = NumberFormat.getCurrencyInstance({
                currencyCode: true
            });

            var sFormatted = oCurrencyFormatter.format(fAmount, "USD");

            oText.setText(sFormatted);
        }
    });
});