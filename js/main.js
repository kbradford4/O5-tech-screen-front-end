jQuery(document).ready(function($){
	
	// Filter Assets
	var $btns = $('.btn').click(function() {
	  if (this.id == 'all') {
	    $('#wrap > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#wrap > div').not($el).hide();
	  }
	  $btns.removeClass('active');
	  $(this).addClass('active');
	})
	
	// Open Lightbox
	$('.open-lightbox').on('click', function(e) {
		e.preventDefault();
		var image = $(this).attr('href');
		$('html').addClass('no-scroll');
		$('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
	});
	
	// Close Lightbox
	$('body').on('click', '.lightbox-opened', function() {
		$('html').removeClass('no-scroll');
		$('.lightbox-opened').remove();
	});
});