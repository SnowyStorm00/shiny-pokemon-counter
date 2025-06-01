let rolls = 0;

// Available methods per generation
const availableMethods = {
  2: ["encounters"],
  3: ["encounters"],
  4: ["encounters", "masuda"],
  5: ["encounters", "masuda"],
  6: ["encounters", "masuda"],
  7: ["encounters", "masuda"],
  8: ["encounters", "masuda"],
  9: ["encounters", "masuda"]
};

// Method display names
const methodNames = {
  "encounters": "Wild Encounters",
  "masuda": "Masuda Method"
};

// Update available methods based on the selected generation
function updateAvailableMethods() {
  const generation = parseInt(document.getElementById('generation').value);
  const methodSelect = document.getElementById('method');
  const currentMethod = methodSelect.value;
  
  // Clear existing options
  methodSelect.innerHTML = '';
  
  // Add only available methods for this generation
  const methods = availableMethods[generation];
  methods.forEach(method => {
    const option = document.createElement('option');
    option.value = method;
    option.textContent = methodNames[method];
    methodSelect.appendChild(option);
  });
  
  // Try to keep the previously selected method if available
  if (methods.includes(currentMethod)) {
    methodSelect.value = currentMethod;
  }
}

// Get current shiny rate based on all factors
function getShinyRate() {
  const generation = parseInt(document.getElementById('generation').value);
  const hasShinyCharm = document.getElementById('shinyCharm').checked;
  const method = document.getElementById('method').value;
  
  // For wild encounters
  if (method === "encounters") {
    if (generation >= 2 && generation <= 4) {
      // No shiny charm in gens 2-4
      return 1/8192;
    } else if (generation == 5) {
      // Gen 5: With charm it's 3/8192
      return hasShinyCharm ? 3/8192 : 1/8192;
    } else {
      // Gen 6+: With charm it's 3/4096
      return hasShinyCharm ? 3/4096 : 1/4096;
    }
  } 
  // For Masuda Method
  else if (method === "masuda") {
    if (generation == 4) {
      // Gen 4: Always 5/8192 (no shiny charm effect)
      return 5/8192;
    } else if (generation == 5) {
      // Gen 5: 6/8192 or 8/8192 with charm
      return hasShinyCharm ? 8/8192 : 6/8192;
    } else {
      // Gen 6+: 6/4096 or 8/4096 with charm
      return hasShinyCharm ? 8/4096 : 6/4096;
    }
  }
}

// Update the display with the current odds text
function updateOddsText() {
  const generation = parseInt(document.getElementById('generation').value);
  const hasShinyCharm = document.getElementById('shinyCharm').checked;
  const method = document.getElementById('method').value;
  
  // For wild encounters
  if (method === "encounters") {
    if (generation >= 2 && generation <= 4) {
      document.getElementById('odds').textContent = "Current Odds: 1/8192";
    } else if (generation == 5) {
      if (hasShinyCharm) {
        document.getElementById('odds').textContent = "Current Odds: 3/8192 (≈1/2731)";
      } else {
        document.getElementById('odds').textContent = "Current Odds: 1/8192";
      }
    } else { // Gen 6-9
      if (hasShinyCharm) {
        document.getElementById('odds').textContent = "Current Odds: 3/4096 (≈1/1365)";
      } else {
        document.getElementById('odds').textContent = "Current Odds: 1/4096";
      }
    }
  } 
  // For Masuda Method
  else if (method === "masuda") {
    if (generation == 4) {
      document.getElementById('odds').textContent = "Current Odds: 5/8192 (≈1/1638)";
    } else if (generation == 5) {
      if (hasShinyCharm) {
        document.getElementById('odds').textContent = "Current Odds: 8/8192 (≈1/1024)";
      } else {
        document.getElementById('odds').textContent = "Current Odds: 6/8192 (≈1/1365)";
      }
    } else { // Gen 6-9
      if (hasShinyCharm) {
        document.getElementById('odds').textContent = "Current Odds: 8/4096 (≈1/512)";
      } else {
        document.getElementById('odds').textContent = "Current Odds: 6/4096 (≈1/683)";
      }
    }
  }
}

// Enable/disable shiny charm based on generation and method
function updateShinyCharmAvailability() {
  const generation = parseInt(document.getElementById('generation').value);
  const method = document.getElementById('method').value;
  const shinyCharmCheckbox = document.getElementById('shinyCharm');
  
  if ((generation >= 5) && !(generation == 4 && method === "masuda")) {
    // Shiny charm available in gen 5+, except for Masuda in gen 4
    shinyCharmCheckbox.disabled = false;
    shinyCharmCheckbox.parentElement.style.opacity = "1";
  } else {
    // No shiny charm in gens 2-4 or Masuda in gen 4
    shinyCharmCheckbox.disabled = true;
    shinyCharmCheckbox.checked = false;
    shinyCharmCheckbox.parentElement.style.opacity = "0.5";
  }
}

// Update theme based on generation
function updateTheme() {
  const generation = parseInt(document.getElementById('generation').value);
  const themes = {
    2: { top: "#FFD700", bottom: "#C0C0C0" }, // Gold to Silver
    3: { top: "#DC143C", bottom: "#4169E1" }, // Ruby Red to Sapphire Blue
    4: { top: "#FF69B4", bottom: "#87CEEB" }, // Diamond Pink to Pearl Blue
    5: { top: "#FFFFFF", bottom: "#000000" }, // White to Black
    6: { top: "#FF0000", bottom: "#0000FF" }, // X Red to Y Blue
    7: { top: "#FFA500", bottom: "#9932CC" }, // Sun Orange to Moon Purple
    8: { top: "#00BFFF", bottom: "#FF1493" }, // Sword Blue to Shield Pink
    9: { top: "#FF4500", bottom: "#9400D3" }  // Scarlet Orange to Violet Purple
  };
  
  const theme = themes[generation];
  document.body.style.background = `linear-gradient(to bottom, ${theme.top}, ${theme.bottom})`;
  document.getElementById('rollBtn').style.backgroundColor = theme.bottom;
}

function updateDisplay() {
  // Update counter
  document.getElementById('counter').textContent = `Rolls: ${rolls}`;
  
  // Get current shiny rate
  const shinyRate = getShinyRate();
  
  // Calculate probability of having found at least one shiny by now
  // P = 1 - (1 - rate)^rolls
  const notFoundProb = Math.pow(1 - shinyRate, rolls);
  const foundProb = (1 - notFoundProb) * 100;
  
  // Cap at 99.99% since 100% is theoretically impossible
  const displayProb = Math.min(foundProb, 99.99).toFixed(2);
  
  document.getElementById('probability').textContent = 
    `Probability of finding shiny by now: ${displayProb}%`;
}

// Setup event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Roll button increases counter and calculates probability
  document.getElementById('rollBtn').addEventListener('click', function() {
    rolls++;
    updateDisplay();
  });
  
  // Reset button resets counter to 0
  document.getElementById('resetBtn').addEventListener('click', function() {
    rolls = 0;
    updateDisplay();
  });
  
  // Generation selector changes odds and availabilities
  document.getElementById('generation').addEventListener('change', function() {
    updateAvailableMethods();
    updateShinyCharmAvailability();
    updateOddsText();
    updateTheme();
    updateDisplay();
  });
  
  // Method selector changes odds
  document.getElementById('method').addEventListener('change', function() {
    updateShinyCharmAvailability();
    updateOddsText();
    updateDisplay();
  });
  
  // Shiny charm checkbox changes odds
  document.getElementById('shinyCharm').addEventListener('change', function() {
    updateOddsText();
    updateDisplay();
  });
  
  // Initialize the display
  updateAvailableMethods();
  updateShinyCharmAvailability();
  updateOddsText();
  updateTheme();
  updateDisplay();
});