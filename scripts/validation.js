(function(window){
  'use strict';
  var App = window.App||{};
  var Validation = {
    //validation for company email
    isCompanyEmail: function(email){
      return /.+@bignerdranch\.com$/.test(email);
    }

    //validation for coffee strength level
    isDecaf: function(coffeeOrder,strengthLevel){
      //Provided by https://github.com/codepoetchris/Assignment07/blob/master/scripts/validation.js
       if(coffeeOrder == 'decaf' && strengthLevel <= 20) {
           return true;
       }
       return false;
   }
  };




  App.Validation = Validation;
  window.App = App;
})(window);
