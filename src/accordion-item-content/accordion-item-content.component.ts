import { AccordionItemContentViewModel } from './accordion-item-content.viewmodel';

declare function require(path: string): string;

export class AccordionItemContentComponent {
  static register() {
    ko.components.register('ko-accordion-item-content', {
      template: require('./accordion-item-content.template.html'),
      viewModel: {
        createViewModel: function (params, componentInfo) {
          return new AccordionItemContentViewModel(params, componentInfo);
        }
      },
    });
  }
}
