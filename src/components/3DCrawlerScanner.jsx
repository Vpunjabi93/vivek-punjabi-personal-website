import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CrawlerScanner3D = ({ stage = 'idle', mode = 'sales' }) => {
  const mountRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const stageRef = useRef(stage);
  const modeRef = useRef(mode);

  // Sync props to refs to prevent animation loop restarts
  useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setWebGLSupported(supported);
    } catch (e) {
      setWebGLSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!webGLSupported || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 300;
    const height = 300;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.5;
    camera.position.y = 0.5;

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    container.appendChild(renderer.domElement);

    // 3. Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // 4. Create Geometries & Materials
    
    // Target Web Sphere (Left)
    const sphereGeometry = new THREE.IcosahedronGeometry(1.4, 2);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const webSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    webSphere.position.x = -1.6;
    scene.add(webSphere);

    // Node Points on Sphere Vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.05,
      transparent: true,
      opacity: 0.4
    });
    const spherePoints = new THREE.Points(sphereGeometry, pointsMaterial);
    spherePoints.position.x = -1.6;
    scene.add(spherePoints);

    // Laser Scan Ring (Vertical Sweep)
    const laserGeometry = new THREE.TorusGeometry(1.45, 0.02, 8, 48);
    const laserMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.0
    });
    const laserRing = new THREE.Mesh(laserGeometry, laserMaterial);
    laserRing.rotation.x = Math.PI / 2;
    laserRing.position.x = -1.6;
    scene.add(laserRing);

    // Central AI Core (Right)
    const coreGroup = new THREE.Group();
    coreGroup.position.x = 1.6;
    scene.add(coreGroup);

    // Inner Core Solid Octahedron
    const coreGeometry = new THREE.OctahedronGeometry(0.55);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0xc7c6c6,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x333333
    });
    const innerCore = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(innerCore);

    // Outer Core Wireframe Octahedron
    const outerCoreGeometry = new THREE.OctahedronGeometry(0.75);
    const outerCoreMaterial = new THREE.MeshBasicMaterial({
      color: 0xc7c6c6,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const outerCore = new THREE.Mesh(outerCoreGeometry, outerCoreMaterial);
    coreGroup.add(outerCore);

    // 5. Data Flow Particles
    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);
    
    // Store particle-specific animation parameters
    const particleData = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Initialize particles off-screen or clustered on sphere
      positions[i * 3] = -1.6;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      opacities[i] = 0.0;

      particleData.push({
        active: false,
        progress: 0,
        speed: 0.01 + Math.random() * 0.025,
        startY: (Math.random() - 0.5) * 2.5,
        startZ: (Math.random() - 0.5) * 2.5,
        offsetCurve: (Math.random() - 0.5) * 1.5,
        delay: Math.random() * 100 // Stagger startup
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Glowing particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.08,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    });
    const flowParticles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(flowParticles);

    // Helper: Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 300;
      renderer.setSize(w, height);
      camera.aspect = w / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Frame Loop
    let reqId;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();
      const currentStage = stageRef.current;
      const currentMode = modeRef.current;

      // Color Sync logic based on GTM Mode & Stage
      const activeColor = currentMode === 'sales' ? 0xb22222 : 0xc7c6c6; // Blood Red vs Silver
      const corePulseColor = currentMode === 'sales' ? new THREE.Color(0xb22222) : new THREE.Color(0xc7c6c6);
      const accentRGBString = currentMode === 'sales' ? 'rgba(178,34,34,0.7)' : 'rgba(199,198,198,0.7)';

      // Core rotation (Always active)
      innerCore.rotation.x = time * 0.5;
      innerCore.rotation.y = time * 0.8;
      outerCore.rotation.x = -time * 0.3;
      outerCore.rotation.y = -time * 0.4;

      // Sphere rotation (Always active)
      webSphere.rotation.y = time * 0.08;
      spherePoints.rotation.y = time * 0.08;

      // Stage State Machine Transitions
      if (currentStage === 'idle') {
        // 1. Idle State: Slow ambient pulse, cyan colors, laser hidden
        laserMaterial.opacity = 0;
        particleMaterial.opacity = 0;
        
        // Sphere is low opacity gray
        sphereMaterial.color.setHex(0x444444);
        sphereMaterial.opacity = 0.15;
        pointsMaterial.color.setHex(0x666666);
        
        // Core is dark neutral
        coreMaterial.color.setHex(0x333333);
        coreMaterial.emissive.setHex(0x111111);
        outerCoreMaterial.color.setHex(0x333333);
        outerCoreMaterial.opacity = 0.1;
        coreGroup.scale.setScalar(1.0 + Math.sin(time * 1.5) * 0.03); // Gentle breathe
        
      } else if (currentStage === 'crawling') {
        // 2. Crawling State: Laser Sweeping active, sphere glows cyan
        sphereMaterial.color.setHex(0x00f0ff);
        sphereMaterial.opacity = 0.35;
        pointsMaterial.color.setHex(0x00f0ff);

        // Scan laser sweeps Y axis
        laserMaterial.opacity = 0.8 + Math.sin(time * 10) * 0.2; // Neon flickering
        laserMaterial.color.setHex(0x00f0ff);
        laserRing.position.y = Math.sin(time * 4.0) * 1.3;

        // Core is warming up
        coreMaterial.color.setHex(0x555555);
        coreMaterial.emissive.setHex(0x222222);
        outerCoreMaterial.color.setHex(0x00f0ff);
        outerCoreMaterial.opacity = 0.25;
        coreGroup.scale.setScalar(1.0 + Math.sin(time * 3.0) * 0.06);

        // Reset particles
        particleMaterial.opacity = 0.0;
        
      } else if (currentStage === 'synthesizing') {
        // 3. Synthesizing State: Particles flow, core flashes/pulses rapidly
        laserMaterial.opacity = Math.max(0, laserMaterial.opacity - 0.05); // Laser fades out
        
        sphereMaterial.color.setHex(0x555555);
        sphereMaterial.opacity = 0.2;
        pointsMaterial.color.setHex(0x888888);

        // Particle stream activation
        particleMaterial.opacity = 0.9;
        particleMaterial.color.setHex(0x00f0ff);
        
        const posAttr = particleGeometry.getAttribute('position');
        const posArray = posAttr.array;

        for (let i = 0; i < particleCount; i++) {
          const data = particleData[i];
          
          if (!data.active) {
            data.delay--;
            if (data.delay <= 0) {
              data.active = true;
              data.progress = 0;
            }
            continue;
          }

          data.progress += data.speed;
          
          // Lerp coordinate from sphere (-1.6) to core (1.6)
          const t = data.progress;
          const x = -1.6 + t * 3.2;
          
          // Curved flow path
          const y = data.startY * (1 - t) + data.offsetCurve * Math.sin(t * Math.PI);
          const z = data.startZ * (1 - t);

          posArray[i * 3] = x;
          posArray[i * 3 + 1] = y;
          posArray[i * 3 + 2] = z;

          if (t >= 1.0) {
            // Reset particle on sphere surface
            data.progress = 0;
            data.startY = (Math.random() - 0.5) * 1.8;
            data.startZ = (Math.random() - 0.5) * 1.8;
            data.offsetCurve = (Math.random() - 0.5) * 1.8;
          }
        }
        posAttr.needsUpdate = true;

        // Core flashes rapidly in mode accent color
        coreMaterial.color.copy(corePulseColor);
        const flash = 0.4 + Math.sin(time * 20.0) * 0.3; // Rapid pulse
        coreMaterial.emissive.copy(corePulseColor).multiplyScalar(flash);
        
        outerCoreMaterial.color.copy(corePulseColor);
        outerCoreMaterial.opacity = 0.4 + Math.sin(time * 20.0) * 0.2;
        coreGroup.scale.setScalar(1.05 + Math.sin(time * 20.0) * 0.08);

      } else if (currentStage === 'completed') {
        // 4. Completed State: Solid lock, slow rotation, gentle mode color breath
        laserMaterial.opacity = 0;
        particleMaterial.opacity = Math.max(0, particleMaterial.opacity - 0.05); // Fade out stream particles
        
        sphereMaterial.color.setHex(0x333333);
        sphereMaterial.opacity = 0.1;
        pointsMaterial.color.setHex(0x444444);

        // Core glows steadily in mode color
        coreMaterial.color.setHex(activeColor);
        coreMaterial.emissive.copy(corePulseColor).multiplyScalar(0.3 + Math.sin(time * 2.0) * 0.08);
        outerCoreMaterial.color.setHex(activeColor);
        outerCoreMaterial.opacity = 0.2 + Math.sin(time * 2.0) * 0.05;
        
        coreGroup.scale.setScalar(1.0 + Math.sin(time * 2.0) * 0.03); // Breathing lock
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup WebGL resources
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      pointsMaterial.dispose();
      laserGeometry.dispose();
      laserMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      outerCoreGeometry.dispose();
      outerCoreMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [webGLSupported]);

  // SVG Fallback for browsers with WebGL disabled/unsupported
  if (!webGLSupported) {
    const accentColor = mode === 'sales' ? 'var(--blood-red)' : 'var(--silver)';
    return (
      <div style={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        <svg width="80" height="80" viewBox="0 0 100 100" style={{ opacity: 0.75 }}>
          {stage === 'crawling' ? (
            <g>
              <circle cx="50" cy="50" r="40" stroke={accentColor} strokeWidth="1" fill="none" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="#00f0ff" strokeWidth="2">
                <animate attributeName="y1" values="20;80;20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="y2" values="20;80;20" dur="2s" repeatCount="indefinite" />
              </line>
            </g>
          ) : stage === 'synthesizing' ? (
            <g>
              <circle cx="50" cy="50" r="15" fill={accentColor}>
                <animate attributeName="r" values="10;18;10" dur="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;1.0;0.4" dur="0.8s" repeatCount="indefinite" />
              </circle>
              {/* Pulsing rings */}
              <circle cx="50" cy="50" r="30" stroke={accentColor} strokeWidth="2" fill="none" opacity="0.3">
                <animate attributeName="r" values="20;40" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.0" dur="1.2s" repeatCount="indefinite" />
              </circle>
            </g>
          ) : stage === 'completed' ? (
            <g>
              <polygon points="50,25 75,50 50,75 25,50" fill={accentColor} stroke="white" strokeWidth="1">
                <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="6s" repeatCount="indefinite" />
              </polygon>
            </g>
          ) : (
            <g>
              <circle cx="50" cy="50" r="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
              <polygon points="50,35 65,50 50,65 35,50" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </g>
          )}
        </svg>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: accentColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {stage === 'crawling' ? 'CRAWLING CLIENT...' : stage === 'synthesizing' ? 'SYNTHESIZING GTM...' : stage === 'completed' ? 'AUDIT LOCKED' : 'PIPELINE STANDBY'}
        </span>
      </div>
    );
  }

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '300px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative'
      }} 
    />
  );
};

export default CrawlerScanner3D;
