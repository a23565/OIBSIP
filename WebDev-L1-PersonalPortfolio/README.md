# Oasis Infobyte SIP — Web Development & Designing
## Level 1 · Task 2: Personal Portfolio & Digital Resume

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Dark & Light Mode](https://img.shields.io/badge/Theme-Dark%20%26%20Light-blueviolet?style=for-the-badge)

---

## 📌 Project Overview
A personal developer portfolio and digital resume designed to present engineering expertise, featured client & side projects, skill proficiencies, and contact avenues. Built using semantic **HTML5**, **CSS3 (Custom Properties & Responsive Layouts)**, and **Vanilla JavaScript**, the portfolio features interactive **dark/light theme toggling**, **active scroll-spy navigation**, **dynamic project filtering**, **animated skill proficiency meters**, and a **client-side validated contact form**.

---

## 🎯 Task Objective & Compliance Matrix
As specified in the Oasis Infobyte SIP Level 1 Task 2 requirements:

| Required Feature | Implementation Status | Implementation Details |
| :--- | :---: | :--- |
| **Profile / Hero Section** | ✅ Complete | Headline with full name, role title ("Full-Stack Web Developer & Software Engineer"), bio summary, avatar card, and action buttons. |
| **About Me Section** | ✅ Complete | 3 detailed paragraphs describing engineering background, education, and passions, paired with a personal info grid & key metric stats. |
| **Skills Section** | ✅ Complete | Categorized visual grid (Frontend, Backend & Data, Tools & Workflow) featuring percentage progress tracks and an interactive badge cloud. |
| **Projects Section** | ✅ Complete | 4 realistic project cards (AuraFlow SaaS Landing Page, ThermoPulse Converter, Developer Portfolio, TaskFlow Kanban) with tags, descriptions, live demo links, and GitHub links. |
| **Contact Section** | ✅ Complete | Direct contact info cards (Email, LinkedIn, GitHub, Location) paired with an interactive contact form with instant validation. |
| **Smooth Scroll Navigation** | ✅ Complete | Native CSS `scroll-behavior: smooth` with `scroll-padding-top` offset to avoid navbar clipping. |
| **Consistent Branding** | ✅ Complete | Unified typography (`Plus Jakarta Sans` & `Fira Code`) with coordinated accents and customizable CSS variables. |
| **Fully Responsive** | ✅ Complete | Mobile drawer menu, fluid grids, and adaptive media queries ensuring seamless usability from 320px to 4K displays. |
| **Enhancements (JS)** | ✅ Complete | Dark/Light mode toggle, active scroll spy, filterable project tabs, and form validation state handler. |

---

## 📂 File Architecture
```text
OIBSIP/WebDev-L1-PersonalPortfolio/
├── index.html        # Semantic HTML5 portfolio structure
├── styles.css        # CSS variables, dark/light themes, Flexbox/Grid, and responsive queries
├── script.js         # Theme switching, scroll spy, project filter, and form validation
└── README.md         # Comprehensive project documentation & submission guide
```

---

## 🚀 How to Run Locally
1. Navigate to the project directory:
   ```bash
   cd C:\Users\anush\.gemini\antigravity\scratch\OIBSIP\WebDev-L1-PersonalPortfolio
   ```
2. Open `index.html` in your browser:
   - Double-click `index.html`, or
   - Start a quick local server via PowerShell / Python:
     ```bash
     python -m http.server 8081
     ```
     Then open `http://localhost:8081`.

---

## 📹 Video Walkthrough & Submission Guide
Follow **Section 1.2** of the Oasis Infobyte SIP Guidelines:
1. **Title Card (First 2 Seconds):**
   - Display a static 2-second slide showing:
     - **Full Name:** Anushree
     - **Assigned Track:** Web Development & Designing
     - **Task Title:** Level 1 — Task 2: Personal Portfolio
2. **Demonstration Walkthrough:**
   - Demonstrate the theme toggle switching between Dark and Light mode.
   - Click navigation links to showcase smooth scrolling and active scroll-spy highlight.
   - Filter projects between "All", "Frontend", and "Full-Stack".
   - Test the contact form: submit an empty form to show validation messages, then fill valid data and trigger the success banner.
   - Resize to mobile resolution to demonstrate the hamburger drawer menu.
3. **LinkedIn Posting Checklist:**
   - Tag **Oasis Infobyte**.
   - Include required hashtags: `#oasisinfobyte #webdevelopment #portfolio #javascript #html #css #internship`.
   - Provide your public GitHub repository link (`https://github.com/a23565/OIBSIP`) when the submission portal opens midway through your batch.
