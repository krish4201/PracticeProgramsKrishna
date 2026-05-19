sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], (BaseController, MessageToast) => {
  "use strict";

  return BaseController.extend("com.krishna.loginform.controller.App", {
    onLoginPress: function () {
      const oUsernameInput = this.byId("usernameInput");
      const oPasswordInput = this.byId("passwordInput");
      const sUsername = oUsernameInput.getValue();
      const sPassword = oPasswordInput.getValue();

      // Simple validation (for demonstration purposes)
      if (sUsername === "Krishna" && sPassword === "password") {
        MessageToast.show("Login successful. Welcome " + sUsername + "!");
      } else {
        MessageToast.show("Invalid username or password.");
      }
    }
  });
});