# Fahad Iftikhar Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Fahad Iftikhar's hardware engineering portfolio from a single-file Altium-themed site into a professional, multi-file static site with deep blue + white color scheme, real resume content, and schematic-style creative elements.

**Architecture:** Multi-file static site — `index.html` (HTML structure), `styles.css` (all styles), `script.js` (interactions). No build tools, no frameworks. Placeholder SVGs for images. Content from resume PDF.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript, Google Fonts (Source Sans 3), Font Awesome 6.5.1 (CDN)

---

## File Map

| File | Responsibility |
|------|---------------|
| `index.html` | Full HTML structure — all 10 sections, external resource links, semantic markup |
| `styles.css` | All styling — CSS custom properties, layout, responsive breakpoints, animations, hover effects |
| `script.js` | Navbar scroll transition, fade-in observer, hamburger toggle, active nav highlighting |
| `assets/images/placeholder-hero.svg` | Placeholder gradient SVG for hero background |
| `assets/images/placeholder-profile.svg` | Placeholder initials SVG for profile photo |
| `assets/docs/` | Empty directory — user adds PDF files here |

---

### Task 1: Create asset directories and placeholder SVGs

**Files:**
- Create: `assets/images/placeholder-hero.svg`
- Create: `assets/images/placeholder-profile.svg`
- Create: `assets/docs/.gitkeep`

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p "assets/images" "assets/docs"
```

- [ ] **Step 2: Create placeholder hero background SVG**

Create `assets/images/placeholder-hero.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e2433;stop-opacity:1"/>
      <stop offset="50%" style="stop-color:#2c3e50;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#1a3a6b;stop-opacity:1"/>
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#hero-grad)"/>
  <text x="960" y="540" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="24" fill="rgba(255,255,255,0.15)">Replace with your workspace photo</text>
</svg>
```

- [ ] **Step 3: Create placeholder profile photo SVG**

Create `assets/images/placeholder-profile.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="100" fill="#1a3a6b"/>
  <text x="100" y="108" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="56" font-weight="700" fill="#ffffff">FI</text>
</svg>
```

- [ ] **Step 4: Create .gitkeep for docs folder**

Create `assets/docs/.gitkeep` (empty file) so the directory is tracked.

- [ ] **Step 5: Verify assets exist**

```bash
ls -R assets/
```

Expected:
```
assets/docs/.gitkeep
assets/images/placeholder-hero.svg
assets/images/placeholder-profile.svg
```

---

### Task 2: Create styles.css — CSS custom properties, reset, and base typography

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Create styles.css with custom properties, reset, and base styles**

Create `styles.css`:

```css
/* ============================================
   CUSTOM PROPERTIES
   ============================================ */
:root {
    --primary: #1a3a6b;
    --primary-light: #2c5299;
    --primary-bg: rgba(26,58,107,0.06);
    --bg-white: #ffffff;
    --bg-grey: #f5f6f8;
    --bg-dark: #1e2433;
    --text-primary: #111827;
    --text-secondary: #4b5563;
    --text-muted: #6b7280;
    --border: #e5e7eb;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
    --font-main: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
    --nav-height: 64px;
    --container-width: 1140px;
}

/* ============================================
   RESET & BASE
   ============================================ */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--nav-height);
}

body {
    font-family: var(--font-main);
    background: var(--bg-white);
    color: var(--text-primary);
    line-height: 1.7;
    font-size: 1rem;
    overflow-x: hidden;
}

a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: var(--primary-light);
}

h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.3;
    color: var(--primary);
}

img {
    max-width: 100%;
    height: auto;
}

.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 24px;
}

.section-padding {
    padding: 80px 0;
}

.section-title {
    font-size: 1.8rem;
    margin-bottom: 8px;
}

.section-subtitle {
    color: var(--text-muted);
    font-size: 0.95rem;
    max-width: 540px;
    margin-bottom: 48px;
}
```

- [ ] **Step 2: Verify the file was created**

Open `styles.css` in browser dev tools or check file size is non-zero.

---

### Task 3: Add navbar styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append navbar styles**

Append to `styles.css`:

```css
/* ============================================
   NAVBAR
   ============================================ */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-height);
    z-index: 1000;
    display: flex;
    align-items: center;
    transition: background 0.3s, box-shadow 0.3s;
}

.navbar--transparent {
    background: transparent;
}

.navbar--solid {
    background: var(--bg-white);
    box-shadow: 0 1px 8px rgba(0,0,0,0.08);
}

.nav-inner {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo {
    font-weight: 700;
    font-size: 1.05rem;
    transition: color 0.3s;
}

.navbar--transparent .nav-logo {
    color: #fff;
}

.navbar--solid .nav-logo {
    color: var(--primary);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
    list-style: none;
}

.nav-links a {
    font-size: 0.88rem;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;
}

.navbar--transparent .nav-links a {
    color: rgba(255,255,255,0.8);
}

.navbar--transparent .nav-links a:hover,
.navbar--transparent .nav-links a.active {
    color: #fff;
    background: rgba(255,255,255,0.1);
}

.navbar--solid .nav-links a {
    color: var(--text-secondary);
}

.navbar--solid .nav-links a:hover,
.navbar--solid .nav-links a.active {
    color: var(--primary);
    background: var(--primary-bg);
}

.nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
}

.nav-hamburger span {
    width: 22px;
    height: 2px;
    transition: transform 0.3s, opacity 0.3s;
}

.navbar--transparent .nav-hamburger span {
    background: #fff;
}

.navbar--solid .nav-hamburger span {
    background: var(--primary);
}

.nav-hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.nav-hamburger.open span:nth-child(2) {
    opacity: 0;
}

.nav-hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}
```

---

### Task 4: Add hero section styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append hero styles**

Append to `styles.css`:

```css
/* ============================================
   HERO
   ============================================ */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1;
}

.hero-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
}

.hero-text {
    flex: 1;
}

.hero-name {
    font-size: 3.2rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 12px;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.85);
    font-weight: 400;
}

.hero-sidebar {
    flex-shrink: 0;
    width: 280px;
    background: rgba(30,36,51,0.85);
    backdrop-filter: blur(8px);
    border-radius: 12px;
    padding: 40px 32px;
    text-align: center;
    color: #fff;
}

.hero-photo {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid rgba(255,255,255,0.3);
    overflow: hidden;
    margin: 0 auto 20px;
}

.hero-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-sidebar-info {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.8;
}

.hero-sidebar-info a {
    color: rgba(255,255,255,0.9);
}

.hero-sidebar-info a:hover {
    color: #fff;
}

.scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: rgba(255,255,255,0.5);
    font-size: 1.4rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-8px); }
    60% { transform: translateX(-50%) translateY(-4px); }
}
```

---

### Task 5: Add about section styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append about styles**

Append to `styles.css`:

```css
/* ============================================
   ABOUT
   ============================================ */
.about-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 48px;
    align-items: start;
}

.about-text {
    border-left: 4px solid var(--primary);
    padding-left: 24px;
    font-size: 1.02rem;
    color: var(--text-secondary);
    line-height: 1.8;
}

.about-properties {
    background: var(--bg-grey);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
}

.about-properties-header {
    background: var(--primary);
    color: #fff;
    padding: 12px 20px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.04em;
}

.about-properties-body {
    padding: 4px 0;
}

.prop-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 0.9rem;
    border-bottom: 1px solid var(--border);
}

.prop-row:last-child {
    border-bottom: none;
}

.prop-key {
    color: var(--text-muted);
    font-weight: 500;
}

.prop-val {
    color: var(--text-primary);
    font-weight: 600;
    text-align: right;
}
```

---

### Task 6: Add skills section styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append skills styles**

Append to `styles.css`:

```css
/* ============================================
   SKILLS
   ============================================ */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    position: relative;
}

.skill-card {
    background: var(--bg-white);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 28px 24px;
    transition: box-shadow 0.3s, transform 0.3s;
}

.skill-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
}

.skill-card-icon {
    width: 44px;
    height: 44px;
    background: var(--primary-bg);
    color: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-bottom: 16px;
}

.skill-card-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 14px;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.skill-tag {
    background: var(--primary-bg);
    color: var(--primary);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Circuit trace decoration */
.skills-circuit-trace {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.08;
}

.skills-grid .skill-card {
    position: relative;
    z-index: 1;
}
```

---

### Task 7: Add experience timeline styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append experience timeline styles**

Append to `styles.css`:

```css
/* ============================================
   EXPERIENCE TIMELINE
   ============================================ */
.timeline {
    position: relative;
    padding-left: 40px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary);
    opacity: 0.2;
}

.timeline-item {
    position: relative;
    margin-bottom: 32px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-dot {
    position: absolute;
    left: -33px;
    top: 24px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary);
    border: 3px solid var(--bg-white);
    box-shadow: 0 0 0 2px var(--primary);
}

.timeline-card {
    background: var(--bg-white);
    border: 1px solid var(--border);
    border-left: 3px solid var(--primary);
    border-radius: 8px;
    padding: 24px 28px;
    transition: box-shadow 0.3s;
}

.timeline-card:hover {
    box-shadow: var(--shadow-md);
}

.timeline-date {
    display: inline-block;
    background: var(--primary);
    color: #fff;
    font-size: 0.78rem;
    font-weight: 600;
    padding: 3px 12px;
    border-radius: 20px;
    margin-bottom: 10px;
}

.timeline-role {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.timeline-org {
    font-size: 0.92rem;
    color: var(--text-muted);
    margin-bottom: 12px;
}

.timeline-desc {
    list-style: none;
    padding: 0;
}

.timeline-desc li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 6px;
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

.timeline-desc li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary);
    opacity: 0.4;
}
```

---

### Task 8: Add education, projects, certifications, contact, and footer styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append education styles**

Append to `styles.css`:

```css
/* ============================================
   EDUCATION
   ============================================ */
.education-card {
    background: var(--bg-white);
    border: 1px solid var(--border);
    border-left: 4px solid var(--primary);
    border-radius: 8px;
    padding: 24px 28px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s;
}

.education-card:last-child {
    margin-bottom: 0;
}

.education-card:hover {
    box-shadow: var(--shadow-md);
}

.education-degree {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.education-school {
    font-size: 0.92rem;
    color: var(--text-muted);
    margin-bottom: 4px;
}

.education-date {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 8px;
}

.education-thesis {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-style: italic;
}
```

- [ ] **Step 2: Append projects styles**

Append to `styles.css`:

```css
/* ============================================
   PROJECTS
   ============================================ */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
}

.project-card {
    background: var(--bg-white);
    border: 1px solid var(--border);
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
}

.project-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-top: 3px solid var(--primary);
}

.project-decoration {
    height: 80px;
    background: var(--bg-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.project-decoration svg {
    width: 100%;
    height: 100%;
}

.project-body {
    padding: 24px;
}

.project-name {
    font-size: 1.08rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 10px;
}

.project-desc {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.65;
    margin-bottom: 16px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
}

.project-tag {
    background: var(--primary-bg);
    color: var(--primary);
    padding: 3px 10px;
    border-radius: 16px;
    font-size: 0.8rem;
    font-weight: 500;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary);
}

.project-link:hover {
    color: var(--primary-light);
}
```

- [ ] **Step 3: Append certifications styles**

Append to `styles.css`:

```css
/* ============================================
   CERTIFICATIONS & DOCUMENTS
   ============================================ */
.docs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.doc-card {
    background: var(--bg-white);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 28px 24px;
    text-align: center;
    transition: box-shadow 0.3s, transform 0.3s;
}

.doc-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
}

.doc-icon {
    width: 56px;
    height: 56px;
    background: var(--primary-bg);
    color: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin: 0 auto 16px;
}

.doc-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 6px;
}

.doc-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 18px;
    line-height: 1.5;
}

.doc-download {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--primary);
    color: #fff;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background 0.2s;
}

.doc-download:hover {
    background: var(--primary-light);
    color: #fff;
}
```

- [ ] **Step 4: Append contact and footer styles**

Append to `styles.css`:

```css
/* ============================================
   CONTACT
   ============================================ */
.contact-section {
    text-align: center;
}

.contact-section .section-title {
    text-align: center;
}

.contact-section .section-subtitle {
    margin-left: auto;
    margin-right: auto;
}

.contact-email {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 16px;
    position: relative;
}

.contact-email::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary);
    opacity: 0.3;
}

.contact-details {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 2;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
    background: var(--bg-dark);
    padding: 24px 0;
    text-align: center;
}

.footer p {
    color: rgba(255,255,255,0.5);
    font-size: 0.85rem;
}
```

---

### Task 9: Add fade-in animation and responsive styles to styles.css

**Files:**
- Modify: `styles.css` (append)

- [ ] **Step 1: Append fade-in animation styles**

Append to `styles.css`:

```css
/* ============================================
   FADE-IN ANIMATION
   ============================================ */
.fade-section {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-section.visible {
    opacity: 1;
    transform: translateY(0);
}
```

- [ ] **Step 2: Append responsive breakpoint styles**

Append to `styles.css`:

```css
/* ============================================
   RESPONSIVE — TABLET (768–1024px)
   ============================================ */
@media (max-width: 1024px) {
    .hero-inner {
        flex-direction: column;
        text-align: center;
        padding-top: calc(var(--nav-height) + 40px);
    }

    .hero-name {
        font-size: 2.6rem;
    }

    .hero-sidebar {
        width: 260px;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .docs-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* ============================================
   RESPONSIVE — MOBILE (<768px)
   ============================================ */
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: fixed;
        top: var(--nav-height);
        right: 0;
        width: 260px;
        height: calc(100vh - var(--nav-height));
        background: var(--bg-white);
        flex-direction: column;
        padding: 24px;
        gap: 4px;
        box-shadow: -4px 0 16px rgba(0,0,0,0.1);
    }

    .nav-links.open {
        display: flex;
    }

    .nav-links a {
        color: var(--text-secondary) !important;
        padding: 12px 16px;
        font-size: 0.95rem;
    }

    .nav-links a:hover,
    .nav-links a.active {
        color: var(--primary) !important;
        background: var(--primary-bg) !important;
    }

    .nav-hamburger {
        display: flex;
    }

    .hero-inner {
        flex-direction: column;
        text-align: center;
        padding-top: calc(var(--nav-height) + 20px);
    }

    .hero-name {
        font-size: 2.2rem;
    }

    .hero-sidebar {
        width: 100%;
        max-width: 320px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .docs-grid {
        grid-template-columns: 1fr;
    }

    .timeline {
        padding-left: 28px;
    }

    .timeline::before {
        left: 8px;
    }

    .timeline-dot {
        left: -26px;
        width: 10px;
        height: 10px;
    }

    .section-padding {
        padding: 56px 0;
    }

    .contact-email {
        font-size: 1.1rem;
    }
}
```

---

### Task 10: Create index.html — head, navbar, and hero

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html with head, navbar, and hero section**

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fahad Iftikhar | Hardware Engineer &amp; PCB Designer</title>
    <meta name="description" content="Hardware Engineer with 3+ years designing and validating PCBs for power electronics and embedded systems.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- NAVBAR -->
    <nav class="navbar navbar--transparent" id="navbar" role="navigation">
        <div class="nav-inner">
            <a href="#hero" class="nav-logo">Fahad Iftikhar</a>
            <button class="nav-hamburger" id="navHamburger" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-links" id="navLinks">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="hero" style="background-image: url('assets/images/placeholder-hero.svg');">
        <div class="hero-inner">
            <div class="hero-text">
                <h1 class="hero-name">Fahad Iftikhar</h1>
                <p class="hero-subtitle">Hardware Engineer | PCB Design &amp; Power Electronics</p>
            </div>
            <div class="hero-sidebar">
                <div class="hero-photo">
                    <img src="assets/images/placeholder-profile.svg" alt="Fahad Iftikhar">
                </div>
                <div class="hero-sidebar-info">
                    <a href="mailto:fiftikhar62@gmail.com">fiftikhar62@gmail.com</a><br>
                    Nuremberg, Germany
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </section>
```

This is a partial file — the rest of the sections are appended in subsequent tasks. The file is NOT closed yet (no `</body></html>`).

---

### Task 11: Add about and skills sections to index.html

**Files:**
- Modify: `index.html` (append before closing tags)

- [ ] **Step 1: Append about section**

Append to `index.html` (after the hero closing `</section>`):

```html

    <!-- ABOUT -->
    <section class="section-padding fade-section" id="about">
        <div class="container">
            <h2 class="section-title">About</h2>
            <p class="section-subtitle">A brief introduction to who I am and what I do.</p>
            <div class="about-grid">
                <div class="about-text">
                    <p>Hardware Engineer with 3+ years designing and validating PCBs for power electronics and embedded systems, using Altium Designer as the primary EDA tool. Experienced across the full development cycle — from schematic capture and component selection through prototype bring-up, EMC pre-compliance testing, and DFM-aware layout.</p>
                    <br>
                    <p>Comfortable in lab environments with oscilloscopes, signal analyzers, and power supplies, with Python applied to test automation and data logging.</p>
                </div>
                <div class="about-properties">
                    <div class="about-properties-header"><i class="fa-solid fa-sliders" style="margin-right:8px;"></i>PROPERTIES</div>
                    <div class="about-properties-body">
                        <div class="prop-row"><span class="prop-key">Location</span><span class="prop-val">Nuremberg, Germany</span></div>
                        <div class="prop-row"><span class="prop-key">Specialization</span><span class="prop-val">Power Electronics, Embedded</span></div>
                        <div class="prop-row"><span class="prop-key">Experience</span><span class="prop-val">3+ Years</span></div>
                        <div class="prop-row"><span class="prop-key">Languages</span><span class="prop-val">English, German (B1), Urdu</span></div>
                        <div class="prop-row"><span class="prop-key">Preferred Stack</span><span class="prop-val">Altium + STM32 + FreeRTOS</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Append skills section**

Append to `index.html`:

```html

    <!-- SKILLS -->
    <section class="section-padding fade-section" id="skills" style="background:var(--bg-grey);">
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <p class="section-subtitle">Core competencies across hardware design, testing, and embedded development.</p>
            <div class="skills-grid">
                <!-- Circuit trace decoration -->
                <svg class="skills-circuit-trace" viewBox="0 0 1140 500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M190 125 H380 L395 140 H570 M760 125 H950" stroke="#1a3a6b" fill="none" stroke-width="1.5"/>
                    <path d="M190 375 H380 M570 375 H760 L775 390 H950" stroke="#1a3a6b" fill="none" stroke-width="1.5"/>
                    <path d="M380 125 V375" stroke="#1a3a6b" fill="none" stroke-width="1" stroke-dasharray="4 4"/>
                    <path d="M760 125 V375" stroke="#1a3a6b" fill="none" stroke-width="1" stroke-dasharray="4 4"/>
                    <circle cx="380" cy="125" r="3" fill="#1a3a6b"/>
                    <circle cx="760" cy="125" r="3" fill="#1a3a6b"/>
                    <circle cx="380" cy="375" r="3" fill="#1a3a6b"/>
                    <circle cx="760" cy="375" r="3" fill="#1a3a6b"/>
                </svg>
                <div class="skill-card">
                    <div class="skill-card-icon"><i class="fa-solid fa-drafting-compass"></i></div>
                    <div class="skill-card-title">EDA &amp; Design Tools</div>
                    <div class="skill-tags">
                        <span class="skill-tag">Altium Designer</span>
                        <span class="skill-tag">Cadence OrCAD &amp; Allegro</span>
                        <span class="skill-tag">LTspice</span>
                        <span class="skill-tag">Proteus</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-card-icon"><i class="fa-solid fa-microchip"></i></div>
                    <div class="skill-card-title">Hardware Design</div>
                    <div class="skill-tags">
                        <span class="skill-tag">Multi-layer PCB Layout</span>
                        <span class="skill-tag">Schematic Capture</span>
                        <span class="skill-tag">Analog &amp; Digital Circuit Design</span>
                        <span class="skill-tag">Power Electronics</span>
                        <span class="skill-tag">Component Selection</span>
                        <span class="skill-tag">DFM</span>
                        <span class="skill-tag">Signal Integrity</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-card-icon"><i class="fa-solid fa-vial"></i></div>
                    <div class="skill-card-title">Testing &amp; Validation</div>
                    <div class="skill-tags">
                        <span class="skill-tag">EMC/EMI Pre-compliance</span>
                        <span class="skill-tag">ESD/Surge/EFT (IEC 61000)</span>
                        <span class="skill-tag">Oscilloscopes</span>
                        <span class="skill-tag">Spectrum Analyzers</span>
                        <span class="skill-tag">Near-field Probes</span>
                        <span class="skill-tag">Hardware Bring-up</span>
                        <span class="skill-tag">AOI &amp; X-ray</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-card-icon"><i class="fa-solid fa-robot"></i></div>
                    <div class="skill-card-title">Embedded Platforms</div>
                    <div class="skill-tags">
                        <span class="skill-tag">ESP32 / ESP01</span>
                        <span class="skill-tag">STM32</span>
                        <span class="skill-tag">Nordic nRF52</span>
                        <span class="skill-tag">Arduino</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-card-icon"><i class="fa-solid fa-code"></i></div>
                    <div class="skill-card-title">Programming &amp; Protocols</div>
                    <div class="skill-tags">
                        <span class="skill-tag">C/C++</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">I2C</span>
                        <span class="skill-tag">SPI</span>
                        <span class="skill-tag">UART</span>
                        <span class="skill-tag">BLE</span>
                        <span class="skill-tag">Wi-Fi</span>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-card-icon"><i class="fa-solid fa-language"></i></div>
                    <div class="skill-card-title">Languages</div>
                    <div class="skill-tags">
                        <span class="skill-tag">English (fluent)</span>
                        <span class="skill-tag">German (B1)</span>
                        <span class="skill-tag">Urdu (native)</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

---

### Task 12: Add experience section to index.html

**Files:**
- Modify: `index.html` (append)

- [ ] **Step 1: Append experience timeline section**

Append to `index.html`:

```html

    <!-- EXPERIENCE -->
    <section class="section-padding fade-section" id="experience">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <p class="section-subtitle">A timeline of my professional journey in hardware engineering.</p>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-date">09/2024 — Present</span>
                        <h3 class="timeline-role">Working Student - Electronic Hardware Designer</h3>
                        <p class="timeline-org">Acal BFi, Germany</p>
                        <ul class="timeline-desc">
                            <li>Designed analog and digital PCBs in Altium Designer, including schematic capture, multi-layer layout, and datasheet-driven component selection.</li>
                            <li>Applied PCB layout best practices for signal integrity, power distribution, and EMC, supported by hands-on EMI/EMC pre-compliance testing and debugging.</li>
                            <li>Performed hardware bring-up and validation using lab instruments (oscilloscope, power supplies, spectrum analyzer), with a hands-on approach to rapid prototyping, testing, and iterative improvement.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-date">12/2023 — 05/2024</span>
                        <h3 class="timeline-role">Hardware Development Intern</h3>
                        <p class="timeline-org">B/S/H/ Hausger&auml;te GmbH, Germany</p>
                        <ul class="timeline-desc">
                            <li>Designed a PID-controlled AC heating system using phase-angle control with zero-crossing detection, translating thermal requirements into a verifiable hardware specification.</li>
                            <li>Prototyped on Veroboard, then transitioned to a 4-layer Altium PCB with focus on signal integrity and PT500 sensor accuracy.</li>
                            <li>Integrated LabVIEW for real-time monitoring and 50 ms data logging; validated waveforms and thermal stability with oscilloscope and bench instrumentation.</li>
                            <li>Applied DFM principles during layout review to ensure first-pass manufacturability without specialized tooling.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-date">07/2023 — 12/2023</span>
                        <h3 class="timeline-role">Student Research Assistant (HIWI)</h3>
                        <p class="timeline-org">FAPS, FAU Erlangen-N&uuml;rnberg, Germany</p>
                        <ul class="timeline-desc">
                            <li>Integrated a Siemens SENTRON PAC4200 power meter with a Solderstar Reflow Profiler to log real-time energy consumption across all reflow zones, enabling data-driven process optimization.</li>
                            <li>Tuned soldering profiles by adjusting ramp rates and dwell times in Solderstar software to meet IPC-compliant joint quality while reducing zone energy usage.</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-card">
                        <span class="timeline-date">07/2021 — 10/2022</span>
                        <h3 class="timeline-role">Junior Embedded Electronics Engineer</h3>
                        <p class="timeline-org">AMS Power International Pvt Ltd, Pakistan</p>
                        <ul class="timeline-desc">
                            <li>Designed PCB layouts in Altium and PSpice for automotive and industrial applications, optimizing trace routing and component placement for EMC performance and long-term reliability.</li>
                            <li>Developed C/C++ firmware for ESP32, STM32, and nRF52 platforms, implementing sensor integration and communication over I2C, SPI, UART, BLE, and Wi-Fi.</li>
                            <li>Performed SMD/THT soldering, hot-air rework, and systematic hardware debugging; conducted ESD and EMC pre-compliance checks on finished assemblies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

---

### Task 13: Add education and projects sections to index.html

**Files:**
- Modify: `index.html` (append)

- [ ] **Step 1: Append education section**

Append to `index.html`:

```html

    <!-- EDUCATION -->
    <section class="section-padding fade-section" id="education" style="background:var(--bg-grey);">
        <div class="container">
            <h2 class="section-title">Education</h2>
            <p class="section-subtitle">Academic foundation in electrical engineering and electromobility.</p>
            <div class="education-card">
                <h3 class="education-degree">MSc in Electromobility (ACES) — Major: Electric Powertrain</h3>
                <p class="education-school">FAU Erlangen-N&uuml;rnberg, Germany</p>
                <p class="education-date">10/2022 — Present</p>
                <p class="education-thesis">Thesis: Data-Driven Quality Prediction in SMT Assembly using Machine Learning (custom PCB + ML regression models)</p>
            </div>
            <div class="education-card">
                <h3 class="education-degree">BSc in Electrical Engineering — Major: Electronics</h3>
                <p class="education-school">University of Management and Technology, Pakistan</p>
                <p class="education-date">10/2017 — 08/2021</p>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Append projects section**

Append to `index.html`:

```html

    <!-- PROJECTS -->
    <section class="section-padding fade-section" id="projects">
        <div class="container">
            <h2 class="section-title">Projects &amp; Research</h2>
            <p class="section-subtitle">Selected hardware projects from academic and professional work.</p>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-decoration">
                        <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 40 H100 L115 25 H180 L195 40 H260 L275 55 H340 L355 40 H380" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <path d="M260 40 L260 20 L300 20" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.2"/>
                            <circle cx="115" cy="25" r="3" fill="#1a3a6b" opacity="0.3"/>
                            <circle cx="275" cy="55" r="3" fill="#1a3a6b" opacity="0.3"/>
                            <path d="M50 60 H150 L160 50 H250" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.15" stroke-dasharray="4 3"/>
                            <!-- Recycling arrow hint -->
                            <path d="M320 30 A15 15 0 1 1 335 55" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <polygon points="335,50 335,60 340,55" fill="#1a3a6b" opacity="0.25"/>
                        </svg>
                    </div>
                    <div class="project-body">
                        <h3 class="project-name">Circular Economy in PCB Design</h3>
                        <p class="project-desc">Developed PCB design guidelines spanning the full lifecycle (design, use, recycling) as part of the DEEP-Opt joint project at the FAPS Chair, in collaboration with B/S/H/ and multiple industrial partners. Guidelines adopted into the DEEP-Opt consortium strategy. Awarded grade 1.7.</p>
                        <div class="project-tags">
                            <span class="project-tag">PCB Lifecycle</span>
                            <span class="project-tag">DFM</span>
                            <span class="project-tag">B/S/H/</span>
                            <span class="project-tag">DEEP-Opt</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-decoration">
                        <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                            <!-- Modular blocks connected by traces -->
                            <rect x="30" y="20" width="40" height="30" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <rect x="130" y="25" width="40" height="30" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <rect x="230" y="20" width="40" height="30" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <rect x="330" y="25" width="40" height="30" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <path d="M70 35 H130" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <path d="M170 40 H230" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <path d="M270 35 H330" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <circle cx="100" cy="35" r="2.5" fill="#1a3a6b" opacity="0.3"/>
                            <circle cx="200" cy="40" r="2.5" fill="#1a3a6b" opacity="0.3"/>
                            <circle cx="300" cy="35" r="2.5" fill="#1a3a6b" opacity="0.3"/>
                            <path d="M50 60 H150 L165 65 H350" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.12" stroke-dasharray="4 3"/>
                        </svg>
                    </div>
                    <div class="project-body">
                        <h3 class="project-name">Modular Embedded Control System — RV Application</h3>
                        <p class="project-desc">Designed a modular multi-board embedded system in Altium for RV power management, including schematic capture, component selection, and 4-layer PCB layout.</p>
                        <div class="project-tags">
                            <span class="project-tag">Altium</span>
                            <span class="project-tag">4-Layer PCB</span>
                            <span class="project-tag">Power Management</span>
                            <span class="project-tag">Embedded</span>
                        </div>
                        <a href="#" class="project-link"><i class="fa-brands fa-github"></i> View on GitHub</a>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-decoration">
                        <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                            <!-- Sensor to MCU data flow -->
                            <rect x="30" y="25" width="50" height="30" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <text x="55" y="44" text-anchor="middle" font-size="8" fill="#1a3a6b" opacity="0.3" font-family="sans-serif">IMU</text>
                            <rect x="180" y="20" width="60" height="40" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <text x="210" y="44" text-anchor="middle" font-size="8" fill="#1a3a6b" opacity="0.3" font-family="sans-serif">MCU</text>
                            <path d="M80 40 H180" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <text x="130" y="35" text-anchor="middle" font-size="6" fill="#1a3a6b" opacity="0.2" font-family="sans-serif">I2C</text>
                            <path d="M240 40 H320 L335 30 H380" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <text x="310" y="35" text-anchor="middle" font-size="6" fill="#1a3a6b" opacity="0.2" font-family="sans-serif">USB</text>
                            <path d="M55 65 H210 L220 70 H350" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.12" stroke-dasharray="4 3"/>
                            <circle cx="80" cy="40" r="2.5" fill="#1a3a6b" opacity="0.3"/>
                            <circle cx="240" cy="40" r="2.5" fill="#1a3a6b" opacity="0.3"/>
                        </svg>
                    </div>
                    <div class="project-body">
                        <h3 class="project-name">IMU &amp; Microcontroller Data Logger</h3>
                        <p class="project-desc">Designed and developed a 4-layer STM32F4-based embedded system with MPU-6050 IMU, enabling real-time motion data acquisition via I2C and USB-powered operation. Implemented controlled-impedance PCB design (90&Omega; USB), power regulation (LDO 5V to 3.3V), and embedded firmware.</p>
                        <div class="project-tags">
                            <span class="project-tag">STM32F4</span>
                            <span class="project-tag">MPU-6050</span>
                            <span class="project-tag">I2C</span>
                            <span class="project-tag">Impedance Control</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-decoration">
                        <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">
                            <!-- Wireless / antenna traces -->
                            <rect x="30" y="25" width="50" height="30" rx="3" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <text x="55" y="44" text-anchor="middle" font-size="7" fill="#1a3a6b" opacity="0.3" font-family="sans-serif">ESP32</text>
                            <path d="M80 40 H120 V15" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.25"/>
                            <path d="M110 25 A15 15 0 0 1 130 25" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.2"/>
                            <path d="M105 20 A20 20 0 0 1 135 20" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.15"/>
                            <path d="M100 15 A25 25 0 0 1 140 15" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.1"/>
                            <!-- Phone / Android -->
                            <rect x="250" y="18" width="30" height="44" rx="5" stroke="#1a3a6b" fill="none" stroke-width="1.5" opacity="0.3"/>
                            <line x1="250" y1="26" x2="280" y2="26" stroke="#1a3a6b" stroke-width="1" opacity="0.2"/>
                            <line x1="250" y1="54" x2="280" y2="54" stroke="#1a3a6b" stroke-width="1" opacity="0.2"/>
                            <path d="M140 30 L250 35" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.15" stroke-dasharray="6 3"/>
                            <!-- Houses -->
                            <path d="M320 55 L335 42 L350 55 Z" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.2"/>
                            <path d="M355 55 L370 42 L385 55 Z" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.2"/>
                            <path d="M280 40 H320" stroke="#1a3a6b" fill="none" stroke-width="1" opacity="0.15" stroke-dasharray="4 3"/>
                        </svg>
                    </div>
                    <div class="project-body">
                        <h3 class="project-name">Smart Home RF Access Control System</h3>
                        <p class="project-desc">Modernized legacy RF access control hardware with an ESP32-based IoT solution featuring a custom Android interface. Deployed across 30+ residential installations with zero reported failures.</p>
                        <div class="project-tags">
                            <span class="project-tag">ESP32</span>
                            <span class="project-tag">IoT</span>
                            <span class="project-tag">RF</span>
                            <span class="project-tag">Android</span>
                            <span class="project-tag">BLE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

---

### Task 14: Add certifications, contact, footer, and close HTML

**Files:**
- Modify: `index.html` (append)

- [ ] **Step 1: Append certifications section**

Append to `index.html`:

```html

    <!-- CERTIFICATIONS & DOCUMENTS -->
    <section class="section-padding fade-section" id="certifications" style="background:var(--bg-grey);">
        <div class="container">
            <h2 class="section-title">Certifications &amp; Documents</h2>
            <p class="section-subtitle">Downloadable reports, thesis, and certificates.</p>
            <div class="docs-grid">
                <div class="doc-card">
                    <div class="doc-icon"><i class="fa-solid fa-graduation-cap"></i></div>
                    <h3 class="doc-title">MSc Thesis Report</h3>
                    <p class="doc-desc">Data-Driven Quality Prediction in SMT Assembly using Machine Learning</p>
                    <a href="assets/docs/thesis-report.pdf" class="doc-download" download><i class="fa-solid fa-download"></i> Download PDF</a>
                </div>
                <div class="doc-card">
                    <div class="doc-icon"><i class="fa-solid fa-file-lines"></i></div>
                    <h3 class="doc-title">Project Report</h3>
                    <p class="doc-desc">Circular Economy in PCB Design — DEEP-Opt Joint Project</p>
                    <a href="assets/docs/pcb-circular-economy-report.pdf" class="doc-download" download><i class="fa-solid fa-download"></i> Download PDF</a>
                </div>
                <div class="doc-card">
                    <div class="doc-icon"><i class="fa-solid fa-certificate"></i></div>
                    <h3 class="doc-title">Certificate</h3>
                    <p class="doc-desc">Add your certification title here</p>
                    <a href="assets/docs/certificate.pdf" class="doc-download" download><i class="fa-solid fa-download"></i> Download PDF</a>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 2: Append contact section**

Append to `index.html`:

```html

    <!-- CONTACT -->
    <section class="section-padding fade-section contact-section" id="contact">
        <div class="container">
            <h2 class="section-title">Get in Touch</h2>
            <p class="section-subtitle" style="margin-left:auto;margin-right:auto;">Open to full-time roles, contract work, and interesting hardware collaborations.</p>
            <a href="mailto:fiftikhar62@gmail.com" class="contact-email">fiftikhar62@gmail.com</a>
            <div class="contact-details">
                <p><i class="fa-solid fa-phone" style="margin-right:8px;color:var(--primary);"></i>(+49) 01742139923</p>
                <p><i class="fa-solid fa-location-dot" style="margin-right:8px;color:var(--primary);"></i>Nuremberg, Germany</p>
            </div>
        </div>
    </section>
```

- [ ] **Step 3: Append footer and close HTML**

Append to `index.html`:

```html

    <!-- FOOTER -->
    <footer class="footer">
        <p>&copy; 2026 Fahad Iftikhar</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

### Task 15: Create script.js — all JavaScript interactions

**Files:**
- Create: `script.js`

- [ ] **Step 1: Create script.js with all interactions**

Create `script.js`:

```javascript
(function () {
    'use strict';

    // --- Navbar scroll transition ---
    var navbar = document.getElementById('navbar');
    var hero = document.getElementById('hero');

    function updateNavbar() {
        if (!hero) return;
        var heroBottom = hero.offsetTop + hero.offsetHeight;
        if (window.scrollY > heroBottom - 80) {
            navbar.classList.remove('navbar--transparent');
            navbar.classList.add('navbar--solid');
        } else {
            navbar.classList.remove('navbar--solid');
            navbar.classList.add('navbar--transparent');
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // --- Hamburger toggle ---
    var hamburger = document.getElementById('navHamburger');
    var navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // --- Fade-in on scroll ---
    var fadeSections = document.querySelectorAll('.fade-section');
    var fadeObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.08 }
    );

    fadeSections.forEach(function (section) {
        fadeObserver.observe(section);
    });

    // --- Active nav link highlighting ---
    var sections = document.querySelectorAll('section[id]');
    var navAnchors = navLinks.querySelectorAll('a[href^="#"]');

    var activeObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.getAttribute('id');
                    navAnchors.forEach(function (anchor) {
                        anchor.classList.remove('active');
                        if (anchor.getAttribute('href') === '#' + id) {
                            anchor.classList.add('active');
                        }
                    });
                }
            });
        },
        { threshold: 0.2, rootMargin: '-64px 0px -40% 0px' }
    );

    sections.forEach(function (section) {
        activeObserver.observe(section);
    });
})();
```

---

### Task 16: Delete old index.html and verify the full site

**Files:**
- Delete: old `index.html` (replaced by new one built across Tasks 10–14)

- [ ] **Step 1: Back up the old index.html**

```bash
cp index.html index.old.html
```

- [ ] **Step 2: Assemble the new index.html**

The new `index.html` was built across Tasks 10–14. Verify it is complete by checking it ends with `</html>`.

```bash
tail -5 index.html
```

Expected output:
```html
    <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Open in browser and verify**

Open `index.html` in a browser. Check:
- Navbar is transparent over hero, turns white on scroll
- Hero shows name, subtitle, sidebar with photo placeholder and email
- All 7 sections render with correct content
- Skills cards have readable font size
- Experience timeline displays 4 entries
- Project cards show schematic SVG decorations
- Certifications section has 3 download cards
- Contact section is centered with email, phone, location
- Footer is dark with copyright
- Mobile hamburger menu works at < 768px
- Fade-in animations trigger on scroll

- [ ] **Step 4: Remove backup if everything looks good**

```bash
rm index.old.html
```

---

## Build Sequence

```
Task 1  — Asset directories + placeholder SVGs
Task 2  — styles.css base (properties, reset, typography)
Task 3  — styles.css navbar
Task 4  — styles.css hero
Task 5  — styles.css about
Task 6  — styles.css skills
Task 7  — styles.css experience timeline
Task 8  — styles.css education, projects, certifications, contact, footer
Task 9  — styles.css animations + responsive
Task 10 — index.html head + navbar + hero
Task 11 — index.html about + skills
Task 12 — index.html experience
Task 13 — index.html education + projects
Task 14 — index.html certifications + contact + footer + close
Task 15 — script.js all interactions
Task 16 — Delete old file + verify
```

Tasks 2–9 can be parallelized (all append to styles.css, but are sequential appends).
Tasks 10–14 must be sequential (building index.html top to bottom).
Task 15 is independent and can run in parallel with Tasks 10–14.
Task 16 depends on all prior tasks.
