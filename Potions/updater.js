// Raw data from Google Sheets (replace this with the full data when available)
const rawData = `Invention potion	77	Temporarily boosts Invention by 3.	Snapdragon potion (unf)	1	Chinchompa residue	1											
Stamina potion (3)	77	Temporarily boosts Agility by 6, significantly reduces the speed at which run energy drains and run energy is restored to 100% every few seconds for 6 minutes.	Super energy (3)	1	Arbuck potion (unf)	1											
Stamina potion (4)	77	Temporarily boosts Agility by 6, significantly reduces the speed at which run energy drains and run energy is restored to 100% every few seconds for 6 minutes.	Super energy (3)	1	Arbuck potion (unf)	1											
Enhanced luck potion	77	Grants the effects of a ring of fortune for 1 hour.	Luck potion	1	Onyx bolt tips	1											
Archaeology potion	78	Temporarily boosts Archaeology by 3 levels.	Avantoe potion (unf)	1	Soil	1											Must first be learned using the Archaeology potion recipe.
Zamorak brew (3)	78	Temporarily boosts Attack and Strength by 8% plus 1, and restores Prayer points by 8% of the maximum plus 20, but lowers Defence by 8% plus 1 and removes 12% of life points.	Torstol potion (unf)	1	Jangerberries	1											
Antipoison++	79	Cures poison and provides immunity for 12 minutes.	Irit potion (unf)	1	Magic roots	1											Requires coconut milk in place of water.
Super cooking potion	79	Temporarily boosts cooking by 5.	Cooking potion	1	Zygomite fruit	1											
Super necromancy (3)	79	Temporarily boosts necromancy by 12% plus 2.	Spirit weed potion (unf)	1	Congealed blood	1											Super necromancy potion (3) is the primary ingredient for Extreme necromancy potions.
Super necromancy (4)	79	Temporarily boosts necromancy by 12% plus 2.	Spirit weed potion (unf)	1	Congealed blood	1											Super necromancy potion (3) is the primary ingredient for Extreme necromancy potions.
Extreme hunter	80	Temporarily boosts Hunter by 15% plus 3.	Super hunter	1	Bull horns	1											Only the 3-dose Super hunter potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Saradomin brew (3)	81	Temporarily boosts Defence by 4% plus 1 and heals 1000 life points but lowers Attack, Strength, Ranged and Magic by 4% + 1.	Toadflax potion (unf)	1	Crushed nest	1											See above for Toadflax locations.
Saradomin brew (4)	81	Temporarily boosts Defence by 4% plus 1 and heals 1000 life points but lowers Attack, Strength, Ranged and Magic by 4% + 1.	Toadflax potion (unf)	1	Crushed nest	1											See above for Toadflax locations.
Weapon poison++ (3)	82	Makes the player poisonous for 7 minutes.	Cave nightshade	1	Poison ivy berries	1											Requires coconut milk in place of water.
Weapon poison++ (4)	82	Makes the player poisonous for 7 minutes.	Cave nightshade	1	Poison ivy berries	1											Requires coconut milk in place of water.
Aggression potion (3)	82	Makes nearby attackable NPCs aggressive.	Bloodweed potion (unf)	1	Searing ashes	1											
Aggression potion (4)	82	Makes nearby attackable NPCs aggressive.	Bloodweed potion (unf)	1	Searing ashes	1											
Adrenaline potion (3)	84	Recovers Adrenaline bar by 25%. Can only be used every 120 seconds.	Super energy (3)	1	Papaya fruit	1											Only the 3-dose Super energy potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Adrenaline potion (4)	84	Recovers Adrenaline bar by 25%. Can only be used every 120 seconds.	Super energy (3)	1	Papaya fruit	1											Only the 3-dose Super energy potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Super antifire (3)	85	Provides immunity to Dragonfire for 6 minutes even if anti-dragon shield is not equipped.	Antifire (3)	1	Phoenix feather	1											Only the 3-dose antifire potion can be used as the primary ingredient. Super antifire (3) is the primary ingredient for Extended super antifire potions.
Super antifire (4)	85	Provides immunity to Dragonfire for 6 minutes even if anti-dragon shield is not equipped.	Antifire (3)	1	Phoenix feather	1											Only the 3-dose antifire potion can be used as the primary ingredient. Super antifire (3) is the primary ingredient for Extended super antifire potions.
Super adrenaline potion (3)	87	Recovers Adrenaline bar by 30%. Can only be used every 120 seconds.	Adrenaline potion (3)	1	Adrenaline crystal	1											Only the 3-dose adrenaline potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Super adrenaline potion (4)	87	Recovers Adrenaline bar by 30%. Can only be used every 120 seconds.	Adrenaline potion (3)	1	Adrenaline crystal	1											Only the 3-dose adrenaline potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Super invention	87	Temporarily boosts Invention by 5.	Invention potion	1	Spider fangs	1											Only the 3-dose Invention potion can be used as the primary ingredient.
Extreme attack (3)	88	Temporarily boosts Attack by 15% plus 3.	Super attack (3)	1	Clean avantoe	1											Only the 3-dose Super attack potion can be used as the primary ingredient.
Extreme attack (4)	88	Temporarily boosts Attack by 15% plus 3.	Super attack (3)	1	Clean avantoe	1											Only the 3-dose Super attack potion can be used as the primary ingredient.
Summoning renewal	88	Replenishes Summoning points and special move points over a 6 minute period.	Spirit weed potion (unf)	1	Tombshroom	1											Must first be learned using the Summoning renewal recipe.
Extreme strength (3)	89	Temporarily boosts Strength by 15% plus 3.	Super strength (3)	1	Clean dwarf weed	1											Only the 3-dose Super strength potion can be used as the primary ingredient.
Extreme strength (4)	89	Temporarily boosts Strength by 15% plus 3.	Super strength (3)	1	Clean dwarf weed	1											Only the 3-dose Super strength potion can be used as the primary ingredient.
Extreme divination	89	Temporarily boosts Divination by 15% plus 3.	Super divination (3)	1	Yak tuft	1											Only the 3-dose Super divination potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Extreme defence (3)	90	Temporarily boosts Defence by 15% plus 3.	Super defence (3)	1	Clean lantadyme	1											Only the 3-dose Super defence potion can be used as the primary ingredient.
Extreme defence (4)	90	Temporarily boosts Defence by 15% plus 3.	Super defence (3)	1	Clean lantadyme	1											Only the 3-dose Super defence potion can be used as the primary ingredient.
Extended super antifire	90	Provides immunity to Dragonfire for 12 minutes even if anti-dragon shield is not equipped.	Super antifire (3)	1	Clean arbuck	1											Only the 3-dose Super antifire potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Extreme magic (3)	91	Temporarily boosts Magic by 15% plus 3.	Super magic (3)	1	Ground mud runes	1											Only the 3-dose Super magic potion can be used as the primary ingredient.
Extreme magic (4)	91	Temporarily boosts Magic by 15% plus 3.	Super magic (3)	1	Ground mud runes	1											Only the 3-dose Super magic potion can be used as the primary ingredient.
Extreme runecrafting	91	Temporarily boosts Runecrafting by 15% plus 3.	Super runecrafting (3)	1	Spider venom	1											Only the 3-dose Super runecrafting potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Extreme ranging (3)	92	Temporarily boosts Ranged by 15% plus 3.	Super ranging (3)	1	Grenwall spikes	5											Only the 3-dose super ranging potion can be used as the primary ingredient. Five grenwall spikes are needed per super ranging potion to make one extreme ranging.
Extreme ranging (4)	92	Temporarily boosts Ranged by 15% plus 3.	Super ranging (3)	1	Grenwall spikes	5											Only the 3-dose super ranging potion can be used as the primary ingredient. Five grenwall spikes are needed per super ranging potion to make one extreme ranging.
Super Saradomin brew	93	Restores 1300 life points. Temporarily boosts Defence by 6% plus 1, and drains Attack, Strength, Magic and Ranged by 4% plus 1.	Saradomin brew (3)	1	Wine of Saradomin	1											Only the 3-dose Saradomin brew can be used as the primary ingredient.
Super Zamorak brew	93	Temporarily boosts Attack, Strength, Magic and Ranged by 12% plus 2. Drains Defence by 10% and removes ?% of life points.	Zamorak brew (3)	1	Wine of Zamorak	1											Only the 3-dose Zamorak brew can be used as the primary ingredient.
Super Guthix rest	93	Cures poison. Restores 650 life points. Boosts your maximum life points by 650.	Guthix rest	1	Wine of Guthix	1											Only the 3-dose Guthix rest can be used as the primary ingredient.
Extreme necromancy (3)	93	Temporarily boosts Necromancy by 15% plus 3.	Super necromancy (3)	1	Ground miasma rune	1											Only the 3-dose Super necromancy potion can be used as the primary ingredient.
Extreme necromancy (4)	93	Temporarily boosts Necromancy by 15% plus 3.	Super necromancy (3)	1	Ground miasma rune	1											Only the 3-dose Super necromancy potion can be used as the primary ingredient.
Super prayer (3)	94	Restores Prayer points by 35% plus 70.	Prayer potion (3)	1	Wyvern bonemeal	1											Only the 3-dose Prayer potion can be used as the primary ingredient.
Super prayer (4)	94	Restores Prayer points by 35% plus 70.	Prayer potion (3)	1	Wyvern bonemeal	1											Only the 3-dose Prayer potion can be used as the primary ingredient.
Prayer renewal (3)	94	Restores 4 times the player's Prayer level plus 120, resulting in a total restoration of 124-516 Prayer points, over a period of 5 minutes.	Fellstalk potion (unf)	1	Morchella mushroom	1											
Prayer renewal (4)	94	Restores 4 times the player's Prayer level plus 120, resulting in a total restoration of 124-516 Prayer points, over a period of 5 minutes.	Fellstalk potion (unf)	1	Morchella mushroom	1											
Extreme invention	95	Temporarily boosts Invention by 15% plus 3.	Super invention	1	Mycelial webbing	1											Only the 3-dose Super invention potion can be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Harvest potion	95	Allows players to harvest mutated 'mega' versions of allotment produce for 6 minutes.	Primal extract	1	Clean arbuck	1	Watermelon	1									Produce harvested under the effect of the potion provide less yield. The mutated produce is used to make primal starters, primal main courses, and primal desserts - the components of the primal feast.
Overload (3)	96	Boosts Attack, Strength, Defence, Ranged, Magic, and Necromancy by 15% of the stat level + 3 for 6 minutes. The boost is reapplied every 15 seconds.	Extreme attack (3)	1	Extreme strength (3)	1	Extreme defence (3)	1	Extreme magic (3)	1	Extreme ranging (3)	1	Extreme necromancy (3)	1	Clean torstol	1	All six of the required potions must be of the 3-dose variant to be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Overload (4)	96	Boosts Attack, Strength, Defence, Ranged, Magic, and Necromancy by 15% of the stat level + 3 for 6 minutes. The boost is reapplied every 15 seconds.	Extreme attack (3)	1	Extreme strength (3)	1	Extreme defence (3)	1	Extreme magic (3)	1	Extreme ranging (3)	1	Extreme necromancy (3)	1	Clean torstol	1	All six of the required potions must be of the 3-dose variant to be used as the primary ingredient. This potion cannot be assisted, as it is untradeable.
Weapon poison+++ (3)	100	Makes the player poisonous for 12 minutes.	Weapon poison++ (3)	1	Poison slime	1	Primal extract	1									
Charming potion	102	Increases the base number of charms dropped by a monster by 1 for 6 minutes.	Primal extract	1	Charms	1	Spark chitin	1									Requires 4 of each charm.
Extreme cooking potion	104	Temporarily boosts cooking by 17.	Super cooking potion	1	Primal extract	1	Beak snot	1									
Adrenaline renewal potion	115	Increases adrenaline by 4% per tick for 10 ticks, for a total of 40% adrenaline.	Primal extract	1	Super adrenaline potion (4)	1	Bottled dinosaur roar	1	Clean arbuck	1							Drinking this triggers the adrenaline potion cooldown. At levels 117 and 119 the recipe is improved. Can also be made starting from an Enhanced replenishment potion.
Spirit attraction potion	116	Automatically collects various spirits spawned while skilling for a period of 6 minutes.	Primal extract	1	Enhanced luck potion	1	Timeworn tincture	1									Must first be learned using the spirit attraction recipe.
Extreme prayer	117	Restores up to 70 + 50% prayer points per dose.	Super prayer (3)	1	Primal extract	1	Spark chitin	1									`;

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

      // Extract ingredients
      for (let i = 3; i < parts.length; i += 2) {
          if (parts[i] && parts[i] !== "Notes") {
              ingredients.push(parts[i]);
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

console.log(JSON.stringify(potionsData, null, 2));