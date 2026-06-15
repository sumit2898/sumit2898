import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 22);

    scene.fog = new THREE.FogExp2(0x080808, 0.018);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xc9a84c, 3, 40);
    goldLight.position.set(5, 8, 10);
    scene.add(goldLight);

    const blueLight = new THREE.PointLight(0x3344ff, 1.5, 30);
    blueLight.position.set(-8, -5, 8);
    scene.add(blueLight);

    const rimLight = new THREE.DirectionalLight(0xffd700, 0.5);
    rimLight.position.set(-5, 10, -5);
    scene.add(rimLight);

    function buildPawnGeometry() {
      const group = new THREE.Group();
      const m = new THREE.MeshStandardMaterial({ color: 0xc9a84c, metalness: 0.85, roughness: 0.18 });
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.65, 0.2, 16), m);
      group.add(base);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.38, 0.6, 16), m);
      stem.position.y = 0.4; group.add(stem);
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.25, 0.12, 16), m);
      collar.position.y = 0.76; group.add(collar);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 20), m);
      head.position.y = 1.1; group.add(head);
      return group;
    }

    function buildRookGeometry() {
      const group = new THREE.Group();
      const m = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.12 });
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.22, 16), m);
      group.add(base);
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 1.0, 16), m);
      body.position.y = 0.7; group.add(body);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.38, 0.22, 16), m);
      top.position.y = 1.31; group.add(top);
      return group;
    }

    function buildBishopGeometry() {
      const group = new THREE.Group();
      const m = new THREE.MeshStandardMaterial({ color: 0x9a7a3a, metalness: 0.8, roughness: 0.22 });
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.65, 0.18, 16), m);
      group.add(base);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, 0.8, 16), m);
      stem.position.y = 0.49; group.add(stem);
      const collar = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), m);
      collar.position.y = 0.95; group.add(collar);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.5, 16), m);
      cone.position.y = 1.45; group.add(cone);
      return group;
    }

    const pieces = [];
    const positions = [
      [-6, -1, -3], [-3, 2, -5], [0, -0.5, -6], [3, 1.5, -4],
      [6, -1, -3], [-5, 3, -8], [4, -2, -7], [-2, 4, -10],
      [2, -3, -9], [7, 2, -12],
    ];
    const builders = [buildPawnGeometry, buildRookGeometry, buildBishopGeometry];

    positions.forEach((pos, i) => {
      const fn = builders[i % 3];
      const g = fn();
      g.position.set(...pos);
      g.rotation.y = Math.random() * Math.PI * 2;
      const scale = 0.5 + Math.random() * 0.6;
      g.scale.setScalar(scale);
      scene.add(g);
      pieces.push({ group: g, baseY: pos[1], speed: 0.3 + Math.random() * 0.5, phase: Math.random() * Math.PI * 2 });
    });

    const boardGeom = new THREE.PlaneGeometry(40, 40, 20, 20);
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0x111111, metalness: 0.1, roughness: 0.9,
      wireframe: true, opacity: 0.08, transparent: true
    });
    const board = new THREE.Mesh(boardGeom, boardMat);
    board.rotation.x = -Math.PI / 2;
    board.position.y = -5;
    scene.add(board);

    const starCount = 220;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 80;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 15;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xc9a84c, size: 0.06, transparent: true, opacity: 0.5 });
    scene.add(new THREE.Points(starGeo, starMat));

    let isDragging = false, prevMouse = { x: 0, y: 0 };
    let rotX = 0, rotY = 0, targetRotX = 0, targetRotY = 0;
    let zoomFactor = 1, targetZoom = 1;

    canvas.style.pointerEvents = 'auto';
    const onMouseDown = e => { isDragging = true; prevMouse = { x: e.clientX, y: e.clientY }; };
    const onMouseUp = () => isDragging = false;
    const onMouseMove = e => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      targetRotY += dx * 0.004;
      targetRotX += dy * 0.004;
      targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX));
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onWheel = e => {
      targetZoom = Math.max(0.5, Math.min(2.2, targetZoom + e.deltaY * 0.001));
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', onWheel, { passive: true });

    let touchStart = null;
    const onTouchStart = e => { touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    const onTouchMove = e => {
      if (!touchStart) return;
      const dx = e.touches[0].clientX - touchStart.x;
      const dy = e.touches[0].clientY - touchStart.y;
      targetRotY += dx * 0.006;
      targetRotX += dy * 0.006;
      targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX));
      touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    canvas.addEventListener('touchstart', onTouchStart);
    canvas.addEventListener('touchmove', onTouchMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY) * 0.06;
      zoomFactor += (targetZoom - zoomFactor) * 0.05;

      const autoRotY = t * 0.04;
      camera.position.x = Math.sin(rotY + autoRotY) * 22 * zoomFactor;
      camera.position.z = Math.cos(rotY + autoRotY) * 22 * zoomFactor;
      camera.position.y = rotX * 8;
      camera.lookAt(0, 0, 0);

      pieces.forEach(p => {
        p.group.position.y = p.baseY + Math.sin(t * p.speed + p.phase) * 0.5;
        p.group.rotation.y += 0.003;
      });

      goldLight.intensity = 2.5 + Math.sin(t * 1.2) * 0.8;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas id="three-canvas" ref={canvasRef} />;
}
