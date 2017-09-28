(function ($) {

    Drupal.behaviors.fotorama = {
        attach: function (context, settings) {
            $('#edit-fields-field-imgs-settings-edit-form-settings-vertical').live('change',function(){
                if (!$(this).is(':checked')){
                    $('#edit-fields-field-imgs-settings-edit-form-settings-navposition')
                    .find('option[value="right"],option[value="left"]').hide().removeAttr('selected')
                    .end().find('option[value="top"],option[value="bottom"]').show()
                    .end().find('option[value="auto"]').attr('selected','selected');
                }else{
                    $('#edit-fields-field-imgs-settings-edit-form-settings-navposition')
                    .find('option[value="right"],option[value="left"]').show()
                    .end().find('option[value="top"],option[value="bottom"]').hide().removeAttr('selected')
                    .end().find('option[value="auto"]').attr('selected','selected');
                }
               
            });
        }
    };

})(jQuery);
