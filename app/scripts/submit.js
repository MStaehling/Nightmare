/* global angular */
(function(){
  'use strict';

   angular
    .module('nightmare', [])
    .controller('SubmitController', function() {
      this.submit = {};

      this.addSubmit = function(stop){
        stop.submits.push(this.submit);
        this.submit = {};
      };
    })

})();
