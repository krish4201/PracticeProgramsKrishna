sap.ui.define([
<<<<<<< HEAD
    "sap/ui/core/mvc/Controller"
], function(Controller) {

    "use strict";

    return Controller.extend("demo.model.odatamodel.controller.App", {

        onInit: function() {

        }

    });

=======
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("demo.model.odatamodel.controller.App", {
      onInit() {
      }
  });
>>>>>>> update
});