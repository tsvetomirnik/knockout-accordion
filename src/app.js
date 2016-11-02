(function (global) {
  'use strict';
  
  function AppViewModel() {
    var self = this;

    this.selectedIndex = ko.observable(0);
    this.products = ko.observableArray([]);

    this.totalValue = ko.computed(function () {
      var sum = 0;
      for (var i = 0; i < self.products().length; i++) {
        sum += parseFloat(self.products()[i].value());
      }
      return sum.toFixed(2);
    });

    this.addItem = function () {
      self.products.push({
        name: ko.observable('Item ' + (self.products().length + 1)),
        value: ko.observable(0)
      });
      self.selectedIndex(self.products().length - 1);
    };
  }

  $(document).ready(function () {
    global.viewModel = new AppViewModel();

    global.viewModel.products([
      {
        name: ko.observable('Soda'),
        value: ko.observable(4.5)
      }, {
        name: ko.observable('Burger'),
        value: ko.observable(1.2)
      }, {
        name: ko.observable('Snickers'),
        value: ko.observable(3.42)
      }
    ]);

    ko.applyBindings(global.viewModel);
  });

})(window);