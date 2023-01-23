// import * as THREE from "three";
import * as THREE from "three";

function main() {
    // Canvas/renderer setup
    const canvas = document.querySelector("#c");
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Camera setup
    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2;

    // Scene setup
    const scene = new THREE.Scene();

    // Create geometry for a box
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    console.log(geometry);

    // Create a material for the geometry
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

    // Create a mesh from the geometry and material
    const cube = new THREE.Mesh(geometry, material);

    // Add the mesh to the scene
    scene.add(cube);

    // Create a light source
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    function render(time) {
        time *= 0.001; // convert time to seconds

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();
