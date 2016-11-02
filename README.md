# Knockout Accordion

Accordion Knockout Component based on Bootstrap.

It's using the latest knockout features to demonstrate communication between components.



## Install

Download and add the `accordion.js` and `accordion-item.js` script files.

```html
<script src="src/components/accordion.js"></script>
<script src="src/components/accordion-item.js"></script>
```

Dependencies:
* Knockout 3.3.0
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

## Options

Options are available through the `params` binding.

### Accordion Options
| Name          | Type                                       | Description               |
|---------------|--------------------------------------------|---------------------------|
| selectedIndex | `number` \| `KnockoutObservable<number>`   | Defines the expanded item |

### Accordion Item Options
| Name          | Type                                       | Description                 |
|---------------|--------------------------------------------|-----------------------------|
| heading       | `string` \| `KnockoutObservable<string>`   | Sets the text in the header |
