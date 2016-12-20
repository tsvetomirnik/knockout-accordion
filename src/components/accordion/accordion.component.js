(function () {
  'use strict';

  // Component
  ko.components.register('ko-accordion', {
    template: require('./accordion.template.html'),
    viewModel: {
      createViewModel: function (params, componentInfo) {
	    var AccordionViewModel = require('./accordion.viewmodel.js');
        return new AccordionViewModel(params, componentInfo);
      }
    },
  });

})();