// Masuda Method odds calculator for Pokémon games

const masudaMethod = {
  // Get the shiny rate for Masuda Method breeding
  getMasudaRate: function(generation, hasShinyCharm) {
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
  },
  
  // Update the displayed odds text for Masuda Method
  updateMasudaOddsText: function(generation, hasShinyCharm) {
    const oddsElement = document.getElementById('odds');
    
    if (generation == 4) {
      oddsElement.textContent = "Current Odds: 5/8192 (≈1/1638)";
    } else if (generation == 5) {
      if (hasShinyCharm) {
        oddsElement.textContent = "Current Odds: 8/8192 (≈1/1024)";
      } else {
        oddsElement.textContent = "Current Odds: 6/8192 (≈1/1365)";
      }
    } else { // Gen 6-9
      if (hasShinyCharm) {
        oddsElement.textContent = "Current Odds: 8/4096 (≈1/512)";
      } else {
        oddsElement.textContent = "Current Odds: 6/4096 (≈1/683)";
      }
    }
  }
};

// Make masudaMethod available globally
window.masudaMethod = masudaMethod;