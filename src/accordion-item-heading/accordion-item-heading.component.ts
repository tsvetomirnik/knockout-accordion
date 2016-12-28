import { AccordionItemHeadingViewModel } from './accordion-item-heading.viewmodel';

declare function require(path: string): string;

export class AccordionItemHeadingComponent {
  static register() {
    ko.components.register('ko-accordion-item-heading', {
      template: require('./accordion-item-heading.template.html'),
      viewModel: {
        createViewModel: function (params, componentInfo) {
          return new AccordionItemHeadingViewModel(params, componentInfo);
        }
      },
    });
  }
}
