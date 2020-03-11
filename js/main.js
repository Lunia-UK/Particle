let container = document.querySelector('#container')
let renderer = new THREE.WebGLRenderer()
renderer.setSize ( window.innerWidth, window.innerHeight)
renderer.setSize( window.innerWidth, window.innerHeight )
container.appendChild( renderer.domElement )
let scene = new THREE.Scene()
scene.background = new THREE.Color( 0xffffff );
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,10000)
scene.add(camera)
let distance = 500
let points = [];

for( let i=0; i<70; i++){
    let geometry = new THREE.SphereGeometry( Math.random() * 10 + 5, 32, 32 );
    let material = new THREE.MeshBasicMaterial( {color: Math.random() * 0x808080 + 0x808080} );
    let particle = new THREE.Mesh( geometry, material );
    particle.position.x = Math.random() * distance * 2 - distance
    particle.position.y = Math.random() * distance * 2 - distance
    particle.position.z = Math.random() * distance * 2 - distance
    
    points.push( new THREE.Vector3( particle.position.x, particle.position.y, particle.position.z ) );
    scene.add( particle );
}

let materialLine = new THREE.LineBasicMaterial( {
    color: 0x000000,
    opacity: 0.08, 
    transparent: true,
} );
let geometryLine = new THREE.BufferGeometry().setFromPoints( points );
let line = new THREE.Line (geometryLine, materialLine)
scene.add(line)

camera.position.z = 1000

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