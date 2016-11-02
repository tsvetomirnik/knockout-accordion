'use strict';

function AccordionViewModel(params, componentInfo) {
  var self = this;

  this.params = params;
  this.componentInfo = componentInfo;
  this.items = ko.observableArray([]);

  // Selected Index
  if (ko.isObservable(params.selectedIndex)) {
    this.selectedIndex = params.selectedIndex;
  } else {
    this.selectedIndex = ko.observable(params.selectedIndex ? ko.unwrap(params.selectedIndex) : undefined);
  }

  this.selectedIndex.subscribe(function (value) {
    self.setSelectedIndex(value);
  });
}

AccordionViewModel.prototype.addItem = function (item) {
  this.items.push(item);
};

AccordionViewModel.prototype.setSelectedIndex = function (index) {
  var oldIndex = this.selectedIndex();
  var itemToSelect = this.items()[index];
  if (itemToSelect) {
    this.selectItem(itemToSelect);
  } else {
    this.selectedIndex(oldIndex);
  }
};

AccordionViewModel.prototype.selectItem = function (toSelect) {
  this.selectedIndex(this.items.indexOf(toSelect));
};

module.exports = AccordionViewModel;