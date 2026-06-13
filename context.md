# Project Context: Vivek Punjabi Portfolio

## Overview
This is a modern, high-performance portfolio website for Vivek Punjabi, featuring Awwwards-style design, immersive 3D interactions, and an embedded AI-powered Go-to-Market (GTM) Strategy Engine. 

## Technology Stack
- **Frontend Framework:** React (Vite)
- **Styling:** Vanilla CSS (`index.css`) utilizing CSS Variables for dynamic themes.
- **Animations:** Framer Motion (page transitions, UI reveals) & Lenis (smooth scrolling).
- **3D Graphics:** Three.js / React Three Fiber / Drei (Custom cursor, interactive 3D elements, floating locks).
- **Backend:** Firebase Cloud Functions (Node.js 20).
- **AI Integration:** OpenRouter (`nvidia/nemotron-3-ultra-550b-a55b:free`)
- **Scraping Proxy:** Jina Reader API (`r.jina.ai`)

## Core Feature: The AI GTM Console
The crown jewel of the portfolio is the **AI GTM Console**. The user inputs a URL, and the engine generates a bespoke 4-step Product Marketing teardown. 

### Architecture
1. **Frontend (`src/components/AIConsole.jsx`):** 
   - Interactive terminal-style UI with a "burning text" typewriter effect.
   - A spinning 3D wireframe lock (`Interactive3DCard.jsx`) that opens when the LLM connection is established.
   - Makes a secure POST request to the Firebase backend.
2. **Backend (`functions/index.js`):**
   - A deployed Express function on Google Cloud Run (`https://generategtmaudit-4n3sjzehra-uc.a.run.app`).
   - Uses Jina Reader API to bypass Cloudflare/bot protections and grab the first 5000 characters of the target URL as raw markdown.
   - Securely injects the `OPENROUTER_API_KEY` via Google Secret Manager.
   - Executes a strict zero-shot prompt instructing the 550B Nemotron model to output: Target Audience, Competitor Profiles, USP, and Copywriting Angles.
   - Includes a robust 3-attempt retry loop to handle OpenRouter node timeouts (which are common on the free 550B tier).

## Design Philosophy (Awwwards Style)
- **Typography:** Inter/Space Grotesk, large impactful headers.
- **Interaction:** A custom trailing cursor (`CustomCursor.jsx`) that changes state when hovering over links or buttons. 
- **Feedback:** "Real work takes compute." The UI explicitly tells the user that the engine takes 2-3 minutes to run because it is scraping the live site and executing a 550B parameter model. No fake loaders.

## Recent Updates
- Completely removed the OpenRouter API key from the frontend to prevent it from leaking in the client bundle.
- Migrated the scraping and LLM fetch logic to Firebase Functions.
- Refined the UX of the AI Console (removed auto-scrolling to let the user read at their own pace, improved disclaimer text).

## Next Steps for Claude Code
- Perform a thorough visual audit for responsive design on mobile/tablet breakpoints.
- Polish any minor CSS spacing or alignment issues.
- Ensure perfect accessibility (a11y) and SEO tags.
- Optimize Three.js canvas rendering to ensure smooth framerates on low-end devices.
