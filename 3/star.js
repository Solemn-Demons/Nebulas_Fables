import * as THREE from 'three';
import './star.css';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Creating scene
const scene = new THREE.Scene();

//Creating first Sphere

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial ({
  color: "#1000FF",
  roughness: 0.2,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Viewport size
const size = {
  width:window.innerWidth,
  height:window.innerHeight,
};

//lights for vision
const light = new THREE.PointLight(0xD4A3FF, 1000, 1000);
light.position.set(0, 10, 10);
//light.intensity = 1.25
scene.add(light);

const ambientLight = new THREE.AmbientLight (0x404040);
scene.add(ambientLight);

const HemisphereLightlight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( HemisphereLightlight );

//Camera for first sphere
const camera = new THREE.PerspectiveCamera(
  40, 
  size.width / size.height, 
  0.1, 
  50
  );
camera.position.z = 20;
scene.add(camera);


//Renderer for sphere
const canvas = document.querySelector(".Constellations");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

//controls for sphere
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false; //stops it from being able to move around the screne
controls.enableZoom = false; //stops it from being able to zoom in and out
controls.autoRotate = true; //adds auto rotation
controls.autoRotateSpeed = 5; //decides rotation speed 

//resize

window.addEventListener('resize', () => {
  size.width = window.innerWidth
  size.height = window.innerHeight

  //update camera
  camera.aspect = size.width / size.height
  camera.updateProjectionMatrix()
  renderer.setSize(size.width, size.height)
});

const loop = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
  controls.update()
};
loop();


//timeline magic
const t1 = gsap.timeline({ defaults: { duration: 1} });
t1.fromTo(mesh.scale, {z:0, x:0, y:0}, {z: 1, x: 1, y: 1});
t1.fromTo('nav', {y: "-100%"}, {y: "0%"});
t1.fromTo('.title', {opacity: 0}, {opacity: 1});

//mouse animation color
let mouseDown = false;
let rgb = [];
window.addEventListener('mousedown', () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));

window.addEventListener ('mousemove', (e) => {
  if(mouseDown){
    rgb = [
      Math.round((e.pageX / size.width) * 255),
      Math.round((e.pageY / size.height) * 255),
      150,
    ];
  };
});





/* Attempt to add proper visuals

const rigel = new URL('./image/rigel.glb', import.meta.url);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window,innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer.setClearColor(0xA3A3A3);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(10, 10, 10);
orbit.update();

const grid = new THREE.GridHelper(30, 30);
scene.add(grid);

const assetLoader = new GLTFLoader();

assetLoader.load(rigel.href, function(gltf){
  const model = gltf.scene;
  scene.add(model);
}, undefined, function(error) {
  console.error(error);
});

function animate () {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window,this.innerHeight);
});
*/


//Sample.test code

/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
*/