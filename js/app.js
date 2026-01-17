window.addEventListener('load', loadGame)

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

const fails = ["octahedron", "dodecahedron", "octahedron", "dodecahedron", "octahedron"]

let meteor, fail, score, totalBalls


function loadGame(){
	document.querySelector('a-scene').style.position="absolute"
	document.querySelector('header').style.visibility="visible"
	console.log("pantalla cargada")
	score=0
	totalBalls=0
	initScene()


	//document.querySelector('button').addEventListener('load', initScene)
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
		
		//fail.setAttribute('rotation', { dur: 4000, loop:true})
		//fail.object3D.rotation.loop.set(true)
		//fail.object3D.rotation.dur(4000)
		//console.log(fail.object3D.rotation)

		fail.setAttribute('fail', '')
		document.querySelector('a-scene').appendChild(fail)
	})
}

AFRAME.registerComponent('shootable', {
	init: function() {
		this.el.addEventListener('click', () => {
			this.el.parentNode.removeChild(this.el)
			totalBalls--
			document.querySelector('[text]').setAttribute('value', `${++score} bolas alcanzadas`)
		})
	}

})

AFRAME.registerComponent('fail', {
	init: function() {
		this.el.addEventListener('click', () => {
			this.el.parentNode.removeChild(this.el)
			score=-1
			document.querySelector('[text]').setAttribute('value', `${++score} bolas alcanzadas`)
		})
	}
})

