# jQuery.scrollup
A jQuery plugin to recreate the commonly used "pull up to refresh" found in mobile devices, but this time for the desktop browser.

### Arguments
```javascript
$(document).scrollup(selector, {

    // The HTML content that will be displayed when the user scrolls up
    content: '',
    
    // The CSS class of the containing object that will be created when the user scrolls up
    class: 'scrollup',
    
    // Milliseconds value before the scrollup content will be automatically removed. If left blank, the scrollup object won't be removed at all
    timeout: 3000,
    
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
    
    // If enabled, debug messages will be displayed
    debug: false
    
});
```

### Example
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
});```
```
