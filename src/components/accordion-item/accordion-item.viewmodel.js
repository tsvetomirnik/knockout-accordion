'use strict';

// SlideDown/SlideUp visible binding handler
ko.bindingHandlers.slideIn = {
  init: function (element, valueAccessor) {
    var value = ko.utils.unwrapObservable(valueAccessor());
    $(element).toggle(value);
  },
  update: function (element, valueAccessor) {
    var value = ko.utils.unwrapObservable(valueAccessor());
    value ? $(element).slideDown() : $(element).slideUp();
  }
};

// After Render callback binding handler
ko.bindingHandlers.afterRender = {
  init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    var domChangedHandler = function () {
      element.removeEventListener('DOMNodeInserted', domChangedHandler, false);
      valueAccessor();
    };
    element.addEventListener('DOMNodeInserted', domChangedHandler, false);
  }
};

function AccordionItemViewModel(params, componentInfo) {
  var self = this;

  this.params = params;
  this.componentInfo = componentInfo;

  this.accordion = undefined;

  // Heading
  if (ko.isObservable(params.heading)) {
    this.heading = params.heading;
  } else {
    this.heading = ko.observable(params.heading ? ko.unwrap(params.heading) : undefined);
  }

  this.headerClicked = function () {
    self.accordion.selectItem(this);
  };

  this.afterRender = function () {
    self.accordion = self.getAccordion();
    self.accordion.addItem(self);

    this.isSelected = ko.computed(function () {
      return self.accordion.selectedIndex() === self.accordion.items.indexOf(self);
    });
  };
}

AccordionItemViewModel.prototype.getAccordion = function (ready) {
  var accordionElement = $(this.componentInfo.element).closest('KO-ACCORDION').children().get(0);
  return ko.dataFor(accordionElement);
};

module.exports = AccordionItemViewModel;