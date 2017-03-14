/*! jquery.scrollup v1.0.0, @license MIT */

/*
|--------------------------------------------------------------------------
| jQuery Scroll Up
|--------------------------------------------------------------------------
|
| A jQuery plugin to recreate the commonly used "pull up to refresh" found
| in mobile devices, but this time for the desktop browser.
|
*/

(function ( $ ) {
  $.fn.scrollup = function(selector, options) {

    if (typeof options.content == 'undefined' || !options.content) {
        options.content = '';
    }

    if (typeof options.class == 'undefined' || !options.class) {
        options.class = 'scrollup';
    }

    if (typeof options.animationSpeed == 'undefined' || options.animationSpeed.toLowerCase() != 'fast' || options.animationSpeed.toLowerCase() != 'slow') {
        options.animationSpeed = 'fast';
    }

    if (options.debug) {
        console.log('jQuery.scrollup initialised on selector: "'+selector+'"');
    }

    $(selector).on('wheel', function(e) {
      if ($(this).scrollTop() == 0 && e.originalEvent.wheelDelta >= 0) {

        if ($(this).children('.'+options.class).length == 0) {

            if (options.debug) { console.log('jQuery.scrollup object is being created.'); }
            if (options.create) { options.create(); }

            var scrollupElement = $('<div class="'+options.class+'">'+options.content+'</div>');

            scrollupElement.hide().prependTo(selector).show(options.animationSpeed);

            if (options.debug) { console.log('jQuery.scrollup object has been created.'); }
            if (options.created) { options.created(); }

            if (options.timeout) {
                setTimeout(function() {
                    if (options.debug) { console.log('jQuery.scrollup object is being removed.'); }
                    if (options.remove) { options.remove(); }
                    scrollupElement.hide(options.animationSpeed, function() {
                        scrollupElement.remove();
                        if (options.debug) { console.log('jQuery.scrollup object has been removed.'); }
                        if (options.removed) { options.removed(); }
                    });
                }, options.timeout);
            }
        } else {
            if (options.debug) { console.log('jQuery.scrollup triggered, but object already exists.'); }
            if (options.exists) { options.exists(); }
        }
      }
    });

  }
}( jQuery ));
