import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { AxesHelper } from "three/src/helpers/AxesHelper";
import {loadFBX} from "./loadFBX"

export function render()
{
    // renderer
    const canvasWidth : number = 300;
    const canvasHeight : number = 300;
    const canvasElem : HTMLElement = document.getElementById('canvas')!;
    let renderer : THREE.WebGLRenderer = new THREE.WebGLRenderer(
        {
            canvas : canvasElem
        });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    // camera
    let scene : THREE.Scene = new THREE.Scene();
    let camera : THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
        45,
        1,
        1,
        10000
    );
    camera.position.set(0, -150, 160);
    camera.lookAt(0, 0, 70);

    // load fbx
    loadFBX(scene);

    // point light
    let pointLight : THREE.PointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(200, -200, 500);
    pointLight.distance = 10000;
    pointLight.castShadow = true;
    pointLight.shadow.mapSize.set(1024, 1024);
    pointLight.shadow.radius = 1;
    scene.add(pointLight);

    // ambient light
    const ambientLight : THREE.AmbientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    // orbit control
    let controls : OrbitControls = new OrbitControls(camera, document.body);
    controls.target.set(0, 0, 70);
    controls.update();

    // axes helper
    //const axes = new AxesHelper(100);
    //scene.add(axes);

    // shadow helper
    //const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
    //scene.add(cameraHelper);


    const tick = (): void => {
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    };
    tick();
}
