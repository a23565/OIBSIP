/**
 * ThermoPulse — Universal Temperature Converter Script
 * Task: OASIS INFOBYTE SIP — Track: Web Development & Designing (Level 1, Task 3)
 * Features: Multi-unit conversion (C, F, K, R), live validation, absolute zero edge-case check,
 *           thermal state indicator, mathematical formula breakdown, and session history.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const tempForm = document.getElementById('temp-form');
  const tempInput = document.getElementById('temp-input');
  const clearBtn = document.getElementById('clear-btn');
  const sourceUnitSelect = document.getElementById('source-unit');
  const targetUnitSelect = document.getElementById('target-unit');
  const swapBtn = document.getElementById('swap-btn');
  const resetBtn = document.getElementById('reset-all-btn');
  const inputError = document.getElementById('input-error');

  // Result Elements
  const absZeroWarning = document.getElementById('absolute-zero-warning');
  const absZeroMessage = document.getElementById('absolute-zero-message');
  const thermalBadge = document.getElementById('thermal-state-badge');
  const thermalFill = document.getElementById('thermal-fill');
  const sourceSummary = document.getElementById('source-summary');
  const primaryOutputVal = document.getElementById('primary-output-val');
  const primaryOutputUnit = document.getElementById('primary-output-unit');
  const copyBtn = document.getElementById('copy-btn');

  // Multi-unit grid elements
  const valC = document.getElementById('val-C');
  const valF = document.getElementById('val-F');
  const valK = document.getElementById('val-K');
  const valR = document.getElementById('val-R');
  const cards = {
    C: document.getElementById('card-C'),
    F: document.getElementById('card-F'),
    K: document.getElementById('card-K'),
    R: document.getElementById('card-R')
  };

  // Formula elements
  const formulaMath = document.getElementById('formula-math');
  const formulaExplanation = document.getElementById('formula-explanation');

  // Presets and History
  const presetPills = document.querySelectorAll('.preset-pill');
  const historyList = document.getElementById('history-list');
  const clearHistoryBtn = document.getElementById('clear-history-btn');

  let historyItems = [];

  // ==================== INITIAL RUN ====================
  convertTemperature();

  // ==================== EVENT LISTENERS ====================
  // Real-time calculation on input change
  tempInput.addEventListener('input', () => {
    convertTemperature();
  });

  sourceUnitSelect.addEventListener('change', () => {
    convertTemperature();
  });

  targetUnitSelect.addEventListener('change', () => {
    convertTemperature();
  });

  tempForm.addEventListener('submit', (e) => {
    e.preventDefault();
    convertTemperature(true); // true = record to history
  });

  clearBtn.addEventListener('click', () => {
    tempInput.value = '';
    tempInput.focus();
    showError('Please enter a temperature value.');
  });

  // Swap Source and Target Units
  swapBtn.addEventListener('click', () => {
    const temp = sourceUnitSelect.value;
    sourceUnitSelect.value = targetUnitSelect.value;
    targetUnitSelect.value = temp;
    convertTemperature(true);
  });

  // Reset Everything
  resetBtn.addEventListener('click', () => {
    tempInput.value = '25';
    sourceUnitSelect.value = 'C';
    targetUnitSelect.value = 'F';
    clearError();
    convertTemperature();
  });

  // Presets buttons
  presetPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const val = pill.getAttribute('data-val');
      const unit = pill.getAttribute('data-unit');
      tempInput.value = val;
      sourceUnitSelect.value = unit;
      clearError();
      convertTemperature(true);
    });
  });

  // Copy Result to Clipboard
  copyBtn.addEventListener('click', () => {
    const rawVal = primaryOutputVal.textContent;
    const unit = primaryOutputUnit.textContent;
    const summary = `${sourceSummary.textContent} ${rawVal} ${unit}`;

    navigator.clipboard.writeText(summary).then(() => {
      const copyTextEl = copyBtn.querySelector('.copy-text');
      const originalText = copyTextEl.textContent;
      copyTextEl.textContent = 'Copied!';
      copyBtn.style.background = '#10b981';
      copyBtn.style.color = '#ffffff';

      setTimeout(() => {
        copyTextEl.textContent = originalText;
        copyBtn.style.background = '';
        copyBtn.style.color = '';
      }, 2000);
    });
  });

  // Clear History
  clearHistoryBtn.addEventListener('click', () => {
    historyItems = [];
    renderHistory();
  });

  // ==================== CONVERSION CORE LOGIC ====================
  function convertTemperature(saveToHistory = false) {
    const rawInput = tempInput.value.trim();

    // 1. Validation: check empty
    if (rawInput === '') {
      showError('Please enter a temperature value to convert.');
      resetDisplays();
      return;
    }

    // 2. Validation: strict numeric check (permits optional negative/positive sign and float decimal)
    const numericRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
    if (!numericRegex.test(rawInput)) {
      showError('Invalid input: Please enter a valid number (e.g. 25, -10.5, 0.4).');
      resetDisplays();
      return;
    }

    clearError();

    const inputValue = parseFloat(rawInput);
    const fromUnit = sourceUnitSelect.value;
    const toUnit = targetUnitSelect.value;

    // Convert from chosen source unit to intermediary Celsius
    let celsius;
    switch (fromUnit) {
      case 'C':
        celsius = inputValue;
        break;
      case 'F':
        celsius = (inputValue - 32) * (5 / 9);
        break;
      case 'K':
        celsius = inputValue - 273.15;
        break;
      case 'R':
        celsius = (inputValue - 491.67) * (5 / 9);
        break;
      default:
        celsius = inputValue;
    }

    // 3. Absolute Zero Violation Check
    // Absolute zero is -273.15 °C. Using a slight epsilon for float precision
    const isBelowAbsoluteZero = celsius < -273.1500001;
    handleAbsoluteZeroWarning(isBelowAbsoluteZero, fromUnit, inputValue);

    // Compute all 4 unit values from Celsius
    const results = {
      C: celsius,
      F: (celsius * 9 / 5) + 32,
      K: celsius + 273.15,
      R: (celsius + 273.15) * 9 / 5
    };

    // Update primary target display
    const targetValue = results[toUnit];
    sourceSummary.textContent = `${formatNumber(inputValue)}°${fromUnit} =`;
    primaryOutputVal.textContent = formatNumber(targetValue);
    primaryOutputUnit.textContent = getUnitSymbol(toUnit);

    // Update simultaneous multi-unit grid
    valC.textContent = `${formatNumber(results.C)} °C`;
    valF.textContent = `${formatNumber(results.F)} °F`;
    valK.textContent = `${formatNumber(results.K)} K`;
    valR.textContent = `${formatNumber(results.R)} °R`;

    // Highlight active target card
    Object.keys(cards).forEach(unitKey => {
      cards[unitKey].classList.toggle('active-target', unitKey === toUnit);
    });

    // Update Thermal State Indicator & Bar
    updateThermalGauge(celsius, isBelowAbsoluteZero);

    // Update Mathematical Formula Explanation
    updateFormulaExplanation(fromUnit, toUnit, inputValue, targetValue);

    // Add to History if requested
    if (saveToHistory) {
      addHistoryRecord(inputValue, fromUnit, targetValue, toUnit);
    }
  }

  // ==================== THERMAL STATE INDICATOR ====================
  function updateThermalGauge(celsius, isInvalid) {
    let stateLabel = '';
    let stateColor = '';
    let barPercent = 50;

    if (isInvalid) {
      stateLabel = 'Below Absolute Zero (Physically Impossible)';
      stateColor = '#ef4444';
      barPercent = 0;
    } else if (celsius <= -200) {
      stateLabel = 'Deep Cryogenic Sub-Zero';
      stateColor = '#38bdf8';
      barPercent = 5;
    } else if (celsius < 0) {
      stateLabel = 'Freezing / Sub-Zero (< 0°C)';
      stateColor = '#38bdf8';
      barPercent = 18;
    } else if (celsius >= 0 && celsius <= 15) {
      stateLabel = 'Chilly / Cool (0°C - 15°C)';
      stateColor = '#06b6d4';
      barPercent = 35;
    } else if (celsius > 15 && celsius <= 25) {
      stateLabel = 'Comfortable / Room Temp (16°C - 25°C)';
      stateColor = '#10b981';
      barPercent = 50;
    } else if (celsius > 25 && celsius <= 37) {
      stateLabel = 'Warm / Body Temp (26°C - 37°C)';
      stateColor = '#f59e0b';
      barPercent = 68;
    } else if (celsius > 37 && celsius < 100) {
      stateLabel = 'Hot / Scorching (> 37°C)';
      stateColor = '#ef4444';
      barPercent = 85;
    } else {
      stateLabel = 'Boiling / Superheated (>= 100°C)';
      stateColor = '#a855f7';
      barPercent = 100;
    }

    thermalBadge.textContent = stateLabel;
    thermalBadge.style.color = stateColor;
    thermalBadge.style.borderColor = stateColor;
    thermalBadge.style.background = `${stateColor}1a`; // 10% opacity

    thermalFill.style.width = `${barPercent}%`;
  }

  // ==================== ABSOLUTE ZERO HANDLER ====================
  function handleAbsoluteZeroWarning(isBelowZero, unit, val) {
    if (isBelowZero) {
      absZeroWarning.style.display = 'flex';
      let minValText = '';
      if (unit === 'C') minValText = '-273.15°C';
      else if (unit === 'F') minValText = '-459.67°F';
      else if (unit === 'K') minValText = '0 K';
      else if (unit === 'R') minValText = '0°R';

      absZeroMessage.textContent = `Warning: The entered value (${val}°${unit}) is below Absolute Zero (${minValText}). According to the Third Law of Thermodynamics, temperatures below absolute zero cannot exist in standard thermal equilibrium. Calculations are shown for theoretical mathematical reference only.`;
    } else {
      absZeroWarning.style.display = 'none';
    }
  }

  // ==================== FORMULA EXPLANATION ====================
  function updateFormulaExplanation(from, to, input, output) {
    if (from === to) {
      formulaMath.textContent = `${getUnitSymbol(to)} = ${getUnitSymbol(from)}`;
      formulaExplanation.textContent = `Identical units selected. Value remains unchanged: ${formatNumber(input)} ${getUnitSymbol(to)}`;
      return;
    }

    let formulaStr = '';
    let calcStr = '';

    if (from === 'C' && to === 'F') {
      formulaStr = '°F = (°C × 9/5) + 32';
      calcStr = `(${input} × 1.8) + 32 = ${(input * 1.8).toFixed(2)} + 32 = ${formatNumber(output)} °F`;
    } else if (from === 'F' && to === 'C') {
      formulaStr = '°C = (°F - 32) × 5/9';
      calcStr = `(${input} - 32) × 0.5556 = ${(input - 32).toFixed(2)} × 5/9 = ${formatNumber(output)} °C`;
    } else if (from === 'C' && to === 'K') {
      formulaStr = 'K = °C + 273.15';
      calcStr = `${input} + 273.15 = ${formatNumber(output)} K`;
    } else if (from === 'K' && to === 'C') {
      formulaStr = '°C = K - 273.15';
      calcStr = `${input} - 273.15 = ${formatNumber(output)} °C`;
    } else if (from === 'F' && to === 'K') {
      formulaStr = 'K = (°F - 32) × 5/9 + 273.15';
      calcStr = `((${input} - 32) × 5/9) + 273.15 = ${formatNumber(output)} K`;
    } else if (from === 'K' && to === 'F') {
      formulaStr = '°F = (K - 273.15) × 9/5 + 32';
      calcStr = `((${input} - 273.15) × 1.8) + 32 = ${formatNumber(output)} °F`;
    } else {
      formulaStr = `Conversion between ${from} and ${to} via Celsius base`;
      calcStr = `${input} ${getUnitSymbol(from)} = ${formatNumber(output)} ${getUnitSymbol(to)}`;
    }

    formulaMath.textContent = formulaStr;
    formulaExplanation.textContent = calcStr;
  }

  // ==================== HISTORY RECORDING ====================
  function addHistoryRecord(inVal, inUnit, outVal, outUnit) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const record = {
      text: `${formatNumber(inVal)}°${inUnit} → ${formatNumber(outVal)} ${getUnitSymbol(outUnit)}`,
      time: timestamp
    };

    historyItems.unshift(record);
    if (historyItems.length > 8) historyItems.pop();
    renderHistory();
  }

  function renderHistory() {
    if (historyItems.length === 0) {
      historyList.innerHTML = '<li class="history-empty">No conversion history yet. Try converting a temperature!</li>';
      return;
    }

    historyList.innerHTML = historyItems.map(item => `
      <li class="history-item">
        <span class="history-item-math">${item.text}</span>
        <span class="history-item-time">${item.time}</span>
      </li>
    `).join('');
  }

  // ==================== UTILITIES ====================
  function formatNumber(num) {
    if (isNaN(num)) return '0.00';
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function getUnitSymbol(code) {
    switch (code) {
      case 'C': return '°C';
      case 'F': return '°F';
      case 'K': return 'K';
      case 'R': return '°R';
      default: return '';
    }
  }

  function showError(msg) {
    inputError.textContent = msg;
    inputError.classList.add('active');
    tempInput.style.borderColor = '#ef4444';
  }

  function clearError() {
    inputError.textContent = '';
    inputError.classList.remove('active');
    tempInput.style.borderColor = '';
  }

  function resetDisplays() {
    primaryOutputVal.textContent = '---';
    valC.textContent = '---';
    valF.textContent = '---';
    valK.textContent = '---';
    valR.textContent = '---';
    thermalBadge.textContent = 'Awaiting Input';
    thermalFill.style.width = '0%';
  }
});
