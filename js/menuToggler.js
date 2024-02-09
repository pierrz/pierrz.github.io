/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		openbtn = document.getElementById( 'open-button' ),
		// closebtn = document.getElementById( 'close-button' ),
		closelink = document.querySelector( '.icon-list' ),
		isOpen = false;

	// function init() {
	// 	initEvents();
	// }

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		openbtn.addEventListener( 'click', changeIcon );
		closelink.addEventListener( 'click', toggleMenu );
		};

	function toggleMenu() {
		if( isOpen ) {
			bodyEl.classList.remove( 'show-menu' );
		}
		else {
			bodyEl.classList.add( 'show-menu' );
		}
		isOpen = !isOpen;
	}

	function changeIcon() {
		const icon = this.querySelector('.material-icons');
		if (icon.textContent === 'menu') {
			icon.textContent = 'close'; // Change to close icon
			this.setAttribute('aria-label', 'Close'); // Update aria-label for accessibility
		} else {
			icon.textContent = 'menu'; // Change back to menu icon
			this.setAttribute('aria-label', 'Menu'); // Update aria-label for accessibility
		}
	}

	// init();
	initEvents();

})();


// document.getElementById('open-button').addEventListener('click', function() {
// 	const icon = this.querySelector('.material-icons');
// 	if (icon.textContent === 'menu') {
// 	  icon.textContent = 'close'; // Change to close icon
// 	  this.setAttribute('aria-label', 'Close'); // Update aria-label for accessibility
// 	} else {
// 	  icon.textContent = 'menu'; // Change back to menu icon
// 	  this.setAttribute('aria-label', 'Menu'); // Update aria-label for accessibility
// 	}
//   });
