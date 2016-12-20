# Knockout Accordion

Accordion Knockout Component based on Bootstrap.

It's using the latest knockout features that allow communication between components.

[Demo](https://tsvetomirnik.github.io/knockout-accordion/)

## Install

Download and insert to the page the `knockout-accordion.min.js` script file.

```html
<script src="knockout-accordion.min.js"></script>
```

Dependencies:
* Knockout 3.3.0 and above
* jQuery
* Bootstrap CSS (Optional)

## Usage

### Case 1 - Static list of items

A simple example of accordion with specified items count.

```html
<ko-accordion>
  <ko-accordion-item params="{ heading: 'Item 1' }">
    Content
  </ko-accordion-item>
  <ko-accordion-item params="{ heading: 'Item 2' }">
    Content
  </ko-accordion-item>
</ko-accordion>
```

### Case 2 - Dynamic list of items

An example of accordion which items can be changed dynamically.

```html
<ko-accordion>
  <!-- ko foreach: $root.items -->
  <ko-accordion-item params="{ heading: $data.name }">
    <div data-bind="text: $parent.content"></div>
  </ko-accordion-item>
  <!-- /ko -->
</ko-accordion>
```

```javascript
var viewModel = {
  items: ko.observableArray([
    { name: 'Item 1', content: 'Content' },
    { name: 'Item 2', content: 'Content' }
  ])
};
ko.applyBindings(viewModel);
```

## Components

The following components are included in this library:

### Accordion

Parent component to contains the accordion items.

Selector: `ko-accordion`

Options:

| Name          | Type                                       | Description               |
|---------------|--------------------------------------------|---------------------------|
| selectedIndex | `number` \| `KnockoutObservable<number>`   | Defines the expanded item |

*Options are available through the `params` binding.*

### Accordion Item

Collapsible panel with header and content.

Selector: `ko-accordion-item`

Options:

| Name          | Type                                       | Description                 |
|---------------|--------------------------------------------|-----------------------------|
| heading       | `string` \| `KnockoutObservable<string>`   | Sets the text in the header |

*Options are available through the `params` binding.*
