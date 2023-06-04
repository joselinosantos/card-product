const colorButtons = document.querySelectorAll('.fa-circle')
		const img = document.querySelector('.card-content-right img')
		const cores = {'blue': '#0047AB', 'gray': '#696969', 'black': '#393838'}

		colorButtons.forEach(btn => {
			btn.addEventListener('click', () => {
				colorButtons.forEach(function (btn) {
					btn.classList.remove('selected')
					btn.style.borderColor = ''
				});

				let imgSrc = btn.getAttribute('data-image')
				img.src = `img/mt03-${imgSrc}.png`

				btn.style.borderColor = cores[imgSrc]
	
				btn.classList.add('selected')
			})
		});
