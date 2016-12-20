import { AccordionViewModel } from '../accordion/accordion.viewmodel';

export class AccordionItemViewModel {

  accordion: AccordionViewModel;
  heading: KnockoutObservable<string>;
  isSelected: KnockoutComputed<boolean>;

  constructor(
    private params: any,
    private componentInfo: KnockoutComponentTypes.ComponentInfo
  ) {

    // Heading
    if (ko.isObservable(params.heading)) {
      this.heading = params.heading;
    } else {
      this.heading = <KnockoutObservable<string>>ko.observable(params.heading ? ko.unwrap(params.heading) : undefined);
    }
  }

  headerClicked() {
    this.accordion.selectItem(this);
  }

  afterRender() {
    this.accordion = this.getAccordion();
    this.accordion.addItem(this);

    this.isSelected = ko.computed(() => {
      return this.accordion.selectedIndex() === this.accordion.items.indexOf(this);
    });
  }

  getAccordion(): AccordionViewModel {
    let accordionElement = (<Element>this.componentInfo.element).parentElement;
    // TODO: Throw error when the element is not found
    return ko.dataFor(accordionElement);
  }
}
