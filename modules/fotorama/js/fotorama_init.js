(function ($) {

    Drupal.behaviors.fotorama = {
        attach: function (context, settings) {                    
            console.log(Drupal.settings.fotorama);
            console.log($('.fotorama-container').html());

            $('.fotorama-container').fotorama(Drupal.settings.fotorama);            
        }
    };

})(jQuery);
