<<<<<<< HEAD
sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("com.krishna.loginform.controller.App", {
      onInit: function () {
        var oModel = new JSONModel({
          username: "",
          surname: "",
          mobileNumber:"",
          emailId: "",
          address: "",
          gender: "",
          country: "",
        });

        this.getView().setModel(oModel);
      },
      onSelectionChange: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
        var sText = oSelectedItem.getText();
        var oModel = this.getView().getModel();
        oModel.setProperty("gender", sText);
      },

      submitclick: function () {
        var oModel = this.getView().getModel();
        var oData = oModel.getData();

        // ✅ Validation: first 4 fields should not be empty
        if (
          !oData.username ||
          !oData.surname ||
          !oData.mobileNumber ||
          !oData.emailId
        ) {
          MessageToast.show(
            "Please fill Username, Surname, Mobile Number and Email ID",
          );
          return; // stop execution
        }

        // ✅ If validation passes, print data
        var sFinalText =
          "Username: " +
          oData.username +
          "\n" +
          "Surname: " +
          oData.surname +
          "\n" +
          "Mobile Number: " +
          oData.mobileNumber +
          "\n" +
          "Email ID: " +
          oData.emailId +
          "\n" +
          "Address: " +
          oData.address +
          "\n" +
          "Gender: " +
          oData.gender +
          "\n" +
          "Country: " +
          oData.country;

        this.byId("dataSubmitted").setText(sFinalText);

        MessageToast.show("Data Submitted Successfully");
        // MessageToast.show(sFinalText);
      },
    });
  },
);
=======
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
>>>>>>> Project
