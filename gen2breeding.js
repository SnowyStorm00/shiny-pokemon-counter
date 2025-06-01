// Gen 2 Shiny Breeding mechanics

// Gen 2 Pokemon data (first 50 Pokemon, excluding Undiscovered egg group)
const gen2Pokemon = [
  { id: 1, name: "Bulbasaur", genderRatio: 87.5, eggGroups: ["Monster", "Grass"] },
  { id: 2, name: "Ivysaur", genderRatio: 87.5, eggGroups: ["Monster", "Grass"] },
  { id: 3, name: "Venusaur", genderRatio: 87.5, eggGroups: ["Monster", "Grass"] },
  { id: 4, name: "Charmander", genderRatio: 87.5, eggGroups: ["Monster", "Dragon"] },
  { id: 5, name: "Charmeleon", genderRatio: 87.5, eggGroups: ["Monster", "Dragon"] },
  { id: 6, name: "Charizard", genderRatio: 87.5, eggGroups: ["Monster", "Dragon"] },
  { id: 7, name: "Squirtle", genderRatio: 87.5, eggGroups: ["Monster", "Water 1"] },
  { id: 8, name: "Wartortle", genderRatio: 87.5, eggGroups: ["Monster", "Water 1"] },
  { id: 9, name: "Blastoise", genderRatio: 87.5, eggGroups: ["Monster", "Water 1"] },
  { id: 10, name: "Caterpie", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 11, name: "Metapod", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 12, name: "Butterfree", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 13, name: "Weedle", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 14, name: "Kakuna", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 15, name: "Beedrill", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 16, name: "Pidgey", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 17, name: "Pidgeotto", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 18, name: "Pidgeot", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 19, name: "Rattata", genderRatio: 50, eggGroups: ["Field"] },
  { id: 20, name: "Raticate", genderRatio: 50, eggGroups: ["Field"] },
  { id: 21, name: "Spearow", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 22, name: "Fearow", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 23, name: "Ekans", genderRatio: 50, eggGroups: ["Field", "Dragon"] },
  { id: 24, name: "Arbok", genderRatio: 50, eggGroups: ["Field", "Dragon"] },
  { id: 25, name: "Pikachu", genderRatio: 50, eggGroups: ["Field", "Fairy"] },
  { id: 26, name: "Raichu", genderRatio: 50, eggGroups: ["Field", "Fairy"] },
  { id: 27, name: "Sandshrew", genderRatio: 50, eggGroups: ["Field"] },
  { id: 28, name: "Sandslash", genderRatio: 50, eggGroups: ["Field"] },
  { id: 29, name: "Nidoran♀", genderRatio: 0, eggGroups: ["Monster", "Field"] },
  { id: 30, name: "Nidorina", genderRatio: 0, eggGroups: ["Monster", "Field"] },
  { id: 31, name: "Nidoqueen", genderRatio: 0, eggGroups: ["Monster", "Field"] },
  { id: 32, name: "Nidoran♂", genderRatio: 100, eggGroups: ["Monster", "Field"] },
  { id: 33, name: "Nidorino", genderRatio: 100, eggGroups: ["Monster", "Field"] },
  { id: 34, name: "Nidoking", genderRatio: 100, eggGroups: ["Monster", "Field"] },
  { id: 35, name: "Clefairy", genderRatio: 25, eggGroups: ["Fairy"] },
  { id: 36, name: "Clefable", genderRatio: 25, eggGroups: ["Fairy"] },
  { id: 37, name: "Vulpix", genderRatio: 25, eggGroups: ["Field"] },
  { id: 38, name: "Ninetales", genderRatio: 25, eggGroups: ["Field"] },
  { id: 39, name: "Jigglypuff", genderRatio: 25, eggGroups: ["Fairy"] },
  { id: 40, name: "Wigglytuff", genderRatio: 25, eggGroups: ["Fairy"] },
  { id: 41, name: "Zubat", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 42, name: "Golbat", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 43, name: "Oddish", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 44, name: "Gloom", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 45, name: "Vileplume", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 46, name: "Paras", genderRatio: 50, eggGroups: ["Bug", "Grass"] },
  { id: 47, name: "Parasect", genderRatio: 50, eggGroups: ["Bug", "Grass"] },
  { id: 48, name: "Venonat", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 49, name: "Venomoth", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 50, name: "Diglett", genderRatio: 50, eggGroups: ["Field"] },
  { id: 51, name: "Dugtrio", genderRatio: 50, eggGroups: ["Field"] },
  { id: 52, name: "Meowth", genderRatio: 50, eggGroups: ["Field"] },
  { id: 53, name: "Persian", genderRatio: 50, eggGroups: ["Field"] },
  { id: 54, name: "Psyduck", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 55, name: "Golduck", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 56, name: "Mankey", genderRatio: 50, eggGroups: ["Field"] },
  { id: 57, name: "Primeape", genderRatio: 50, eggGroups: ["Field"] },
  { id: 58, name: "Growlithe", genderRatio: 75, eggGroups: ["Field"] },
  { id: 59, name: "Arcanine", genderRatio: 75, eggGroups: ["Field"] },
  { id: 60, name: "Poliwag", genderRatio: 50, eggGroups: ["Water 1"] },
  { id: 61, name: "Poliwhirl", genderRatio: 50, eggGroups: ["Water 1"] },
  { id: 62, name: "Poliwrath", genderRatio: 50, eggGroups: ["Water 1"] },
  { id: 63, name: "Abra", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 64, name: "Kadabra", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 65, name: "Alakazam", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 66, name: "Machop", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 67, name: "Machoke", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 68, name: "Machamp", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 69, name: "Bellsprout", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 70, name: "Weepinbell", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 71, name: "Victreebel", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 72, name: "Tentacool", genderRatio: 50, eggGroups: ["Water 3"] },
  { id: 73, name: "Tentacruel", genderRatio: 50, eggGroups: ["Water 3"] },
  { id: 74, name: "Geodude", genderRatio: 50, eggGroups: ["Mineral"] },
  { id: 75, name: "Graveler", genderRatio: 50, eggGroups: ["Mineral"] },
  { id: 76, name: "Golem", genderRatio: 50, eggGroups: ["Mineral"] },
  { id: 77, name: "Ponyta", genderRatio: 50, eggGroups: ["Field"] },
  { id: 78, name: "Rapidash", genderRatio: 50, eggGroups: ["Field"] },
  { id: 79, name: "Slowpoke", genderRatio: 50, eggGroups: ["Monster", "Water 1"] },
  { id: 80, name: "Slowbro", genderRatio: 50, eggGroups: ["Monster", "Water 1"] },
  { id: 81, name: "Magnemite", genderRatio: -1, eggGroups: ["Mineral"] },
  { id: 82, name: "Magneton", genderRatio: -1, eggGroups: ["Mineral"] },
  { id: 83, name: "Farfetch'd", genderRatio: 50, eggGroups: ["Flying", "Field"] },
  { id: 84, name: "Doduo", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 85, name: "Dodrio", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 86, name: "Seel", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 87, name: "Dewgong", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 88, name: "Grimer", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 89, name: "Muk", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 90, name: "Shellder", genderRatio: 50, eggGroups: ["Water 3"] },
  { id: 91, name: "Cloyster", genderRatio: 50, eggGroups: ["Water 3"] },
  { id: 92, name: "Gastly", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 93, name: "Haunter", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 94, name: "Gengar", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 95, name: "Onix", genderRatio: 50, eggGroups: ["Mineral"] },
  { id: 96, name: "Drowzee", genderRatio: 50, eggGroups: ["Human-Like"] },
  { id: 97, name: "Hypno", genderRatio: 50, eggGroups: ["Human-Like"] },
  { id: 98, name: "Krabby", genderRatio: 50, eggGroups: ["Water 3"] },
  { id: 99, name: "Kingler", genderRatio: 50, eggGroups: ["Water 3"] },
  { id: 100, name: "Voltorb", genderRatio: -1, eggGroups: ["Mineral"] },
  { id: 101, name: "Electrode", genderRatio: -1, eggGroups: ["Mineral"] },
  { id: 102, name: "Exeggcute", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 103, name: "Exeggutor", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 104, name: "Cubone", genderRatio: 50, eggGroups: ["Monster"] },
  { id: 105, name: "Marowak", genderRatio: 50, eggGroups: ["Monster"] },
  { id: 106, name: "Hitmonlee", genderRatio: 100, eggGroups: ["Human-Like"] },
  { id: 107, name: "Hitmonchan", genderRatio: 100, eggGroups: ["Human-Like"] },
  { id: 108, name: "Lickitung", genderRatio: 50, eggGroups: ["Monster"] },
  { id: 109, name: "Koffing", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 110, name: "Weezing", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 111, name: "Rhyhorn", genderRatio: 50, eggGroups: ["Monster", "Field"] },
  { id: 112, name: "Rhydon", genderRatio: 50, eggGroups: ["Monster", "Field"] },
  { id: 113, name: "Chansey", genderRatio: 0, eggGroups: ["Fairy"] },
  { id: 114, name: "Tangela", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 115, name: "Kangaskhan", genderRatio: 0, eggGroups: ["Monster"] },
  { id: 116, name: "Horsea", genderRatio: 50, eggGroups: ["Water 1", "Dragon"] },
  { id: 117, name: "Seadra", genderRatio: 50, eggGroups: ["Water 1", "Dragon"] },
  { id: 118, name: "Goldeen", genderRatio: 50, eggGroups: ["Water 2"] },
  { id: 119, name: "Seaking", genderRatio: 50, eggGroups: ["Water 2"] },
  { id: 120, name: "Staryu", genderRatio: -1, eggGroups: ["Water 3"] },
  { id: 121, name: "Starmie", genderRatio: -1, eggGroups: ["Water 3"] },
  { id: 122, name: "Mr. Mime", genderRatio: 50, eggGroups: ["Human-Like"] },
  { id: 123, name: "Scyther", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 124, name: "Jynx", genderRatio: 0, eggGroups: ["Human-Like"] },
  { id: 125, name: "Electabuzz", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 126, name: "Magmar", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 127, name: "Pinsir", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 128, name: "Tauros", genderRatio: 100, eggGroups: ["Field"] },
  { id: 129, name: "Magikarp", genderRatio: 50, eggGroups: ["Water 2", "Dragon"] },
  { id: 130, name: "Gyarados", genderRatio: 50, eggGroups: ["Water 2", "Dragon"] },
  { id: 131, name: "Lapras", genderRatio: 50, eggGroups: ["Monster", "Water 1"] },
  { id: 132, name: "Ditto", genderRatio: -1, eggGroups: ["Ditto"] },
  { id: 133, name: "Eevee", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 134, name: "Vaporeon", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 135, name: "Jolteon", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 136, name: "Flareon", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 137, name: "Porygon", genderRatio: -1, eggGroups: ["Mineral"] },
  { id: 138, name: "Omanyte", genderRatio: 87.5, eggGroups: ["Water 1", "Water 3"] },
  { id: 139, name: "Omastar", genderRatio: 87.5, eggGroups: ["Water 1", "Water 3"] },
  { id: 140, name: "Kabuto", genderRatio: 87.5, eggGroups: ["Water 1", "Water 3"] },
  { id: 141, name: "Kabutops", genderRatio: 87.5, eggGroups: ["Water 1", "Water 3"] },
  { id: 142, name: "Aerodactyl", genderRatio: 87.5, eggGroups: ["Flying"] },
  { id: 143, name: "Snorlax", genderRatio: 87.5, eggGroups: ["Monster"] },
  { id: 147, name: "Dratini", genderRatio: 50, eggGroups: ["Water 1", "Dragon"] },
  { id: 148, name: "Dragonair", genderRatio: 50, eggGroups: ["Water 1", "Dragon"] },
  { id: 149, name: "Dragonite", genderRatio: 50, eggGroups: ["Water 1", "Dragon"] },
  { id: 152, name: "Chikorita", genderRatio: 87.5, eggGroups: ["Monster", "Grass"] },
  { id: 153, name: "Bayleef", genderRatio: 87.5, eggGroups: ["Monster", "Grass"] },
  { id: 154, name: "Meganium", genderRatio: 87.5, eggGroups: ["Monster", "Grass"] },
  { id: 155, name: "Cyndaquil", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 156, name: "Quilava", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 157, name: "Typhlosion", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 158, name: "Totodile", genderRatio: 87.5, eggGroups: ["Monster", "Water 1"] },
  { id: 159, name: "Croconaw", genderRatio: 87.5, eggGroups: ["Monster", "Water 1"] },
  { id: 160, name: "Feraligatr", genderRatio: 87.5, eggGroups: ["Monster", "Water 1"] },
  { id: 161, name: "Sentret", genderRatio: 50, eggGroups: ["Field"] },
  { id: 162, name: "Furret", genderRatio: 50, eggGroups: ["Field"] },
  { id: 163, name: "Hoothoot", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 164, name: "Noctowl", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 165, name: "Ledyba", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 166, name: "Ledian", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 167, name: "Spinarak", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 168, name: "Ariados", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 169, name: "Crobat", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 170, name: "Chinchou", genderRatio: 50, eggGroups: ["Water 2"] },
  { id: 171, name: "Lanturn", genderRatio: 50, eggGroups: ["Water 2"] },
  { id: 176, name: "Togetic", genderRatio: 87.5, eggGroups: ["Flying", "Fairy"] },
  { id: 177, name: "Natu", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 178, name: "Xatu", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 179, name: "Mareep", genderRatio: 50, eggGroups: ["Monster", "Field"] },
  { id: 180, name: "Flaaffy", genderRatio: 50, eggGroups: ["Monster", "Field"] },
  { id: 181, name: "Ampharos", genderRatio: 50, eggGroups: ["Monster", "Field"] },
  { id: 182, name: "Bellossom", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 183, name: "Marill", genderRatio: 50, eggGroups: ["Water 1", "Fairy"] },
  { id: 184, name: "Azumarill", genderRatio: 50, eggGroups: ["Water 1", "Fairy"] },
  { id: 185, name: "Sudowoodo", genderRatio: 50, eggGroups: ["Mineral"] },
  { id: 186, name: "Politoed", genderRatio: 50, eggGroups: ["Water 1"] },
  { id: 187, name: "Hoppip", genderRatio: 50, eggGroups: ["Fairy", "Grass"] },
  { id: 188, name: "Skiploom", genderRatio: 50, eggGroups: ["Fairy", "Grass"] },
  { id: 189, name: "Jumpluff", genderRatio: 50, eggGroups: ["Fairy", "Grass"] },
  { id: 190, name: "Aipom", genderRatio: 50, eggGroups: ["Field"] },
  { id: 191, name: "Sunkern", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 192, name: "Sunflora", genderRatio: 50, eggGroups: ["Grass"] },
  { id: 193, name: "Yanma", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 194, name: "Wooper", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 195, name: "Quagsire", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 196, name: "Espeon", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 197, name: "Umbreon", genderRatio: 87.5, eggGroups: ["Field"] },
  { id: 198, name: "Murkrow", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 199, name: "Slowking", genderRatio: 50, eggGroups: ["Monster", "Water 1"] },
  { id: 200, name: "Misdreavus", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 202, name: "Wobbuffet", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 203, name: "Girafarig", genderRatio: 50, eggGroups: ["Field"] },
  { id: 204, name: "Pineco", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 205, name: "Forretress", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 206, name: "Dunsparce", genderRatio: 50, eggGroups: ["Field"] },
  { id: 207, name: "Gligar", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 208, name: "Steelix", genderRatio: 50, eggGroups: ["Mineral"] },
  { id: 209, name: "Snubbull", genderRatio: 25, eggGroups: ["Field", "Fairy"] },
  { id: 210, name: "Granbull", genderRatio: 25, eggGroups: ["Field", "Fairy"] },
  { id: 211, name: "Qwilfish", genderRatio: 50, eggGroups: ["Water 2"] },
  { id: 212, name: "Scizor", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 213, name: "Shuckle", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 214, name: "Heracross", genderRatio: 50, eggGroups: ["Bug"] },
  { id: 215, name: "Sneasel", genderRatio: 50, eggGroups: ["Field"] },
  { id: 216, name: "Teddiursa", genderRatio: 50, eggGroups: ["Field"] },
  { id: 217, name: "Ursaring", genderRatio: 50, eggGroups: ["Field"] },
  { id: 218, name: "Slugma", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 219, name: "Magcargo", genderRatio: 50, eggGroups: ["Amorphous"] },
  { id: 220, name: "Swinub", genderRatio: 50, eggGroups: ["Field"] },
  { id: 221, name: "Piloswine", genderRatio: 50, eggGroups: ["Field"] },
  { id: 222, name: "Corsola", genderRatio: 25, eggGroups: ["Water 1", "Water 3"] },
  { id: 223, name: "Remoraid", genderRatio: 50, eggGroups: ["Water 1", "Water 2"] },
  { id: 224, name: "Octillery", genderRatio: 50, eggGroups: ["Water 1", "Water 2"] },
  { id: 225, name: "Delibird", genderRatio: 50, eggGroups: ["Water 1", "Field"] },
  { id: 226, name: "Mantine", genderRatio: 50, eggGroups: ["Water 1"] },
  { id: 227, name: "Skarmory", genderRatio: 50, eggGroups: ["Flying"] },
  { id: 228, name: "Houndour", genderRatio: 50, eggGroups: ["Field"] },
  { id: 229, name: "Houndoom", genderRatio: 50, eggGroups: ["Field"] },
  { id: 230, name: "Kingdra", genderRatio: 50, eggGroups: ["Water 1", "Dragon"] },
  { id: 231, name: "Phanpy", genderRatio: 50, eggGroups: ["Field"] },
  { id: 232, name: "Donphan", genderRatio: 50, eggGroups: ["Field"] },
  { id: 233, name: "Porygon2", genderRatio: -1, eggGroups: ["Mineral"] },
  { id: 234, name: "Stantler", genderRatio: 50, eggGroups: ["Field"] },
  { id: 235, name: "Smeargle", genderRatio: 50, eggGroups: ["Field"] },
  { id: 236, name: "Tyrogue", genderRatio: 100, eggGroups: ["Human-Like"] },
  { id: 237, name: "Hitmontop", genderRatio: 100, eggGroups: ["Human-Like"] },
  { id: 238, name: "Smoochum", genderRatio: 0, eggGroups: ["Human-Like"] },
  { id: 239, name: "Elekid", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 240, name: "Magby", genderRatio: 75, eggGroups: ["Human-Like"] },
  { id: 241, name: "Miltank", genderRatio: 0, eggGroups: ["Field"] },
  { id: 242, name: "Blissey", genderRatio: 0, eggGroups: ["Fairy"] },
  { id: 246, name: "Larvitar", genderRatio: 50, eggGroups: ["Monster"] },
  { id: 247, name: "Pupitar", genderRatio: 50, eggGroups: ["Monster"] },
  { id: 248, name: "Tyranitar", genderRatio: 50, eggGroups: ["Monster"] }
];

// Function to check if two Pokemon can breed
function canBreed(pokemon1, pokemon2, pokemon1IsShiny, pokemon2IsShiny) {
  // Two Dittos cannot breed together
  if (pokemon1.name === "Ditto" && pokemon2.name === "Ditto") {
    return false;
  }
  
  // Two shiny Pokémon cannot breed together in Gen 2
  if (pokemon1IsShiny && pokemon2IsShiny) {
    return false;
  }
  
  // If one is Ditto, they can breed (except with Undiscovered)
  if ((pokemon1.eggGroups.includes("Ditto") || pokemon2.eggGroups.includes("Ditto")) && 
      !pokemon1.eggGroups.includes("Undiscovered") && 
      !pokemon2.eggGroups.includes("Undiscovered")) {
    return true;
  }
  
  // Can't breed if either is in Undiscovered egg group
  if (pokemon1.eggGroups.includes("Undiscovered") || pokemon2.eggGroups.includes("Undiscovered")) {
    return false;
  }
  
  // Must be opposite genders
  const pokemon1IsMale = pokemon1.genderRatio > 0 && pokemon1.genderRatio <= 100;
  const pokemon1IsFemale = pokemon1.genderRatio >= 0 && pokemon1.genderRatio < 100;
  
  const pokemon2IsMale = pokemon2.genderRatio > 0 && pokemon2.genderRatio <= 100;
  const pokemon2IsFemale = pokemon2.genderRatio >= 0 && pokemon2.genderRatio < 100;
  
  if ((pokemon1IsMale && pokemon2IsFemale) || (pokemon1IsFemale && pokemon2IsMale)) {
    // Check if they share an egg group
    return pokemon1.eggGroups.some(group => pokemon2.eggGroups.includes(group));
  }
  
  return false;
}

// Function to get breeding shiny odds
function getBreedingShinyOdds(femaleParent, maleParent, femaleParentShiny, maleParentShiny) {
  // If they can't breed, return standard odds
  if (!canBreed(femaleParent, maleParent, femaleParentShiny, maleParentShiny)) {
    return 1/8192;
  }
  
  // If neither parent is shiny, use normal Gen 2 odds
  if (!femaleParentShiny && !maleParentShiny) {
    return 1/8192;
  }
  
  // Special case: Ditto breeding
  if (femaleParent.name === "Ditto" || maleParent.name === "Ditto") {
    // If Ditto is shiny, 1/64 odds regardless of partner
    if ((femaleParent.name === "Ditto" && femaleParentShiny) ||
        (maleParent.name === "Ditto" && maleParentShiny)) {
      return 1/64;
    }
    
    // If the non-Ditto is shiny, no boosted odds (stats come from Ditto)
    return 1/8192;
  }
  
  // Regular breeding (non-Ditto)
  // If male parent is shiny
  if (maleParentShiny) {
    // Only female offspring get the shininess from male parent
    const femaleOffspringRatio = (100 - femaleParent.genderRatio) / 100;
    return femaleOffspringRatio * (1/64);
  }
  
  // If female parent is shiny
  if (femaleParentShiny) {
    // Only male offspring get the shininess from female parent
    const maleOffspringRatio = femaleParent.genderRatio / 100;
    return maleOffspringRatio * (1/64);
  }
  
  // Default to normal odds
  return 1/8192;
}

// Function to update the UI labels to use gender-specific terms
function updateBreedingLabels() {
  const parent1Heading = document.querySelector('.breeding-parent:nth-child(1) h3');
  const parent2Heading = document.querySelector('.breeding-parent:nth-child(2) h3');
  
  if (parent1Heading) {
    parent1Heading.textContent = 'Female Parent';
  }
  
  if (parent2Heading) {
    parent2Heading.textContent = 'Male Parent';
  }
}

// Function to populate Pokemon dropdowns with gender-appropriate options
function populateBreedingPokemon() {
  const femaleParentSelect = document.getElementById('parent1');
  const maleParentSelect = document.getElementById('parent2');
  const femaleParentShiny = document.getElementById('parent1Shiny');
  const maleParentShiny = document.getElementById('parent2Shiny');
  
  if (!femaleParentSelect || !maleParentSelect) return;
  
  // Update labels to be gender-specific
  updateBreedingLabels();
  
  // Clear existing options
  femaleParentSelect.innerHTML = '<option value="">Select Female Pokémon</option>';
  maleParentSelect.innerHTML = '<option value="">Select Male Pokémon</option>';
  
  // Add Pokémon to appropriate dropdowns based on gender ratio
  gen2Pokemon.forEach(pokemon => {
    // Skip Pokémon in the Undiscovered egg group (they can't breed at all)
    if (pokemon.eggGroups.includes("Undiscovered")) {
      return;
    }
    
    // Female Pokémon (not 100% male) OR genderless Pokémon OR Ditto
    if (pokemon.genderRatio < 100 || pokemon.genderRatio === -1 || pokemon.name === "Ditto") {
      const femaleOption = document.createElement('option');
      femaleOption.value = pokemon.name;
      femaleOption.textContent = pokemon.name + (pokemon.genderRatio === -1 ? " (Genderless)" : "");
      femaleParentSelect.appendChild(femaleOption);
    }
    
    // Male Pokémon (not 0% male) OR genderless Pokémon OR Ditto
    if (pokemon.genderRatio > 0 || pokemon.genderRatio === -1 || pokemon.name === "Ditto") {
      const maleOption = document.createElement('option');
      maleOption.value = pokemon.name;
      maleOption.textContent = pokemon.name + (pokemon.genderRatio === -1 ? " (Genderless)" : "");
      maleParentSelect.appendChild(maleOption);
    }
  });
  
  // Add event listeners to update odds when Pokemon selection changes
  femaleParentSelect.addEventListener('change', function() {
    updateBreedingCompatibility();
    updateGen2BreedingOddsText();
    updateShinyProbability();
  });
  
  maleParentSelect.addEventListener('change', function() {
    updateBreedingCompatibility();
    updateGen2BreedingOddsText();
    updateShinyProbability();
  });
  
  // Add event listeners for shiny checkboxes
  if (femaleParentShiny) {
    femaleParentShiny.addEventListener('change', function() {
      updateBreedingCompatibility();
      updateGen2BreedingOddsText();
      updateShinyProbability();
    });
  }
  
  if (maleParentShiny) {
    maleParentShiny.addEventListener('change', function() {
      updateBreedingCompatibility();
      updateGen2BreedingOddsText();
      updateShinyProbability();
    });
  }
}

// Function to update breeding compatibility message
function updateBreedingCompatibility() {
  const compatibilityMsg = document.getElementById('compatibilityMessage');
  if (!compatibilityMsg) return;
  
  const femaleParentName = document.getElementById('parent1').value;
  const maleParentName = document.getElementById('parent2').value;
  
  const femaleParent = gen2Pokemon.find(p => p.name === femaleParentName);
  const maleParent = gen2Pokemon.find(p => p.name === maleParentName);
  
  const femaleParentShiny = document.getElementById('parent1Shiny').checked;
  const maleParentShiny = document.getElementById('parent2Shiny').checked;
  
  if (!femaleParent || !maleParent) {
    compatibilityMsg.textContent = "Select both parents";
    compatibilityMsg.className = "compatibility-warning";
    return;
  }
  
  // Check if both are shiny (CANNOT breed)
  if (femaleParentShiny && maleParentShiny) {
    compatibilityMsg.textContent = "Two shiny Pokémon cannot breed together in Gen 2";
    compatibilityMsg.className = "compatibility-error";
    return;
  }
  
  // Check if both are Ditto (CANNOT breed)
  if (femaleParent.name === "Ditto" && maleParent.name === "Ditto") {
    compatibilityMsg.textContent = "Two Dittos cannot breed together";
    compatibilityMsg.className = "compatibility-error";
    return;
  }
  
  // Special Ditto explanation
  if (femaleParent.name === "Ditto" || maleParent.name === "Ditto") {
    const nonDitto = femaleParent.name === "Ditto" ? maleParent : femaleParent;
    
    // Ditto can't breed with Undiscovered
    if (nonDitto.eggGroups.includes("Undiscovered")) {
      compatibilityMsg.textContent = "Ditto cannot breed with Undiscovered egg group";
      compatibilityMsg.className = "compatibility-error";
      return;
    }
    
    compatibilityMsg.textContent = `Compatible (Ditto can breed with ${nonDitto.name})`;
    compatibilityMsg.className = "compatibility-success";
    return;
  }
  
  // Check if they can breed - PASS THE SHINY STATUS HERE
  if (canBreed(femaleParent, maleParent, femaleParentShiny, maleParentShiny)) {
    // Check if they share an egg group
    const sharedGroups = femaleParent.eggGroups.filter(g => maleParent.eggGroups.includes(g));
    
    compatibilityMsg.textContent = `Compatible (${sharedGroups.join(", ")})`;
    compatibilityMsg.className = "compatibility-success";
  } else {
    compatibilityMsg.textContent = "These Pokémon cannot breed together";
    compatibilityMsg.className = "compatibility-error";
  }
}

// Function to get Gen 2 breeding shiny rate
function getGen2BreedingRate() {
  const femaleParentName = document.getElementById('parent1').value;
  const maleParentName = document.getElementById('parent2').value;
  
  const femaleParent = gen2Pokemon.find(p => p.name === femaleParentName);
  const maleParent = gen2Pokemon.find(p => p.name === maleParentName);
  
  const femaleParentShiny = document.getElementById('parent1Shiny').checked;
  const maleParentShiny = document.getElementById('parent2Shiny').checked;
  
  if (!femaleParent || !maleParent) return 1/8192;
  
  // If they can't breed, return standard odds
  if (!canBreed(femaleParent, maleParent, femaleParentShiny, maleParentShiny)) {
    return 1/8192;
  }
  
  return getBreedingShinyOdds(femaleParent, maleParent, femaleParentShiny, maleParentShiny);
}

// Function to update Gen 2 breeding odds text
function updateGen2BreedingOddsText() {
  const femaleParentName = document.getElementById('parent1').value;
  const maleParentName = document.getElementById('parent2').value;
  
  if (!femaleParentName || !maleParentName) {
    document.getElementById('odds').textContent = "Current Odds: Select both parents";
    return;
  }
  
  const femaleParent = gen2Pokemon.find(p => p.name === femaleParentName);
  const maleParent = gen2Pokemon.find(p => p.name === maleParentName);
  
  const femaleParentShiny = document.getElementById('parent1Shiny').checked;
  const maleParentShiny = document.getElementById('parent2Shiny').checked;
  
  // Check if both are shiny
  if (femaleParentShiny && maleParentShiny) {
    document.getElementById('odds').textContent = "Current Odds: Not breedable (Two shiny Pokémon cannot breed in Gen 2)";
    return;
  }
  
  // Check if they can breed
  if (!canBreed(femaleParent, maleParent, femaleParentShiny, maleParentShiny)) {
    document.getElementById('odds').textContent = "Current Odds: Not breedable";
    return;
  }

  // Special Ditto case
  if (femaleParent.name === "Ditto" || maleParent.name === "Ditto") {
    const dittoIsShiny = (femaleParent.name === "Ditto" && femaleParentShiny) || 
                         (maleParent.name === "Ditto" && maleParentShiny);
    const nonDittoIsShiny = (femaleParent.name !== "Ditto" && femaleParentShiny) || 
                           (maleParent.name !== "Ditto" && maleParentShiny);
    
    if (dittoIsShiny) {
      document.getElementById('odds').textContent = "Current Odds: 1/64 (Shiny Ditto passes its trait)";
    } else if (nonDittoIsShiny) {
      document.getElementById('odds').textContent = "Current Odds: 1/8192 (Non-Ditto parent is shiny, but stats come from Ditto)";
    } else {
      document.getElementById('odds').textContent = "Current Odds: 1/8192";
    }
    return;
  }
  
  // Regular breeding (non-Ditto)
  // In Gen 2, offspring is always the same species as the female parent
  const speciesNote = femaleParent.name !== maleParent.name ? 
    `Offspring will be ${femaleParent.name} (female's species)` : "";
  
  // If male parent is shiny
  if (maleParentShiny) {
    const femaleOffspringRatio = (100 - femaleParent.genderRatio) / 100;
    
    if (femaleOffspringRatio === 0) {
      document.getElementById('odds').textContent = 
        `Current Odds: 1/8192 (No female offspring possible). ${speciesNote}`;
      return;
    }
    
    const effectiveOdds = Math.round(1 / (femaleOffspringRatio * (1/64)));
    document.getElementById('odds').textContent = 
      `Current Odds: ~1/${effectiveOdds} (${(femaleOffspringRatio*100).toFixed(1)}% female offspring at 1/64). ${speciesNote}`;
    return;
  }
  
  // If female parent is shiny
  if (femaleParentShiny) {
    const maleOffspringRatio = femaleParent.genderRatio / 100;
    
    if (maleOffspringRatio === 0) {
      document.getElementById('odds').textContent = 
        `Current Odds: 1/8192 (No male offspring possible). ${speciesNote}`;
      return;
    }
    
    const effectiveOdds = Math.round(1 / (maleOffspringRatio * (1/64)));
    document.getElementById('odds').textContent = 
      `Current Odds: ~1/${effectiveOdds} (${(maleOffspringRatio*100).toFixed(1)}% male offspring at 1/64). ${speciesNote}`;
    return;
  }
  
  document.getElementById('odds').textContent = `Current Odds: 1/8192. ${speciesNote}`;
}

// New function to update the shiny probability display
function updateShinyProbability() {
  const probabilityElement = document.getElementById('probability');
  if (!probabilityElement) return;
  
  // Get the roll count from the rollCounter element
  const rollCounterElement = document.getElementById('rollCounter');
  if (!rollCounterElement) return;
  
  const rolls = parseInt(rollCounterElement.textContent) || 0;
  const rate = getGen2BreedingRate();
  
  // Calculate cumulative probability: 1 - (1 - rate)^rolls
  const probability = 1 - Math.pow(1 - rate, rolls);
  const percentProbability = (probability * 100).toFixed(2);
  
  probabilityElement.textContent = `${percentProbability}%`;
}

// Connect event handlers to the main script's updateDisplay function
function connectToMainScript() {
  const femaleParentSelect = document.getElementById('parent1');
  const maleParentSelect = document.getElementById('parent2');
  const femaleParentShiny = document.getElementById('parent1Shiny');
  const maleParentShiny = document.getElementById('parent2Shiny');
  
  // Add event listeners that will update the probability display after our functions run
  const updateMainDisplay = function() {
    // Call our functions first
    updateBreedingCompatibility();
    updateGen2BreedingOddsText();
    
    // Then tell the main script to update its display
    if (typeof updateDisplay === 'function') {
      updateDisplay();
    }
  };
  
  // Connect events to the main update function
  if (femaleParentSelect) {
    femaleParentSelect.addEventListener('change', updateMainDisplay);
  }
  
  if (maleParentSelect) {
    maleParentSelect.addEventListener('change', updateMainDisplay);
  }
  
  if (femaleParentShiny) {
    femaleParentShiny.addEventListener('change', updateMainDisplay);
  }
  
  if (maleParentShiny) {
    maleParentShiny.addEventListener('change', updateMainDisplay);
  }
}

// Export functions for main script to use
window.gen2breeding = {
  populateBreedingPokemon,
  updateBreedingCompatibility,
  getGen2BreedingRate,
  updateGen2BreedingOddsText,
  updateBreedingLabels
};

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    // Connect to the main script's update function
    connectToMainScript();
  }, 200); // Slightly longer delay to ensure main script has initialized
});