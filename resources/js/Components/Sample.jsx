import { React, useEffect, useState } from 'react';
import * as THREE from 'three';
import $ from 'jquery';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Sample = () => {
  useEffect(() => {
    let scene, camera, renderer, model;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
      camera.position.set(0, 0, 2.9);

      // Load the model
      const loader = new GLTFLoader();
      loader.load('./earth_stylized_low_poly.glb', (gltf) => {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0.1);
        model.rotation.set(0, 0, 0);
      });

      // CONTROLLER START MOUSE DRAGGING
      var canvas = renderer.domElement;
      canvas.addEventListener('mousedown', onMouseDown);
      var isDragging = false;
      var previousMousePosition = { x: 0, y: 0 };

      function onMouseDown(event) {
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
        $(document).on('mousemove', onMouseMove);
        $(document).on('mouseup', onMouseUp);
      }

      function onMouseMove(event) {
        var deltaX = event.clientX - previousMousePosition.x;
        var deltaY = event.clientY - previousMousePosition.y;

        model.rotation.y += deltaX * 0.005;
        model.rotation.x += deltaY * 0.005;

        previousMousePosition = { x: event.clientX, y: event.clientY };
      }

      function onMouseUp() {
        isDragging = false;
        $(document).off('mousemove', onMouseMove);
        $(document).off('mouseup', onMouseUp);
      }
      // END OF CONTROLLER

      // Light
      const light = new THREE.DirectionalLight(0xffffff, 3);
      light.position.set(1, 1, 3).normalize();
      scene.add(light);

      const container = $('#container');
      container.append(renderer.domElement);

      // Start the render loop
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);


      if (model) {
        model.rotation.y += 0.001;
      }


      renderer.render(scene, camera);
    };

    const handleResize = () => {
      var width = window.innerWidth;
      var height = window.innerHeight;


      camera.aspect = width / height;
      camera.updateProjectionMatrix();


      renderer.setSize(width * 0.7, height * 0.7);


      if (width <= 768) {
        camera.position.set(0, 0, 5);
      } else if (width <= 640) {
        camera.position.set(0, 0, 6);
      } else {
        camera.position.set(0, 0, 2.9);
      }
    };


    init();


    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="container" className="w-full h-screen flex items-center justify-center "></div>
  );
}

export default Sample;
