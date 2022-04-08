import React, { Component } from "react";
import * as THREE from "three";

class ThreeScene extends Component {
  componentDidMount() {
    var renderer, scene, camera, composer, circle, skelet, particle;
    window.onload = function () {
      init();
      animate();
    };
    function init() {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(
        window.devicePixelRatio ? window.devicePixelRatio : 1
      );
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.autoClear = false;
      renderer.setClearColor(0x000000, 0.0);
      document.getElementById("canvas").appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 330;
      scene.add(camera);

      circle = new THREE.Object3D();
      skelet = new THREE.Object3D();
      particle = new THREE.Object3D();

      scene.add(circle);
      scene.add(skelet);
      scene.add(particle);

      var geometry = new THREE.TetrahedronGeometry(2, 0);
      var geom = new THREE.IcosahedronGeometry(7, 1);
      var geom2 = new THREE.IcosahedronGeometry(15, 1);

      var material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        shading: THREE.FlatShading,
      });

      for (var i = 0; i < 1000; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position
          .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize();
        mesh.position.multiplyScalar(90 + Math.random() * 700);
        mesh.rotation.set(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        );
        particle.add(mesh);
      }

      var mat = new THREE.MeshPhongMaterial({
        color: 0x76006a,
        shading: THREE.FlatShading,
      });

      var mat2 = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        wireframe: true,
        side: THREE.DoubleSide,
      });

      // var planet = new THREE.Mesh(geom, mat);
      // planet.scale.x = planet.scale.y = planet.scale.z = 16;
      // circle.add(planet);

      // var planet2 = new THREE.Mesh(geom2, mat2);
      // planet2.scale.x = planet2.scale.y = planet2.scale.z = 11;
      // skelet.add(planet2);

      var ambientLight = new THREE.AmbientLight(0xff5900);
      scene.add(ambientLight);

      var lights = [];
      lights[0] = new THREE.DirectionalLight(0xdd100e, 1);
      lights[0].position.set(1, 0, 0);
      lights[1] = new THREE.DirectionalLight(0xea6117, 1);
      lights[1].position.set(0.75, 1, 0.5);
      lights[2] = new THREE.DirectionalLight(0xdd100e, 1);
      lights[2].position.set(-0.75, -1, 0.5);
      scene.add(lights[0]);
      scene.add(lights[1]);
      scene.add(lights[2]);

      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      particle.rotation.x += 0.0;
      particle.rotation.y -= 0.0004;
      circle.rotation.x -= 0.0002;
      circle.rotation.y -= 0.0003;
      skelet.rotation.x -= 0.0001;
      skelet.rotation.y += 0.0012;
      renderer.clear();

      renderer.render(scene, camera);
    }
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    if (this.cube) this.cube.rotation.y += 0.01;
    if (this.freedomMesh) this.freedomMesh.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div>
        <div className="hero_banner_sec">
          <div id="canvas"></div>
        </div>
      </div>
    );
  }
}
export default ThreeScene;
