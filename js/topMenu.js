(function() {

	const
		// HTML elements
		bodyEl = document.body,
		menuButton = document.getElementById( 'open-button' ),
		menuIcon = menuButton.querySelector( '.material-icons' ),
		iconList = document.querySelector( '.icon-list' ),
		logo = document.getElementById('logo').getElementsByTagName('a')[0],
		bioSection = document.getElementById('bio'),
		// scrolling positions
		bioTop = bioSection.offsetTop,
		bioBottom = bioTop + bioSection.offsetHeight,
		scrollPosition = window.scrollY || document.documentElement.scrollTop;

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
	// toggle menu/close icons and update aria-label accordingly
		if (menuIcon.textContent === 'menu') {
			menuIcon.textContent = 'close';
			menuIcon.setAttribute('aria-label', 'Close');
		} else {
			menuIcon.textContent = 'menu';
			menuIcon.setAttribute('aria-label', 'Menu');
		}
	};

	function srollTuning() {

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
		};
		
		// logo disapears below bio section
		if (scrollPosition >= bioBottom ) {
			logo.style.display = "none"
		}
		else {
			logo.style.display = ""
		};
		
	};

	function initEvents() {

		// clic
		menuButton.addEventListener( 'click', toggleMenu );
		menuButton.addEventListener( 'click', changeIcon );
		iconList.addEventListener( 'click', toggleMenu );
		iconList.addEventListener( 'click', changeIcon );
		
		// hover
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
		
		// scroll
		window.addEventListener('scroll', srollTuning );
	};

	function landingDefault() {
		menuButton.classList.add('default_top');
		logo.classList.add('default_top');
		if (scrollPosition < bioTop ) {
			logo.addEventListener('mouseenter', function() {
				this.style.color = 'var(--klr_unicorn)';
			});
			logo.addEventListener('mouseleave', function() {
				this.style.color = '';
			});
		};
	};
	
	// landingDefault()
	menuButton.classList.add('default_top');
	logo.classList.add('default_top');
	initEvents();

})();
