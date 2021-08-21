document.addEventListener('DOMContentLoaded', () => {
	/*--------------------| PRELOADER |--------------------*/
	const preloader = document.getElementById('preloader')

	setTimeout(() => preloader.classList.add('hide'), 1000)
	setTimeout(() => preloader.remove(), 1100)

	/*--------------------| SHOW MENU |--------------------*/
	const showMenu = (toggleId, navId) => {
		const toggle = document.getElementById(toggleId)
		const nav = document.getElementById(navId)

		// Validate that variables exist
		if (toggle && nav) {
			toggle.addEventListener('click', () => {
				// We add the show-menu class to the div tag with the nav__menu class
				!nav.classList.contains('show-menu')
					? nav.classList.add('show-menu')
					: nav.classList.remove('show-menu')
			})
		}
	}

	showMenu('nav-toggle', 'nav-menu')

	/*--------------------| SWIPER JS |--------------------*/
	const galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 0,
		slidesPerView: 0,
	})

	const galleryTop = new Swiper('.gallery-top', {
		effect: 'fade',
		loop: true,

		thumbs: {
			swiper: galleryThumbs,
		},
	})

	/*--------------------| POPUP |--------------------*/
	const btnOpenVideo = document.querySelectorAll('.islands__video-content')
	const islandsPopup = document.getElementById('popup')
	const btnCloseVideo = document.getElementById('popup-close')

	const popupToggleClass = (el, method, className) =>
		el.classList[method](className)

	btnOpenVideo.forEach(n =>
		n.addEventListener('click', () =>
			popupToggleClass(islandsPopup, 'add', 'show-popup')
		)
	)
	btnCloseVideo.addEventListener('click', () =>
		popupToggleClass(islandsPopup, 'remove', 'show-popup')
	)

	/*--------------------| GSAP ANIMATION |--------------------*/
	const controllImg = document.querySelectorAll('.controls__img')

	const scrollAnimation = () => {
		gsap.from('.islands__subtitle', {
			opacity: 0,
			duration: 0.2,
			delay: 0.2,
			y: -20,
		})

		gsap.from('.islands__title', {
			opacity: 0,
			duration: 0.3,
			delay: 0.3,
			y: -20,
		})

		gsap.from('.islands__description', {
			opacity: 0,
			duration: 0.4,
			delay: 0.4,
			y: -20,
		})

		gsap.from('.islands__button', {
			opacity: 0,
			duration: 0.5,
			delay: 0.5,
			y: -20,
		})

		gsap.from('.islands__video-content', {
			opacity: 0,
			duration: 0.6,
			delay: 0.6,
			y: -20,
		})

		popupToggleClass(islandsPopup, 'remove', 'show-popup')
	}

	controllImg.forEach(c => c.addEventListener('click', scrollAnimation))
})
