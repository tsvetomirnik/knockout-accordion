import { AccordionViewModel } from './accordion.viewmodel';

declare function require(path: string): string;

export class AccordionComponent {
  static register() {
    ko.components.register('ko-accordion', {
      template: require('./accordion.template.html'),
      viewModel: {
        createViewModel: function (params, componentInfo) {
          return new AccordionViewModel(params, componentInfo);
        }
      },
    });
  }
}
