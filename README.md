meteor-x-editable
=================

Smart package for x-editable in place editor


textarea example
----------------

#### template

    <p id="textArea" class="editable" data-type="textarea" data-placeholder="Enter text" data-emptytext="Click to enter text" data-rows="4">{{textArea}}</p>
    
#### rendered callback

    $(template.find('#textArea.editable:not(.editable-click)')).editable('destroy').editable({
      success: function(response, newValue) {
        <do something with newValue - usually a collection.update call>
    }});
    
**note** the `:not(..)` selector + the `destroy` method call prevent multiple instances of editable controls while allowing the control to remain reactive.  one could use the `{{#constant}}<editable>{{/constant}}` wrapper pattern to allow for a single editable initialization
