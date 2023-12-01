# populate.js

Vanilla JS tool for dynamic population of select elements

# Basic usage

Add the "populate" class to the select element you want to dynamically populate.
Use the [data-parent] attribute to link the child select to it's parent.
Use the [data-parent-value] to link the option elements to a value in the parent select.

The program will toggle the "inactive" class in the inactive option elements. Use CSS to hide these options.

<pre>
```html
&lt;form action=""&gt;
    &lt;label for="primary"&gt;Primary Selector&lt;/label&gt;
    &lt;select name="" id="primary"&gt;
        &lt;option value="0"&gt;Option 0&lt;/option&gt;
        &lt;option value="1"&gt;Option 1&lt;/option&gt;
        &lt;option value="2"&gt;Option 2&lt;/option&gt;
    &lt;/select&gt;
    &lt;label for="secondary"&gt;Secondary Selector&lt;/label&gt;
    &lt;select class="populate" name="" id="secondary" data-parent="primary"&gt;
        &lt;option value="0" data-parent-value="0"&gt;Option 0-0&lt;/option&gt;
        &lt;option value="1" data-parent-value="0"&gt;Option 0-1&lt;/option&gt;
        &lt;option value="2" data-parent-value="0"&gt;Option 0-2&lt;/option&gt;
        &lt;option value="3" data-parent-value="1"&gt;Option 1-0&lt;/option&gt;
        &lt;option value="4" data-parent-value="1"&gt;Option 1-1&lt;/option&gt;
        &lt;option value="5" data-parent-value="1"&gt;Option 1-2&lt;/option&gt;
        &lt;option value="6" data-parent-value="2"&gt;Option 2-0&lt;/option&gt;
        &lt;option value="7" data-parent-value="2"&gt;Option 2-1&lt;/option&gt;
        &lt;option value="8" data-parent-value="2"&gt;Option 2-2&lt;/option&gt;
    &lt;/select&gt;
&lt;/form&gt;   
```
</pre>