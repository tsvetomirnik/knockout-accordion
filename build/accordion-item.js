(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./accordion-item.template.html":2,"./accordion-item.viewmodel.js":3}],2:[function(require,module,exports){
module.exports = "<article class=\"panel panel-default\" data-bind=\"afterRender: afterRender()\">\r\n\t<div class=\"panel-heading\" data-bind=\"click: headerClicked\">\r\n\t\t<h3 class=\"panel-title\" data-bind=\"text: heading\"></h3>\r\n\t</div>\r\n\t<div class=\"panel-body\" data-bind=\"slideIn: isSelected()\">\r\n\t\t<!-- ko template: { nodes: $componentTemplateNodes } -->\r\n\t\t<!-- /ko -->\r\n\t</div>\r\n</article>";

},{}],3:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdHN2ZXRvbWlyXFxEZXNrdG9wXFw0YjdhN2NkZDBhNDRiYWJmZjJmZi0wYzYxNWYxOTU4YTgxNDczZjY2M2M2N2Q5NmRlMmQ1NWFhMGQxNzExXFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL3RzdmV0b21pci9EZXNrdG9wLzRiN2E3Y2RkMGE0NGJhYmZmMmZmLTBjNjE1ZjE5NThhODE0NzNmNjYzYzY3ZDk2ZGUyZDU1YWEwZDE3MTEvc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwiQzovVXNlcnMvdHN2ZXRvbWlyL0Rlc2t0b3AvNGI3YTdjZGQwYTQ0YmFiZmYyZmYtMGM2MTVmMTk1OGE4MTQ3M2Y2NjNjNjdkOTZkZTJkNTVhYTBkMTcxMS9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS50ZW1wbGF0ZS5odG1sIiwiQzovVXNlcnMvdHN2ZXRvbWlyL0Rlc2t0b3AvNGI3YTdjZGQwYTQ0YmFiZmYyZmYtMGM2MTVmMTk1OGE4MTQ3M2Y2NjNjNjdkOTZkZTJkNTVhYTBkMTcxMS9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS52aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcbiAgXHJcbiAgICAvLyBDb21wb25lbnRcclxuICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdrby1hY2NvcmRpb24taXRlbScsIHtcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FjY29yZGlvbi1pdGVtLnRlbXBsYXRlLmh0bWwnKSxcclxuICAgIHZpZXdNb2RlbDoge1xyXG4gICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICB2YXIgQWNjb3JkaW9uSXRlbVZpZXdNb2RlbCA9IHJlcXVpcmUoJy4vYWNjb3JkaW9uLWl0ZW0udmlld21vZGVsLmpzJyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBY2NvcmRpb25JdGVtVmlld01vZGVsKHBhcmFtcywgY29tcG9uZW50SW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8YXJ0aWNsZSBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCIgZGF0YS1iaW5kPVxcXCJhZnRlclJlbmRlcjogYWZ0ZXJSZW5kZXIoKVxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZ1xcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogaGVhZGVyQ2xpY2tlZFxcXCI+XFxyXFxuXFx0XFx0PGgzIGNsYXNzPVxcXCJwYW5lbC10aXRsZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBoZWFkaW5nXFxcIj48L2gzPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiIGRhdGEtYmluZD1cXFwic2xpZGVJbjogaXNTZWxlY3RlZCgpXFxcIj5cXHJcXG5cXHRcXHQ8IS0tIGtvIHRlbXBsYXRlOiB7IG5vZGVzOiAkY29tcG9uZW50VGVtcGxhdGVOb2RlcyB9IC0tPlxcclxcblxcdFxcdDwhLS0gL2tvIC0tPlxcclxcblxcdDwvZGl2PlxcclxcbjwvYXJ0aWNsZT5cIjtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIFNsaWRlRG93bi9TbGlkZVVwIHZpc2libGUgYmluZGluZyBoYW5kbGVyXHJcbmtvLmJpbmRpbmdIYW5kbGVycy5zbGlkZUluID0ge1xyXG4gIGluaXQ6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XHJcbiAgICAkKGVsZW1lbnQpLnRvZ2dsZSh2YWx1ZSk7XHJcbiAgfSxcclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XHJcbiAgICB2YWx1ZSA/ICQoZWxlbWVudCkuc2xpZGVEb3duKCkgOiAkKGVsZW1lbnQpLnNsaWRlVXAoKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBBZnRlciBSZW5kZXIgY2FsbGJhY2sgYmluZGluZyBoYW5kbGVyXHJcbmtvLmJpbmRpbmdIYW5kbGVycy5hZnRlclJlbmRlciA9IHtcclxuICBpbml0OiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcclxuICAgIHZhciBkb21DaGFuZ2VkSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBkb21DaGFuZ2VkSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB2YWx1ZUFjY2Vzc29yKCk7XHJcbiAgICB9O1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBkb21DaGFuZ2VkSGFuZGxlciwgZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIEFjY29yZGlvbkl0ZW1WaWV3TW9kZWwocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICB0aGlzLmNvbXBvbmVudEluZm8gPSBjb21wb25lbnRJbmZvO1xyXG5cclxuICB0aGlzLmFjY29yZGlvbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gSGVhZGluZ1xyXG4gIGlmIChrby5pc09ic2VydmFibGUocGFyYW1zLmhlYWRpbmcpKSB7XHJcbiAgICB0aGlzLmhlYWRpbmcgPSBwYXJhbXMuaGVhZGluZztcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5oZWFkaW5nID0ga28ub2JzZXJ2YWJsZShwYXJhbXMuaGVhZGluZyA/IGtvLnVud3JhcChwYXJhbXMuaGVhZGluZykgOiB1bmRlZmluZWQpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5oZWFkZXJDbGlja2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2VsZi5hY2NvcmRpb24uc2VsZWN0SXRlbSh0aGlzKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmFmdGVyUmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2VsZi5hY2NvcmRpb24gPSBzZWxmLmdldEFjY29yZGlvbigpO1xyXG4gICAgc2VsZi5hY2NvcmRpb24uYWRkSXRlbShzZWxmKTtcclxuXHJcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBzZWxmLmFjY29yZGlvbi5zZWxlY3RlZEluZGV4KCkgPT09IHNlbGYuYWNjb3JkaW9uLml0ZW1zLmluZGV4T2Yoc2VsZik7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5BY2NvcmRpb25JdGVtVmlld01vZGVsLnByb3RvdHlwZS5nZXRBY2NvcmRpb24gPSBmdW5jdGlvbiAocmVhZHkpIHtcclxuICB2YXIgYWNjb3JkaW9uRWxlbWVudCA9ICQodGhpcy5jb21wb25lbnRJbmZvLmVsZW1lbnQpLmNsb3Nlc3QoJ0tPLUFDQ09SRElPTicpLmNoaWxkcmVuKCkuZ2V0KDApO1xyXG4gIHJldHVybiBrby5kYXRhRm9yKGFjY29yZGlvbkVsZW1lbnQpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBY2NvcmRpb25JdGVtVmlld01vZGVsOyJdfQ==
