$(function(){
	//var content = $('#content') ;
	//content.find('section:not(.active)').hide();

	 $('.nav-items a').click(function(e){
		var $this = $(this);

		// Remove old content (by fading out)
		var active_content = $('section.active');
		//console.log('Hiding: ');
		//console.log(active_content);
		//active_content.removeClass('active').hide();

		// Remove selected from old menus, and add them to new one
		var new_selected_id = $this.attr('href'); // "#about"
		console.log(new_selected_id);
		var old_selected_menus = $('.nav-items a.selected');
		console.log(old_selected_menus);
		old_selected_menus.removeClass('selected');
		$(new_selected_id).addClass('selected');

		// Scroll to the correct position
		var top = $(new_selected_id).offset().top;
		$.scrollTo(top - 58 > 0 ? top - 58 : 0, 800);

		window.location.href = window.location.origin + window.location.pathname + new_selected_id;
		return false;
	});

	// Load page based on anchor/hash tag
	 if(window.location.hash) {
	 	$('.nav-items a[href="' + window.location.hash + '"]').click();
	}

	//Carousel stuff
	$('#my_carousel').carousel({
		interval: 3000
		,wrap: true
		, pause: "hover"
		,number: 0
	})
});
