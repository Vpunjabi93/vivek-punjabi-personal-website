# Design System Specification: The GTM & Automation Engineer

## 1. Overview & Creative North Star
**Creative North Star: The GTM Synthesizer**

This design system is a manifestation of precision, authority, and high-tech sophistication, custom-tailored for Vivek Punjabi's positioning as a **GTM & Automation Engineer**. It moves away from standard, flat SaaS portfolios toward a high-end, editorial noir terminal interface that bridges GTM narrative and automation code.

The system features:
* **Tactile Asymmetry**: Elements are off-centered and offset to create visual interest.
* **Dual-State Layout**: Visual accents, typography, and interactive components adapt instantly when the user toggles GTM modes.
* **Refractive Layering**: Depth is created by stacking glassmorphic panels and applying subtle glows rather than heavy drop shadows.

---

## 2. Colors & Surface Philosophy

The color palette is built on "The Void" — a deep charcoal-black that provides an infinite luxury canvas for metallic typography and visceral accents.

### Color Tokens
* **Base Background (#131313)**: The default dark canvas.
* **Brushed Silver (#C7C6C6)**: Primary typography and icons, designed to look like etched aluminum.
* **Deep Blood Red (#B22222)**: Reserved for high-stakes metrics, key CTAs, and active statuses.
* **Tonal Accents (Mode-Aware Glows)**:
  * *Marketing Mode*: Cool, corporate silver-blue radial glow (`rgba(0, 180, 216, 0.03)`).
  * *Sales Mode*: Intense, energetic red-orange radial glow (`rgba(178, 34, 34, 0.04)`).

### Elevation & Border Rules
* **Tonal Stacking**: Avoid drop shadows. Use background color shifts to define layers (e.g. `surface-container-lowest` (#0E0E0E) for the AI console area nested inside a `surface` background).
* **The Ghost Border**: Do not use opaque white borders. Use a `1px` border using `#C7C6C6` at 15% opacity to catch light at the edges of glass containers.

---

## 3. Typography & Editorial Rhythm

A deliberate "High-Low" typographic mix balances classical editorial authority with modern engineering precision.

* **Display & Headlines (Bodoni Moda)**: High-contrast serif used for hero display headings and metric numbers. Exudes prestige and narrative power.
* **Body Text (Geist)**: Clean, neutral sans-serif used for descriptions to ensure optimal legibility on dark backgrounds.
* **Technical Labels (JetBrains Mono)**: Space-grotesk styled monospace used for tags, progress logs, input labels, and console screens to reinforce the "AI developer" capability.

---

## 4. Components & Interactive Elements

### 3D Metallic Toggle Coin
* **Visuals**: A high-metallicity WebGL cylinder rotating around the X-axis (vertical flip).
* **Face Cap Textures**: Custom-drawn vectors (💼 briefcase for Marketing, ⚡ lightning for Sales).
* **Interaction**: Tilts dynamically based on cursor movement and initiates a smooth 360-degree flip animation on click.

### Glassmorphic AI Console
* **Console View**: Features a micro-header `gtm_automator_v3.2.sh` and a scrolling JetBrains Mono progress log.
* **State Management**: Automatically resets and clears output schemas when GTM modes are switched to prevent layout collisions.
* **Mode-Aware Output**:
  * *Marketing*: Renders above-the-fold landing page copy and 4 paid social ad cards.
  * *Sales*: Renders a Competitor Battlecard (differentiators, side-by-side features table, and objection handlers) and a Pitch One-Pager.

### Architectural Grid Pillars
* **Grid Layout**: Swap blocky, floating cards with clean grid boards separated by thin `1px` lines (`rgba(255,255,255,0.06)`).
* **Metrics**: Giant numbers expand to `5rem` in Bodoni Moda with subtle scale-on-hover translation.
