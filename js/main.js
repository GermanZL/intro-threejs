import * as THREE from './three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

//crea el elemento html para visualizar la escena 3d
document.body.appendChild( renderer.domElement );

//dibujar un cuboide
const geometry = new THREE.BoxGeometry( 2, 1, 3 );

//crea un material para la geometria 
const material = new THREE.MeshBasicMaterial( { color: 0x2569b8 } );
//dibuja la geometria con el material
const cube = new THREE.Mesh( geometry, material );
//agrega el cubo a la escena
scene.add( cube );
//
camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

	renderer.render( scene, camera );

}