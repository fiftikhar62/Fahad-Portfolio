# Fahad Iftikhar Portfolio — Full Redesign Spec

## Overview

Complete redesign of Fahad Iftikhar's hardware engineering portfolio website. Replace the current single-file Altium-themed site with a professional, corporate-yet-creative multi-file static site using real resume content.

## Goals

- Professional and corporate design with creative touches (schematic-style decorations)
- White/light grey + deep blue color scheme
- Clean, readable professional sans-serif typography
- Real content from Fahad's resume
- Downloadable documents section (certifications, thesis, reports)
- Responsive across all devices

## File Structure

```
Fahad Portfolio/
  index.html          — Main HTML structure
  styles.css          — All styles
  script.js           — Navbar scroll, fade-in animations, interactions
  assets/
    images/           — Profile photo, hero background image
      placeholder-hero.svg    — Placeholder hero background (user replaces with real photo)
      placeholder-profile.svg — Placeholder profile photo (user replaces with real photo)
    docs/             — Downloadable PDFs (user adds their files)
```

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#1a3a6b` | Deep blue — headings, accents, timeline, borders |
| `--primary-light` | `#2c5299` | Hover states, lighter accent |
| `--primary-bg` | `rgba(26,58,107,0.06)` | Subtle blue tinted backgrounds |
| `--bg-white` | `#ffffff` | Card backgrounds, main sections |
| `--bg-grey` | `#f5f6f8` | Alternating section backgrounds |
| `--bg-dark` | `#1e2433` | Footer, hero sidebar |
| `--text-primary` | `#111827` | Main body text |
| `--text-secondary` | `#4b5563` | Descriptions, secondary text |
| `--text-muted` | `#6b7280` | Captions, metadata |
| `--border` | `#e5e7eb` | Card borders, dividers |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` | Subtle card shadow |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | Hover card shadow |

## Typography

- **Font family:** Source Sans 3 (Google Fonts) for all text — clean, professional, highly readable
- **Headings:** 700 weight, `--primary` color
- **Body:** 400 weight, `--text-primary` color, `1rem` base size (16px)
- **Section titles:** `1.8rem`, uppercase or with a `//` prefix for subtle engineering nod
- **Skill tags:** `0.85rem` minimum — fixing the small font issue from current site
- **No monospace fonts** — fully departing from the Altium code-editor aesthetic

## Sections

### 1. Navbar

- Fixed at top, `height: 64px`
- **On hero:** transparent background, white text
- **On scroll (past hero):** solid white background, dark text, subtle bottom border shadow
- Logo area (left): "Fahad Iftikhar" text
- Nav links (right): About, Skills, Experience, Education, Projects, Certifications, Contact
- No CV download button
- Hamburger menu on mobile (< 768px) — slides nav links in from right

### 2. Hero (Full-Width Photo Header)

- `min-height: 100vh`, full-width background image
  - Background image: black & white or muted lab/workspace photo (placeholder SVG with gradient initially)
  - `background-size: cover`, `background-position: center`, dark overlay (`rgba(0,0,0,0.5)`)
- **Left side (over image):**
  - Name: large bold white text, `3.2rem`, font-weight 800
  - Subtitle: "Hardware Engineer | PCB Design & Power Electronics", white, `1.1rem`
- **Right side panel:**
  - Dark semi-transparent sidebar panel (`--bg-dark` with slight transparency)
  - Circular profile photo (placeholder initially, ~200px diameter, white border)
  - Email: `fiftikhar62@gmail.com`
  - Location: Nuremberg, Germany
- Scroll-down indicator at bottom (subtle animated chevron)

### 3. About

- White background
- Two-column layout (60/40 split):
  - **Left column:** Professional summary paragraph adapted from resume:
    > "Hardware Engineer with 3+ years designing and validating PCBs for power electronics and embedded systems, using Altium Designer as the primary EDA tool. Experienced across the full development cycle — from schematic capture and component selection through prototype bring-up, EMC pre-compliance testing, and DFM-aware layout. Comfortable in lab environments with oscilloscopes, signal analyzers, and power supplies, with Python applied to test automation and data logging."
  - Styled with a `4px` deep blue left border
  - **Right column:** Properties/specs box
    - Location: Nuremberg, Germany
    - Specialization: Power Electronics, Embedded Systems
    - Experience: 3+ years
    - Languages: English (fluent), German (B1), Urdu (native)
    - Preferred Stack: Altium + STM32 + FreeRTOS
  - Properties box has light grey background, subtle border

### 4. Skills

- Light grey (`--bg-grey`) background
- Section title: "Skills"
- **6 cards in a 3x2 grid** (3 columns on desktop, 2 on tablet, 1 on mobile):

  1. **EDA & Design Tools** — icon: `fa-drafting-compass`
     - Altium Designer, Cadence OrCAD & Allegro, LTspice, Proteus
  2. **Hardware Design** — icon: `fa-microchip`
     - Multi-layer PCB Layout, Schematic Capture, Analog & Digital Circuit Design, Power Electronics, Component Selection, DFM, Signal Integrity
  3. **Testing & Validation** — icon: `fa-vial`
     - EMC/EMI Pre-compliance, ESD/Surge/EFT (IEC 61000), Oscilloscopes, Spectrum Analyzers, Near-field Probes, Hardware Bring-up & Debugging, AOI & X-ray
  4. **Embedded Platforms** — icon: `fa-robot`
     - ESP32/ESP01, STM32, Nordic nRF52, Arduino
  5. **Programming & Protocols** — icon: `fa-code`
     - C/C++, Python (test automation, data logging), I2C, SPI, UART, BLE, Wi-Fi
  6. **Languages** — icon: `fa-language`
     - English (fluent), German (B1), Urdu (native)

- Each card: white background, deep blue icon (top-left), bold title, skills as pill/tag elements (`0.85rem+`, readable)
- Subtle **circuit-trace SVG line** connecting cards horizontally/vertically as decorative element (thin, `--primary` color at low opacity)

### 5. Work Experience

- White background
- **Left-side vertical timeline** with deep blue line (`2px`)
- Date badges: deep blue background, white text, positioned on the line
- **4 timeline entries** (cards to the right of the line):

  1. **Working Student - Electronic Hardware Designer**
     - Acal BFi, Germany | 09/2024 – Present
     - 3 bullet points from resume

  2. **Hardware Development Intern**
     - B/S/H/ Hausgeraete GmbH, Germany | 12/2023 – 05/2024
     - 4 bullet points from resume

  3. **Student Research Assistant (HIWI)**
     - FAPS, FAU Erlangen-Nuernberg, Germany | 07/2023 – 12/2023
     - 2 bullet points from resume

  4. **Junior Embedded Electronics Engineer**
     - AMS Power International Pvt Ltd, Pakistan | 07/2021 – 10/2022
     - 3 bullet points from resume

- Cards: white background, subtle shadow, deep blue left border (`3px`)
- Hover: slight shadow increase

### 6. Education

- Light grey background
- **2 stacked cards**, full width:

  1. **MSc in Electromobility (ACES) - Major: Electric Powertrain**
     - FAU Erlangen-Nuernberg, Germany | 10/2022 – Present
     - Thesis: Data-Driven Quality Prediction in SMT Assembly using Machine Learning (custom PCB + ML regression models)

  2. **BSc in Electrical Engineering - Major: Electronics**
     - University of Management and Technology, Pakistan | 10/2017 – 08/2021

- Card style: white background, deep blue left accent border (`4px`), subtle shadow
- Institution and dates in secondary text color

### 7. Projects & Research

- White background
- **2x2 card grid** (2 columns desktop, 1 column mobile):

  1. **Circular Economy in PCB Design**
     - Description: DEEP-Opt joint project at FAPS Chair with B/S/H/ and industrial partners. Lifecycle PCB design guidelines adopted into consortium strategy. Grade 1.7.
     - Tags: PCB Lifecycle, DFM, B/S/H/, DEEP-Opt
     - Decorative SVG: recycling-themed circuit trace loop

  2. **Modular Embedded Control System - RV Application**
     - Description: Modular multi-board embedded system in Altium for RV power management. Schematic capture, component selection, 4-layer PCB layout.
     - Tags: Altium, 4-Layer PCB, Power Management, Embedded
     - Link: GitHub
     - Decorative SVG: modular block/connector traces

  3. **IMU & Microcontroller Data Logger**
     - Description: 4-layer STM32F4-based system with MPU-6050 IMU. Controlled-impedance USB (90 ohm), LDO power regulation (5V to 3.3V), real-time motion data via I2C.
     - Tags: STM32F4, MPU-6050, I2C, Impedance Control
     - Decorative SVG: sensor/data flow traces

  4. **Smart Home RF Access Control System**
     - Description: ESP32-based IoT solution replacing legacy RF access control. Custom Android interface. 30+ residential deployments, zero failures.
     - Tags: ESP32, IoT, RF, Android, BLE
     - Decorative SVG: wireless signal / antenna traces

- Each card: white background, schematic-style SVG decoration at top (~80px height, subtle line art), project title, description, tech tag pills, optional GitHub link button
- Hover: shadow lift + deep blue top border appears

### 8. Certifications & Documents

- Light grey background
- **3-column grid** of document cards (2 on tablet, 1 on mobile):
- Each card:
  - Icon: `fa-file-pdf` for reports, `fa-certificate` for certs, `fa-graduation-cap` for thesis
  - Document title
  - One-line description
  - Download button (deep blue, links to `assets/docs/filename.pdf`)
- **Placeholder cards:**
  1. Thesis Report — "Data-Driven Quality Prediction in SMT Assembly" (icon: graduation cap)
  2. Project Report — "Circular Economy in PCB Design" (icon: file)
  3. Certificate — Placeholder (icon: certificate)
- User adds their PDFs to `assets/docs/` and updates `href` values

### 9. Contact

- White background, centered layout
- Section title: "Get in Touch"
- Email (large, linked): `fiftikhar62@gmail.com`
- Phone: `(+49) 01742139923`
- Location: Nuremberg, Germany
- No social links, no contact form
- Subtle deep blue underline decoration

### 10. Footer

- Dark background (`--bg-dark`)
- Single centered line: "(c) 2026 Fahad Iftikhar"
- Light grey text, small font
- No additional links or decorations

## Animations & Interactions

- **Fade-in on scroll:** All sections fade in + slide up when entering viewport (IntersectionObserver, same concept as current site but smoother)
- **Navbar transition:** Transparent to solid white on scroll past hero
- **Card hover:** Subtle shadow increase + slight translateY(-2px) lift
- **Timeline entries:** Staggered fade-in as they enter viewport
- **Scroll-down indicator:** Subtle bouncing chevron at bottom of hero
- **No 3D animations, no rotating elements** — keeping it clean

## Responsive Breakpoints

| Breakpoint | Layout changes |
|------------|---------------|
| Desktop (> 1024px) | Full layouts as described, max-width container 1140px |
| Tablet (768–1024px) | Skills 2-col, Projects 2-col, hero stacks vertically (name above, sidebar below) |
| Mobile (< 768px) | Single column everything, hamburger nav, hero full-stack, timeline simplified |

## Content Notes

- All text content comes directly from Fahad's resume
- Profile photo and hero background image: placeholders provided, user replaces with real images
- Document PDFs: user adds to `assets/docs/`
- No social media links included (per user request)
- No CV download button (per user request)
- GitHub link on RV project card only (mentioned in resume as "Available on GitHub")

## External Dependencies

- Google Fonts: Source Sans 3 (weights: 400, 600, 700)
- Font Awesome 6.5.1 (CDN) — icons for skill cards, document types, nav
- No JavaScript frameworks — vanilla JS only
- No build tools required
