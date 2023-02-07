import { useEffect, useState } from 'react';
import * as THREE from 'three';

function Animation() {
    // eslint-disable-next-line no-unused-vars
    const [size, setSize] = useState({width: 1000, height: 500})

    const camera = new THREE.PerspectiveCamera(
        75,
        2,
        0.1,
        1000
      );
    camera.position.z = 1;
    camera.position.y = 0.4;
    camera.position.x = -0.2;
    camera.lookAt(0, 0, 0)

    const scene = new THREE.Scene();

    var sphereGeometry = new THREE.CylinderGeometry( 0.05, 0.05, 0.01, 63 )
    var material = new THREE.MeshBasicMaterial( {color: "#ff0000"} );
    var mesh = new THREE.Mesh( sphereGeometry, material );
    mesh.position.z = -0.41
    scene.add( mesh );

    var cylinderGeometry = new THREE.CylinderGeometry( 0.4, 0.4, -0.04, 63 );
    var newMesh = new THREE.Mesh(cylinderGeometry, new THREE.MeshBasicMaterial( {color: "#eeeeee"} ))
    scene.add( newMesh );

    // var hemisphereLight, shadowLight;
    // hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)
	// shadowLight = new THREE.DirectionalLight(0xffffff, .9);
	// shadowLight.position.set(1.5, 3.5, 3.5);
	// shadowLight.castShadow = true;
	// shadowLight.shadow.camera.left = -4;
	// shadowLight.shadow.camera.right = 4;
	// shadowLight.shadow.camera.top = 4;
	// shadowLight.shadow.camera.bottom = -4;
	// shadowLight.shadow.camera.near = 1;
	// shadowLight.shadow.camera.far = 10;
	// shadowLight.shadow.mapSize.width = 20.48;
	// shadowLight.shadow.mapSize.height = 20.48;
	// scene.add(hemisphereLight);  
	// scene.add(shadowLight);

    const renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
    renderer.setSize( size.width, size.height );
    renderer.shadowMap.enabled = true;
    renderer.setAnimationLoop( animation );
    
    useEffect(() => {
        document.getElementById("container").appendChild( renderer.domElement );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // animation

    function animation( time ) {

        // mesh.rotation.x = time / 2000;
        mesh.rotation.y = time / 1000;
        renderer.render(scene, camera);

    }


    useEffect(() => {
        console.log("rendered")
        // animation(100)
    })

    return (
        <div id="container" style={{width: size.width, height: size.height}}>
            {animation(1000)}
        </div>
    )
}

export default Animation