(function ($) {
    "use strict";
    
      if ($('.single_gallery_part').length > 0) {
            $('.single_gallery_part').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
      }

});