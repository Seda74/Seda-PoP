// Raw data from Google Sheets (replace this with the full data when available)
const rawData = `Potion	Level	Effect	Components #1	NB#1	Components #2	NB#2	Components #3	NB#3	Components #4	NB#4	Components #5	NB#5	Components #6	NB#6	Components #7	NB#7	Notes
Attack potion (3)	1	Temporarily boosts Attack by 8% plus 1.	Guam potion (unf)	1	Eye of newt	1											
Attack potion (4)	1	Temporarily boosts Attack by 8% plus 1.	Guam potion (unf)	1	Eye of newt	1											
Ranging potion (3)	3	Temporarily boosts Ranged by 8% plus 1.	Guam potion (unf)	1	Redberries	1											
Ranging potion (4)	3	Temporarily boosts Ranged by 8% plus 1.	Guam potion (unf)	1	Redberries	1											
Magic potion (3)	5	Temporarily boosts Magic by 8% plus 1.	Tarromin potion (unf)	1	Any coloured bead	1											
Magic potion (4)	5	Temporarily boosts Magic by 8% plus 1.	Tarromin potion (unf)	1	Any coloured bead	1											
Strength potion (3)	7	Temporarily boosts Strength by 8% plus 1.	Tarromin potion (unf)	1	Limpwurt root	1											While this is non-members, it cannot be mixed by F2P.Free players can instead obtain this potion through the Apothecary, requiring Red spiders' eggs, a Limpwurt Root and 5 coins for each potion (produces 4 doses instead of 3).
Strength potion (4)	7	Temporarily boosts Strength by 8% plus 1.	Tarromin potion (unf)	1	Limpwurt root	1											While this is non-members, it cannot be mixed by F2P.Free players can instead obtain this potion through the Apothecary, requiring Red spiders' eggs, a Limpwurt Root and 5 coins for each potion (produces 4 doses instead of 3).
Relicym's balm	8	Preferred weapon to use against Orange Broodoo Victims during the Tai Bwo Wannai Cleanup minigame.	Rogue's purse potion (unf)	1	Clean snake weed	1											Must have at least started Zogre Flesh Eaters.
Defence potion (3)	9	Temporarily raises Defence level by 8% plus 1.	Marrentill potion (unf)	1	Bear fur	1											While this is non-members, it cannot be mixed by F2P.
Defence potion (4)	9	Temporarily raises Defence level by 8% plus 1.	Marrentill potion (unf)	1	Bear fur	1											While this is non-members, it cannot be mixed by F2P.
Necromancy potion (3)	11	Temporarily raises Necromancy level by 8% plus 1.	Marrentill potion (unf)	1	Cadava berries	1											
Necromancy potion (4)	11	Temporarily raises Necromancy level by 8% plus 1.	Marrentill potion (unf)	1	Cadava berries	1											
Antipoison	13	Cures poison and provides immunity for 3 minutes.	Marrentill potion (unf)	1	Unicorn horn dust	1											This potion cannot cure poison caused by Karambwan paste.
Serum 207	15	Temporarily cures Afflicted NPCs in Mort'ton.	Tarromin potion (unf)	1	Ashes	1											Learned and required in Shades of Mort'ton; Can be sanctified to produce Serum 208
Guthix rest	18	Cures poison. Restores 500 life points and restores some run energy. Boosts max life points by 500.	Harralander potion (unf)	1	Clean marrentill	1											Made during One Small Favour
Guam tar	19	Ammunition and bait for green salamander.	Guam potion (unf)	1	Swamp tar	1											
Restore potion	22	Restores Attack, Strength, Defence, Magic, and Ranged by 30% of level plus 10.	Harralander potion (unf)	1	Red spiders' eggs	1											Does not restore Constitution, Prayer, or Summoning.
Guthix balance	22	Used against Vampire Juvinates and Vampire Juveniles, particularly in the Temple Trekking minigame.	Restore potion	1	Garlic	1	Silver dust	1									Players receive partial experience (25 xp) for each of the secondary ingredients.Requires In Aid of the Myreque.
Blamish oil	25	Used to make oily fishing rods during the Heroes' Quest.	Harralander potion (unf)	1	Blamish snail slime	1											`;

// Function to process the raw data into a structured object
function processData(data) {
    const lines = data.split('\n').slice(1); // Remove header and split into lines
    const potions = {};
  
    lines.forEach(line => {
      const parts = line.split('\t');
      if (parts.length < 3) return; // Skip lines with insufficient data
  
      const name = parts[0];
      const level = parts[1];
      const effect = parts[2];
      const ingredients = [];
  
      // Extract ingredients - combine name and quantity
      for (let i = 3; i < parts.length; i++) {
        if (parts[i] && parts[i] !== "Notes") {
          ingredients.push(`${parts[i]}:${parts[i + 1]}`); // Combine name and quantity
          i++; // Skip the quantity column
        }
      }
  
      potions[name] = {
        level: parseInt(level),
        effect: effect,
        ingredients: ingredients
      };
    });
  
    return potions;
  }
  
  // Process the data
  const potionsData = processData(rawData);
  
  // Convert to HTML-compatible format
  const htmlData = {};
  for (const potionName in potionsData) {
    const potion = potionsData[potionName];
    htmlData[potionName] = {
      level: potion.level,
      effect: potion.effect,
      ingredients: potion.ingredients.map(ingredient => {
        const [name, quantity] = ingredient.split(':');
        return {
          name: name,
          quantity: quantity || undefined
        };
      })
    };
  }
  
  // Convert to JSON string
  const jsonData = JSON.stringify(htmlData, null, 2);
  
  // Output the JSON string
  console.log(jsonData);