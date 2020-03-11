let container = document.querySelector('#container')
let renderer = new THREE.WebGLRenderer()
renderer.setSize ( window.innerWidth, window.innerHeight)
renderer.setSize( window.innerWidth, window.innerHeight )
container.appendChild( renderer.domElement )
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,10000)
scene.add(camera)
let distance = 1000
var points = [];

for( let i=0; i<50; i++){
    let geometry = new THREE.SphereGeometry( 5, 32, 32 );
    let material = new THREE.MeshBasicMaterial( {color: Math.random() * 0x808080 + 0x808080} );
    let particule = new THREE.Mesh( geometry, material );
    particule.position.x = Math.random() * distance * 2 - distance
    particule.position.y = Math.random() * distance * 2 - distance
    particule.position.z = Math.random() * distance * 2 - distance
    particule.scale.x = particule.scale.y = Math.random() * 10 + 5

    points.push( new THREE.Vector3( particule.position ) );
    scene.add( particule );
}

var geometryLine = new THREE.BufferGeometry().setFromPoints( points );

let line = new THREE.Line (geometryLine, new THREE.LineBasicMaterial
    ({
        color: 0xffffff,
        opacity: 0.05
    }))
scene.add(line)

camera.position.z = 150

renderer.render(scene, camera)

document.addEventListener('mousemove', onMouseMove, false)

function onMouseMove(event){
    let mouseX = event.clientX - window.innerWidth/2
    let mouseY = event.clientY - window.innerHeight/2
    camera.position.x += (mouseX - camera.position.x) * 0.5
    camera.position.y += (mouseY - camera.position.y) * 0.5
    camera.position.z = distance
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
}