# Oasis Infobyte SIP — Web Development & Designing
## Level 1 · Task 1: Responsive Landing Page (AuraFlow)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Responsive Design](https://img.shields.io/badge/Responsive-Flexbox%20%26%20Grid-success?style=for-the-badge)

---

## 📌 Project Overview
**AuraFlow** is a modern, high-conversion SaaS landing page for an AI-powered cloud workflow orchestration and automated data pipeline platform. Engineered with semantic **HTML5** and pure **CSS3** (zero JavaScript dependency), this landing page showcases mastery of modern CSS layout techniques including **CSS Grid**, **Flexbox**, **CSS custom properties (variables)**, **responsive typography (`clamp()`)**, **glassmorphism**, and a **pure-CSS mobile navigation drawer** using the accessible checkbox hack.

---

## 🎯 Task Objective & Compliance Matrix
As specified in the Oasis Infobyte SIP Level 1 Task 1 requirements:

| Required Feature | Implementation Status | Implementation Details |
| :--- | :---: | :--- |
| **Fixed or sticky navigation bar** | ✅ Complete | Sticky header with `position: sticky; top: 0`, backdrop blur (`backdrop-filter: blur(16px)`), and 5 navigation links. |
| **At least 3 navigation links** | ✅ Complete | Includes Features, How It Works, Testimonials, Pricing, and FAQ links + 2 CTA action buttons. |
| **Hero section with headline & CTA** | ✅ Complete | Dynamic hero with headline, subheadline, release tag, dual CTA buttons ("Get Started Free", "Watch Demo"), and trust guarantees. |
| **At least 2 distinct content sections** | ✅ Complete | Features (6 cards), How It Works (3-step workflow + metrics), Testimonials (3 cards), Pricing (3 tiers), and FAQ accordion. |
| **Footer with contact / social links** | ✅ Complete | Multi-column footer with brand overview, social icons (GitHub, LinkedIn, Twitter/X), 4 navigation columns, and legal links. |
| **Consistent colour palette** | ✅ Complete | Unified dark-tech theme (`#0a0d14` midnight navy, `#6366f1` indigo primary, `#14b8a6` teal accent, `#e2e8f0` text). |
| **Responsive layout (no breaking)** | ✅ Complete | Fluid layout adapting seamlessly across mobile (320px+), tablet (768px), and desktop (1200px+) using Flexbox & Grid. |
| **No element overlap & proper box model** | ✅ Complete | Global `box-sizing: border-box`, intentional padding/margins, and overflow guards to eliminate layout shifts. |
| **Clean typography with multiple font sizes** | ✅ Complete | Google Fonts (`Space Grotesk` for headings & `Plus Jakarta Sans` for body) with distinct typographic hierarchy. |

---

## 📂 File Architecture
```text
OIBSIP/WebDev-L1-LandingPage/
├── index.html        # Semantic HTML5 document structure
├── styles.css        # Pure CSS3 styling, layout grids, variables, and responsive media queries
└── README.md         # Comprehensive project documentation & submission guide
```

---

## 🚀 How to Run Locally
1. Clone or navigate to the repository directory:
   ```bash
   cd C:\Users\anush\.gemini\antigravity\scratch\OIBSIP\WebDev-L1-LandingPage
   ```
2. Open `index.html` in any modern web browser:
   - Double-click `index.html` directly, or
   - Use VS Code Live Server extension, or
   - Run a quick local server via PowerShell / Python:
     ```bash
     python -m http.server 8080
     ```
     Then open `http://localhost:8080` in your browser.

---

## 📹 Video Walkthrough & Submission Guide
Follow **Section 1.2** of the Oasis Infobyte SIP Guidelines:
1. **Title Card (First 2 Seconds):**
   - Display a static 2-second slide showing:
     - **Full Name:** [Your Name]
     - **Assigned Track:** Web Development & Designing
     - **Task Title:** Level 1 — Task 1: Landing Page (AuraFlow)
2. **Demonstration Walkthrough:**
   - Smoothly scroll through the sticky navbar, hero section, interactive code mockup, features grid, how-it-works process, customer reviews, pricing table, and footer.
   - Resize the browser window to demonstrate responsive mobile behavior and trigger the pure CSS mobile menu toggle.
3. **LinkedIn Posting Checklist:**
   - Tag **Oasis Infobyte**.
   - Include required hashtags: `#oasisinfobyte #webdevelopment #html #css #responsivedesign #internship`.
   - Engage with at least two peer intern submissions in your cohort.
