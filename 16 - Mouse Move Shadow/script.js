const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

function shadow(e) {
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;

	let x = e.offsetX;
	let y = e.offsetY;

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round(x / width * walk - walk / 2);
	const yWalk = Math.round(y / height * walk - walk / 2);

	text.style.textShadow = `${xWalk}px ${yWalk}px rgb(255, 0, 255, 0.4),
        ${xWalk * -1}px ${yWalk}px rgb(0, 255, 255, 0.7),
        ${yWalk}px ${xWalk * -1}px rgb(0, 255, 54, 0.4)`;
}

hero.addEventListener('mousemove', shadow);
