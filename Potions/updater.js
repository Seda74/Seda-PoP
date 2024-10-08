// Raw data from Google Sheets (replace this with the full data when available)
const rawData = `Energy potion (3)	26	Restores 20% run energy.	Harralander potion (unf)	1	Chocolate dust	1											While this is non-members, it cannot be mixed by F2P.
Energy potion (4)	26	Restores 20% run energy.	Harralander potion (unf)	1	Chocolate dust	1											While this is non-members, it cannot be mixed by F2P.
Marrentill tar	31	Ammo for Orange salamander.	Marrentill potion (unf)	1	Swamp tar	1											
Super fishing explosive	31	Can be used as a Fishing explosive.	Guam potion (unf)	1	Rubium	1											Super fishing explosives can only be made after Kennith's concerns. Rubium is non-tradeable.
Agility potion	34	Temporarily boosts Agility by 3.	Toadflax potion (unf)	1	Toad's legs	1											
Combat potion	36	Effect of both Attack potion and Strength potion.	Harralander potion (unf)	1	Goat horn dust	1											
Goblin potion	37	The potion transforms the player into a goblin during the Land of the Goblins quest.	Toadflax potion (unf)	1	Pharmakos berries	1											This potion will wear off if the player wears something that is not goblin-related, if the player attacks something, or if the player approaches direct sunlight. Pharmakos berries are obtained by talking to the makeover mage, after the quest. They are free.
Prayer potion (3)	38	Restores 2.5 times the player's Prayer level plus 70, resulting in a total restoration of 72-317 Prayer points.	Ranarr potion (unf)	1	Snape grass	1											While this is non-members, it cannot be mixed by F2P.Effect increased by holy wrench. A lifeline when fighting TzTok-Jad. Used often in Barrows.
Prayer potion (4)	38	Restores 2.5 times the player's Prayer level plus 70, resulting in a total restoration of 72-317 Prayer points.	Ranarr potion (unf)	1	Snape grass	1											While this is non-members, it cannot be mixed by F2P.Effect increased by holy wrench. A lifeline when fighting TzTok-Jad. Used often in Barrows.
Tarromin tar	39	Ammo for Red salamander.	Tarromin potion (unf)	1	Swamp tar	1											
Summoning potion (3)	40	Restores 25% of player's Summoning level plus 7.	Spirit weed potion (unf)	1	Cockatrice egg	1											
Summoning potion (4)	40	Restores 25% of player's Summoning level plus 7.	Spirit weed potion (unf)	1	Cockatrice egg	1											
Crafting potion	42	Temporarily boosts Crafting by 3.	Wergali potion (unf)	1	Frog spawn	1											
Divination potion	43	Temporarily boosts Divination by 3.	Spirit weed potion (unf)	1	Rabbit foot	1											Divination potion (3) is the primary ingredient for Super divination potions.
Harralander tar	44	Ammo for Black salamander.	Harralander potion (unf)	1	Swamp tar	1											
Super attack (3)	45	Temporarily boosts Attack by 12% plus 2.	Irit potion (unf)	1	Eye of newt	1											Super Attack (3) is the primary ingredient for Extreme attack potions.
Super attack (4)	45	Temporarily boosts Attack by 12% plus 2.	Irit potion (unf)	1	Eye of newt	1											Super Attack (3) is the primary ingredient for Extreme attack potions.
Vial of stench	46	After activation, allows players to sell goods stolen from stalls to the stall owners immediately.	Irit potion (unf)	1	Chopped onion	1											Talk to Chief Thief Robin in the Thieves' Guild to activate it (after A Guild of Our Own). It only needs to be in inventory to work. The potion cannot be assisted, as it is untradeable.
Super antipoison (3)	48	Cures poison and provides immunity for 6 minutes.	Irit potion (unf)	1	Unicorn horn dust	1											
Super antipoison (4)	48	Cures poison and provides immunity for 6 minutes.	Irit potion (unf)	1	Unicorn horn dust	1											
Woodcutting potion	49	Temporarily boosts Woodcutting by 3.	Avantoe potion (unf)	1	Timber fungus	1											
Fishing potion	50	Temporarily boosts Fishing by 3.	Avantoe potion (unf)	1	Snape grass	1											Can be used to get into the Fishing Guild if you are a few levels short.
Mining potion	51	Temporarily boosts Mining by 3.	Avantoe potion (unf)	1	Calcified fungus	1											
Super energy (3)	52	Restores 40% run energy.	Avantoe potion (unf)	1	Mort myre fungus	1											Super energy (3) is the primary ingredient for Stamina potions.
Super energy (4)	52	Restores 40% run energy.	Avantoe potion (unf)	1	Mort myre fungus	1											Super energy (3) is the primary ingredient for Stamina potions.
Hunter potion	53	Temporarily boosts Hunter by 3.	Avantoe potion (unf)	1	Kebbit teeth dust	1											Kebbit teeth are found from deadfalling Sabre-Toothed Kebbit.Hunter potion (3) is the primary ingredient for Super hunter potions.
Runecrafting potion	54	Temporarily boosts Runecrafting by 3.	Wergali potion (unf)	1	Season sheep wool (any)	1											Runecrafting potion (3) is the primary ingredient for Super runecrafting potions.
Super strength (3)	55	Temporarily boosts Strength level by 12% plus 2.	Kwuarm potion (unf)	1	Limpwurt root	1											Super Strength (3) is the primary ingredient for Extreme strength potions.
Super strength (4)	55	Temporarily boosts Strength level by 12% plus 2.	Kwuarm potion (unf)	1	Limpwurt root	1											Super Strength (3) is the primary ingredient for Extreme strength potions.
Cooking potion	55	Temporarily boosts cooking level by 3.	Harralander potion (unf)	1	Swordfish	1											Cooking potion (3) is the primary ingredient for Super cooking potions.
Magic essence potion	57	Temporarily boosts Magic by 3 to 8.	Star flower	1	Gorak claw powder	1											Made during A Fairy Tale II - Cure a Queen quest. Components are only available via the fairy rings. The potion cannot be assisted as it is untradeable; its components are also untradeable.
Luck potion	57	Gives same effect as ring of Wealth.	Bloodweed potion (unf)	1	Crushed dragonstone	1											This potion is a single dose potion, and therefore cannot be added to a potion flask.
Fletching potion	58	Temporarily boosts Fletching by 3.	Wergali potion (unf)	1	Wimpy feather	1											
Weapon poison	60	Makes the player poisonous for 1 minute.	Kwuarm potion (unf)	1	Dragon scale dust	1											
Super restore (3)	63	Restores all stats by 25% plus 8. Prayer points are restored by 25% of the maximum plus 80.	Snapdragon potion (unf)	1	Red spiders' eggs	1											
Super restore (4)	63	Restores all stats by 25% plus 8. Prayer points are restored by 25% of the maximum plus 80.	Snapdragon potion (unf)	1	Red spiders' eggs	1											
Super hunter	64	Temporarily boosts Hunter by 5.	Hunter potion	1	Rabbit teeth	1											Only the 3-dose Hunter potion can be used as the primary ingredient.
Camouflage potion	65	Hides the player's minimap dot.	Bloodweed potion (unf)	1	Black salamander	1											This potion cannot be assisted, as it is untradeable.
Super defence (3)	66	Temporarily boosts Defence by 12% plus 2.	Cadantine potion (unf)	1	White berries	1											Super Defence (3) is the primary ingredient for Extreme defence potions.
Super defence (4)	66	Temporarily boosts Defence by 12% plus 2.	Cadantine potion (unf)	1	White berries	1											Super Defence (3) is the primary ingredient for Extreme defence potions.
Antipoison+	68	Cures and gives immunity to poison for 9 minutes.	Toadflax potion (unf)	1	Yew roots	1											Requires coconut milk in place of water.
Antifire (3)	69	Provides resistance to Dragonfire for 6 minutes.	Lantadyme potion (unf)	1	Dragon scale dust	1											Can be used with an Anti-dragon shield or Dragonfire shield to completely prevent dragonfire damage. Each dose lasts for 6 minutes (you will get a 15 second warning before it runs out).Antifire (3) is the primary ingredient for Super antifire potions.
Antifire (4)	69	Provides resistance to Dragonfire for 6 minutes.	Lantadyme potion (unf)	1	Dragon scale dust	1											Can be used with an Anti-dragon shield or Dragonfire shield to completely prevent dragonfire damage. Each dose lasts for 6 minutes (you will get a 15 second warning before it runs out).Antifire (3) is the primary ingredient for Super antifire potions.
Super divination	70	Temporarily boosts Divination by 5.	Divination potion	1	Zygomite fruit	1											Only the 3-dose Divination potion can be used as the primary ingredient.
Super woodcutting potion	71	Temporarily boosts Woodcutting by 5.	Woodcutting potion (3)	1	Enriched timber fungus	1											
Super ranging (3)	72	Temporarily boosts Ranged by 12% plus 2.	Dwarf weed potion (unf)	1	Wine of Zamorak	1											Super Ranging potion (3) is the primary ingredient for Extreme ranging potions.
Super ranging (4)	72	Temporarily boosts Ranged by 12% plus 2.	Dwarf weed potion (unf)	1	Wine of Zamorak	1											Super Ranging potion (3) is the primary ingredient for Extreme ranging potions.
Weapon poison+	73	Makes the player poisonous for 5 minutes.	Cactus spine	1	Red spiders' eggs	1											Requires coconut milk in place of water.
Super mining potion	74	Temporarily boosts Mining by 5.	Mining potion (3)	1	Enriched calcified fungus	1											
Super runecrafting (3)	75	Temporarily boosts Runecrafting by 5.	Runecrafting potion	1	Yak milk	1											Only the 3-dose Runecrafting potion can be used as the primary ingredient.
Super runecrafting (4)	75	Temporarily boosts Runecrafting by 5.	Runecrafting potion	1	Yak milk	1											Only the 3-dose Runecrafting potion can be used as the primary ingredient.
Super fishing potion	75	Temporarily boosts Fishing by 5.	Fishing potion (3)	1	Enriched fungal algae	1											
Super magic (3)	76	Temporarily boosts Magic by 12% plus 2.	Lantadyme potion (unf)	1	Potato cactus	1											Super Magic potion (3) is the primary ingredient for Extreme magic potions.
Super magic (4)	76	Temporarily boosts Magic by 12% plus 2.	Lantadyme potion (unf)	1	Potato cactus	1											Super Magic potion (3) is the primary ingredient for Extreme magic potions.`;

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