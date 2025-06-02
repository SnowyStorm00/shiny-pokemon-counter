// Odd Egg shiny calculator for Pokémon Gold/Silver/Crystal

const oddEgg = {
  // Pokémon that can be hatched from the Odd Egg with their probabilities
  pokemon: [
    { name: "Pichu", normalOdds: 8, shinyOdds: 1, totalOdds: 9 },
    { name: "Cleffa", normalOdds: 16, shinyOdds: 3, totalOdds: 19 },
    { name: "Igglybuff", normalOdds: 16, shinyOdds: 3, totalOdds: 19 },
    { name: "Smoochum", normalOdds: 14, shinyOdds: 2, totalOdds: 16 },
    { name: "Magby", normalOdds: 10, shinyOdds: 2, totalOdds: 12 },
    { name: "Elekid", normalOdds: 12, shinyOdds: 2, totalOdds: 14 },
    { name: "Tyrogue", normalOdds: 10, shinyOdds: 1, totalOdds: 11 }
  ],
  
  // Track if the UI has been initialized
  uiInitialized: false,
  
  // Get the combined probability of getting a shiny from the Odd Egg
  getShinyProbability: function() {
    // Sum up all shiny odds and divide by total odds
    const totalShinyOdds = this.pokemon.reduce((sum, mon) => sum + mon.shinyOdds, 0);
    const totalOdds = this.pokemon.reduce((sum, mon) => sum + mon.totalOdds, 0);
    
    return totalShinyOdds / totalOdds;
  },
  
  // Get odds for a specific Pokémon
  getPokemonOdds: function(pokemonName) {
    const mon = this.pokemon.find(p => p.name === pokemonName);
    if (!mon) return null;
    
    return {
      normal: mon.normalOdds / mon.totalOdds,
      shiny: mon.shinyOdds / mon.totalOdds,
      specific: mon.shinyOdds / 100 // Chance of specifically this shiny Pokémon from the egg
    };
  },
  
  // Update the UI to show Odd Egg odds
  updateOddEggOddsText: function() {
    const oddsElement = document.getElementById('odds');
    const shinyPercent = (this.getShinyProbability() * 100).toFixed(1);
    
    oddsElement.textContent = `Current Odds: ${shinyPercent}% chance of a Shiny Pokémon`;
    
    // Update the Odd Egg table if it exists
    this.updateOddEggTable();
  },
  
  // Create or update the table showing odds for each Pokémon
  updateOddEggTable: function() {
    // Get or create the container for the table
    let tableContainer = document.getElementById('oddEggTable');
    if (!tableContainer) {
      tableContainer = document.createElement('div');
      tableContainer.id = 'oddEggTable';
      tableContainer.className = 'odd-egg-table';
      
      // Add it to the oddEggContainer
      const oddEggContainer = document.getElementById('oddEggContainer');
      if (oddEggContainer) {
        oddEggContainer.appendChild(tableContainer);
      } else {
        // Add it after the odds display as a fallback
        const oddsElement = document.getElementById('odds');
        oddsElement.parentNode.insertBefore(tableContainer, oddsElement.nextSibling);
      }
    }
    
    // Get current roll count from the counter element
    const counterElement = document.getElementById('counter');
    const rollCount = counterElement ? parseInt(counterElement.textContent.replace('Rolls: ', '')) : 0;
    
    // Create the table HTML
    let tableHTML = `
      <h3>Odd Egg Pokémon Probabilities</h3>
      <table class="odd-egg-stats">
        <thead>
          <tr>
            <th>Pokémon</th>
            <th>Probability (%)</th>
            <th>Chance by Now</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    // Add rows for each Pokémon
    this.pokemon.forEach(mon => {
      const shinyOdds = mon.shinyOdds / mon.totalOdds;
      const shinyPercent = (shinyOdds * 100).toFixed(1);
      
      // Calculate probability of having found this specific shiny by now
      // 1 - (1 - probability)^rolls
      const foundByNow = rollCount > 0 ? (1 - Math.pow(1 - shinyOdds, rollCount)) : 0;
      const foundByNowPercent = (foundByNow * 100).toFixed(1);
      
      tableHTML += `
        <tr>
          <td>Shiny ${mon.name}</td>
          <td>${shinyPercent}%</td>
          <td>${foundByNowPercent}%</td>
        </tr>
      `;
    });
    
    tableHTML += `</tbody></table>`;
    tableContainer.innerHTML = tableHTML;
  },
  
  // Initialize the Odd Egg UI elements
  initializeUI: function() {
    if (this.uiInitialized) return;
    
    // Create the main container if it doesn't exist
    let oddEggContainer = document.getElementById('oddEggContainer');
    if (!oddEggContainer) {
      oddEggContainer = document.createElement('div');
      oddEggContainer.id = 'oddEggContainer';
      oddEggContainer.className = 'odd-egg-container';
      
      // Add it after the method selector
      const methodSelect = document.getElementById('method').parentNode;
      methodSelect.parentNode.insertBefore(oddEggContainer, methodSelect.nextSibling);
    }
    
    // Create a description section
    const description = document.createElement('div');
    description.className = 'odd-egg-description';
    description.innerHTML = `
      <p>The Odd Egg is a special egg given in Pokémon Crystal. It has a high chance of hatching into a shiny baby Pokémon.</p>
    `;
    oddEggContainer.appendChild(description);
    
    // Mark as initialized
    this.uiInitialized = true;
  },
  
  // Show the Odd Egg UI elements
  showOddEggUI: function() {
    // Initialize UI if not done already
    this.initializeUI();
    
    // Hide any other method-specific UI elements
    const breedingControls = document.getElementById('breedingControls');
    if (breedingControls) breedingControls.style.display = 'none';
    
    // Show our container
    const oddEggContainer = document.getElementById('oddEggContainer');
    if (oddEggContainer) oddEggContainer.style.display = 'block';
    
    // Update the table
    this.updateOddEggTable();
  },
  
  // Hide the Odd Egg UI elements
  hideOddEggUI: function() {
    const oddEggContainer = document.getElementById('oddEggContainer');
    if (oddEggContainer) oddEggContainer.style.display = 'none';
  },
  
  // Update after a roll
  updateAfterRoll: function() {
    this.updateOddEggTable();
  }
};

// Make oddEgg available globally
window.oddEgg = oddEgg;