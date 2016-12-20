import { AccordionItemViewModel } from './accordion-item.viewmodel';

declare function require(path: string): string;

export class AccordionItemComponent {
  static register() {
    ko.components.register('ko-accordion-item', {
      template: require('./accordion-item.template.html'),
      viewModel: {
        createViewModel: function (params, componentInfo) {
          return new AccordionItemViewModel(params, componentInfo);
        }
      },
    });
  }
}
