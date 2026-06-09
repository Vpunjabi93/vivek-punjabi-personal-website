import React, { useEffect, useRef, useState } from 'react';
import { useDualMode } from '../context/DualModeContext';
import * as THREE from 'three';

const TILT = -Math.PI / 4; // Tilt the coin 45 degrees downwards (top tilts away from camera)

const InteractiveCoin = () => {
  const { mode, toggleMode } = useDualMode();
  const mountRef = useRef(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const coinRef = useRef(null);
  const pointLightRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isSpinningRef = useRef(false);
  const spinProgressRef = useRef(0);
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0 });
  const spinStartRotationRef = useRef(0);
  const modeRef = useRef(mode);

  // Sync mode to ref
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  // Fallback check for WebGL
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
    const width = 140;
    const height = 140;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.5;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR at 2 for performance
    renderer.setPixelRatio(dpr);
    container.appendChild(renderer.domElement);

    // Helper: Create coin face canvas texture
    const createFaceTexture = (label, symbol, isRed, rotationAngle) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      // Base background gradient for a metallic finish
      const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
      if (isRed) {
        grad.addColorStop(0, '#ff5252');
        grad.addColorStop(1, '#b71c1c');
      } else {
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(1, '#cfd8dc');
      }
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(128, 128, 120, 0, Math.PI * 2);
      ctx.fill();

      // Outer gold/silver border ring
      ctx.strokeStyle = isRed ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.15)';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(128, 128, 108, 0, Math.PI * 2);
      ctx.stroke();

      // Outer rim ticks
      ctx.strokeStyle = isRed ? '#ffffff' : '#131313';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(128, 128, 98, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Unicode Symbol
      ctx.fillStyle = isRed ? '#ffffff' : '#131313';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '68px Courier New';
      ctx.fillText(symbol, 128, 105);

      // Draw Text
      ctx.font = 'bold 22px Courier New';
      ctx.fillText(label, 128, 175);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.center.set(0.5, 0.5);
      texture.rotation = rotationAngle;
      return texture;
    };

    // 4. Create materials (rotation angles chosen to keep text/symbols horizontal and upright)
    const salesFaceTexture = createFaceTexture('SALES', '⚡', true, Math.PI / 2);
    const marketingFaceTexture = createFaceTexture('MARKETING', '💼', false, -Math.PI / 2);

    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.2,
      roughness: 0.4,
      bumpScale: 0.05
    });

    const salesFaceMaterial = new THREE.MeshStandardMaterial({
      map: salesFaceTexture,
      metalness: 0.3,
      roughness: 0.3
    });

    const marketingFaceMaterial = new THREE.MeshStandardMaterial({
      map: marketingFaceTexture,
      metalness: 0.3,
      roughness: 0.3
    });

    // Cylinder materials array: [sides, top/front, bottom/back]
    const materials = [sideMaterial, salesFaceMaterial, marketingFaceMaterial];

    // 5. Coin Geometry setup
    const geometry = new THREE.CylinderGeometry(2.0, 2.0, 0.22, 64);
    geometry.rotateX(Math.PI / 2); // Orient cylinder to face camera

    const coin = new THREE.Mesh(geometry, materials);
    scene.add(coin);
    coinRef.current = coin;

    // 6. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight.position.set(5, 5, 4);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffffff, 3.0, 12);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);
    pointLightRef.current = pointLight;

    // 7. Mouse handlers
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -((e.clientY - rect.top) / height) * 2 + 1;
      mouseRef.current = { x, y };
      
      // Specular highlight follow mouse
      if (pointLightRef.current) {
        pointLightRef.current.position.x = x * 3;
        pointLightRef.current.position.y = y * 3;
      }

      // Rotate slightly toward cursor (hover tilt)
      if (!isSpinningRef.current) {
        targetRotationRef.current.x = y * 0.45;
        targetRotationRef.current.y = x * 0.45;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
      if (!isSpinningRef.current) {
        targetRotationRef.current.x = 0;
        targetRotationRef.current.y = 0;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 8. Animation loop
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (coinRef.current) {
        const currentMode = modeRef.current;
        if (isSpinningRef.current) {
          // Perform full rotation spin animation (X-axis vertical flip)
          spinProgressRef.current += 0.08;
          
          // If current mode is sales, we spin towards marketing (TILT + PI).
          // If current mode is marketing, we spin towards sales (TILT + 2*PI).
          const targetAngle = currentMode === 'sales' ? (TILT + Math.PI) : (TILT + Math.PI * 2);
          coinRef.current.rotation.x = spinStartRotationRef.current + spinProgressRef.current * (targetAngle - spinStartRotationRef.current);

          if (spinProgressRef.current >= 1.0) {
            isSpinningRef.current = false;
            spinProgressRef.current = 0;
            // Set exact rotation to snap (including TILT)
            coinRef.current.rotation.x = currentMode === 'sales' ? (TILT + Math.PI) : TILT;
            coinRef.current.rotation.y = 0;
            currentRotationRef.current.x = 0;
            currentRotationRef.current.y = 0;
            
            // Trigger React state change at the very end of the spin
            toggleMode();
          }
        } else {
          // Smoothly lerp towards target hover rotations
          currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.15;
          currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.15;

          // Apply base mode offset (180 deg around X if marketing) and the base TILT
          const baseOffset = currentMode === 'marketing' ? Math.PI : 0;
          coinRef.current.rotation.x = TILT + baseOffset + currentRotationRef.current.x;
          coinRef.current.rotation.y = currentRotationRef.current.y;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (renderer && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      sideMaterial.dispose();
      salesFaceMaterial.dispose();
      marketingFaceMaterial.dispose();
      salesFaceTexture.dispose();
      marketingFaceTexture.dispose();
      renderer.dispose();
    };
  }, [webGLSupported]);

  const handleCoinClick = () => {
    if (isSpinningRef.current) return;
    isSpinningRef.current = true;
    spinProgressRef.current = 0;
    // Set starting point (absolute X rotation)
    spinStartRotationRef.current = coinRef.current.rotation.x;
  };

  // Fallback: If WebGL is not supported, render beautiful CSS coin
  if (!webGLSupported) {
    return (
      <div 
        onClick={toggleMode} 
        style={{ cursor: 'pointer', perspective: '1000px', width: '130px', height: '130px', margin: '2rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div 
          style={{ 
            position: 'relative',
            width: '100px',
            height: '100px',
            textAlign: 'center',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d',
            transform: mode === 'marketing' ? 'rotateX(135deg)' : 'rotateX(-45deg)'
          }}
        >
          {/* Sales Face */}
          <div style={{
            position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
            backgroundColor: 'var(--blood-red)', borderRadius: '50%', border: '2px solid rgba(255, 255, 255, 0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff',
            boxShadow: 'inset 0 0 15px rgba(0,0,0,0.6), 0 0 25px rgba(178, 34, 34, 0.5)'
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600 }}>⚡ SALES</span>
          </div>
          {/* Marketing Face */}
          <div style={{
            position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
            backgroundColor: 'var(--silver)', borderRadius: '50%', border: '2px solid rgba(0, 0, 0, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#131313',
            transform: 'rotateX(180deg)', boxShadow: 'inset 0 0 15px rgba(255,255,255,0.6), 0 0 25px rgba(199, 198, 198, 0.3)'
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600 }}>💼 MARKETING</span>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', marginTop: '1.25rem', opacity: 0.5 }}>Flip GTM Mode</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem auto' }}>
      <div 
        ref={mountRef} 
        onClick={handleCoinClick}
        style={{ 
          cursor: 'pointer', 
          width: '140px', 
          height: '140px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div 
        style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.7rem', 
          marginTop: '0.5rem', 
          opacity: 0.5, 
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          pointerEvents: 'none'
        }}
      >
        Hover to Tilt // Click to Spin
      </div>
    </div>
  );
};

export default InteractiveCoin;
