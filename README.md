# populate.js

Vanilla JS tool for dynamic population of select elements

# Basic usage

Add the "populate" class to the select element you want to dynamically populate.
Use the [data-parent] attribute to link the child select to it's parent.
Use the [data-parent-value] to link the option elements to a value in the parent select.

The program will toggle the "inactive" class in the inactive option elements. Use CSS to hide these options.

<pre>
```html
<form action="">
    <label for="primary">Primary Selector</label>
    <select name="" id="primary">
        <option value="0">Option 0</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
    </select>
    <label for="secondary">Secondary Selector</label>
    <select class="populate" name="" id="secondary" data-parent="primary">
        <option value="0" data-parent-value="0">Option 0-0</option>
        <option value="1" data-parent-value="0">Option 0-1</option>
        <option value="2" data-parent-value="0">Option 0-2</option>
        <option value="3" data-parent-value="1">Option 1-0</option>
        <option value="4" data-parent-value="1">Option 1-1</option>
        <option value="5" data-parent-value="1">Option 1-2</option>
        <option value="6" data-parent-value="2">Option 2-0</option>
        <option value="7" data-parent-value="2">Option 2-1</option>
        <option value="8" data-parent-value="2">Option 2-2</option>
    </select>
</form>   
```
</pre>