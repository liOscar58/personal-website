var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var renderer = new THREE.WebGLRenderer({ alpha: true, autoClear: false });
renderer.setClearColor(0x000000, 0);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.background = "transparent"; 

document.body.appendChild(renderer.domElement);

// Create the cube
var cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xc9c9c9});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 0, 0);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Render the scene
var render = function () {
  requestAnimationFrame(render);

  cube.rotation.x += 0.002;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
};
render();