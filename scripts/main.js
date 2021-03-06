(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHEKCKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var checkList = new CheckList(CHEKCKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function(data){
        myTruck.createOrder.call(myTruck,data);
        checkList.addRow.call(checkList,data);
    });
    /*passing Validation .isCompanyEmail to addInputHandler method*/
    formHandler.addInputHandler(Validation.isCompanyEmail);
    /*passing decaf check to decafHandler method, similar to action above */
    formHandler.addDecafHandler(Validation.isDecaf)
})(window);
