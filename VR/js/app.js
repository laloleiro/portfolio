var scene = document.querySelector('a-scene');
window.addEventListener("startGame", initScene);

if (scene.hasLoaded) {
  run();
} else {
  	scene.addEventListener('loaded', run);
}

function run () {
	document.querySelector('a-scene').style.opacity = "1";
	loadGame();
}

const meteors = [
		{x:20, y:9, z:-20},
		{x:-30, y:2, z:0},
		{x:-20, y:0, z:20},
		{x:30, y:8, z:0},
		{x:-20, y:7, z:-20},
		{x:0, y:10, z:-30},
		{x:0, y:5, z:30},
		{x:20, y:3, z:20}
		]

const fails = ["octahedron", "dodecahedron", "octahedron", "dodecahedron", "octahedron"];

let meteor, fail, score, totalBalls;


function loadGame(){
	score=0;
	totalBalls=0;
}


function initScene(){
	let orbits = document.querySelectorAll('.orbit')
	orbits.forEach(orbit =>{
		meteors.forEach(pos=>{
			meteor = document.createElement('a-entity')
			meteor.setAttribute('class', 'meteoro')
			meteor.setAttribute('geometry', { primitive:'sphere', radius:Math.random()*3+0.5})
			meteor.setAttribute('material', { color:'red' })
			meteor.object3D.position.set(pos.x, pos.y, pos.z)
			meteor.setAttribute('shootable', '')
			orbit.appendChild(meteor)
			totalBalls++
		})
	})

	fails.forEach( (fname, index) =>{
		fail = document.createElement('a-entity')
		fail.setAttribute('class', 'meteoro')
		fail.setAttribute('geometry', { primitive: fname, radius:Math.random()*3+0.5 })
		fail.setAttribute('material', { color: 'blue' })
		fail.object3D.position.set(meteors[index].x, meteors[index].y, meteors[index].z)
		fail.object3D.rotation.set(0, 360, 0)

		fail.setAttribute('fail', '')
		document.querySelector('a-scene').appendChild(fail)
	})
}

AFRAME.registerComponent('shootable', {
	init: function() {
		this.el.addEventListener('click', () => {
			this.el.parentNode.removeChild(this.el)
			totalBalls--;
			let textNode = document.querySelector('[text]');
			console.log(textNode);
			textNode.setAttribute('value', `${++score} bolas alcanzadas`)
			textNode.setAttribute("color","darkgreen");
            setTimeout(() => {
                textNode.setAttribute("color","white");
            }, 500);
		})
	}

})

AFRAME.registerComponent('fail', {
	init: function() {
		this.el.addEventListener('click', () => {
			this.el.parentNode.removeChild(this.el)
			score=-1
			document.querySelector('[text]').setAttribute('value', `${++score} bolas alcanzadas`)
			textNode.setAttribute("color","red");
           

		})
	}
})

