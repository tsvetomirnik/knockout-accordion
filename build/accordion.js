(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./accordion.template.html":2,"./accordion.viewmodel.js":3}],2:[function(require,module,exports){
module.exports = " <section class=\"panel-group\">\r\n<!-- ko template: { nodes: $componentTemplateNodes } -->\r\n<!-- /ko -->\r\n</article>";

},{}],3:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdHN2ZXRvbWlyXFxEZXNrdG9wXFw0YjdhN2NkZDBhNDRiYWJmZjJmZi0wYzYxNWYxOTU4YTgxNDczZjY2M2M2N2Q5NmRlMmQ1NWFhMGQxNzExXFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkM6L1VzZXJzL3RzdmV0b21pci9EZXNrdG9wLzRiN2E3Y2RkMGE0NGJhYmZmMmZmLTBjNjE1ZjE5NThhODE0NzNmNjYzYzY3ZDk2ZGUyZDU1YWEwZDE3MTEvc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuanMiLCJDOi9Vc2Vycy90c3ZldG9taXIvRGVza3RvcC80YjdhN2NkZDBhNDRiYWJmZjJmZi0wYzYxNWYxOTU4YTgxNDczZjY2M2M2N2Q5NmRlMmQ1NWFhMGQxNzExL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udGVtcGxhdGUuaHRtbCIsIkM6L1VzZXJzL3RzdmV0b21pci9EZXNrdG9wLzRiN2E3Y2RkMGE0NGJhYmZmMmZmLTBjNjE1ZjE5NThhODE0NzNmNjYzYzY3ZDk2ZGUyZDU1YWEwZDE3MTEvc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi52aWV3bW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8gQ29tcG9uZW50XHJcbiAga28uY29tcG9uZW50cy5yZWdpc3Rlcigna28tYWNjb3JkaW9uJywge1xyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYWNjb3JkaW9uLnRlbXBsYXRlLmh0bWwnKSxcclxuICAgIHZpZXdNb2RlbDoge1xyXG4gICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuXHQgICAgdmFyIEFjY29yZGlvblZpZXdNb2RlbCA9IHJlcXVpcmUoJy4vYWNjb3JkaW9uLnZpZXdtb2RlbC5qcycpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQWNjb3JkaW9uVmlld01vZGVsKHBhcmFtcywgY29tcG9uZW50SW5mbyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG59KSgpOyIsIm1vZHVsZS5leHBvcnRzID0gXCIgPHNlY3Rpb24gY2xhc3M9XFxcInBhbmVsLWdyb3VwXFxcIj5cXHJcXG48IS0tIGtvIHRlbXBsYXRlOiB7IG5vZGVzOiAkY29tcG9uZW50VGVtcGxhdGVOb2RlcyB9IC0tPlxcclxcbjwhLS0gL2tvIC0tPlxcclxcbjwvYXJ0aWNsZT5cIjtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIEFjY29yZGlvblZpZXdNb2RlbChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gIHRoaXMuY29tcG9uZW50SW5mbyA9IGNvbXBvbmVudEluZm87XHJcbiAgdGhpcy5pdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcblxyXG4gIC8vIFNlbGVjdGVkIEluZGV4XHJcbiAgaWYgKGtvLmlzT2JzZXJ2YWJsZShwYXJhbXMuc2VsZWN0ZWRJbmRleCkpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHBhcmFtcy5zZWxlY3RlZEluZGV4O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBrby5vYnNlcnZhYmxlKHBhcmFtcy5zZWxlY3RlZEluZGV4ID8ga28udW53cmFwKHBhcmFtcy5zZWxlY3RlZEluZGV4KSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNlbGVjdGVkSW5kZXguc3Vic2NyaWJlKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgc2VsZi5zZXRTZWxlY3RlZEluZGV4KHZhbHVlKTtcclxuICB9KTtcclxufVxyXG5cclxuQWNjb3JkaW9uVmlld01vZGVsLnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbn07XHJcblxyXG5BY2NvcmRpb25WaWV3TW9kZWwucHJvdG90eXBlLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICB2YXIgb2xkSW5kZXggPSB0aGlzLnNlbGVjdGVkSW5kZXgoKTtcclxuICB2YXIgaXRlbVRvU2VsZWN0ID0gdGhpcy5pdGVtcygpW2luZGV4XTtcclxuICBpZiAoaXRlbVRvU2VsZWN0KSB7XHJcbiAgICB0aGlzLnNlbGVjdEl0ZW0oaXRlbVRvU2VsZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4KG9sZEluZGV4KTtcclxuICB9XHJcbn07XHJcblxyXG5BY2NvcmRpb25WaWV3TW9kZWwucHJvdG90eXBlLnNlbGVjdEl0ZW0gPSBmdW5jdGlvbiAodG9TZWxlY3QpIHtcclxuICB0aGlzLnNlbGVjdGVkSW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKHRvU2VsZWN0KSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFjY29yZGlvblZpZXdNb2RlbDsiXX0=
