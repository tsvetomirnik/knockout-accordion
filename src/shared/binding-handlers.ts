export class BindingHandlers {
  static register() {

    ko.bindingHandlers['slideIn'] = {
      init: function (element: Element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        
        $(element).toggle(value);
      },
      update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        element.classList.toggle('visible', value);
        value ? $(element).slideDown() : $(element).slideUp();
      }
    };

    // After Render callback binding handler
    ko.bindingHandlers['afterRender'] = {
      init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var domChangedHandler = function () {
          element.removeEventListener('DOMNodeInserted', domChangedHandler, false);
          valueAccessor();
        };
        element.addEventListener('DOMNodeInserted', domChangedHandler, false);
      }
    };
    
  }
}

