import { AccordionViewModel } from '../accordion/accordion.viewmodel';

export class AccordionItemHeadingViewModel {

  constructor(
    private params: any,
    private componentInfo: KnockoutComponentTypes.ComponentInfo
  ) {
    
  }

  afterRender () {
    //this.componentInfo.element.childNodes[0].parentElement.classList.add('panel-heading');
    //content.parentElement.appendChild(content);
    //alert(this.componentInfo.element.nodeName);
  }
}
