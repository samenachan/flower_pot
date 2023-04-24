import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export function loadFBX(inScene : THREE.Scene)
{
    const loader : FBXLoader = new FBXLoader();
    loader.load("./flower_pot.fbx", (models : THREE.Group) => {
        models.traverse((child)=>{
            if(child.name == 'Leaf')
            {
                if ((child as THREE.Mesh).isMesh) 
                {
                    (child as THREE.Mesh).material = new THREE.MeshLambertMaterial({  
                        color: 0xebff7a,
                        side: THREE.DoubleSide
                    });
                    (child as THREE.Mesh).castShadow = true;
                }
            }
            else if(child.name == 'Branch')
            {
                if ((child as THREE.Mesh).isMesh) 
                {
                    (child as THREE.Mesh).material = new THREE.MeshToonMaterial({  
                        color: 0x2c110c
                    });
                    (child as THREE.Mesh).castShadow = true;
                }
            }
            else if(child.name == "Soil")
            {
                if((child as THREE.Mesh).isMesh)
                {
                    (child as THREE.Mesh).material = new THREE.MeshLambertMaterial({
                        color: 0xa57a55
                    });
                    (child as THREE.Mesh).castShadow = true;
                    (child as THREE.Mesh).receiveShadow = true;
                }
            }
            else if(child.name == "Pot")
            {
                if((child as THREE.Mesh).isMesh)
                {
                    (child as THREE.Mesh).material = new THREE.MeshToonMaterial({
                        color: 0xf1e1cb
                    });
                    (child as THREE.Mesh).castShadow = true;
                }
            }
            else if(child.name == "Stand")
            {
                if((child as THREE.Mesh).isMesh)
                {
                    (child as THREE.Mesh).material = new THREE.MeshToonMaterial({
                        color: 0x333333
                    });
                    (child as THREE.Mesh).castShadow = true;
                }
            }
            else if(child.name == "Plane")
            {
                if((child as THREE.Mesh).isMesh)
                {
                    (child as THREE.Mesh).material = new THREE.MeshToonMaterial({
                        color: 0xeae6dc
                    });
                    (child as THREE.Mesh).receiveShadow = true;
                }
            }
        });
        inScene.add(models);
    });
}