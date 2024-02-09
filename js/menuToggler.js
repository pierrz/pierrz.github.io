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
		iconList = document.querySelector( '.icon-list' );
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

	function initEvents() {
		menuButton.addEventListener( 'click', toggleMenu );
		menuButton.addEventListener( 'click', changeIcon );
		iconList.addEventListener( 'click', toggleMenu );
		iconList.addEventListener( 'click', changeIcon );
	};

	initEvents();

})();
