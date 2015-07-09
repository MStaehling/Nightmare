(function() {
  'use strict';

  angular
    .module('nightmare')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
