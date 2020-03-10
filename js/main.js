let container = document.querySelector('#container')

let renderer = new THREE.WebGLRenderer()
renderer.setSize ( window.innerWidth, window.innerHeight)
renderer.setSize( window.innerWidth, window.innerHeight )
container.appendChild( renderer.domElement )

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,10000)
scene.add(camera)

let geometry = new THREE.SphereGeometry( 50, 32, 32 );
const material = new THREE.MeshBasicMaterial({ color: 0xfff000 })
let particule = new THREE.Mesh( geometry, material )
particule.position.x = 0
particule.position.y = 0
particule.position.z = 0
scene.add( particule );

camera.position.z = 100
camera.lookAt(particule)
renderer.render(scene, camera)