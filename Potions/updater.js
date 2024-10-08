// Raw data from Google Sheets (replace this with the full data when available)
const rawData = `Poison bomb 	99	Creates a 3x3 area for 6 seconds that poisons targets stood in it.	Primal extract	1	Clean irit	1	Poison slime X2	2	Weapon poison++ (4)	1	Bomb Vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Poison bomb Improved+1	101	Creates a 3x3 area for 6 seconds that poisons targets stood in it.	Primal extract	1	Clean irit	1	Poison slime X2	2	Weapon poison++ (4)	1	Bomb Vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Poison bomb Improved+2	103	Creates a 3x3 area for 6 seconds that poisons targets stood in it.	Primal extract	1	Clean irit	1	Poison slime	1	Weapon poison++ (3)	1	Bomb Vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Sticky bomb	101	Creates a 3x3 area for 6 seconds that binds targets stood in it.	Primal extract	1	Clean cadantine	1	Dinosaur claws X2	2	Beak snot X2	2	Bomb Vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Sticky bomb Improved +1	103	Creates a 3x3 area for 6 seconds that binds targets stood in it.	Primal extract	1	Clean cadantine	1	Dinosaur claws X2	2	Beak snot X2	2	Bomb Vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Sticky bomb Improved +2	105	Creates a 3x3 area for 6 seconds that binds targets stood in it.	Primal extract	1	Clean cadantine	1	Dinosaur claws	1	Beak snot	1	Bomb Vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Vulnerability bomb	103	Creates a 3x3 area for 1.8 seconds that applies the Vulnerability effect to targets stood in it.	Primal extract	1	Clean dwarf weed	1	Bottled dinosaur roar X2	2	Soul rune X5	5	Chaos rune X5	5	Bomb Vial	1			Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Vulnerability bomb Improved +1	105	Creates a 3x3 area for 1.8 seconds that applies the Vulnerability effect to targets stood in it.	Primal extract	1	Clean dwarf weed	1	Bottled dinosaur roar X2	2	Soul rune X5	5	Chaos rune X5	5	Bomb Vial	1			Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Vulnerability bomb Improved +2	107	Creates a 3x3 area for 1.8 seconds that applies the Vulnerability effect to targets stood in it.	Primal extract	1	Clean dwarf weed	1	Bottled dinosaur roar	1	Soul rune X3	3	Chaos rune X3	3	Bomb Vial	1			Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
																	
Powerburst of opportunity	103	Doubles the effect of Rockertunities and Archaeology time sprites for 15 seconds.	Primal extract	1	Dinosaur claws X2	2	Phasmatite	1	Third Age iron	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of opportunity Improved +1	105	Doubles the effect of Rockertunities and Archaeology time sprites for 15 seconds.	Primal extract	1	Dinosaur claws X2	2	Phasmatite	1	Third Age iron	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of opportunity Improved +2	107	Doubles the effect of Rockertunities and Archaeology time sprites for 15 seconds.	Primal extract	1	Dinosaur claws	1	Phasmatite	1	Third Age iron	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of vitality	105	Doubles maximum and current life points for six seconds.	Primal extract	1	Poison slime X2	2	Saradomin brew (4)	1	Rocktail	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of vitality Improved +1	107	Doubles maximum and current life points for six seconds.	Primal extract	1	Poison slime X2	2	Saradomin brew (4)	1	Rocktail	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of vitality Improved +2	109	Doubles maximum and current life points for six seconds.	Primal extract	1	Poison slime	1	Saradomin brew (3)	1	Rocktail	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of masterstroke	108	For the next four hammer swings within 30 seconds, Smithing progress is multiplied by ten.	Primal extract	1	Runite stone spirit	3	Necrite stone spirit	3	Bottled dinosaur roar	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of masterstroke Improved +1	110	For the next four hammer swings within 30 seconds, Smithing progress is multiplied by ten.	Primal extract	1	Runite stone spirit	3	Necrite stone spirit	3	Bottled dinosaur roar	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of masterstroke Improved +2	112	For the next four hammer swings within 30 seconds, Smithing progress is multiplied by ten.	Primal extract	1	Runite stone spirit	2	Necrite stone spirit	2	Bottled dinosaur roar	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of sorcery	109	For the next runes crafted within 10 seconds, the 'runes per essence' multiplier is doubled.	Primal extract	1	Super runecrafting (4)	1	Blood rune	5	Beak snot	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of sorcery Improved +1	111	For the next runes crafted within 10 seconds, the 'runes per essence' multiplier is doubled.	Primal extract	1	Super runecrafting (4)	1	Blood rune	5	Beak snot	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of sorcery Improved +2	113	For the next runes crafted within 10 seconds, the 'runes per essence' multiplier is doubled.	Primal extract	1	Super runecrafting (3)	1	Blood rune	3	Beak snot	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of acceleration	111	The cooldown of Surge and Bladed Dive is instantly reset and is 1.2 seconds for the next six seconds.	Primal extract	1	Stamina potion (4)	1	Energy potion (4)	1	Spark chitin	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of acceleration Improved +1	113	The cooldown of Surge and Bladed Dive is instantly reset and is 1.2 seconds for the next six seconds.	Primal extract	1	Stamina potion (4)	1	Energy potion (4)	1	Spark chitin	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of acceleration Improved +2	115	The cooldown of Surge and Bladed Dive is instantly reset and is 1.2 seconds for the next six seconds.	Primal extract	1	Stamina potion (3)	1	Energy potion (3)	1	Spark chitin	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of feats	114	The familiar's special move costs no special move points for ten seconds.	Primal extract	1	Summoning potion (4)	1	Clean snapdragon	1	Bottled dinosaur roar	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of feats Improved +1	116	The familiar's special move costs no special move points for ten seconds.	Primal extract	1	Summoning potion (4)	1	Clean snapdragon	1	Bottled dinosaur roar	2	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Powerburst of feats Improved +2	118	The familiar's special move costs no special move points for ten seconds.	Primal extract	1	Summoning potion (3)	1	Clean snapdragon	1	Bottled dinosaur roar	1	powerburst vial	1					Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
																	
Juju hunter potion	54	Necessary to attract certain Jadinkos (pour on vine flower patch)	Erzille	1	Corrupt vine	1	juju vial of water	1									
Scentless potion	59	When you drink all your traps will be considered smoked	Argway	1	Shadow vine	1	juju vial of water	1									
Juju farming potion	64	33% chance of picking two herbs from a herb patch (chance on a per-pick basis)	Ugune	1	Marble vine	1	juju vial of water	1									
Juju cooking potion	67	Use on a baked potato to make a strange potato then add tuna and corn to make juju gumbo	Shengo	1	Plant teeth	1	juju vial of water	1									
Juju fishing potion	70	33% chance of catching a raw baron shark when fishing sharks, per catch	Shengo	1	Aquatic vine	1	juju vial of water	1									
Juju woodcutting potion	71	10% chance of finding a wood spirit when woodcutting, per log	Samaden	1	Oily vine	1	juju vial of water	1									
Juju mining potion	74	10% chance of finding a stone spirit when mining, per ore	Samaden	1	Draconic vine	1	juju vial of water	1									
Saradomin's blessing	75	Provides a +10% bonus to Farming experience when farming in the Herblore Habitat	Samaden	1	Saradomin vine	1	juju vial of water	1									
Guthix's gift	75	Provides a +10% bonus to Herblore XP when making Juju potions (not necessarily in the Habitat)	Samaden	1	Guthix vine	1	juju vial of water	1									
Zamorak's favour	75	Provides a +10% bonus to Hunter XP when hunting jadinkos in the Herblore Habitat	Samaden	1	Zamorak vine	1	juju vial of water	1									
																	
Perfect woodcutting	75	5% chance of receiving double logs, or double cuts from ivy and crystal trees	Juju woodcutting potion	1	Harmony moss	1											
Perfect farming	77	"25% chance of double harmony moss from a harmony pillar
5% chance of receiving harmony moss when fully harvesting or checking another farming patch"	Juju farming potion	1	Harmony moss	1											
Perfect mining	80	"10% chance to receive a bottled stone spirit of the type of ore mined
Your stamina will immediately refill each time a stone spirit is consumed"	Juju mining potion	1	Harmony moss	1											
Perfect smithing	82	5% chance for double progress when smithing	Juju hunter potion	1	Harmony moss	1											
Perfect agility	85	Increases the chances of the window shortcut opening and a light creature appearing on the cathedral roof	Scentless potion	1	Harmony moss	1											
Perfect prayer	87	"5% increase to XP gained from PoH chapel altars
5% increase to XP gained from the Chaos altar at the Chaos Temple
5% increase to XP when cleansing the corrupted Seren stone"	Saradomin's blessing	1	Harmony moss	1											
Perfect herblore	90	"10% additional chance of finding a recipe while Dungeoneering
5% additional XP when making combination potions"	Guthix's gift	1	Harmony moss	1											
Perfect dungeoneering	91	"5% addition to damage dealt when in a dungeon
25% increased chance of finding journals in Dungeoneering
Dungeoneering skill doors require 2 levels less
(This potion lasts for 4 hours per dose)."	Zamorak's favour	1	Harmony moss	1											
Perfect fishing	92	"5% increase to fishing catch chance
33% chance of catching a raw baron shark when fishing sharks"	Juju fishing potion	1	Harmony dust	10											
Perfect plus	99	Provides the effects of all perfect juju potions for four hours per dose	Overload (4)	1	Crystal flask	1	Crystal tree blossom	1	Harmony moss	1							
																	
Super melee potion (6)	81	Temporary boost to Attack, Strength and Defence levels of 12%+2.	Super defence (4)	1	Super strength (4)	1	Super attack (4)	1	Crystal flask	1							
Super warmaster's potion (6)	85	Temporary boost to Magic, Ranged, Attack, Strength and Defence levels of 12%+2.	Super ranging (4)	1	Super magic (4)	1	Super defence (4)	1	Super strength (4)		Super attack (4)						
Super prayer renewal potion (6)	96	Restores 25%+70 of total Prayer points as well as 595 Prayer points over the course of 6 minutes.	Prayer renewal (4)	1	Prayer potion (4)	1	Crystal flask	1									
Grand attack potion (6)	78	Temporary Attack level boost of 14%+2.	Super attack (4)	1	Attack potion (4)	1	Crystal flask	1									
Grand strength potion (6)	75	Temporary Strength level boost of 14%+2.	Super strength (4)	1	Strength potion (4)	1	Crystal flask	1									
Grand defence potion (6)	79	Temporary Defence level boost of 14%+2.	Super defence (4)	1	Defence potion (4)	1	Crystal flask	1									
Grand ranging potion (6)	76	Temporary Ranged level boost of 14%+2.	Super ranging (4)	1	Ranging potion (4)	1	Crystal flask	1									
Grand magic potion (6)	77	Temporary Magic level boost of 14%+2.	Super magic (4)	1	Magic potion (4)	1	Crystal flask	1									
Extreme brawler's potion (6)	91	Temporary boost to Attack, Strength and Defence levels of 15%+3.	Extreme attack (4)	1	Extreme defence (4)	1	Extreme strength (4)	1									
Extreme sharpshooter's potion (6)	92	Temporary boost to Ranged and Defence levels of 15%+3.	Extreme ranging (4)	1	Extreme defence (4)	1	Crystal flask	1									
Extreme battlemage's potion (6)	91	Temporary boost to Magic and Defence levels of 15%+3.	Extreme magic (4)	1	Extreme defence (4)	1	Crystal flask	1									
Extreme warmaster's potion (6)	93	Temporary boost to Attack, Strength, Defence, Ranged, and Magic levels of 15%+3.	Extreme attack (4)	1	Extreme defence (4)	1	Extreme strength (4)	1	Extreme ranging (4)	1	Extreme magic (4)	1					
Holy overload potion (6)	97	Gives the effect of the overload potion for 6 minutes, with the buffs renewing every 15 seconds. Restores 545 Prayer points over 6 minutes.	Overload (4)	1	Prayer renewal (4)	1	Crystal flask	1									
Searing overload potion (6)	97	Gives the effect of the overload potion for 6 minutes, with the buffs renewing every 15 seconds. Gives 6 minutes of complete dragonfire protection.	Overload (4)	1	Super antifire (4)	1	Crystal flask	1									
Overload salve (6)	97	Temporary boost to Attack, Strength, Ranged, Magic, Defence, and Necromancy level of 15%+3. Restores 555 Prayer points and protects from dragonfire, wyvern breath and poison over the course of 6 minutes.	Overload (4)	1	Super antifire (4)	1	Antifire (4)	1	Prayer renewal (4)	1	Prayer potion (4)	1	Super antipoison (4)	1	Crystal flask	1	
Aggroverload (6)	96	Gives the effect of the overload potion for 6 minutes, with the buffs renewing every 15 seconds. All enemies in an 8 tile radius will become aggressive.	Overload (4)	1	Aggression potion (4)	1	Clean arbuck	1	Crystal flask	1							
Holy aggroverload (6)	98	Gives the effect of the overload potion for 6 minutes, with the buffs renewing every 15 seconds. Restores 545 Prayer points over 6 minutes. All enemies in an 8 tile radius will become aggressive.	Overload (4)	1	Aggression potion (4)	1	Prayer renewal (4)	1	Spider venom	1							
Supreme attack potion (6)	93	Temporary boost to Attack level of 16%+4.	Extreme attack (4)	1	Super attack (4)	1	Crystal flask	1									
Supreme strength potion (6)	93	Temporary boost to Strength level of 16%+4.	Extreme strength (4)	1	Super strength (4)	1	Crystal flask	1									
Supreme defence potion (6)	93	Temporary boost to Defence level of 16%+4.	Extreme defence (4)	1	Super defence (4)	1	Crystal flask	1									
Supreme ranging potion (6)	93	Temporary boost to Ranged level of 16%+4.	Extreme ranging (4)	1	Super ranging potion (4)	1	Crystal flask	1									
Supreme magic potion (6)	93	Temporary boost to Magic level of 16%+4.	Extreme magic (4)	1	Super magic potion (4)	1	Crystal flask	1									
Supreme overload potion (6)	98	Temporary boost to Attack, Strength, Ranged, Magic, Defence, and Necromancy level of 16%+4. The boost is reapplied every 15 seconds.	Overload (4)	1	Super attack (4)	1	Super strength (4)	1	Super defence (4)	1	Super ranging (4)	1	Super magic (4)	1	Super necromancy (4)	1	Crystal flask also needed
Supreme overload salve (6)	99	Temporary boost to Attack, Strength, Ranged, Magic, Defence, and Necromancy level of 16%+4. The boost is reapplied every 15 seconds. Restores 555 Prayer points and protects from dragonfire, and wyvern breath over the course of 6 minutes and reduces poison damage for 346 seconds.	Supreme overload potion (6)	1	Super antifire (4)	1	Antifire (4)	1	Prayer renewal (4)	1	Prayer potion (4)	1	Super antipoison (4)	1	Crystal flask	1	
Elder overload potion (6)	106	Boosts Attack, Strength, Ranged, Magic, Defence, and Necromancy by 17% of the stat level + 5 for 6 minutes. The boost is reapplied every 15 seconds.	Supreme overload potion (6)	1	Primal extract	1	Clean fellstalk	1	Crystal flask	1							Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Elder overload salve #1 (6)	107	Boosts Attack, Strength, Ranged, Magic, Defence, and Necromancy by 17% of the stat level + 5 for 6 minutes. The boost is reapplied every 15 seconds. At 99 prayer it restores 317 prayer points instantly and 595 prayer points over time. It protects from dragonfire and wyvern breath. It also reduces poison damage for 346 seconds.	Elder overload potion (6)	1	Prayer renewal (4)	1	Prayer potion (4)	1	Super antipoison (4)	1	Antifire (4)	1	Super antifire (4)	1	Crystal flask	1	
Elder overload salve #2 (6)	107	Boosts Attack, Strength, Ranged, Magic, Defence, and Necromancy by 17% of the stat level + 5 for 6 minutes. The boost is reapplied every 15 seconds. At 99 prayer it restores 317 prayer points instantly and 595 prayer points over time. It protects from dragonfire and wyvern breath. It also reduces poison damage for 346 seconds.	Supreme overload salve (6)	1	Primal extract	1	Clean fellstalk	1	Crystal flask	1							Primal extract can be made by combining a primal fruit pulp with one, two or three empty vials 90 Herblore: 1 primal extract per primal fruit pulp. 102 Herblore: 2 primal extract per primal fruit pulp. 112 Herblore: 3 primal extract per primal fruit pulp.
Replenishment potion (6)	87	Regain 25% adrenaline, restores all skills by 25%+8, and restores 25%+80 Prayer points.	Adrenaline potion (4)	1	Super restore (4)	1	Crystal flask	1									
Enhanced replenishment potion (6)	90	Regain 30% adrenaline, restores all skills and Summoning points by 25%+8, and restores 25%+80 Prayer points.	Replenishment potion (6)	1	Adrenaline crystal	1	Crystal flask	1									
Wyrmfire potion (6)	89	Complete protection from dragon and wyvern fire for 6 minutes.	Super antifire (4)	1	Antifire (4)	1	Crystal flask	1									
Brightfire potion (6)	94	Restores 545 Prayer points over time and completely protects against dragon fire for 6 minutes.	Prayer renewal (4)	1	Super antifire (4)	1	Crystal flask	1									
Perfect plus potion (6)	99	Gives the effect of all the perfect juju potions over a period of 4 hours. Does not affect combat stats.	Overload (3)	1	Harmony moss	1	Crystal tree blossom	1	Crystal flask	1							
Spiritual prayer potion (6)	110	Combines the effects of a prayer potion and a summoning potion.	Primal extract	1	Prayer potion (4)	1	Summoning potion (4)	1	Crystal flask	1							`;

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