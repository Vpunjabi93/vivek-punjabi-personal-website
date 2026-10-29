import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const GARMENT_SPECIMENS = [
  {
    id: 'shinigami-tee',
    code: 'SPEC-01 // UC61',
    name: 'Shinigami 240 GSM Acid Wash Tee',
    subtitle: '35 LPI Semitone Black Knockout · 4200×5400 px @ 300 DPI',
    mockupImg: '/sugoi/shinigami-tee-hero.jpg',
    editorialImg: '/sugoi/shinigami-tee-editorial.jpg',
    dpi: '300 DPI (4200×5400 px)',
    material: '240 GSM Combed Mineral Acid-Wash Cotton',
    printTech: 'DTF Semitono (Pure #000000 Alpha Knockout + 35 LPI Halftone)',
    retail: '₹1,799',
    cm1: '₹836 (46.5%)',
    beRoas: '2.15x',
  },
  {
    id: 'shinigami-bomber',
    code: 'SPEC-02 // UA30',
    name: 'Shinigami 360° Sukajan Bomber',
    subtitle: 'Cut-and-Sew All-Over Sublimation · 8500×8500 px Master',
    mockupImg: '/sugoi/shinigami-bomber-back.jpg',
    editorialImg: '/sugoi/shinigami-bomber-editorial.jpg',
    dpi: '300 DPI (8500×8500 px)',
    material: '240 GSM Brushed Polyester Satin + 2×2 Rib Knit',
    printTech: '360° Panel Sublimation (Front, Back, Sleeves, Y-Panel, Welt Pockets)',
    retail: '₹3,499',
    cm1: '₹2,442 (69.8%)',
    beRoas: '1.43x',
  },
  {
    id: 'hime-bomber',
    code: 'SPEC-03 // FA30',
    name: 'Hime Noble Sukajan Bomber',
    subtitle: 'Bespoke Hemp-Wave AOP Pattern + Noble Back Crest',
    mockupImg: '/sugoi/hime-bomber-back.jpg',
    editorialImg: '/sugoi/hime-bomber-editorial.jpg',
    dpi: '300 DPI (8500×8500 px)',
    material: '240 GSM High-Sheen Satin · Custom Kumihimo Cord Stripe',
    printTech: 'Zero-Crack Sublimation + 11-Point Lookbook Continuity',
    retail: '₹3,499',
    cm1: '₹2,442 (69.8%)',
    beRoas: '1.43x',
  },
  {
    id: 'shinigami-cap',
    code: 'SPEC-04 // SB30',
    name: 'Shinigami 2.25" Flat-Fill Cap',
    subtitle: 'Strict 2.25"×2.25" Square Hoop · 2.5mm Min Stitch Width',
    mockupImg: '/sugoi/shinigami-cap.jpg',
    editorialImg: '/sugoi/shinigami-cap-editorial.jpg',
    dpi: '300 DPI (2400×2400 Super-Master)',
    material: 'Heavyweight Cotton Twill · 0° Straight-On Crown Registration',
    printTech: '100% Flat 2D Vector Fills (Zero Faux Stitches for Rayon Digitizing)',
    retail: '₹799',
    cm1: '₹329 (41.2%)',
    beRoas: '2.43x',
  },
  {
    id: 'oni-capsule',
    code: 'SPEC-05 // DROP-01',
    name: 'Oni & Hime Full Capsule Architecture',
    subtitle: '5-Silhouette Synchronized Drop · 10,000+ Vector Asset Taxonomy',
    mockupImg: '/sugoi/oni-capsule-board.jpg',
    editorialImg: '/sugoi/hime-babytee-editorial.jpg',
    dpi: '300 DPI Across All Platen Ratios',
    material: 'Multi-SKU Capsule (Bomber, Hoodie, Acid Tee, Baby Tee FT47, Cap)',
    printTech: 'Mutual Exclusivity Law (100% Specialty Vinyl OR Full-Color CMYK)',
    retail: '₹799 – ₹3,499',
    cm1: '40.8% – 69.8%',
    beRoas: '1.43x – 2.45x',
  },
];

const UNIT_ECONOMICS_ROWS = [
  {
    sku: 'Tsundere / Shinigami Bomber (FA30/UA30)',
    making: '₹749.70',
    landed: '₹1,057',
    retail: '₹3,499',
    cm1: '₹2,442 (69.8%)',
    cac: '₹600',
    cm2: '+₹1,842',
    roas: '1.43x',
  },
  {
    sku: 'Heavyweight Pullover Hoodie',
    making: '₹1,029.00',
    landed: '₹1,303',
    retail: '₹2,699',
    cm1: '₹1,396 (51.7%)',
    cac: '₹500',
    cm2: '+₹896',
    roas: '1.93x',
  },
  {
    sku: 'Shinigami Acid Wash OS Tee (UC61)',
    making: '₹780.75',
    landed: '₹963',
    retail: '₹1,799',
    cm1: '₹836 (46.5%)',
    cac: '₹400',
    cm2: '+₹436',
    roas: '2.15x',
  },
  {
    sku: 'Hime Baby Tee 2-Pack Bundle (FT47×2)',
    making: '₹714.00',
    landed: '₹869',
    retail: '₹1,499',
    cm1: '₹630 (42.0%)',
    cac: '₹220',
    cm2: '+₹410',
    roas: '2.38x',
  },
  {
    sku: 'Shinigami / Hime Embroidery Cap (SB30)',
    making: '₹356.00',
    landed: '₹470',
    retail: '₹799',
    cm1: '₹329 (41.2%)',
    cac: '₹180',
    cm2: '+₹149',
    roas: '2.43x',
  },
];

const Garment3DSlabMesh = ({ imageUrl }) => {
  const meshRef = useRef();
  const texture = useTexture(imageUrl);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.38;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.6) * 0.08;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[3.1, 3.8, 0.14]} />
        <meshStandardMaterial attach="material-0" color="#1C1C22" metalness={0.8} roughness={0.2} />
        <meshStandardMaterial attach="material-1" color="#1C1C22" metalness={0.8} roughness={0.2} />
        <meshStandardMaterial attach="material-2" color="#C8281E" metalness={0.6} roughness={0.3} />
        <meshStandardMaterial attach="material-3" color="#1C1C22" metalness={0.8} roughness={0.2} />
        <meshStandardMaterial attach="material-4" map={texture} roughness={0.35} metalness={0.1} />
        <meshStandardMaterial attach="material-5" map={texture} roughness={0.35} metalness={0.1} />
      </mesh>
    </group>
  );
};

const SugoiCaseStudySpread = () => {
  const [selectedGarmentIdx, setSelectedGarmentIdx] = useState(0);
  const [imageMode, setImageMode] = useState('mockup'); // 'mockup' | 'editorial' | '3d'
  const [loupeZoom, setLoupeZoom] = useState(2.4);
  const [halftoneOverlay, setHalftoneOverlay] = useState(true);
  const [hoverPos, setHoverPos] = useState({ active: false, x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState('cro'); // 'print' | 'cro' | 'roas'
  const [telemetryState, setTelemetryState] = useState('after'); // 'before' | 'after'
  const [simulatedOrders, setSimulatedOrders] = useState(28);

  const activeSpecimen = GARMENT_SPECIMENS[selectedGarmentIdx];
  const displayedImage =
    imageMode === 'editorial' ? activeSpecimen.editorialImg : activeSpecimen.mockupImg;

  const handleLoupeMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setHoverPos({ active: true, x, y });
  };

  // Financial simulator math anchored to the ₹10K/mo Media Plan
  const avgOrderValue = 2200;
  const avgCm1PerOrder = 1220; // ~55.5% blended CM1 across Bomber/Tee/Bundle mix
  const fixedOpEx = 12600; // ₹10,000 Meta Ads + ₹2,600 Software/Hosting
  const projectedRevenue = simulatedOrders * avgOrderValue;
  const projectedBlendedRoas = (projectedRevenue / 10000).toFixed(2);
  const projectedNetProfit = Math.round(simulatedOrders * avgCm1PerOrder - fixedOpEx);

  return (
    <section
      id="sugoi-case-study"
      style={{
        background: 'var(--noir-bg)',
        color: 'var(--noir-text)',
        borderTop: '4px solid var(--accent-vermilion)',
        borderBottom: '4px solid var(--on-surface)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          borderLeft: '1px solid var(--noir-border)',
          borderRight: '1px solid var(--noir-border)',
        }}
      >
        {/* Top Spread Running Header (Obsidian Atelier) */}
        <div
          style={{
            padding: '0.75rem 2rem',
            borderBottom: '1px solid var(--noir-border)',
            background: '#101014',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span className="stamp-badge">FEATURE 01 // COVER STORY</span>
            <span style={{ color: 'var(--noir-muted)' }}>
              CLIENT: SUGOI CULTURE (凄いカルチャー) // FULL-STACK D2C STREETWEAR ARCHITECTURE
            </span>
          </div>
          <div style={{ color: 'var(--noir-amber)', fontWeight: 700 }}>
            EXECUTION: MCP DESIGN PIPELINE + GA4/CLARITY SURGERY + META CBO ENGINE
          </div>
        </div>

        {/* Cover Story Headline Banner */}
        <div
          style={{
            padding: 'clamp(2.25rem, 4vw, 3.5rem) 2rem 2rem',
            borderBottom: '1px solid var(--noir-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'end',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--noir-amber)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              032-VP // ARCHIVAL DOSSIER — CYBER-OCCULT STREETWEAR &amp; REVENUE TELEMETRY
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.35rem, 4.6vw, 4.1rem)',
                color: 'var(--noir-text)',
                fontWeight: 500,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
              }}
            >
              SUGOI CULTURE — Full-Stack D2C Streetwear Growth Engine.
            </h2>
          </div>

          <div
            style={{
              borderLeft: '2px solid var(--noir-red)',
              paddingLeft: '1.25rem',
              color: 'var(--noir-muted)',
              fontSize: '1.02rem',
              lineHeight: 1.65,
            }}
          >
            Scaling an anime-inspired luxury streetwear label in India required more than aesthetic lookbooks. I engineered the entire system from raw pixel to contribution margin: a <strong style={{ color: 'var(--noir-text)' }}>10,000+ asset MCP production pipeline</strong>, forensic <strong style={{ color: 'var(--noir-text)' }}>GA4 + Microsoft Clarity telemetry recovery</strong> across 541 sessions, and a unit-economics-anchored <strong style={{ color: 'var(--noir-text)' }}>6.16x ROAS Meta CBO engine</strong>.
          </div>
        </div>

        {/* 3 Giant Metric Callout Pillars */}
        <div
          className="sugoi-metrics-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderBottom: '1px solid var(--noir-border)',
          }}
        >
          {[
            {
              code: 'METRIC // 01',
              tag: 'META CBO ARCHITECTURE',
              num: '6.16',
              suffix: 'x',
              title: 'Target Blended ROAS',
              desc: 'Unit-economics-anchored ₹10,000/mo (₹333/day) Meta CBO engine achieving break-even in just 10.3 orders/month and ₹21,560/mo net cash profit.',
              foot: 'BOMBER CM1: 69.8% (₹2,442) // TARGET AOV: ₹2,598+',
            },
            {
              code: 'METRIC // 02',
              tag: 'TELEMETRY PURIFICATION',
              num: '56.7',
              suffix: '%',
              title: 'Self-Referral Bug Purged',
              desc: 'Forensic audit of 541 live Clarity sessions uncovered a duplicate SEOPress consent blocker splitting internal clicks into fake self-referrals, plus Airlift breaking 100% of GA4 events.',
              foot: '1,233 SCROLL JS ERRORS FIXED // 91 LOGO DEAD-CLICKS RESOLVED',
            },
            {
              code: 'METRIC // 03',
              tag: 'ALGORITHMIC DESIGN',
              num: '300',
              suffix: 'DPI',
              title: 'Automated MCP Pipeline',
              desc: 'Orchestrated Krita, Illustrator, and Photoshop Raster Engine MCPs to output 35 LPI halftone black-knockout DTF masters and 8500×8500 px 360° Sukajan bomber panels.',
              foot: '10,000+ VECTOR ASSET DB // ZERO-PLASTIC HANDFEEL',
            },
          ].map((m, idx) => (
            <div
              key={m.code}
              style={{
                padding: '2rem',
                borderRight: idx < 2 ? '1px solid var(--noir-border)' : 'none',
                background: 'var(--noir-panel)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ color: 'var(--noir-muted)' }}>{m.code}</span>
                  <span style={{ color: 'var(--noir-red)', fontWeight: 700 }}>{m.tag}</span>
                </div>

                <div className="metric-serif" style={{ color: 'var(--noir-text)', marginBottom: '0.75rem' }}>
                  {m.num}
                  <span style={{ color: 'var(--noir-red)' }}>{m.suffix}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    color: 'var(--noir-text)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {m.title}
                </h3>

                <p style={{ color: 'var(--noir-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px dashed var(--noir-border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--noir-amber)',
                  letterSpacing: '0.06em',
                }}
              >
                {m.foot}
              </div>
            </div>
          ))}
        </div>

        {/* Main Interactive Spread: Left 5 Cols (3D & Halftone Garment Inspector) + Right 7 Cols (3-Tab Dossier) */}
        <div
          className="sugoi-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 7fr',
            alignItems: 'stretch',
          }}
        >
          {/* Left 5 Columns: Interactive Garment & 35 LPI Halftone Loupe Inspector */}
          <div
            style={{
              padding: '2rem',
              borderRight: '1px solid var(--noir-border)',
              background: '#0E0E12',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Inspector Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                borderBottom: '1px solid var(--noir-border)',
                paddingBottom: '0.75rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--noir-text)',
                }}
              >
                ⊕ 3D GARMENT &amp; 35 LPI HALFTONE LOUPE INSPECTOR
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--noir-amber)',
                }}
              >
                {activeSpecimen.code} // {loupeZoom.toFixed(1)}x
              </span>
            </div>

            {/* Garment Selector Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {GARMENT_SPECIMENS.map((item, idx) => {
                const isSelected = idx === selectedGarmentIdx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedGarmentIdx(idx)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.6rem 0.85rem',
                      background: isSelected ? 'var(--noir-panel-high)' : 'transparent',
                      border: isSelected ? '1px solid var(--noir-amber)' : '1px solid var(--noir-border)',
                      color: isSelected ? 'var(--noir-text)' : 'var(--noir-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span style={{ fontWeight: isSelected ? 700 : 500 }}>
                      0{idx + 1}. {item.name}
                    </span>
                    <span style={{ color: isSelected ? 'var(--noir-amber)' : 'var(--noir-muted)', fontSize: '0.66rem' }}>
                      {item.retail}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle: Mockup Loupe vs Editorial Lookbook vs 3D WebGL Slab */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {[
                { id: 'mockup', label: 'Production Mockup + Loupe' },
                { id: 'editorial', label: '11-Pt Editorial Lookbook' },
                { id: '3d', label: '3D WebGL Monolith' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setImageMode(m.id)}
                  style={{
                    flex: 1,
                    padding: '0.45rem 0.6rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    border: '1px solid var(--noir-border)',
                    background: imageMode === m.id ? 'var(--noir-red)' : 'var(--noir-panel)',
                    color: imageMode === m.id ? '#ffffff' : 'var(--noir-muted)',
                  }}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Interactive Viewport Box */}
            <div
              onMouseMove={imageMode !== '3d' ? handleLoupeMove : undefined}
              onMouseLeave={() => setHoverPos((prev) => ({ ...prev, active: false }))}
              style={{
                position: 'relative',
                width: '100%',
                height: '390px',
                border: '1px solid var(--noir-border)',
                background: '#09090B',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {imageMode === '3d' ? (
                <React.Suspense
                  fallback={
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--noir-amber)' }}>
                      LOADING 3D GARMENT SLAB...
                    </div>
                  }
                >
                  <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }}>
                    <ambientLight intensity={1.3} />
                    <directionalLight position={[5, 5, 5]} intensity={2.2} color="#ffffff" />
                    <directionalLight position={[-5, -3, -4]} intensity={1.4} color="#C8281E" />
                    <Garment3DSlabMesh imageUrl={activeSpecimen.mockupImg} />
                    <OrbitControls enableZoom={false} enablePan={false} />
                  </Canvas>
                </React.Suspense>
              ) : (
                <>
                  <img
                    src={displayedImage}
                    alt={activeSpecimen.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'contrast(1.04)',
                    }}
                  />

                  {/* Subtle 35 LPI Halftone Screen Dot Matrix Overlay */}
                  {halftoneOverlay && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(rgba(234, 230, 223, 0.14) 1px, transparent 0)',
                        backgroundSize: '6px 6px',
                        pointerEvents: 'none',
                      }}
                    />
                  )}

                  {/* Interactive Magnifying Loupe on Hover */}
                  {hoverPos.active && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: `${hoverPos.x}%`,
                        top: `${hoverPos.y}%`,
                        width: '155px',
                        height: '155px',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                        border: '2px solid var(--noir-amber)',
                        boxShadow: '0 0 0 1px #000, 0 12px 32px rgba(0,0,0,0.85)',
                        backgroundImage: `url(${displayedImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${loupeZoom * 100}%`,
                        backgroundPosition: `${hoverPos.x}% ${hoverPos.y}%`,
                        pointerEvents: 'none',
                        zIndex: 10,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '50%',
                          backgroundImage: 'radial-gradient(rgba(200, 40, 30, 0.22) 1px, transparent 0)',
                          backgroundSize: '5px 5px',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '6px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'rgba(11,11,13,0.9)',
                          color: 'var(--noir-amber)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.55rem',
                          padding: '1px 5px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        35 LPI // {loupeZoom.toFixed(1)}x
                      </span>
                    </div>
                  )}
                </>
              )}

              {/* Bottom Telemetry Overlay Strip */}
              <div
                style={{
                  position: 'absolute',
                  left: '10px',
                  right: '10px',
                  bottom: '10px',
                  background: 'rgba(11, 11, 13, 0.88)',
                  border: '1px solid var(--noir-border)',
                  padding: '0.45rem 0.7rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.64rem',
                  color: 'var(--noir-text)',
                  pointerEvents: 'none',
                }}
              >
                <span>{activeSpecimen.dpi}</span>
                <span style={{ color: 'var(--noir-amber)' }}>
                  {imageMode === '3d' ? 'DRAG TO ORBIT 3D SLAB' : 'HOVER TO INSPECT 35 LPI GRAIN'}
                </span>
              </div>
            </div>

            {/* Loupe Magnification Slider & Spec Readout */}
            <div
              style={{
                background: 'var(--noir-panel)',
                border: '1px solid var(--noir-border)',
                padding: '0.9rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <label htmlFor="sugoi-loupe-zoom" style={{ color: 'var(--noir-muted)' }}>
                  LOUPE MAGNIFICATION: <strong style={{ color: 'var(--noir-amber)' }}>{loupeZoom.toFixed(1)}x</strong>
                </label>
                <input
                  id="sugoi-loupe-zoom"
                  type="range"
                  min="1.5"
                  max="4.0"
                  step="0.1"
                  value={loupeZoom}
                  onChange={(e) => setLoupeZoom(parseFloat(e.target.value))}
                  style={{ accentColor: '#C8281E', width: '130px' }}
                />
                <button
                  type="button"
                  onClick={() => setHalftoneOverlay((v) => !v)}
                  style={{
                    background: halftoneOverlay ? 'rgba(229,142,38,0.15)' : 'transparent',
                    border: '1px solid var(--noir-border)',
                    color: halftoneOverlay ? 'var(--noir-amber)' : 'var(--noir-muted)',
                    padding: '2px 6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                  }}
                >
                  35 LPI GRID: {halftoneOverlay ? 'ON' : 'OFF'}
                </button>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--noir-border)',
                  paddingTop: '0.6rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.5rem',
                  color: 'var(--noir-muted)',
                }}
              >
                <div>
                  <span style={{ opacity: 0.6 }}>SUBSTRATE:</span>{' '}
                  <span style={{ color: 'var(--noir-text)' }}>{activeSpecimen.material}</span>
                </div>
                <div>
                  <span style={{ opacity: 0.6 }}>UNIT CM1 / BE-ROAS:</span>{' '}
                  <span style={{ color: 'var(--noir-amber)', fontWeight: 700 }}>
                    {activeSpecimen.cm1} // {activeSpecimen.beRoas}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Option 3's Interactive 3-Tab Dossier */}
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* 3-Tab Monolithic Segment Selector */}
              <div
                role="tablist"
                aria-label="Sugoi Culture Case Study Chapters"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  border: '1px solid var(--noir-border)',
                  marginBottom: '1.75rem',
                  background: '#0E0E12',
                }}
              >
                {[
                  { id: 'cro', code: 'TAB A // 01', title: 'GA4 + CLARITY & CRO SURGERY' },
                  { id: 'print', code: 'TAB B // 02', title: '300-DPI MCP PRINT PIPELINE' },
                  { id: 'roas', code: 'TAB C // 03', title: 'UNIT ECONOMICS & 6.16x ROAS' },
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        padding: '0.9rem 1rem',
                        border: 'none',
                        borderRight: '1px solid var(--noir-border)',
                        borderTop: isActive ? '3px solid var(--noir-red)' : '3px solid transparent',
                        background: isActive ? 'var(--noir-panel-high)' : 'transparent',
                        color: isActive ? 'var(--noir-text)' : 'var(--noir-muted)',
                        textAlign: 'left',
                        fontFamily: 'var(--font-mono)',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ fontSize: '0.62rem', color: isActive ? 'var(--noir-amber)' : 'var(--noir-muted)', marginBottom: '0.25rem' }}>
                        {tab.code}
                      </div>
                      <div style={{ fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                        {tab.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* TAB A: GA4 + CLARITY TELEMETRY SURGERY & CRO */}
              {activeTab === 'cro' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--noir-text)' }}>
                        01 // Forensic GA4 + Clarity Telemetry Audit &amp; Conversion Architecture
                      </h3>
                      <span className="stamp-badge">541 LIVE SESSIONS AUDITED</span>
                    </div>

                    <p style={{ color: 'var(--noir-muted)', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
                      Before deploying paid media on <code style={{ color: 'var(--noir-amber)' }}>sugoiculture.com</code>, I cross-referenced live DOM script execution against 30 days of Microsoft Clarity session recordings (`xa0ou08hu0`) and GA4 (`G-C9QMCV92F9`). The audit uncovered that speed optimization (**BlogVault Airlift**) and SEO (**SEOPress**) plugins were actively sabotaging analytics and conversion tracking.
                    </p>
                  </div>

                  {/* Interactive Before vs. After Telemetry Funnel Toggle */}
                  <div
                    style={{
                      border: '1px solid var(--noir-border)',
                      background: 'var(--noir-panel)',
                      padding: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '1.25rem',
                        paddingBottom: '0.75rem',
                        borderBottom: '1px solid var(--noir-border)',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700 }}>
                        ⚡ TELEMETRY &amp; FUNNEL STATE INSPECTOR:
                      </span>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button
                          type="button"
                          onClick={() => setTelemetryState('before')}
                          style={{
                            padding: '0.4rem 0.8rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            border: '1px solid var(--noir-border)',
                            background: telemetryState === 'before' ? 'var(--noir-red)' : 'transparent',
                            color: telemetryState === 'before' ? '#fff' : 'var(--noir-muted)',
                          }}
                        >
                          [BEFORE: AIRLIFT &amp; SEOPRESS BUGS]
                        </button>
                        <button
                          type="button"
                          onClick={() => setTelemetryState('after')}
                          style={{
                            padding: '0.4rem 0.8rem',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            border: '1px solid var(--noir-amber)',
                            background: telemetryState === 'after' ? 'var(--noir-amber)' : 'transparent',
                            color: telemetryState === 'after' ? '#0B0B0D' : 'var(--noir-amber)',
                          }}
                        >
                          [AFTER: DEPLOYED LIVE FIXES &amp; CRO]
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1rem',
                      }}
                    >
                      {(telemetryState === 'before'
                        ? [
                            {
                              label: 'GA4 CUSTOM ECOMMERCE EVENTS',
                              val: '0% ACTIVE (DEAD)',
                              status: 'CRITICAL',
                              detail:
                                'Airlift delayed custom WooCommerce JS (type="bv_inline_delayed_js") until after DOMContentLoaded had already fired — view_item, add_to_cart, and purchase never executed.',
                            },
                            {
                              label: 'CLARITY SESSION ATTRIBUTION',
                              val: '56.7% SELF-REFERRALS',
                              status: '307 FAKE SESSIONS',
                              detail:
                                'Duplicate SEOPress snippet forced window.clarity("consent", false), blocking cookies and splitting every internal click into a new sugoiculture.com session (0% returning users).',
                            },
                            {
                              label: 'DOM & UX FRICTION SIGNALS',
                              val: '1,233 JS SCROLL ERRORS',
                              status: '91 LOGO DEAD-CLICKS',
                              detail:
                                'Inline window.onscroll queried missing #hide-header on every scroll tick. Unlinked header logo caused 91 dead taps; static "LOADING MORE..." heading caused 16 dead clicks.',
                            },
                            {
                              label: 'CHECKOUT & AOV STRUCTURE',
                              val: '20–35% COD RTO BLEED',
                              status: '₹1,799 SINGLE-ITEM CART',
                              detail:
                                'Multi-step Razorpay friction (16 clicks in 97s) and zero cart upsell architecture left single-tee buyers ₹200 short of free delivery.',
                            },
                          ]
                        : [
                            {
                              label: 'GA4 + CLARITY SYNC (SNIPPET #8780)',
                              val: '100% EVENTS RESTORED',
                              status: 'DEPLOYED LIVE',
                              detail:
                                'Added data-cfasync="false" bv-exclude="true", replaced DOMContentLoaded race condition with document.readyState check, and unified trackBoth() across GA4 & Clarity.',
                            },
                            {
                              label: 'COOKIE & ATTRIBUTION RECOVERY',
                              val: '0.0% SELF-REFERRAL LEAK',
                              status: 'CLEAN FUNNEL',
                              detail:
                                'Disabled duplicate SEOPress Clarity tag while preserving Google Site Kit & SEOPress SEO meta; added UTM governance for InstagramApp & GoogleApp in-app browsers.',
                            },
                            {
                              label: 'NULL-SAFE SCROLL & UX FIXES (#4705)',
                              val: '0 JS SCROLL ERRORS',
                              status: 'ZERO DEAD-CLICKS',
                              detail:
                                'Deployed passive null-safe scroll listener (if (!headerEl) return;), wrapped desktop/mobile logos in homepage links, and set /wedding-page/ (#8403) to noindex, nofollow.',
                            },
                            {
                              label: 'PREPAID UPI & ₹1,999 AOV ENGINE',
                              val: '₹2,598+ TARGET AOV (+44%)',
                              status: 'RTO BLEED ELIMINATED',
                              detail:
                                'Added Instant ₹100 Off + Free Holographic Warding Sticker Pack for Prepaid UPI, plus a dynamic ₹1,999 Free Express Shipping bar that nudges ₹1,799 Tee buyers to add a ₹799 Cap.',
                            },
                          ]
                      ).map((card) => (
                        <div
                          key={card.label}
                          style={{
                            padding: '1rem',
                            background: '#0E0E12',
                            border:
                              telemetryState === 'before'
                                ? '1px solid rgba(200, 40, 30, 0.45)'
                                : '1px solid rgba(229, 142, 38, 0.45)',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.62rem',
                              marginBottom: '0.4rem',
                            }}
                          >
                            <span style={{ color: 'var(--noir-muted)' }}>{card.label}</span>
                            <span
                              style={{
                                color: telemetryState === 'before' ? 'var(--noir-red)' : 'var(--noir-amber)',
                                fontWeight: 700,
                              }}
                            >
                              {card.status}
                            </span>
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '1.35rem',
                              color: 'var(--noir-text)',
                              marginBottom: '0.45rem',
                            }}
                          >
                            {card.val}
                          </div>
                          <p style={{ color: 'var(--noir-muted)', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                            {card.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB B: 300-DPI MCP PRINT ENGINEERING */}
              {activeTab === 'print' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--noir-text)' }}>
                        02 // Multi-MCP Creative &amp; 300-DPI Apparel Production Pipeline
                      </h3>
                      <span className="stamp-badge">10,000+ VECTOR ASSET DB</span>
                    </div>
                    <p style={{ color: 'var(--noir-muted)', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
                      Instead of relying on manual freelance revisions or generic print-on-demand compression, I architected a deterministic production system connecting a <strong style={{ color: 'var(--noir-text)' }}>10,000+ design vector index</strong> directly to <strong style={{ color: 'var(--noir-text)' }}>Krita, Adobe Illustrator, and Photoshop Raster Engine MCP servers</strong>.
                    </p>
                  </div>

                  {/* 4-Step Pipeline Architecture */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                      gap: '0.85rem',
                    }}
                  >
                    {[
                      {
                        step: 'STAGE 01 // TAXONOMY',
                        title: '10,000+ Vector Index',
                        desc: 'Python vector database indexing dark Ukiyo-e, cyber-occult anatomy, and Japanese warding calligraphy with strict 1:1 Golden Mockup continuity.',
                      },
                      {
                        step: 'STAGE 02 // VECTOR & HOOP',
                        title: 'Illustrator & Krita MCP',
                        desc: 'Enforces 2.25"×2.25" square cap embroidery geometry (675×675 px @ 300 DPI, 2.5mm min stitch stroke, flat 2D fills with zero faux thread grain).',
                      },
                      {
                        step: 'STAGE 03 // SEMITONE RASTER',
                        title: 'Photoshop Raster Engine',
                        desc: 'Knocks out pure #000000 cotton backgrounds, clears trapped kanji/letter counters, and dithers shadow edges with 35 LPI / 55 LPI halftone dots.',
                      },
                      {
                        step: 'STAGE 04 // TECH PACK',
                        title: 'Qikink 300-DPI Master',
                        desc: 'Embeds explicit pHYs (300, 300) DPI metadata across 4200×5400 jumbo tees, 2400×2400 FT47 baby tees, and 8500×8500 cut-and-sew Sukajan bombers.',
                      },
                    ].map((s) => (
                      <div
                        key={s.step}
                        style={{
                          padding: '1rem',
                          background: 'var(--noir-panel)',
                          border: '1px solid var(--noir-border)',
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: 'var(--noir-amber)', marginBottom: '0.35rem' }}>
                          {s.step}
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--noir-text)', marginBottom: '0.4rem' }}>
                          {s.title}
                        </div>
                        <p style={{ color: 'var(--noir-muted)', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Editorial Pull Quote */}
                  <blockquote
                    style={{
                      margin: 0,
                      padding: '1.25rem 1.5rem',
                      borderLeft: '4px solid var(--noir-red)',
                      background: '#101015',
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      lineHeight: 1.45,
                      color: 'var(--noir-text)',
                    }}
                  >
                    &ldquo;By knocking out pure black (#000000) into a 35 LPI halftone matrix, the 240 GSM mineral-washed cotton breathes directly through the artwork — eliminating rubbery plastisol sweat traps while cutting production prep from 3 days to 18 minutes.&rdquo;
                  </blockquote>
                </div>
              )}

              {/* TAB C: UNIT ECONOMICS & 6.16x ROAS ENGINE */}
              {activeTab === 'roas' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--noir-text)' }}>
                        03 // Unit Economics Architecture &amp; ₹10K/Mo Meta CBO Engine
                      </h3>
                      <span className="stamp-badge">BREAK-EVEN: 10.3 ORDERS / MO</span>
                    </div>
                    <p style={{ color: 'var(--noir-muted)', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                      Every rupee of the ₹10,000/month (₹333.33/day) Meta Advantage CBO campaign is anchored to SKU-level Contribution Margin (CM1 &amp; CM2) — accounting for Qikink manufacturing, 5% GST, forward freight, 20% COD return reserve, and Razorpay&apos;s 2.36% fee.
                    </p>
                  </div>

                  {/* SKU Unit Economics Table */}
                  <div style={{ overflowX: 'auto', border: '1px solid var(--noir-border)' }}>
                    <table
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        textAlign: 'left',
                      }}
                    >
                      <thead>
                        <tr style={{ background: '#18181F', color: 'var(--noir-amber)', borderBottom: '1px solid var(--noir-border)' }}>
                          <th style={{ padding: '0.65rem 0.75rem' }}>SILHOUETTE &amp; DROP</th>
                          <th style={{ padding: '0.65rem 0.75rem' }}>LANDED COST</th>
                          <th style={{ padding: '0.65rem 0.75rem' }}>RETAIL</th>
                          <th style={{ padding: '0.65rem 0.75rem' }}>GROSS CM1</th>
                          <th style={{ padding: '0.65rem 0.75rem' }}>TARGET CAC</th>
                          <th style={{ padding: '0.65rem 0.75rem' }}>NET CM2</th>
                          <th style={{ padding: '0.65rem 0.75rem' }}>BE-ROAS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {UNIT_ECONOMICS_ROWS.map((row) => (
                          <tr key={row.sku} style={{ borderBottom: '1px solid var(--noir-border)', background: 'var(--noir-panel)' }}>
                            <td style={{ padding: '0.6rem 0.75rem', color: 'var(--noir-text)', fontWeight: 600 }}>{row.sku}</td>
                            <td style={{ padding: '0.6rem 0.75rem', color: 'var(--noir-muted)' }}>{row.landed}</td>
                            <td style={{ padding: '0.6rem 0.75rem', color: 'var(--noir-text)' }}>{row.retail}</td>
                            <td style={{ padding: '0.6rem 0.75rem', color: 'var(--noir-amber)', fontWeight: 700 }}>{row.cm1}</td>
                            <td style={{ padding: '0.6rem 0.75rem', color: 'var(--noir-muted)' }}>{row.cac}</td>
                            <td style={{ padding: '0.6rem 0.75rem', color: '#4ADE80', fontWeight: 700 }}>{row.cm2}</td>
                            <td style={{ padding: '0.6rem 0.75rem', color: 'var(--noir-red)', fontWeight: 700 }}>{row.roas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Interactive Monthly Order Volume / Profit Simulator */}
                  <div
                    style={{
                      padding: '1rem 1.25rem',
                      background: '#101015',
                      border: '1px solid var(--noir-amber)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
                      <label htmlFor="sugoi-order-sim" style={{ color: 'var(--noir-amber)', fontWeight: 700 }}>
                        🎛️ INTERACTIVE UNIT-ECONOMICS SIMULATOR: {simulatedOrders} ORDERS / MONTH
                      </label>
                      <input
                        id="sugoi-order-sim"
                        type="range"
                        min="10"
                        max="60"
                        step="1"
                        value={simulatedOrders}
                        onChange={(e) => setSimulatedOrders(parseInt(e.target.value, 10))}
                        style={{ width: '200px', accentColor: '#E58E26' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                      <div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--noir-muted)' }}>FIXED MONTHLY BURN (OPEX)</div>
                        <div style={{ fontSize: '1.05rem', color: 'var(--noir-text)', fontWeight: 700 }}>₹12,600</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--noir-muted)' }}>PROJECTED REVENUE</div>
                        <div style={{ fontSize: '1.05rem', color: 'var(--noir-text)', fontWeight: 700 }}>
                          ₹{projectedRevenue.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--noir-muted)' }}>BLENDED ROAS</div>
                        <div style={{ fontSize: '1.05rem', color: 'var(--noir-amber)', fontWeight: 700 }}>
                          {projectedBlendedRoas}x
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--noir-muted)' }}>NET CASH PROFIT (CM2)</div>
                        <div style={{ fontSize: '1.05rem', color: projectedNetProfit >= 0 ? '#4ADE80' : 'var(--noir-red)', fontWeight: 700 }}>
                          {projectedNetProfit >= 0 ? `+₹${projectedNetProfit.toLocaleString('en-IN')}` : `-₹${Math.abs(projectedNetProfit).toLocaleString('en-IN')}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom System Architecture Colophon Bar inside Right Column */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '1rem 1.25rem',
                border: '1px solid var(--noir-border)',
                background: '#0E0E12',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
              }}
            >
              <div>
                <div style={{ color: 'var(--noir-red)', fontWeight: 700, marginBottom: '0.2rem' }}>
                  // SUGOI CULTURE SYSTEM STACK
                </div>
                <div style={{ color: 'var(--noir-muted)' }}>
                  WordPress + WooCommerce · GA4 + Microsoft Clarity (`xa0ou08hu0`) · Krita + Illustrator + Photoshop MCP · Meta Advantage CBO
                </div>
              </div>
              <a
                href="https://sugoiculture.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.55rem 1rem',
                  border: '1px solid var(--noir-amber)',
                  color: 'var(--noir-amber)',
                  textDecoration: 'none',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                VISIT LIVE STORE (SUGOICULTURE.COM) ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SugoiCaseStudySpread;
