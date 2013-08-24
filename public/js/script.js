$(function(){
	var content = $('#content') ;
	content.find('section:not(.active)').hide();

	 $('.nav-items a').click(function(){
		var $this = $(this);

		// Remove old content (by fading out)
		var active_content = $('section.active');
		console.log('Hiding: ');
		console.log(active_content);
		active_content.removeClass('active').hide();

		// Remove selected from old menus, and add them to new one
		var new_selected_menu_id = $this.attr('href'); // #about
		var old_selected_menus = $('.nav-items a.selected');
		old_selected_menus.removeClass('selected');
		$(new_selected_menu_id).addClass('selected');

		//  Insert new content (by fading in)
		$(new_selected_menu_id).addClass('active').show();

		// Scroll to the top
		setTimeout(function() {
			window.scrollTo(0,0);
		}, 1);
	})

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
