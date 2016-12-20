(function () {
  'use strict';
  
    // Component
  ko.components.register('ko-accordion-item', {
    template: require('./accordion-item.template.html'),
    viewModel: {
      createViewModel: function (params, componentInfo) {
        var AccordionItemViewModel = require('./accordion-item.viewmodel.js');
        return new AccordionItemViewModel(params, componentInfo);
      }
    },
  });

})();