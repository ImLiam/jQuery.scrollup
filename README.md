# jQuery.scrollup
A jQuery plugin to recreate the commonly used "pull up to refresh" found in mobile devices, but this time for the desktop browser.

**Arguments:**
```
 $(selector).scrollup(selector, {
   content: '', // Required. The HTML content that will be displayed when the user scrolls up
   class: 'scrollup', // Optional, default 'scrollup'
   timeout: 3000, // Optional, default null. Ms value before the scrollup content will disappear
   create: function() { },
   created: function() { },
   remove: function() { },
   removed: function() { },
   animationSpeed: 'slow',
   debug: false,
 });
```

**Example:**
```$(document).scrollup('body', {
    content: '<i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i><span class="sr-only">Refreshing...</span>',
    timeout: 3000
});```
