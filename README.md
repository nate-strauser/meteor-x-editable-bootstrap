meteor-x-editable
=================

The [x-editable](http://vitalets.github.io/x-editable/) in-place editor with Twitter Bootstrap,
repackaged for Meteor.

# Install

```
mrt add x-editable-bootstrap
```

**NOTE**: The latest branch uses the Bootstrap 3 build of x-editable. If you are still using Bootstrap 2, install v1.4.6.3 instead of the latest.

textarea example
----------------

#### template

    <p id="textArea" class="editable" data-type="textarea" data-placeholder="Enter text" data-emptytext="Click to enter text" data-rows="4">{{textAreaContent}}</p>
    
#### rendered callback

    $('#textArea.editable').editable({
      success: function(response, newValue) {
        <do something with newValue - usually a collection.update call>
    }});
    

version history
---------------
#### 1.5.1

- Updated to use BS3 build of x-editable 1.5.1.

#### 1.4.6.2

- Added example and updated readme to reflect operation under meteor 0.8.0+ (syntax is more simple with blaze)
