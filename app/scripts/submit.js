/* global angular Firebase*/
(function() {
  'use strict';

  // var Firebase_Url = 'https://fiery-inferno-4540.firebaseio.com';


  angular.module('nightmare')
    .controller('SubmitController', function ($firebaseArray) {
    function empty(answer) {
      if (answer) {
        return answer;
      } else {
        return null;
      }
    }

    var self = this;

    var ref = new Firebase('https://fiery-inferno-4540.firebaseio.com');
    this.list = $firebaseArray(ref);
    // self.text = 'hello';
    this.submit = function() {
      console.log('hi');
      self.list.$add({
        stop: self.newStop,
        street: self.streetAddress,
        city: self.city,
        state: self.state,
        zipCode: self.zipCode,
        camera: empty(self.camera),
        guard: empty(self.guard),
        security: empty(self.security),
        light: empty(self.light),
        parking: empty(self.parking),
        hazards: empty(self.hazards),
        deliveryInstructions: empty(self.deliveryInstructions),
        info: empty(self.info)
      });
      self.newStop = '';
      self.streetAddress = '';
      self.city = '';
      self.state = '';
      self.zipCode = '';
      self.camera = '';
      self.guard = '';
      self.security = '';
      self.light = '';
      self.parking = '';
      self.hazards = '';
      self.deliveryInstructions = '';
      self.info = '';

    };


    console.log(self.list);
  });

})();
