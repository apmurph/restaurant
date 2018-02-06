
$(function() {


init();


	function init(){
		navBar();
		ourChefs();	
		gallery();
		menu();
		contact();
	}

// ================== TOGGLE NAV BAR =====================================
	function navBar(){
		$('.nav-button').click(function(){
			$('.nav-content').toggleClass('nav-hide');
		});	
	}

// ================== NAV BETWEEN CHEF PROFILES ===================================
	function ourChefs(){		
		var chefCount = 1;
		var chefArticles = ['article:nth-of-type(1)','article:nth-of-type(2)','article:nth-of-type(3)'];
		var chefImages = ['.chef-image-large img:nth-of-type(1)','.chef-image-large img:nth-of-type(2)','.chef-image-large img:nth-of-type(3)'];
		
		$('#add').on('click', function(){
			if (chefCount <= 0) {
				chefCount += 1;
				$('article').fadeOut(0);
				$('.chefs-image-large img').fadeOut(0);
				$(chefArticles[chefCount]).fadeIn(500);
				$(chefImages[chefCount]).fadeIn(500);
			} else if (chefCount <= 2) {
						$('article').fadeOut(0);
						$('.chef-image-large img').fadeOut(0);
						$(chefArticles[chefCount]).fadeIn(500);
						$(chefImages[chefCount]).fadeIn(500);
						chefCount += 1;
			}
		});
		$('#subtract').on('click', function(){
			if (chefCount >= 3) {
				chefCount += -2;
				$('article').fadeOut(0);
				$('.chef-image-large img').fadeOut(0);
				$(chefArticles[chefCount]).fadeIn(500);
				$(chefImages[chefCount]).fadeIn(500);
			} else if (chefCount >= 1) {
						chefCount += -1;
						$('article').fadeOut(0);
						$('.chef-image-large img').fadeOut(0);
						$(chefArticles[chefCount]).fadeIn(500);
						$(chefImages[chefCount]).fadeIn(500);
			}
		});
	}
// ========ADD AND REMOVE IMAGES USING THE GALLERY NAV BAR ==================
	function gallery(){
		$('.gallery-bnt-1').on('click', function(){
			$('.small-image').removeClass('hide-html');
		});
		$('.gallery-bnt-2').on('click', function(){
			$('.small-image').addClass('hide-html');
			$('.meat').removeClass('hide-html');
		});
		$('.gallery-bnt-3').on('click', function(){
			$('.small-image').addClass('hide-html');
			$('.fish').removeClass('hide-html');
		});
		$('.gallery-bnt-4').on('click', function(){
			$('.small-image').addClass('hide-html');
			$('.dessert').removeClass('hide-html');
		});
		$('.gallery-bnt-5').on('click', function(){
			$('.small-image').addClass('hide-html');
			$('.veg').removeClass('hide-html');
		});
		// ENLARGE AND TOGGLE EACH GALLERY IMAGE
		$('.inspect-image span').on('click', function(){
			$(this).parent().parent().prev().removeClass('hide-html');
			$(this).parent().parent().prev().prev().removeClass('hide-html');
		});
		$('.remove-image').on('click', function(){
			$(this).next().addClass('hide-html');
			$(this).addClass('hide-html');
		});		
	}

// ================== NAV BETWEEN MENU =====================================
	function menu(){
		var menuCount = 1;
		var menuTitle = ['.menu-title:nth-of-type(1)','.menu-title:nth-of-type(2)','.menu-title:nth-of-type(3)'];
		var menuContent = ['.menu-content section:nth-of-type(1)','.menu-content section:nth-of-type(2)','.menu-content section:nth-of-type(3)'];
		$('#move-right').on('click', function(){
			if (menuCount <= 0) {
				menuCount += 1;
				$('.display-menu').removeClass('display-menu');
				$(menuTitle[menuCount]).addClass('display-menu');
				$(menuContent[menuCount]).addClass('display-menu');
			} else if (menuCount <= 2) {
						$('.display-menu').removeClass('display-menu');
						$(menuTitle[menuCount]).addClass('display-menu');
						$(menuContent[menuCount]).addClass('display-menu');
						menuCount += 1;
					}
		});
		$('#move-left').on('click', function(){
			if (menuCount >= 3) {
				menuCount += -2;
				$('.display-menu').removeClass('display-menu');
				$(menuContent[menuCount]).addClass('display-menu');
				$(menuTitle[menuCount]).addClass('display-menu');
			} else if (menuCount >= 1) {
						menuCount += -1;
						$('.display-menu').removeClass('display-menu');
						$(menuContent[menuCount]).addClass('display-menu');
						$(menuTitle[menuCount]).addClass('display-menu');
					}
		});
	}
// ================== SHOW AND CANCEL CONTACT FORM ===========================
	function contact(){
		$('.contact-us').click(function(){
			$('.contact-form').toggleClass('hide-form');
		});
		$('.cancel-message').click(function(){
			$('.contact-form').addClass('hide-form');
		});		
	}

});

