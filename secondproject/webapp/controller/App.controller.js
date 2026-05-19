sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], (Controller, MessageToast) => {
  "use strict";

  return Controller.extend("demo.second.secondproject.controller.App", {
      onDisplay: function() {
        var sName = this.byId("empName").getValue();
        var sId = this.byId("empId").getValue();
        
        if(!sName || !sId){
          MessageToast.show("Please Enter all Details");
          return;
        }

        var sOutput = "Employee Name: " + sName + " | Employee ID: " + sId;

        this.byId("resultText").setText(sOutput);

        MessageToast.show("Data Displayed Successfully");
      }
  });
});