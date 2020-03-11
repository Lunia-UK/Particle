let container = document.querySelector('#container')
let renderer = new THREE.WebGLRenderer()
renderer.setSize ( window.innerWidth, window.innerHeight)
renderer.setSize( window.innerWidth, window.innerHeight )
container.appendChild( renderer.domElement )
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,10000)
scene.add(camera)
let distance = 1000

for( let i=0; i<50; i++){
    let geometry = new THREE.SphereGeometry( 5, 32, 32 );
    let material = new THREE.MeshBasicMaterial( {color: Math.random() * 0x808080 + 0x808080} );
    let particule = new THREE.Mesh( geometry, material );
    particule.position.x = Math.random() * distance * 2 - distance
    particule.position.y = Math.random() * distance * 2 - distance
    particule.position.z = Math.random() * distance * 2 - distance
    particule.scale.x = particule.scale.y = Math.random() * 10 + 5
    scene.add( particule );
}

camera.position.z = 100

renderer.render(scene, camera)