(function ( $ ) {
  $.fn.scrollup = function(selector, options) {

    if (typeof options.content == 'undefined') {
        console.log('jQuery.scrollup could not be initialised, a "content" value must be set.');
        return;
    }

    if (typeof options.class == 'undefined' || !options.class) {
        options.class = 'scrollup';
    }

    if (typeof options.animationSpeed == 'undefined' || options.animationSpeed != 'fast' || options.animationSpeed != 'slow') {
        options.animationSpeed = 'fast';
    }

    if (options.debug) {
        console.log('jQuery.scrollup initialised on selector: "'+selector+'"');
    }

    $(selector).on('wheel', function(e) {
      if ($(this).scrollTop() == 0 && e.originalEvent.wheelDelta >= 0) {

        if ($(this).has('.'+options.class).length == 0) {

            if (options.create) { options.create(); }

            var scrollupElement = $('<div class="'+options.class+'">'+options.content+'</div>');

            scrollupElement.hide().prependTo(selector).show(options.animationSpeed);

            if (options.created) { options.created(); }

            if (options.timeout) {
                setTimeout(function() {
                    if (options.remove) { options.remove(); }
                    scrollupElement.hide(options.animationSpeed, function() {
                        scrollupElement.remove();
                        if (options.removed) { options.removed(); }
                    });
                }, options.timeout);
            }
        }
      }
    });

  }
}( jQuery ));
