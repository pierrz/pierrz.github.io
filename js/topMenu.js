/*
 * Inspiration from
 * http://www.codrops.com
 * Copyright 2014, Codrops
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function() {

	const bodyEl = document.body,
		menuButton = document.getElementById( 'open-button' ),
		menuIcon = menuButton.querySelector( '.material-icons' ),
		iconList = document.querySelector( '.icon-list' ),
		logo = document.getElementById('logo').getElementsByTagName('a')[0];
	// 	landingSection = document.getElementById('landing'),
	// 	bioSection = document.getElementById('bio'),
	// 	gridSection = document.getElementById('grid');

	// // scrolled positions
	// const landingTop = landingSection.offsetTop,
	// 	landingBottom = landingTop + landingSection.offsetHeight,
	// 	bioTop = bioSection.offsetTop,
	// 	bioBottom = bioTop + bioSection.offsetHeight,
	// 	gridTop = gridSection.offsetTop,
	// 	gridBottom = gridTop + gridSection.offsetHeight,
	// 	scrollPosition = window.scrollY || document.documentElement.scrollTop;

	var isOpen = false;

	function toggleMenu() {
		if( isOpen ) {
			bodyEl.classList.remove( 'show-menu' );
		}
		else {
			bodyEl.classList.add( 'show-menu' );
		}
		isOpen = !isOpen;
	};

	function changeIcon() {
		if (menuIcon.textContent === 'menu') {
			menuIcon.textContent = 'close'; // Change to close icon
			menuIcon.setAttribute('aria-label', 'Close'); // Update aria-label for accessibility
		} else {
			menuIcon.textContent = 'menu'; // Change back to menu icon
			menuIcon.setAttribute('aria-label', 'Menu'); // Update aria-label for accessibility
		}
	};

	function srollTuning() {
		// HTML elements
		const landingSection = document.getElementById('landing'),
				bioSection = document.getElementById('bio'),
				gridSection = document.getElementById('grid'),
		// scrolled positions
				landingTop = landingSection.offsetTop,
				landingBottom = landingTop + landingSection.offsetHeight,
				bioTop = bioSection.offsetTop,
				bioBottom = bioTop + bioSection.offsetHeight,
				gridTop = gridSection.offsetTop,
				gridBottom = gridTop + gridSection.offsetHeight,
				scrollPosition = window.scrollY || document.documentElement.scrollTop;

		// // html elements
		// const menuButton = document.querySelector('.menu-button'),
		// 		logo = document.getElementById('logo').getElementsByTagName('a')[0],
		// 		landingSection = document.getElementById('landing'),
		// 		bioSection = document.getElementById('bio'),
		// 		gridSection = document.getElementById('grid');
		
		// // scrolled positions
		// const landingTop = landingSection.offsetTop,
		// 		landingBottom = landingTop + landingSection.offsetHeight,
		// 		bioTop = bioSection.offsetTop,
		// 		bioBottom = bioTop + bioSection.offsetHeight,
		// 		gridTop = gridSection.offsetTop,
		// 		gridBottom = gridTop + gridSection.offsetHeight,
		// 		scrollPosition = window.scrollY || document.documentElement.scrollTop;
		
		// menuButton.classList.add('default_top');
		// logo.classList.add('default_top');

		// window.addEventListener('scroll', function() {
			// change stying only for bio section
			if (scrollPosition >= bioTop && scrollPosition <= bioBottom ) {
				menuButton.classList.remove('default_top');
				logo.classList.remove('default_top');
				menuButton.classList.add('tuned_top');
				logo.classList.add('tuned_top');
			} 
			else {
				menuButton.classList.remove('tuned_top');
				logo.classList.remove('tuned_top');
				menuButton.classList.add('default_top');
				logo.classList.add('default_top');
			}
		
			// menuButton.addEventListener('mouseenter', function() {
			// 	this.classList.add('hovered');
			// });
			// logo.addEventListener('mouseenter', function() {
			// 	this.classList.add('hovered');
			// });
			// menuButton.addEventListener('mouseleave', function() {
			// 	this.classList.remove('hovered');
			// });
			// logo.addEventListener('mouseleave', function() {
			// 	this.classList.remove('hovered');
			// });
			
			// logo disapears below bio section
			if (scrollPosition >= bioBottom ) {
				logo.style.display = "none"
			}
			else {
				logo.style.display = ""
			}
		
		// });
	};

	function initEvents() {
		menuButton.addEventListener( 'click', toggleMenu );
		menuButton.addEventListener( 'click', changeIcon );
		iconList.addEventListener( 'click', toggleMenu );
		iconList.addEventListener( 'click', changeIcon );
		menuButton.addEventListener('mouseenter', function() {
			this.classList.add('hovered');
		});
		logo.addEventListener('mouseenter', function() {
			this.classList.add('hovered');
		});
		menuButton.addEventListener('mouseleave', function() {
			this.classList.remove('hovered');
		});
		logo.addEventListener('mouseleave', function() {
			this.classList.remove('hovered');
		});
		window.addEventListener('scroll', srollTuning );
	};

	menuButton.classList.add('default_top');
	logo.classList.add('default_top');
	// srolltuning()
	initEvents();

})();
