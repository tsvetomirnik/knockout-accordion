import { AccordionItemViewModel } from '../accordion-item/accordion-item.viewmodel'

export class AccordionViewModel {

  selectedIndex: KnockoutObservable<number>;
  items: KnockoutObservableArray<AccordionItemViewModel> = ko.observableArray<AccordionItemViewModel>([]);

  constructor(
    private params: any,
    private componentInfo: KnockoutComponentTypes.ComponentInfo
  ) {

    // Selected Index
    if (ko.isObservable(params.selectedIndex)) {
      this.selectedIndex = params.selectedIndex;
    } else {
      this.selectedIndex = <KnockoutObservable<number>>ko.observable(params.selectedIndex ? ko.unwrap(params.selectedIndex) : undefined);
    }

    this.selectedIndex.subscribe((value) => {
      this.setSelectedIndex(value);
    });
  }

  addItem(item: AccordionItemViewModel) {
    this.items.push(item);
  }

  setSelectedIndex(index: number) : void {
    let oldIndex = this.selectedIndex();
    let itemToSelect = this.items()[index];
    if (itemToSelect) {
      this.selectItem(itemToSelect);
    } else {
      this.selectedIndex(oldIndex);
    }
  }

  selectItem(toSelect: AccordionItemViewModel) : void {
    this.selectedIndex(this.items.indexOf(toSelect));
  }
}
