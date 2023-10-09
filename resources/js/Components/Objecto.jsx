// Objecto.jsx

import { React, useEffect,useState } from 'react';
import * as THREE from 'three';
import $ from 'jquery';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
const Objecto = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({alpha:true});

    camera.position.set(0, 0.69, 3.5 );

    // responsive 3d model
     const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMediumScreen(true);
        camera.aspect = 0.9;  // Update the camera aspect ratio
        camera.updateProjectionMatrix();
      } else {
        setIsMediumScreen(false);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }

      renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
    };

    window.addEventListener('resize', handleResize);
    handleResize();




    // Initialize GLTFLoader
    const loader = new GLTFLoader();

    // Load the model
    loader.load('./workbench.glb', (gltf) => {
      const model = gltf.scene;
      scene.add(model);


      model.position.set(0, 0, 0.1);
      model.rotation.set(0, 4.7, 0);


      // const controller = new OrbitControls(camera, renderer.domElement);

      // CONTROLLER START MOUSE DRAGGING
      var canvas = renderer.domElement;
      canvas.addEventListener('mousedown', onMouseDown);

      var isDragging = false;
      var previousMousePosition = {
        x: 0,
        y: 0
      };

      function onMouseDown(event) {
        isDragging = true;
        previousMousePosition = {
          x: event.clientX,
          y: event.clientY
        };
        $(document).on('mousemove',onMouseMove);
        $(document).on('mouseup',onMouseUp);


      }

      function onMouseMove(event) {
        var deltaX = event.clientX - previousMousePosition.x;
        var deltaY = event.clientY - previousMousePosition.y;

        model.rotation.y += deltaX * 0.005;
        model.rotation.x += deltaY * 0.005;

        previousMousePosition = {
          x: event.clientX,
          y: event.clientY
        };
      }

      function onMouseUp() {
        isDragging = false;

        $(document).off('mousemove',onMouseMove);
        $(document).off('mouseup',onMouseUp);
      }
// END OF CONTROLLER

      // Light
      const light = new THREE.DirectionalLight(0xffffff, 5);
      light.position.set(1, 1, 3).normalize();
      scene.add(light);

      function animate() {
        requestAnimationFrame(animate);
        // controller.update();
        model.rotation.y -= 0.001;
        renderer.render(scene, camera);
      }

      animate();

      const container = $('#container');
      container.append(renderer.domElement);


    });

      // return ()=>{
      //   controller.dispose();
      // }
  }, []);

  return (
    <div id="container" className="w-full h-screen  flex items-center justify-center ">
    </div>
  );
}


export default Objecto;
