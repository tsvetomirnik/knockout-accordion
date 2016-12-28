/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/knockout/index.d.ts" />

import { BindingHandlers } from './shared/binding-handlers';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionItemHeadingComponent } from './accordion-item-heading/accordion-item-heading.component';
import { AccordionItemContentComponent } from './accordion-item-content/accordion-item-content.component';

BindingHandlers.register();
AccordionComponent.register();
AccordionItemComponent.register();
AccordionItemHeadingComponent.register();
AccordionItemContentComponent.register();