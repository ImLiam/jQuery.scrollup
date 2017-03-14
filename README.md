# jQuery.scrollup
A jQuery plugin to recreate the commonly used "pull up to refresh" found in mobile devices, but this time for the desktop browser.

![jQuery.scrollup Demo](http://i.imgur.com/dXxzlQP.gif)

## Options

jQuery.scrollup allows you to define a variety of variables when using the plugin and hook into events that are triggered, to tailor the usage to your specific application.

```javascript

// Options
var options = {

    // The HTML content that will be displayed when the user scrolls up
    content: '',
    
    // The CSS class of the containing object that will be created when the user scrolls up
    class: 'scrollup',
    
    // Milliseconds value before the scrollup content will be automatically removed. If left blank, the scrollup object won't be removed at all
    timeout: 3000,
    
    // Event triggered when a scrollup option has timed out
    timedOut: function() { },
    
    // Event triggered when the creation of a scrollup object is started
    create: function() { },
    
    // Event triggered when the creation of a scrollup object is finished
    created: function() { },
    
    // Event triggered when the removal of a scrollup object is started
    remove: function() { },
    
    // Event triggered when the removal of a scrollup object is finished
    removed: function() { },
    
    // Event triggered when the creation of a scrollup object is started, but the object already exists
    exists: function() { },
    
    // Speed of the animation when a scrollup object is createdo r removed. Valid options are 'slow' or 'fast'
    animationSpeed: 'fast',
    
    // If enabled, debug messages for events will be displayed
    debug: false
    
}
```

## Methods

The methods that you can call to use and manipulate jQuery.scrollup. If no `options` parameter is passed to a method, it will use the default values.

```javascript
// Create a new scrollup object on a specific element
$(document).scrollup.create(selector, options);

// Remove an existing scrollup object
$(document).scrollup.remove(selector, options);

// Get an object with all the required default parameters unless otherwise specified
$(document).scrollup.options(options);
```

## Examples

**Show FontAwesome refresh icon, then update UI element to show when it was last updated.**
```javascript
$(document).scrollup('body', {
    content: '<i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i><span class="sr-only">Refreshing...</span>',
    timeout: 3000,
    created: function() {
      $.ajax({
         dataType: "json",
         url: url,
         data: data,
         success: function() {
           var timestamp = new Date().getTime();
           $('#lastupdated').html(Math.floor(timestamp / 1000));
         }
      });
    }
});
```
**Remove the scrollup object before the timeout (ie. when you've successfully refreshed your data)**
```javascript
$(document).scrollup.create('body', {
    content: '<i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i><span class="sr-only">Refreshing...</span>',
    timeout: 5000,
    created: function() {
        // Perform action
        setTimeout(function() {
            console.log('Completed');
            $(this).scrollup.remove('body');
        }, 2000);
    },
    timedOut: function() {
        console.log('timed out');
    }
});
```

**Display loading icon for 3 seconds**
```javascript
$(document).scrollup.create('#secondsection', {
    content: '<i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i><span class="sr-only">Refreshing...</span>',
    timeout: 3000
});
```
