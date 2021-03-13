( function($) {
  'use strict';


	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('.col-message, .success-message').show();
		                },

		                error: function(){
			                $('.col-message, .error-message').show();
			            }
			        });
			    }
			});
		});
	}
})(jQuery);
