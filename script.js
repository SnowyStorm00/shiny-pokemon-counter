let rolls = 0;

// Available methods per generation
const availableMethods = {
  2: ["encounters", "breeding"],
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
  "masuda": "Masuda Method",
  "breeding": "Shiny Breeding"
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
  
  // Handle method change to show/hide breeding controls
  handleMethodChange();
}

// Get current shiny rate based on all factors
function getShinyRate() {
  const generation = parseInt(document.getElementById('generation').value);
  const hasShinyCharm = document.getElementById('shinyCharm').checked;
  const method = document.getElementById('method').value;
  
  // For Gen 2 breeding
  if (method === "breeding" && generation === 2) {
    // Use the Gen 2 breeding function from gen2breeding.js
    return window.gen2breeding.getGen2BreedingRate();
  }
  
  // For Masuda Method
  if (method === "masuda") {
    // Use the Masuda Method function from masudaMethod.js
    return window.masudaMethod.getMasudaRate(generation, hasShinyCharm);
  }
  
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
}

// Update the odds text display
function updateOddsText() {
  const generation = parseInt(document.getElementById('generation').value);
  const hasShinyCharm = document.getElementById('shinyCharm').checked;
  const method = document.getElementById('method').value;
  
  // For Gen 2 breeding
  if (method === "breeding" && generation === 2) {
    // Use the Gen 2 breeding function from gen2breeding.js
    window.gen2breeding.updateGen2BreedingOddsText();
    return;
  }
  
  // For Masuda Method
  if (method === "masuda") {
    // Use the Masuda Method function from masudaMethod.js
    window.masudaMethod.updateMasudaOddsText(generation, hasShinyCharm);
    return;
  }
  
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

// Function to handle method changes
function handleMethodChange() {
  const generation = parseInt(document.getElementById('generation').value);
  const method = document.getElementById('method').value;
  const breedingControls = document.getElementById('breedingControls');
  
  if (method === "breeding" && generation === 2) {
    breedingControls.style.display = 'block';
    // Populate breeding Pokémon
    window.gen2breeding.populateBreedingPokemon();
  } else {
    breedingControls.style.display = 'none';
  }
  
  updateShinyCharmAvailability();
  updateOddsText();
  updateDisplay();
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add basic CSS
  const style = document.createElement('style');
  style.textContent = `
    .compatibility-success { color: #4CAF50; font-weight: bold; }
    .compatibility-error { color: #f44336; font-weight: bold; }
    .compatibility-warning { color: #FFC107; font-weight: bold; }
  `;
  document.head.appendChild(style);
  
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
    handleMethodChange();
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