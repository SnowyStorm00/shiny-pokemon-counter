# Shiny Pokemon Counter v1.1.0

## Overview
Shiny Pokemon Counter is a dedicated application for tracking your shiny hunting progress across all Pokemon generations. This tool calculates real-time odds and helps you monitor your shiny hunting journey with accurate probability statistics.

## Features

### Comprehensive Generation Support
- **All Generations**: Full support for Generations 2-9
- **Generation-Specific Odds**: Accurate 1/8192 odds for Gens 2-5 and 1/4096 for Gens 6-9
- **Visual Theming**: Each generation features a unique color gradient reflecting the main games

### Multiple Hunting Methods
- **Wild Encounters**: Traditional random encounter shiny hunting
- **Masuda Method**: Breeding Pokemon from different language games
  - Available in Gen 4 and above with proper odds (5/8192 in Gen 4, etc.)
- **Gen 2 Breeding System**: Complete implementation of Generation 2 breeding mechanics
  - Select from all 251 Gen 1 & 2 Pokémon with accurate egg groups and gender ratios
  - Special handling for genderless Pokémon and Ditto compatibility
  - Proper implementation of Gen 2's unique parent-to-offspring shiny inheritance
- **Method Selector**: Dynamically shows only available methods for each generation

### Shiny Charm Support
- **Generation-Specific Effects**: Properly implements how the Shiny Charm works in each generation
- **Automatic Availability**: Shiny Charm option only appears for generations where it's available
- **Accurate Calculations**: Correctly applies modified odds (3/8192 for Gen 5, 3/4096 for Gens 6+)

### Statistics
- **Real-Time Probability**: Shows your chances of having found a shiny by current roll count
- **Clear Interface**: Easy-to-read odds display with both fractional and decimal approximations
- **Roll Counter**: Tracks your total number of encounters/breeding attempts

### User Interface
- **Modern Design**: Clean, gradient-based interface
- **Intuitive Controls**: Simple buttons for rolling and resetting
- **Responsive Layout**: Properly sized for easy viewing
- **Dynamic Breeding UI**: Interactive breeding compatibility checker for Gen 2

## How to Use Gen 2 Breeding Feature

1. Select **Generation 2** from the dropdown menu
2. Choose **Breeding** as your hunting method
3. The breeding controls panel will appear automatically
4. Select your parent Pokémon (compatible egg groups will be shown)
5. Mark if either parent is shiny (this affects odds in Gen 2)
6. Compatibility will be checked automatically
7. View your odds of hatching a shiny egg
8. Use the counter buttons to track your hatching attempts

## System Requirements
- **Windows**: Windows 7 or later
- **Disk Space**: Less than 100MB required

## Installation

### Windows
1. Go to the [Releases](https://github.com/SnowyStorm00/shiny-pokemon-counter/releases) page
2. Download the latest `.exe` installer or portable version
3. Run the installer or portable executable

### Building from Source
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the application
4. Run `npm run build` to build the distributable

## Known Issues
- None at this time

## Feedback
Please send any feedback, bug reports, or feature requests to [your contact info]

Happy shiny hunting!