# Oasis Infobyte SIP — Web Development & Designing
## Level 1 · Task 3: Interactive Temperature Converter (ThermoPulse)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Thermodynamics](https://img.shields.io/badge/Physics-Absolute%20Zero%20Safety-blue?style=for-the-badge)

---

## 📌 Project Overview
**ThermoPulse** is an interactive, scientifically rigorous web utility for converting temperatures across **Celsius (°C)**, **Fahrenheit (°F)**, **Kelvin (K)**, and **Rankine (°R)** in real-time. Designed with **HTML5**, **CSS3 (Glassmorphism & CSS Grid)**, and **Vanilla JavaScript**, it features real-time input validation, strict **Absolute Zero violation detection**, **simultaneous multi-unit matrix calculation**, **dynamic thermal state visualization**, **step-by-step mathematical formula explanations**, and **session history logging**.

---

## 🎯 Task Objective & Compliance Matrix
As specified in the Oasis Infobyte SIP Level 1 Task 3 requirements:

| Required Feature | Implementation Status | Implementation Details |
| :--- | :---: | :--- |
| **Numeric input field with validation** | ✅ Complete | Input validates via regex (`/^[+-]?(\d+(\.\d*)?\|\.\d+)$/`). Rejects non-numeric characters, letters, and empty submissions with immediate visual error feedback. |
| **Unit selector dropdown / controls** | ✅ Complete | Dynamic dropdown selectors for source input unit and primary target unit (Celsius, Fahrenheit, Kelvin, and Rankine). |
| **Simultaneous multi-unit conversion** | ✅ Complete | Real-time calculation matrix computes and displays equivalent temperatures across all supported scales simultaneously. |
| **Convert button triggering calculation** | ✅ Complete | Includes a primary "Convert Temperature" button, real-time live calculation on typing, unit-swap toggle, and quick-preset buttons. |
| **Result display area with unit labels** | ✅ Complete | Prominent hero display with formatted decimals, clear unit labels, and a copy-to-clipboard button. |
| **Edge-case handling: Absolute Zero** | ✅ Complete | Detects inputs below absolute zero (`-273.15°C`, `-459.67°F`, `0 K`, `0°R`) and triggers an educational warning banner citing the Third Law of Thermodynamics. |
| **Clean, centered UI layout** | ✅ Complete | Glassmorphic card centered vertically and horizontally, responsive typography, and an interactive thermal status gauge. |

---

## 📐 Mathematical Conversion Formulas
The application calculates all conversions using precise thermodynamic formulas via Celsius as an intermediary:

1. **Celsius to Fahrenheit:**
   $$\text{°F} = \left(\text{°C} \times \frac{9}{5}\right) + 32$$
2. **Fahrenheit to Celsius:**
   $$\text{°C} = (\text{°F} - 32) \times \frac{5}{9}$$
3. **Celsius to Kelvin:**
   $$\text{K} = \text{°C} + 273.15$$
4. **Kelvin to Celsius:**
   $$\text{°C} = \text{K} - 273.15$$
5. **Celsius to Rankine:**
   $$\text{°R} = (\text{°C} + 273.15) \times \frac{9}{5}$$

---

## 📂 File Architecture
```text
OIBSIP/WebDev-L1-TemperatureConverter/
├── index.html        # Clean, accessible semantic HTML5 layout
├── styles.css        # Modern dark glassmorphism, responsive grid, thermal gauge styles
├── script.js         # Input validation, math engines, absolute zero handler, and session history
└── README.md         # Comprehensive project documentation & submission guide
```

---

## 🚀 How to Run Locally
1. Navigate to the project folder:
   ```bash
   cd C:\Users\anush\.gemini\antigravity\scratch\OIBSIP\WebDev-L1-TemperatureConverter
   ```
2. Open `index.html` in your web browser:
   - Double-click `index.html`, or
   - Start a simple HTTP server:
     ```bash
     python -m http.server 8082
     ```
     Then navigate to `http://localhost:8082`.

---

## 📹 Video Walkthrough & Submission Guide
Follow **Section 1.2** of the Oasis Infobyte SIP Guidelines:
1. **Title Card (First 2 Seconds):**
   - Display a static 2-second slide showing:
     - **Full Name:** Anushree
     - **Assigned Track:** Web Development & Designing
     - **Task Title:** Level 1 — Task 3: Temperature Converter Website (ThermoPulse)
2. **Demonstration Walkthrough:**
   - Type in temperatures (e.g., `25°C`, `100°C`, `0°F`, `300 K`) and show live simultaneous conversions across all 4 units.
   - Demonstrate **Input Validation**: type letters or special characters (e.g., `abc`) to show the error message.
   - Demonstrate **Absolute Zero Violation**: enter `-300°C` or `-500°F` to showcase the warning alert and thermodynamic explanation.
   - Click the **Quick Presets** (Absolute Zero, Freezing, Room Temp, Human Body, Boiling).
   - Click the **Swap Units** button and the **Copy Result** button.
   - Show the session conversion history log.
3. **LinkedIn Posting Checklist:**
   - Tag **Oasis Infobyte**.
   - Include required hashtags: `#oasisinfobyte #webdevelopment #javascript #html #css #math #internship`.
   - Leave constructive comments on at least two fellow interns' demo videos.
