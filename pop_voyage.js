function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  function getIntOrZero(input) {
      i = parseInt(input, 10);
      if (isNumber(i)) {
          return i;
      }
      return 0;
  }
  
  function getIntOrOne(input) {
      i = parseInt(input, 10);
      if (isNumber(i)) {
          return i;
      }
      return 1;
  }
  
  function calculate()
  {
      closeTraitPopupsCaptains();
      closeTraitPopupsCrew();
  
      if ($("[id^=cap].use:checked").size() < 1) {
          alert('No captains available. Check the "Use" box for captains you would like to use.');
          return;
      }
      if ($("[id^=crew].use:checked").size() < 5) {
          alert('Not enough crew members available. Check the "Use" box for at least 5 crew members you would like to use.');
          return;
      }
  
      var captainForce = 0;
      var crewForceAmount = 0;
      var crewForce = new Array();
      crewForce[1] = 0;
      crewForce[2] = 0;
      crewForce[3] = 0;
      crewForce[4] = 0;
      crewForce[5] = 0;
      
      if ($("[id^=cap].force:checked").size() > 1) {
          alert('You cannot force more than one captain on a ship.');
          return;
      } else {
          $("[id^=cap].force:checked").each(function(index, value) {
              captainForce = parseInt($(this).parent().parent().parent().attr('data-captain-number'), 10);
          });
      }
      if ($("[id^=crew].force:checked").size() > 5) {
          alert('You cannot force more than five crew members on a ship.');
          return;
      } else {
          $("[id^=crew].force:checked").each(function(index, value) {
              reverseindex = 5 - index;
              crewForce[reverseindex] = parseInt($(this).parent().parent().parent().attr('data-crew-number'), 10);
              crewForceAmount++;
          });
      }
  
      var morale = getIntOrOne( $("#morale").val() );
      var combat = getIntOrOne( $("#combat").val() );
      var seafaring = getIntOrOne( $("#seafaring").val() );
  
      var ram = getRamArray();
      var deck = getDeckArray();
      var hull = getHullArray();
      
      var ramm = new Array();
      ramm[0] = 0;
      ramm[1] = 100;
      ramm[2] = 0;
      ramm[3] = 200;
      ramm[4] = 0;
      ramm[5] = 350;
      ramm[6] = 0;
      ramm[7] = 500;
      ramm[8] = 0;
      ramm[9] = 600;
      ramm[10] = 0;
      ramm[11] = 800;
      ramm[12] = 0;
      ramm[13] = 950;
      ramm[14] = 0;
      
      var ramc = new Array();
      ramc[0] = 50;
      ramc[1] = 0;
      ramc[2] = 100;
      ramc[3] = 0;
      ramc[4] = 200;
      ramc[5] = 0;
      ramc[6] = 350;
      ramc[7] = 0;
      ramc[8] = 500;
      ramc[9] = 0;
      ramc[10] = 600;
      ramc[11] = 0;
      ramc[12] = 800;
      ramc[13] = 0;
      ramc[14] = 1100;
      
      var rams = new Array();
      rams[0] = 0;
      rams[1] = 0;
      rams[2] = 0;
      rams[3] = 0;
      rams[4] = 0;
      rams[5] = 0;
      rams[6] = 0;
      rams[7] = 0;
      rams[8] = 0;
      rams[9] = 0;
      rams[10] = 0;
      rams[11] = 0;
      rams[12] = 0;
      rams[13] = 100;
      rams[14] = 0;
  
      var deckm = new Array();
      deckm[0] = 0;
      deckm[1] = 100;
      deckm[2] = 0;
      deckm[3] = 200;
      deckm[4] = 0;
      deckm[5] = 0;
      deckm[6] = 450;
      deckm[7] = 0;
      deckm[8] = 0;
      deckm[9] = 700;
      deckm[10] = 0;
      deckm[11] = 0;
      deckm[12] = 1000;
      deckm[13] = 0;
      deckm[14] = 0;
      deckm[15] = 1200;
      deckm[16] = 0;
      deckm[17] = 0;
      deckm[18] = 1350;
      deckm[19] = 0;
      deckm[20] = 0;
      deckm[21] = 0;
      deckm[22] = 2000;
      
      var deckc = new Array();
      deckc[0] = 0;
      deckc[1] = 0;
      deckc[2] = 0;
      deckc[3] = 0;
      deckc[4] = 200;
      deckc[5] = 0;
      deckc[6] = 0;
      deckc[7] = 450;
      deckc[8] = 0;
      deckc[9] = 0;
      deckc[10] = 700;
      deckc[11] = 0;
      deckc[12] = 0;
      deckc[13] = 1000;
      deckc[14] = 0;
      deckc[15] = 0;
      deckc[16] = 1200;
      deckc[17] = 0;
      deckc[18] = 0;
      deckc[19] = 1350;
      deckc[20] = 1750;
      deckc[21] = 0;
      deckc[22] = 0;
      
      var decks = new Array();
      decks[0] = 100;
      decks[1] = 0;
      decks[2] = 200;
      decks[3] = 0;
      decks[4] = 0;
      decks[5] = 450;
      decks[6] = 0;
      decks[7] = 0;
      decks[8] = 700;
      decks[9] = 0;
      decks[10] = 0;
      decks[11] = 1000;
      decks[12] = 0;
      decks[13] = 0;
      decks[14] = 1200;
      decks[15] = 0;
      decks[16] = 0;
      decks[17] = 1350;
      decks[18] = 0;
      decks[19] = 0;
      decks[20] = 0;
      decks[21] = 2000;
      decks[22] = 0;
  
      var hullm = new Array();
      hullm[0] = 50;
      hullm[1] = 100;
      hullm[2] = 100;
      hullm[3] = 200;
      hullm[4] = 450;
      hullm[5] = 300;
      hullm[6] = 300;
      hullm[7] = 400;
      hullm[8] = 400;
      hullm[9] = 1200;
      hullm[10] = 500;
      hullm[11] = 500;
      hullm[12] = 1400;
      hullm[13] = 850;
      hullm[14] = 1325;
      
      var hullc = new Array();
      hullc[0] = 50;
      hullc[1] = 150;
      hullc[2] = 100;
      hullc[3] = 450;
      hullc[4] = 200;
      hullc[5] = 300;
      hullc[6] = 700;
      hullc[7] = 400;
      hullc[8] = 900;
      hullc[9] = 500;
      hullc[10] = 500;
      hullc[11] = 1400;
      hullc[12] = 500;
      hullc[13] = 750;
      hullc[14] = 1325;
      
      var hulls = new Array();
      hulls[0] = 100;
      hulls[1] = 100;
      hulls[2] = 150;
      hulls[3] = 200;
      hulls[4] = 200;
      hulls[5] = 700;
      hulls[6] = 300;
      hulls[7] = 900;
      hulls[8] = 400;
      hulls[9] = 500;
      hulls[10] = 1200;
      hulls[11] = 500;
      hulls[12] = 500;
      hulls[13] = 1700;
      hulls[14] = 1325;
      
      var cap = new Array();
      var capf = new Array();
      var capm = new Array();
      var capc = new Array();
      var caps = new Array();
      var captm = new Array();
      var captc = new Array();
      var capts = new Array();
      for ($i=1; $i<=5; $i++) {
          cap[$i] = $("#cap"+$i+"a").is(":checked");
          capf[$i] = $("#cap"+$i+"f").is(":checked");
          capm[$i] = getIntOrZero( $("#cap"+$i+"m").val() );
          capc[$i] = getIntOrZero( $("#cap"+$i+"c").val() );
          caps[$i] = getIntOrZero( $("#cap"+$i+"s").val() );
          captm[$i] = 0;
          captc[$i] = 0;
          capts[$i] = 0;
          for (var t=1; t<=4 ; t++) {
              var selected = $("#trait"+t+"cap"+$i).prop("selectedIndex");
              captm[$i] += (selected == 1) ? 0.01 : 0;
              captc[$i] += (selected == 2) ? 0.01 : 0;
              capts[$i] += (selected == 3) ? 0.01 : 0;
              captm[$i] += (selected == 4) ? (-0.01) : 0;
              captc[$i] += (selected == 5) ? (-0.01) : 0;
              capts[$i] += (selected == 6) ? (-0.01) : 0;
          }
      }
      
      var crew = new Array();
      var crewf = new Array();
      var crewm = new Array();
      var crewc = new Array();
      var crews = new Array();
      var crewz = new Array();
      var crewtm = new Array();
      var crewtc = new Array();
      var crewts = new Array();
  
      crew[0] = true;
      crewf[0] = false;
      crewm[0] = 0;
      crewc[0] = 0;
      crews[0] = 0;
      crewz[0] = 0;
      crewtm[0] = 0;
      crewtc[0] = 0;
      crewts[0] = 0;
  
      for ($i=1; $i<=25; $i++) {
          crew[$i] = $("#crew"+$i+"a").is(":checked");
          crewf[$i] = $("#crew"+$i+"f").is(":checked");
          crewm[$i] = getIntOrZero( $("#crew"+$i+"m").val() );
          crewc[$i] = getIntOrZero( $("#crew"+$i+"c").val() );
          crews[$i] = getIntOrZero( $("#crew"+$i+"s").val() );
          crewz[$i] = $("#crew"+$i+"z").prop("selectedIndex");
          crewtm[$i] = 0;
          crewtc[$i] = 0;
          crewts[$i] = 0;
          for (var t=1; t<=4 ; t++) {
              var selected = $("#trait"+t+"crew"+$i).prop("selectedIndex");
              crewtm[$i] += (selected == 1) ? 0.01 : 0;
              crewtc[$i] += (selected == 2) ? 0.01 : 0;
              crewts[$i] += (selected == 3) ? 0.01 : 0;
              crewtm[$i] += (selected == 4) ? (-0.01) : 0;
              crewtc[$i] += (selected == 5) ? (-0.01) : 0;
              crewts[$i] += (selected == 6) ? (-0.01) : 0;
          }
      }
      
      var shipw = getIntOrZero( $("#shipwright").val() );
  
      var ramloop = 0;
      var deckaloop = 0;
      var deckbloop = 0;
      var hullloop = 0;
      var caploop = 0;
      var crew1loop = 0;
      var crew2loop = 0;
      var crew3loop = 0;
      var crew4loop = 0;
      var crew5loop = 0;
      
      var finalram = 0;
      var finaldecka = 0;
      var finaldeckb = 0;
      var finalhull = 0;
      var finalcap = 0;
      var finalcrew1 = 0;
      var finalcrew2 = 0;
      var finalcrew3 = 0;
      var finalcrew4 = 0;
      var finalcrew5 = 0;
      
      var loopmram = 0;
      var loopcram = 0;
      var loopsram = 0;
      var loopmdecka = 0;
      var loopcdecka = 0;
      var loopsdecka = 0;
      var loopmdeckb = 0;
      var loopcdeckb = 0;
      var loopsdeckb = 0;
      var loopmhull = 0;
      var loopchull = 0;
      var loopshull = 0;
      var loopmcap = 0;
      var loopccap = 0;
      var loopscap = 0;
      var loopmcrew1 = 0;
      var loopccrew1 = 0;
      var loopscrew1 = 0;
      var loopmcrew2 = 0;
      var loopccrew2 = 0;
      var loopscrew2 = 0;
      var loopmcrew3 = 0;
      var loopccrew3 = 0;
      var loopscrew3 = 0;
      var loopmcrew4 = 0;
      var loopccrew4 = 0;
      var loopscrew4 = 0;
      
      var caploopmin = 1;
      var caploopmax = 5;
      if (captainForce > 0) {
          caploopmin = captainForce;
          caploopmax = captainForce;
      }
      
      var crew1loopmin = 0;
      var crew1loopmax = 21+crewForceAmount;
      if (crewForce[1] > 0) {
          crew1loopmin = crewForce[1];
          crew1loopmax = crewForce[2];
      }
      var crew2loopmax = 22+crewForceAmount;
      if (crewForce[2] > 0) {
          crew2loopmax = crewForce[2];
      }
      var crew3loopmax = 23+crewForceAmount;
      if (crewForce[3] > 0) {
          crew3loopmax = crewForce[3];
      }
      var crew4loopmax = 24+crewForceAmount;
      if (crewForce[4] > 0) {
          crew4loopmax = crewForce[4];
      }
      var crew5loopmax = 25;
      if (crewForce[5] > 0) {
          crew5loopmax = crewForce[5];
      }
      
      var numrams = 15;
      var numdecks = 23;
      var numhulls = 15;
      
      var ramloopmin = numrams;
      var ramloopmax = 0;
      var deckloopmin = numdecks;
      var deckloopmax = 0
      var hullloopmin = numhulls;
      var hullloopmax = 0;
      
      var finalm = 0;
      var finalc = 0;
      var finals = 0;
      
      var highest = 0;
      
      //##This section of vars used for minimum crew requirement when >100% chance of success.
      var crewRating = 0; 
      var minCrewRating = 100000;
      var minfinalram = 0;
      var minfinaldecka = 0;
      var minfinaldeckb = 0;
      var minfinalhull = 0;
      var minfinalcap = 0;
      var minfinalcrew1 = 0;
      var minfinalcrew2 = 0;
      var minfinalcrew3 = 0;
      var minfinalcrew4 = 0;
      var minfinalcrew5 = 0;
      var minfinalm = 0;
      var minfinalc = 0;
      var minfinals = 0;
      var minperc = 0;
      
      //reset backgrounds
      $("[id^=labelram]").removeClass("selecteditem");
      $("[id^=labeldeck]").removeClass("selecteditem");
      $("[id^=labeldeck]").removeClass("selecteditemdouble");
      $("[id^=labelhull]").removeClass("selecteditem");
      $("[id^=cap]").removeClass("selecteditem");
      $("[id^=cap]").removeClass("forceditem");
      $("[id^=crew]").removeClass("selecteditem");
      $("[id^=crew]").removeClass("forceditem");
      
      //Bonus %
      moraleBonus = 1;
      combatBonus = 1;
      seafaringBonus = 1;
      if (shipw == 2)
      {
          moraleBonus = 1.02;
          combatBonus = 1.02;
          seafaringBonus = 1.02;
      }
      if (shipw == 3)
      {
          moraleBonus = 1.03;
          combatBonus = 1.03;
          seafaringBonus = 1.03;
      }
      if (shipw == 4)
      {
          moraleBonus = 1.03;
          combatBonus = 1.03;
          seafaringBonus = 1.05;
      }
      if (shipw == 5)
      {
          moraleBonus = 1.03;
          combatBonus = 1.05;
          seafaringBonus = 1.03;
      }
      if (shipw == 6)
      {
          moraleBonus = 1.05;
          combatBonus = 1.03;
          seafaringBonus = 1.03;
      }
      if (shipw == 7)
      {
          moraleBonus = 1.03;
          combatBonus = 1.03;
          seafaringBonus = 1.03;
      }
      if (shipw == 8)
      {
          moraleBonus = 1.08;
          combatBonus = 1.05;
          seafaringBonus = 1.05;
      }
      if (shipw == 9)
      {
          moraleBonus = 1.05;
          combatBonus = 1.08;
          seafaringBonus = 1.05;
      }
      if (shipw == 10)
      {
          moraleBonus = 1.05;
          combatBonus = 1.05;
          seafaringBonus = 1.08;
      }
      moraleBonus = moraleBonus + ($("#bonusMorale").val() / 100);
      combatBonus = combatBonus + ($("#bonusCombat").val() / 100);
      seafaringBonus = seafaringBonus + ($("#bonusSeafaring").val() / 100);
      
      //Initiate loopmin and loopmax's here.
      //ramloop
      for (i=0;i<numrams;i++)
      {
          if (ram[i] === true)
          {
              if (i<ramloopmin)
              {
                  ramloopmin = i;
              }
              if (i>ramloopmax)
              {
                  ramloopmax = i;
              }
          }
      }
      
      //deckloop
      for (i=0;i<numdecks;i++)
      {
          if (deck[i] === true)
          {
              if (i<deckloopmin)
              {
                  deckloopmin = i;
              }
              if (i>deckloopmax)
              {
                  deckloopmax = i;
              }
          }
      }
      
      //hullloop
      for (i=0;i<numhulls;i++)
      {
          if (hull[i] === true)
          {
              if (i<hullloopmin)
              {
                  hullloopmin = i;
              }
              if (i>hullloopmax)
              {
                  hullloopmax = i;
              }
          }
      }
      
      for (ramloop=ramloopmin;ramloop<=ramloopmax;ramloop++)
      {
          var loopm = 0;
          var loopc = 0;
          var loops = 0;
          
          //main logic loop starts here
          if (ram[ramloop] === true)
          {
              loopm += ramm[ramloop];
              loopc += ramc[ramloop];
              loops += rams[ramloop];
              //more IF's below THIS. NOT any other............
              
              //Deck A Calcs
              loopmram = loopm;
              loopcram = loopc;
              loopsram = loops;
              for (deckaloop=deckloopmin;deckaloop<=deckloopmax;deckaloop++)
              {
                  loopm = loopmram;
                  loopc = loopcram;
                  loops = loopsram;
                  
                  if (deck[deckaloop] === true)
                  {
              
                      loopm += deckm[deckaloop];
                      loopc += deckc[deckaloop];
                      loops += decks[deckaloop];
                      
                      //deck B calcs.
                      loopmdecka = loopm;
                      loopcdecka = loopc;
                      loopsdecka = loops;
                      for (deckbloop=deckloopmin;deckbloop<=deckloopmax;deckbloop++)
                      {
                          loopm = loopmdecka;
                          loopc = loopcdecka;
                          loops = loopsdecka;
                          
                          if (deck[deckbloop] === true)
                          {
                          
                              loopm += deckm[deckbloop];
                              loopc += deckc[deckbloop];
                              loops += decks[deckbloop];
                              
                              //Hull Calcs.
                              loopmdeckb = loopm;
                              loopcdeckb = loopc;
                              loopsdeckb = loops;
                              for (hullloop=hullloopmin;hullloop<=hullloopmax;hullloop++)
                              {
                                  loopm = loopmdeckb;
                                  loopc = loopcdeckb;
                                  loops = loopsdeckb;
                                  
                                  if (hull[hullloop] === true)
                                  {
                                      
                                      loopm += hullm[hullloop];
                                      loopc += hullc[hullloop];
                                      loops += hulls[hullloop];
                                      
                                      //Captain Calcs.
                                      loopmhull = loopm;
                                      loopchull = loopc;
                                      loopshull = loops;
                                      for (caploop=caploopmin; caploop<=caploopmax; caploop++)
                                      {
                                          loopm = loopmhull;
                                          loopc = loopchull;
                                          loops = loopshull;
                                          
                                          if (cap[caploop] === true)
                                          {
                                              
                                              loopm += capm[caploop];
                                              loopc += capc[caploop];
                                              loops += caps[caploop];
                                              //Crew Rank #1 Calcs.
                                              
                                              loopmcap = loopm;
                                              loopccap = loopc;
                                              loopscap = loops;
                                              for (crew1loop=crew1loopmin; crew1loop<=crew1loopmax; crew1loop++)
                                              {
                                                  if (crewForceAmount > 0 && (crew1loop == crewForce[2] || crew1loop == crewForce[3] || crew1loop == crewForce[4] || crew1loop == crewForce[5])) {
                                                      continue;
                                                  }
  
                                                  loopm = loopmcap;
                                                  loopc = loopccap;
                                                  loops = loopscap;
                                                  
                                                  if (crew[crew1loop] === true)
                                                  {
                                                      loopm += crewm[crew1loop];
                                                      loopc += crewc[crew1loop];
                                                      loops += crews[crew1loop];
                                                      //crew rank #2 Calcs.
                                                      
                                                      loopmcrew1 = loopm;
                                                      loopccrew1 = loopc;
                                                      loopscrew1 = loops;
                                                      if (crewForce[2] > 0) {
                                                          crew2loopmin = crewForce[2];
                                                          crew2loopmax = crewForce[2];
                                                      } else {
                                                          crew2loopmin = crew1loop+1;
                                                      }
                                                      for (crew2loop=crew2loopmin; crew2loop<=crew2loopmax; crew2loop++)
                                                      {
                                                          if (crewForceAmount > 0 && (crew2loop == crewForce[1] || crew2loop == crewForce[3] || crew2loop == crewForce[4] || crew2loop == crewForce[5])) {
                                                              continue;
                                                          }
  
                                                          loopm = loopmcrew1;
                                                          loopc = loopccrew1;
                                                          loops = loopscrew1;
                                                      
                                                          if (crew[crew2loop] === true)
                                                          {
                                                              loopm += crewm[crew2loop];
                                                              loopc += crewc[crew2loop];
                                                              loops += crews[crew2loop];
                                                              //crew rank #3 calcs.
                                                              
                                                              loopmcrew2 = loopm;
                                                              loopccrew2 = loopc;
                                                              loopscrew2 = loops;
                                                              if (crewForce[3] > 0) {
                                                                  crew3loopmin = crewForce[3];
                                                                  crew3loopmax = crewForce[3];
                                                              } else {
                                                                  crew3loopmin = crew2loop+1;
                                                              }
                                                              for (crew3loop=crew3loopmin; crew3loop<=crew3loopmax; crew3loop++)
                                                              {
                                                                  if (crewForceAmount > 0 && (crew3loop == crewForce[1] || crew3loop == crewForce[2] || crew3loop == crewForce[4] || crew3loop == crewForce[5])) {
                                                                      continue;
                                                                  }
  
                                                                  loopm = loopmcrew2;
                                                                  loopc = loopccrew2;
                                                                  loops = loopscrew2;
                                                              
                                                                  if (crew[crew3loop] === true)
                                                                  {
                                                                      loopm += crewm[crew3loop];
                                                                      loopc += crewc[crew3loop];
                                                                      loops += crews[crew3loop];
                                                                      //crew rank #4 calcs.
                                                                      
                                                                      loopmcrew3 = loopm;
                                                                      loopccrew3 = loopc;
                                                                      loopscrew3 = loops;
                                                                      if (crewForce[4] > 0) {
                                                                          crew4loopmin = crewForce[4];
                                                                          crew4loopmax = crewForce[4];
                                                                      } else {
                                                                          crew4loopmin = crew3loop+1;
                                                                      }
                                                                      for (crew4loop=crew4loopmin; crew4loop<=crew4loopmax; crew4loop++)
                                                                      {
                                                                          if (crewForceAmount > 0 && (crew4loop == crewForce[1] || crew4loop == crewForce[2] || crew4loop == crewForce[3] || crew4loop == crewForce[5])) {
                                                                              continue;
                                                                          }
  
                                                                          loopm = loopmcrew3;
                                                                          loopc = loopccrew3;
                                                                          loops = loopscrew3;
                                                                          
                                                                          if (crew[crew4loop] === true)
                                                                          {
                                                                              loopm += crewm[crew4loop];
                                                                              loopc += crewc[crew4loop];
                                                                              loops += crews[crew4loop];
                                                                              
                                                                              //crew rank #5 calcs.
                                                                              
                                                                              loopmcrew4 = loopm;
                                                                              loopccrew4 = loopc;
                                                                              loopscrew4 = loops;
                                                                              if (crewForce[5] > 0) {
                                                                                  crew5loopmin = crewForce[5];
                                                                                  crew5loopmax = crewForce[5];
                                                                              } else {
                                                                                  crew5loopmin = crew4loop+1;
                                                                              }
                                                                              for (crew5loop=crew5loopmin; crew5loop<=crew5loopmax; crew5loop++)
                                                                              {
                                                                                  if (crewForceAmount > 0 && (crew5loop == crewForce[1] || crew5loop == crewForce[2] || crew5loop == crewForce[3] || crew5loop == crewForce[4])) {
                                                                                      continue;
                                                                                  }
  
                                                                                  loopm = loopmcrew4;
                                                                                  loopc = loopccrew4;
                                                                                  loops = loopscrew4;
                                                                                  
                                                                                  //inception loop
                                                                                  var percm = 0;
                                                                                  var percc = 0;
                                                                                  var percs = 0;
                                                                                  var perc = 0;
                                                                                  //end inception loop
                                                                              
                                                                                  if (crew[crew5loop] === true)
                                                                                  {
                                                                                      loopm += crewm[crew5loop];
                                                                                      loopc += crewc[crew5loop];
                                                                                      loops += crews[crew5loop];
                                                                                      
                                                                                      //Solidarity bonus
                                                                                      var solBonus = getSolidarityBonus(crewz[crew1loop],crewz[crew2loop],crewz[crew3loop],crewz[crew4loop],crewz[crew5loop]);
                                                                                      if (solBonus > 0)
                                                                                      {
                                                                                          loopm = loopm + solBonus;
                                                                                          loopc = loopc + solBonus;
                                                                                          loops = loops + solBonus;
                                                                                      }
                                                                                      
                                                                                      //Fixed bonuses
                                                                                      loopm = loopm * (moraleBonus + captm[caploop] + crewtm[crew1loop] + crewtm[crew2loop] + crewtm[crew3loop] + crewtm[crew4loop] + crewtm[crew5loop]);
                                                                                      loopc = loopc * (combatBonus + captc[caploop] + crewtc[crew1loop] + crewtc[crew2loop] + crewtc[crew3loop] + crewtc[crew4loop] + crewtc[crew5loop]);
                                                                                      loops = loops * (seafaringBonus + capts[caploop] + crewts[crew1loop] + crewts[crew2loop] + crewts[crew3loop] + crewts[crew4loop] + crewts[crew5loop]);
                                                                                  
                                                                                      //inception loop
                                                                                      //discounts 0 targets
                                                                                      if (morale != 1)
                                                                                      {
                                                                                          if (loopm > 0)
                                                                                          {
                                                                                              percm = loopm / morale * 100;
                                                                                          }
                                                                                      } else 
                                                                                      {
                                                                                          percm = 9999;
                                                                                      }
                                                                                      
                                                                                      if (combat != 1)
                                                                                      {
                                                                                          if (loopc > 0)
                                                                                          {
                                                                                              percc = loopc / combat * 100;
                                                                                          }
                                                                                      } else 
                                                                                      {
                                                                                          percc = 9999;
                                                                                      }
                                                                                      
                                                                                      if (seafaring != 1)
                                                                                      {
                                                                                          if (loops > 0)
                                                                                          {
                                                                                              percs = loops / seafaring * 100;
                                                                                          }
                                                                                      } else 
                                                                                      {
                                                                                          percs = 9999;
                                                                                      }
                                                                                      
                                                                                      //finds success chance
                                                                                      perc = Math.min(percm,percc,percs);
                                                                                      //end inception loop
                                                                                      
                                                                                  }
                                                                              
                                                                                  //sets new info
                                                                                  if (perc > highest)
                                                                                  {
                                                                                      highest = perc;
                                                                                      finalram = ramloop;
                                                                                      finaldecka = deckaloop;
                                                                                      finaldeckb = deckbloop;
                                                                                      finalhull = hullloop;
                                                                                      finalcap = caploop;
                                                                                      finalcrew1 = crew1loop;
                                                                                      finalcrew2 = crew2loop;
                                                                                      finalcrew3 = crew3loop;
                                                                                      finalcrew4 = crew4loop;
                                                                                      finalcrew5 = crew5loop;
                                                                                      finalm = loopm;
                                                                                      finalc = loopc;
                                                                                      finals = loops;
                                                                                  }
                                                                                  
                                                                                  crewRating = ((loopm - loopmhull)+(loopc - loopchull)+(loops - loopshull));
                                                                                  
                                                                                  if (perc > 100 && crewRating < minCrewRating)
                                                                                  {
                                                                                      minfinalram = ramloop;
                                                                                      minfinaldecka = deckaloop;
                                                                                      minfinaldeckb = deckbloop;
                                                                                      minfinalhull = hullloop;
                                                                                      minfinalcap = caploop;
                                                                                      minfinalcrew1 = crew1loop;
                                                                                      minfinalcrew2 = crew2loop;
                                                                                      minfinalcrew3 = crew3loop;
                                                                                      minfinalcrew4 = crew4loop;
                                                                                      minfinalcrew5 = crew5loop;
                                                                                      minfinalm = loopm;
                                                                                      minfinalc = loopc;
                                                                                      minfinals = loops;
                                                                                      minCrewRating = crewRating;
                                                                                  }
                                                                              
                                                                              }
                                                                              
                                                                          }
                                                                      
                                                                      }
                                                                  
                                                                  }
                                                              
                                                              }
                                                          
                                                          }
                                                      
                                                      }
                                                  
                                                  }
                                              
                                              }
                                          
                                          }
                                      
                                      }
                                      
                                  }
                                  
                              }
                              
                          }
                          
                      }
                      
                  }
                  
              }
  
          }
          
      }
      
      if(highest > 100) 
      {
          highest = 100;
      }
      
      var minCrew = $("#minCrew").is(":checked");
      if(minCrew === true && highest == 100)
      {
          finalram = minfinalram;
          finaldecka = minfinaldecka;
          finaldeckb = minfinaldeckb;
          finalhull = minfinalhull;
          finalcap = minfinalcap;
          finalcrew1 = minfinalcrew1;
          finalcrew2 = minfinalcrew2;
          finalcrew3 = minfinalcrew3;
          finalcrew4 = minfinalcrew4;
          finalcrew5 = minfinalcrew5;
          finalm = minfinalm;
          finalc = minfinalc;
          finals = minfinals;
      }
      
      $("#chance").html( parseInt(highest) ); 
      $("#finalm").html( parseInt(finalm) );
      $("#finalc").html( parseInt(finalc) );
      $("#finals").html( parseInt(finals) );
      
      $("#labelram"+finalram).addClass("selecteditem");
      if (finaldecka == finaldeckb) {
          $("#labeldeck"+finaldecka).addClass("selecteditemdouble");
      } else {
          $("#labeldeck"+finaldecka).addClass("selecteditem");
          $("#labeldeck"+finaldeckb).addClass("selecteditem");
      }
      $("#labelhull"+finalhull).addClass("selecteditem");
      
      if (captainForce == finalcap) {
          $("#cap"+finalcap).addClass("forceditem");
      } else {
          $("#cap"+finalcap).addClass("selecteditem");
      }
      $("#crew"+finalcrew1).addClass(getClass(finalcrew1, crewForce));
      $("#crew"+finalcrew2).addClass(getClass(finalcrew2, crewForce));
      $("#crew"+finalcrew3).addClass(getClass(finalcrew3, crewForce));
      $("#crew"+finalcrew4).addClass(getClass(finalcrew4, crewForce));
      $("#crew"+finalcrew5).addClass(getClass(finalcrew5, crewForce));
      
  }
  
  function getClass(crewNumber, crewForce) {
      if ($.inArray(crewNumber, crewForce) > -1) {
          return "forceditem";
      } else {
          return "selecteditem";
      }
  }
  
  function getSolidarityBonus(c1,c2,c3,c4,c5) {
      if (c1 == 58 || c2 == 58 || c3 == 58 || c4 == 58 || c5 == 58)
      {
          return 125 * countUnique(c1,c2,c3,c4,c5);
      }
      if (c1 == 42 || c2 == 42 || c3 == 42 || c4 == 42 || c5 == 42)
      {
          return 100 * countUnique(c1,c2,c3,c4,c5);
      }
      if (c1 == 34 || c2 == 34 || c3 == 34 || c4 == 34 || c5 == 34)
      {
          return 75 * countUnique(c1,c2,c3,c4,c5);
      }
      if (c1 == 18 || c2 == 18 || c3 == 18 || c4 == 18 || c5 == 18)
      {
          return 50 * countUnique(c1,c2,c3,c4,c5);
      }
      if (c1 == 10 || c2 == 10 || c3 == 10 || c4 == 10 || c5 == 10)
      {
          return 25 * countUnique(c1,c2,c3,c4,c5);
      }
      return 0;
  }
  
  function countUnique(c1,c2,c3,c4,c5) {
      var myObject = {}, myArray = [];
      myObject[c1] = c1;
      myObject[c2] = c2;
      myObject[c3] = c3;
      myObject[c4] = c4;
      myObject[c5] = c5;
      for (myElement in myObject) { 
          if (myElement != 0) {
              myArray.push (myElement) 
          }
      };
      return (myArray.length + 1);
  }
  
  function crew()
  {
      var crewm = new Array();
      var crewc = new Array();
      var crews = new Array();
      
      for ($i=1; $i<=25; $i++) {
          crewm[$i] = getIntOrZero( $("#crew"+$i+"m").val() );
          crewc[$i] = getIntOrZero( $("#crew"+$i+"c").val() );
          crews[$i] = getIntOrZero( $("#crew"+$i+"s").val() );
      }
  
      var morale = 0;
      var combat = 0;
      var seafaring = 0;
      
      for (var i=1;i<=25;i++)
      {
          morale += crewm[i];
          combat += crewc[i];
          seafaring += crews[i];
      }
      
      $("#finalm").html(morale);
      $("#finalc").html(combat);
      $("#finals").html(seafaring);
  }
  
  var Path='./Images/';
  var ImgAry=new Array('Pop_Crew_None.png','Pop_Crew_Travelling_Drunk.png','Pop_Crew_Stowaway.png','Pop_Crew_Smuggler.png','Pop_Crew_Varrock_Chef.png','Pop_Crew_Brimhaven_Pirate.png','Pop_Crew_Catherby_Fisherman.png','Pop_Crew_Dwarven_Engineer.png','Pop_Crew_Ardougne_Storekeeper.png','Pop_Crew_Bamboo_Golem.png','Pop_Crew_First_Mate.png','Pop_Crew_Cyclops.png','Pop_Crew_Eastern_Bannerman.png','Pop_Crew_Eastern_Musketeer.png','Pop_Crew_Eastern_Guide.png','Pop_Crew_Fireworks_Enthusiast.png','Pop_Crew_Palmist.png','Pop_Crew_Exploding_Golem.png','Pop_Crew_Eastern_Overseer.png','Pop_Crew_Siren_Whalerider.png','Pop_Crew_Blazing_Lantern_Clansman.png','Pop_Crew_Golden_Katana_Clansman.png','Pop_Crew_Storm_Riders_Clansman.png','Pop_Crew_Fireworks_Expert.png','Pop_Crew_Trader.png','Pop_Crew_Soothsayer.png','Pop_Crew_Slate_Golem.png','Pop_Crew_Feral_Chimera.png','Pop_Crew_Card_Sharp.png','Pop_Crew_Crows\'_Nest_Sniper.png','Pop_Crew_Cartographer.png','Pop_Crew_Explosive_Expert.png','Pop_Crew_Merchant.png','Pop_Crew_Cherrywood_Golem.png','Pop_Crew_Bureaucrat.png','Pop_Crew_Sea_Witch.png','Pop_Crew_Farcrier.png','Pop_Crew_Bounty_Hunter.png','Pop_Crew_Sea_Dog.png','Pop_Crew_Firework_Maniac.png','Pop_Crew_Jade_Golem.png','Pop_Crew_Jade_Merchant.png','Pop_Crew_Judge_of_Dice.png','Pop_Crew_Sacrificial_Soothsayer.png','Pop_Crew_Travelling_Band.png','Pop_Crew_Ferocious_Tiger-Rider.png','Pop_Crew_Harem_of_Fortune_Tellers.png','Pop_Crew_Oxhead_and_Horseface.png','Pop_Crew_Party_Animal.png','Pop_Crew_Sea-fort_Guard.png','Pop_Crew_Pearl_Diver.png','Pop_Crew_Terracotta_Merchant.png','Pop_Crew_Reef_Rider.png','Pop_Crew_Wisp.png','Pop_Crew_Zhonghu_Player.png','Pop_Crew_Gu_Bodyguard.png','Pop_Crew_Stargazer.png','Pop_Crew_Azure_Golem.png','Pop_Crew_Kharidian_Exile_Temp.png');
  
  function setCrewImage($crewNumber, $crewType){
      $("#crew"+$crewNumber+"i").attr("src", Path+ImgAry[$crewType]);
  }
  
  function setAllCrewImages() {
      for ($i=1; $i<=25; $i++) {
          $crewType = $("#crew"+$i+"z").prop("selectedIndex");
          setCrewImage($i, $crewType)
      }
  }
  
  function levelUp($crewNumber, $crewType)
  {
      var crewBaseM = getCrewMoraleArray();
      var crewBaseC = getCrewCombatArray();
      var crewBaseS = getCrewSeafaringArray();
      
      var crewm = getIntOrZero( $("#crew"+$crewNumber+"m").val() );
      var crewc = getIntOrZero( $("#crew"+$crewNumber+"c").val() );
      var crews = getIntOrZero( $("#crew"+$crewNumber+"s").val() );
      var crewl = getIntOrZero( $("#crew"+$crewNumber+"l").val() );
      
      $("#crew"+$crewNumber+"m").val(crewm+(crewBaseM[$crewType-1]/10));
      $("#crew"+$crewNumber+"c").val(crewc+(crewBaseC[$crewType-1]/10));
      $("#crew"+$crewNumber+"s").val(crews+(crewBaseS[$crewType-1]/10));
      $("#crew"+$crewNumber+"l").val(crewl+1);
  }
  
  function setCrewStats($crewNumber, $crewType)
  {
      // If 'Select One' was selected, reset crew member to zeroes
      if ($crewType == 0) {
          $("#crew"+$crewNumber+"m").val(0);
          $("#crew"+$crewNumber+"c").val(0);
          $("#crew"+$crewNumber+"s").val(0);
          $("#crew"+$crewNumber+"l").val(0);
          return;
      }
  
      var crewBaseM = getCrewMoraleArray();
      var crewBaseC = getCrewCombatArray();
      var crewBaseS = getCrewSeafaringArray();
      
      var crewm = getIntOrZero( $("#crew"+$crewNumber+"m").val() );
      var crewc = getIntOrZero( $("#crew"+$crewNumber+"c").val() );
      var crews = getIntOrZero( $("#crew"+$crewNumber+"s").val() );
      var crewl = getIntOrZero( $("#crew"+$crewNumber+"l").val() );
      
      if((crewm == 0) && (crewc == 0) && (crews == 0))
      {
          $("#crew"+$crewNumber+"m").val(crewBaseM[$crewType-1]);
          $("#crew"+$crewNumber+"c").val(crewBaseC[$crewType-1]);
          $("#crew"+$crewNumber+"s").val(crewBaseS[$crewType-1]);
          $("#crew"+$crewNumber+"l").val(0);
      }
  }
  
  function getCrewMoraleArray() {
      return new Array(70,0,0,150,0,0,0,50,60,50,100,350,0,0,0,0,170,120,0,500,0,0,0,150,0,250,350,750,0,0,0,250,300,250,350,1000,0,0,0,400,300,450,0,1200,0,0,500,1500,0,0,650,450,300,2100,0,0,900,450);
  }
  
  function getCrewCombatArray() {
      return new Array(0,70,0,0,150,0,0,0,100,50,150,0,350,0,0,0,200,120,200,0,500,0,0,0,0,300,500,0,750,0,0,0,500,250,0,0,1000,0,0,650,0,450,0,0,1200,0,500,0,1500,0,0,450,750,0,2100,0,1100,450);
  }
  
  function getCrewSeafaringArray() {
      return new Array(0,0,70,0,0,150,0,0,0,50,0,0,0,350,0,200,0,120,350,0,0,500,0,0,300,0,0,0,0,750,0,0,0,250,750,0,0,1000,0,0,0,450,450,0,0,1200,500,0,0,1500,0,450,750,0,0,2100,0,1450);
  }
  
  function getRamArray() {
      var ram = new Array();
      $("input[name=ram]").each(function(index) {
          ram[index] = $(this).is(":checked");
      });
      //de-activate un-needed ship upgrades
      //rams
      if (ram[14] === true)
      {
          ram[12] = false;
          ram[10] = false;
          ram[8] = false;
          ram[6] = false;
          ram[4] = false;
          ram[2] = false;
          ram[0] = false;
      }
      if (ram[12] === true)
      {
          ram[10] = false;
          ram[8] = false;
          ram[6] = false;
          ram[4] = false;
          ram[2] = false;
          ram[0] = false;
      }
      if (ram[10] === true)
      {
          ram[8] = false;
          ram[6] = false;
          ram[4] = false;
          ram[2] = false;
          ram[0] = false;
      }
      if (ram[8] === true)
      {
          ram[6] = false;
          ram[4] = false;
          ram[2] = false;
          ram[0] = false;
      }
      if (ram[6] === true)
      {
          ram[4] = false;
          ram[2] = false;
          ram[0] = false;
      }
      if (ram[4] === true)
      {
          ram[2] = false;
          ram[0] = false;
      }
      if (ram[2] === true)
      {
          ram[0] = false;
      }
      //figureheads
      if (ram[13] === true)
      {
          ram[11] = false;
          ram[9] = false;
          ram[7] = false;
          ram[5] = false;
          ram[3] = false;
          ram[1] = false;
      }
      if (ram[11] === true)
      {
          ram[9] = false;
          ram[7] = false;
          ram[5] = false;
          ram[3] = false;
          ram[1] = false;
      }
      if (ram[9] === true)
      {
          ram[7] = false;
          ram[5] = false;
          ram[3] = false;
          ram[1] = false;
      }
      if (ram[7] === true)
      {
          ram[5] = false;
          ram[3] = false;
          ram[1] = false;
      }
      if (ram[5] === true)
      {
          ram[3] = false;
          ram[1] = false;
      }
      if (ram[3] === true)
      {
          ram[1] = false;
      }
      
      return ram;
  }
  
  function getDeckArray() {
      var deck = new Array();
      $("input[name=deck]").each(function(index) {
          deck[index] = $(this).is(":checked");
      });
      //de-activate un-needed deck items
      //combat deck items
      if (deck[20] === true)
      {
          deck[19] = false;
          deck[16] = false;
          deck[13] = false;
          deck[10] = false;
          deck[7] = false;
          deck[4] = false;
      }
      if (deck[19] === true)
      {
          deck[16] = false;
          deck[13] = false;
          deck[10] = false;
          deck[7] = false;
          deck[4] = false;
      }
      if (deck[16] === true)
      {
          deck[13] = false;
          deck[10] = false;
          deck[7] = false;
          deck[4] = false;
      }
      if (deck[13] === true)
      {
          deck[10] = false;
          deck[7] = false;
          deck[4] = false;
      }
      if (deck[10] === true)
      {
          deck[7] = false;
          deck[4] = false;
      }
      if (deck[7] === true)
      {
          deck[4] = false;
      }
      //morale deck items
      if (deck[22] === true)
      {
          deck[18] = false;
          deck[15] = false;
          deck[12] = false;
          deck[9] = false;
          deck[6] = false;
          deck[3] = false;
          deck[1] = false;
      }
      if (deck[18] === true)
      {
          deck[15] = false;
          deck[12] = false;
          deck[9] = false;
          deck[6] = false;
          deck[3] = false;
          deck[1] = false;
      }
      if (deck[15] === true)
      {
          deck[12] = false;
          deck[9] = false;
          deck[6] = false;
          deck[3] = false;
          deck[1] = false;
      }
      if (deck[12] === true)
      {
          deck[9] = false;
          deck[6] = false;
          deck[3] = false;
          deck[1] = false;
      }
      if (deck[9] === true)
      {
          deck[6] = false;
          deck[3] = false;
          deck[1] = false;
      }
      if (deck[6] === true)
      {
          deck[3] = false;
          deck[1] = false;
      }
      if (deck[3] === true)
      {
          deck[1] = false;
      }
      //seafaring deck items
      if (deck[21] === true)
      {
          deck[17] = false;
          deck[14] = false;
          deck[11] = false;
          deck[8] = false;
          deck[5] = false;
          deck[2] = false;
          deck[0] = false;
      }
      if (deck[17] === true)
      {
          deck[14] = false;
          deck[11] = false;
          deck[8] = false;
          deck[5] = false;
          deck[2] = false;
          deck[0] = false;
      }
      if (deck[14] === true)
      {
          deck[11] = false;
          deck[8] = false;
          deck[5] = false;
          deck[2] = false;
          deck[0] = false;
      }
      if (deck[11] === true)
      {
          deck[8] = false;
          deck[5] = false;
          deck[2] = false;
          deck[0] = false;
      }
      if (deck[8] === true)
      {
          deck[5] = false;
          deck[2] = false;
          deck[0] = false;
      }
      if (deck[5] === true)
      {
          deck[2] = false;
          deck[0] = false;
      }
      if (deck[2] === true)
      {
          deck[0] = false;
      }
      
      return deck;
  }
  
  function getHullArray() {
      var hull = new Array();
      $("input[name=hull]").each(function(index) {
          hull[index] = $(this).is(":checked");
      });
      //de-activate un-needed hull items
      if (hull[14] === true)
      {
          hull[10] = false;
          hull[9] = false;
          hull[8] = false;
          hull[7] = false;
          hull[6] = false;
          hull[5] = false;
          hull[4] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[13] === true)
      {
          hull[10] = false;
          hull[7] = false;
          hull[6] = false;
          hull[5] = false;
          hull[4] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[12] === true)
      {
          hull[9] = false;
          hull[4] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[11] === true)
      {
          hull[8] = false;
          hull[6] = false;
          hull[4] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
      }
      if (hull[10] === true)
      {
          hull[7] = false;
          hull[5] = false;
          hull[4] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;		
      }
      if (hull[9] === true)
      {
          hull[4] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[8] === true)
      {
          hull[6] = false;
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[7] === true)
      {
          hull[5] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[6] === true)
      {
          hull[3] = false;
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[5] === true)
      {
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[4] === true)
      {
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[3] === true)
      {
          hull[2] = false;
          hull[1] = false;
          hull[0] = false;
      }
      if (hull[2] === true)
      {
          hull[0] = false;
      }
      if (hull[1] === true)
      {
          hull[0] = false;
      }
          
      return hull;
  }
  
  $(document).ready(function() {
  
      if (typeof(localStorage) === 'undefined') {
          $("#localStorageMessage").html("<p>You are using a browser that does not support localStorage. The data in this calculator can therefor not be saved. If you do not want to enter all your data every time you visit this page, please update your browser. The following browsers do support localStorage:<ul><li>Internet Explorer 8 or better</li><li>Firefox 3.5 or better</li><li>Safari 4 or better</li><li>Google Chrome 4 or better</li><li>Opera 10.50 or better</li></ul></p>");
          $("#localStorageMessage").css('background-color', 'red');
          $("#localStorageMessage").css('color', 'white');
          $("#localStorageMessage").css('padding', '12px');
      } 
  
      //displayWarning();
      loadCalculatorData();
      setAllCrewImages();
      
      $(".crew-image").draggable({
          scope: 'crew',
          revert: true
      });
      $(".crew-image").droppable({
          scope: 'crew',
          tolerance: 'touch',
          drop: function(event, ui) {
              var from = ui.draggable.parent().parent().attr('data-crew-number');
              var to = $(this).parent().parent().attr('data-crew-number');
              var crewFrom = getCrewData(from);
              var crewTo = getCrewData(to);
              crewFrom.number = to;
              crewTo.number = from;
              putCrewData(crewFrom);
              putCrewData(crewTo);
              setCrewImage(crewFrom.number, crewFrom.selectindex);
              setCrewImage(crewTo.number, crewTo.selectindex);
          }
      });
  
      $(".captain-image").draggable({
          scope: 'captain',
          revert: true
      });
      $(".captain-image").droppable({
          scope: 'captain',
          tolerance: 'touch',
          drop: function(event, ui) {
              var from = ui.draggable.parent().parent().attr('data-captain-number');
              var to = $(this).parent().parent().attr('data-captain-number');
              var captainFrom = getCaptainData(from);
              var captainTo = getCaptainData(to);
              captainFrom.number = to;
              captainTo.number = from;
              putCaptainData(captainFrom);
              putCaptainData(captainTo);
          }
      });
  
      $("#ramstoggle").click(function() {
          $isChecked = $("#ramstoggle").is(":checked");
          $("input[name=ram]").attr("checked", $isChecked);
      });
      
      $("#deckstoggle").click(function() {
          $isChecked = $("#deckstoggle").is(":checked");
          $("input[name=deck]").attr("checked", $isChecked);
      });
      
      $("#hullstoggle").click(function() {
          $isChecked = $("#hullstoggle").is(":checked");
          $("input[name=hull]").attr("checked", $isChecked);
      });
  
      $("#crewtoggle").click(function() {
          $isChecked = $("#crewtoggle").is(":checked");
          $("input[name=captain]").attr("checked", $isChecked);
          $("input[name=crew]").attr("checked", $isChecked);
      }); 
                  
      $(".crewLevel").click(function() { 
          $crewNumber = $(this).attr("data-crew-number");
          $crewType = $("#crew"+$crewNumber+"z").prop("selectedIndex");
          levelUp($crewNumber, $crewType);
      });
      
      // Update crew image
      $(".crew").change(function() {
          $crewNumber = $(this).attr("data-crew-number");
          $crewType = $(this).prop("selectedIndex");
          setCrewImage($crewNumber, $crewType);
          setCrewStats($crewNumber, $crewType); 
      });
      
      $(".pop-number").blur(function() {
          if ($(this).val() < 0 || $(this).val() > 4500) {
              $(this).css('background-color', 'red');
          } else {
              $(this).css('background-color', '');
          }
      });
      
      // Assign calculated crew to ship
      $("[id^=shipimage]").click(function() {
          var ship = $(this).attr('data-ship-id');
          clearShip(ship);
  
          $("[id^=cap][class*='selecteditem']").add("[id^=cap][class*='forceditem']").attr('data-current-ship',ship);
          $("[id^=cap][class*='selecteditem'] img.shipimage").add("[id^=cap][class*='forceditem'] img.shipimage").attr('src',Path+'Pop_Ship_'+ship+'.png');
          $("[id^=cap][class*='selecteditem'] input.use").add("[id^=cap][class*='forceditem'] input.use").attr('checked',false);
          $("[id^=cap][class*='selecteditem'] input.force").add("[id^=cap][class*='forceditem'] input.force").attr('checked',false);
  
          $("[id^=crew][class*='selecteditem']").add("[id^=crew][class*='forceditem']").attr('data-current-ship',ship);
          $("[id^=crew][class*='selecteditem'] img.shipimage").add("[id^=crew][class*='forceditem'] img.shipimage").attr('src',Path+'Pop_Ship_'+ship+'.png');
          $("[id^=crew][class*='selecteditem'] input.use").add("[id^=crew][class*='forceditem'] input.use").attr('checked',false);
          $("[id^=crew][class*='selecteditem'] input.force").add("[id^=crew][class*='forceditem'] input.force").attr('checked',false);
          
          // Reset ship effects
          $("#bonusMorale").val(0);
          $("#bonusCombat").val(0);
          $("#bonusSeafaring").val(0);
      });
      
      // Clear ship
      $("[id^=clearshipimage]").click(function() {
          var ship = $(this).attr('data-ship-id');
          clearShip(ship);
      });
      
      // Rotate through all ships
      $("[id^=nextshipimage]").click(function() {
          var parentCell = $(this).parent().parent();
          var ship = parentCell.attr('data-current-ship');
          if (ship==4) {
              parentCell.find("img.shipimage").attr('src',Path+'Pop_Ship_0.png');
              parentCell.find("input.use").attr('checked',true);
              parentCell.attr('data-current-ship',0);
          } else {
              ship++;
              parentCell.find("img.shipimage").attr('src',Path+'Pop_Ship_'+ship+'.png');
              parentCell.find("input.use").attr('checked',false);
              parentCell.find("input.force").attr('checked',false);
              parentCell.attr('data-current-ship',ship);
          }
      });
      
      $("[id^=cap] input.use").click(function() {
          if (!$(this).is(":checked")) {
              $(this).parent().parent().find("input.force").attr('checked',false);
          }
      });
  
      $("[id^=crew] input.use").click(function() {
          if (!$(this).is(":checked")) {
              $(this).parent().parent().find("input.force").attr('checked',false);
          }
      });
  
      $("[id^=cap] input.force").click(function() {
          if ($(this).is(":checked")) {
              $(this).parent().parent().parent().find("input.use").attr('checked',true);
          }
      });
  
      $("[id^=crew] input.force").click(function() {
          if ($(this).is(":checked")) {
              $(this).parent().parent().parent().find("input.use").attr('checked',true);
          }
      });
    
      $("[id^=traitCap][type=button]").click(function() {
          closeTraitPopupsCrew();
          var traitId = $(this).attr("id").substr(8,1);
          for(var i=1; i<=5; i++) {
              if (i == traitId) {
                  if ($("#traitPopupCap"+traitId).dialog("isOpen")) {
                      $("#traitPopupCap"+traitId).dialog("close");
                      $("#traitCap"+traitId).prop("value","Trait");
                  } else {
                      $("#traitPopupCap"+traitId).dialog("open");
                      $("#traitCap"+traitId).prop("value","Close");
                  }
              } else {
                  $("#traitPopupCap"+i).dialog("close");
                  $("#traitCap"+i).prop("value","Trait");
              }
          }
      });
  
      $("[id^=traitCrew][type=button]").click(function() {
          closeTraitPopupsCaptains();
          var traitId = $(this).attr("id").substr(9,2);
          for(var i=1; i<=25; i++) {
              if (i == traitId) {
                  if ($("#traitPopupCrew"+traitId).dialog("isOpen")) {
                      $("#traitPopupCrew"+traitId).dialog("close");
                      $("#traitCrew"+traitId).prop("value","Trait");
                  } else {
                      $("#traitPopupCrew"+traitId).dialog("open");
                      $("#traitCrew"+traitId).prop("value","Close");
                  }
              } else {
                  $("#traitPopupCrew"+i).dialog("close");
                  $("#traitCrew"+i).prop("value","Trait");
              }
          }
      });
  
      $("#warning").click(function() {
          $("#warning").hide();
          localStorage.setItem('hidePopWarning',true);
      });
  
      $("#hideupgrades").click(function() {
          $isChecked = $("#hideupgrades").is(":checked");
          showUpgrades($isChecked);
      });
      
  });
  
  function showUpgrades(hide) {
      if (hide) {
          var ram = getRamArray();
          $.each(ram, function(index, value) { 
              if (!value) {
                  $("[id=spanram" + index + "]").hide();
              }
          });
          var deck = getDeckArray();
          $.each(deck, function(index, value) { 
              if (!value) {
                  $("[id=spandeck" + index + "]").hide();
              }
          });
          var hull = getHullArray();
          $.each(hull, function(index, value) { 
              if (!value) {
                  $("[id=spanhull" + index + "]").hide();
              }
          });
      } else {
          $("[id^=spanram]").show();
          $("[id^=spandeck]").show();
          $("[id^=spanhull]").show();
      }
  }
      
  function clearShip(ship) {
      $("[id^=cap][data-current-ship='"+ship+"'] img.shipimage").attr('src',Path+'Pop_Ship_0.png');
      $("[id^=cap][data-current-ship='"+ship+"'] input.use").attr('checked',true);
      $("[id^=cap][data-current-ship='"+ship+"']").attr('data-current-ship',0);
  
      $("[id^=crew][data-current-ship='"+ship+"'] img.shipimage").attr('src',Path+'Pop_Ship_0.png');
      $("[id^=crew][data-current-ship='"+ship+"'] input.use").attr('checked',true);
      $("[id^=crew][data-current-ship='"+ship+"']").attr('data-current-ship',0);
  }
  
  $(window).unload(function() {
      saveCalculatorData();
  });
  
  function printCrewForm() {
      var crewFormStart = '<form name="crewform">';
      crewFormStart += '<table border="1" style="width:98%">';  
      crewFormStart += '<tr>';
      crewFormStart += '<th colspan="6">Captain and Crew</th>';
      crewFormStart += '</tr>';
      crewFormStart += '<tr>';
      crewFormStart += '<td colspan="6"><input type="checkbox" id="crewtoggle" /><label for="crewtoggle">Select all</label>';
      crewFormStart += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assign calculated crew to ship: ';
      for (var ship=1; ship<=4; ship++) {
          crewFormStart += '<img src="'+Path+'Pop_Ship_'+ship+'.png" width="18" height="18" class="shipimage inline clickable" id="shipimage'+ship+'" data-ship-id="'+ship+'"> ';
      }
      crewFormStart += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clear ship: ';
      for (var ship=1; ship<=4; ship++) {
          crewFormStart += '<img src="'+Path+'Pop_Ship_'+ship+'.png" width="18" height="18" class="shipimage inline clickable" id="clearshipimage'+ship+'" data-ship-id="'+ship+'"> ';
      }
      crewFormStart += '</td></tr>';
      document.write(crewFormStart);
  
      for ($row=1; $row<=5; $row++) {
          document.write('<tr>');
          document.write(getCaptainCell($row));
          $("#traitPopupCap"+$row).dialog({
              autoOpen: false,
              modal: false,
              closeText: "",
              width: 148,
              position: { my: "left bottom", at: "right bottom", of: "#cap"+$row }
          });
          for ($cell=1; $cell<=5; $cell++) {
              var crewNum = (($row-1)*5)+$cell;
              document.write(getCrewMemberCell(crewNum));
              $("#traitPopupCrew"+crewNum).dialog({
                  autoOpen: false,
                  modal: false,
                  closeText: "",
                  width: 148,
                  position: { my: "left bottom", at: "right bottom", of: "#crew"+crewNum }
              });
          }
          document.write('</tr>');
      }
      document.write('</table></form>');
  }
  
  function closeTraitPopupsCaptains() {
      for(var i=1; i<=5; i++) {
          $("#traitPopupCap"+i).dialog("close");
          $("#traitCap"+i).prop("value","Trait");
      }
  }
  
  function closeTraitPopupsCrew() {
      for(var i=1; i<=25; i++) {
          $("#traitPopupCrew"+i).dialog("close");
          $("#traitCrew"+i).prop("value","Trait");
      }
  }
  
  function getTraitPopupCap($i) {
      var traitPopupCap = '<div id="traitPopupCap'+$i+'" class="traitPopup">';
      traitPopupCap += '<table><tbody>';
      traitPopupCap += '<tr><th>Traits</th></tr>';
      traitPopupCap += '<tr><td>'+getTraitPopupSelector(1,"cap",$i)+'</td></tr>';
      traitPopupCap += '<tr><td>'+getTraitPopupSelector(2,"cap",$i)+'</td></tr>';
      traitPopupCap += '<tr><td>'+getTraitPopupSelector(3,"cap",$i)+'</td></tr>';
      traitPopupCap += '<tr><td>'+getTraitPopupSelector(4,"cap",$i)+'</td></tr>';
      traitPopupCap += '</tbody></table>';
      traitPopupCap += '</div>';
      return traitPopupCap;
  }
  
  function getTraitPopupCrew($i) {
      var traitPopupCrew = '<div id="traitPopupCrew'+$i+'" class="traitPopup">';
      traitPopupCrew += '<table><tbody>';
      traitPopupCrew += '<tr><th>Traits</th></tr>';
      traitPopupCrew += '<tr><td>'+getTraitPopupSelector(1,"crew",$i)+'</td></tr>';
      traitPopupCrew += '<tr><td>'+getTraitPopupSelector(2,"crew",$i)+'</td></tr>';
      traitPopupCrew += '<tr><td>'+getTraitPopupSelector(3,"crew",$i)+'</td></tr>';
      traitPopupCrew += '<tr><td>'+getTraitPopupSelector(4,"crew",$i)+'</td></tr>';
      traitPopupCrew += '</tbody></table>';
      traitPopupCrew += '</div>';
      return traitPopupCrew;
  }
  
  function getTraitPopupSelector($count,$type,$i) {
      var selector = '<select id="trait'+$count+$type+$i+'">';
      selector += '<option>--</option>';
      selector += '<option>Leader</option>';
      selector += '<option>Tactician</option>';
      selector += '<option>Seafriend</option>';
      selector += '<option>Gloombringer</option>';
      selector += '<option>Liability</option>';
      selector += '<option>Storm Magnet</option>';
      selector += '</select>';
      return selector;
  }
  
  function getCaptainCell($i) {
      var captainCell = '<td id="cap'+$i+'" style="vertical-align:top" data-captain-number="'+$i+'">';
      captainCell += '<div style="float:left;">';
      captainCell += '<img src="'+Path+'Pop_Ship_0.png" width="18" height="18" class="shipimage inline clickable" id="nextshipimage'+$i+'">';
      captainCell += '</div>';
      captainCell += '<div style="float:right;">';
      captainCell += '<label for="cap'+$i+'a">Use:</label>';
      captainCell += '<input type="checkbox" name="captain" id="cap'+$i+'a" class="use" />';
      captainCell += '</div>';
      captainCell += '<div>';
      captainCell += '<input type="text" placeholder="enter name" style="width:95%; margin-bottom:1px;" id="cap'+$i+'n" data-captain-number="'+$i+'"><br />';
      captainCell += '</div>';
      captainCell += '<div style="float:left;">';
      captainCell += '<img src="'+Path+'Pop_Captain.png" width="35" height="35" class="captain-image">';
      captainCell += '</div>';
      captainCell += '<div style="float:right; text-align:right;">';
      captainCell += '<label for="cap'+$i+'m">M:</label>';
      captainCell += '<input type="text" name="cap'+$i+'m" id="cap'+$i+'m" class="pop-number pop-bottom1"><br />';
      captainCell += '<label for="cap'+$i+'c">C:</label>';
      captainCell += '<input type="text" name="cap'+$i+'c" id="cap'+$i+'c" class="pop-number pop-bottom1"><br />';
      captainCell += '</div>';
      captainCell += '<div style="width:100%; clear:both;">';
      captainCell += '<span style="float:left"><label for="cap'+$i+'f">F:</label>';
      captainCell += '<input type="checkbox" name="forcecaptain" id="cap'+$i+'f" class="force" /></span>';
      captainCell += '<span style="float:right"><label for="cap'+$i+'s">S:</label>';
      captainCell += '<input type="text" name="cap'+$i+'s" id="cap'+$i+'s" class="pop-number"></span>';
      captainCell += '</div>';
      captainCell += '<div style="width:100%; padding-top:1px; clear:both;">';
      captainCell += '<span style="float:left"><input id="traitCap'+$i+'" type="button" style="width:42px; margin:0; padding:0; height:23px;" value="Trait"></span>';
      captainCell += '<span style="float:right"><label for="cap'+$i+'l">L:</label>';
      captainCell += '<input type="text" name="cap'+$i+'l" id="cap'+$i+'l" class="pop-number"></span>';
      captainCell += '</div>';
      captainCell += '<div style="width:95px; height:1px; clear:both"></div>';
  
      captainCell += getTraitPopupCap($i);
  
      captainCell += '</td>';
      return captainCell;
  }
  
  function getCrewMemberCell($i) {
      var crewCell = '<td id="crew'+$i+'" style="width: 145px;" data-crew-number="'+$i+'" class="crew-cell">';
      crewCell += '<div style="float:left;">';
      crewCell += '<img src="'+Path+'Pop_Ship_0.png" width="18" height="18" class="shipimage inline clickable" id="nextshipimage">';
      crewCell += '</div>';
      crewCell += '<div style="float:right;">';
      crewCell += '<label for="crew'+$i+'a">Use:</label>';
      crewCell += '<input type="checkbox" name="crew" id="crew'+$i+'a" class="use" />';
      crewCell += '</div>';
      crewCell += '<div>';
      crewCell += '<select class="crew" data-crew-number="'+$i+'" id="crew'+$i+'z" style="width:100%; margin-bottom:1px;">';
      crewCell += '<option>Select One</option>';
      crewCell += '<option>Travelling Drunk</option>';
      crewCell += '<option>Stowaway</option>';
      crewCell += '<option>Smuggler</option>';
      crewCell += '<option>Varrock Chef</option>';
      crewCell += '<option>Brimhaven Pirate</option>';
      crewCell += '<option>Catherby Fisherman</option>';
      crewCell += '<option>Dwarven Engineer</option>';
      crewCell += '<option>Ardougne Storekeeper</option>';
      crewCell += '<option>Bamboo Golem</option>';
      crewCell += '<option>First Mate</option>';
      crewCell += '<option>Cyclops</option>';
      crewCell += '<option>Eastern Bannerman</option>';
      crewCell += '<option>Eastern Musketeer</option>';
      crewCell += '<option>Eastern Guide</option>';
      crewCell += '<option>Fireworks Enthusiast</option>';
      crewCell += '<option>Palmist</option>';
      crewCell += '<option>Exploding Golem</option>';
      crewCell += '<option>Eastern Overseer</option>';
      crewCell += '<option>Siren Whalerider</option>';
      crewCell += '<option>Blazing Lantern Clansman</option>';
      crewCell += '<option>Golden Katana Clansman</option>';
      crewCell += '<option>Storm Riders Clansman</option>';
      crewCell += '<option>Fireworks Expert</option>';
      crewCell += '<option>Trader</option>';
      crewCell += '<option>Soothsayer</option>';
      crewCell += '<option>Slate Golem</option>';
      crewCell += '<option>Feral Chimera</option>';
      crewCell += '<option>Card Sharp</option>';
      crewCell += '<option>Crows\' Nest Sniper</option>';
      crewCell += '<option>Cartographer</option>';
      crewCell += '<option>Explosives Expert</option>';
      crewCell += '<option>Merchant</option>';
      crewCell += '<option>Cherrywood Golem</option>';
      crewCell += '<option>Bureaucrat</option>';
      crewCell += '<option>Sea Witch</option>';
      crewCell += '<option>Farcrier</option>';
      crewCell += '<option>Bounty Hunter</option>';
      crewCell += '<option>Sea Dog</option>';
      crewCell += '<option>Firework Maniac</option>';
      crewCell += '<option>Jade Golem</option>';
      crewCell += '<option>Jade Merchant</option>';
      crewCell += '<option>Judge of Dice</option>';
      crewCell += '<option>Sacrificial Soothsayer</option>';
      crewCell += '<option>Travelling Band</option>';
      crewCell += '<option>Ferocious Tiger-Rider</option>';
      crewCell += '<option>Harem of Fortune Tellers</option>';
      crewCell += '<option>Oxhead and Horseface</option>';
      crewCell += '<option>Party Animal</option>';
      crewCell += '<option>Sea-fort Guard</option>';
      crewCell += '<option>Pearl Diver</option>';
      crewCell += '<option>Terracotta Merchant</option>';
      crewCell += '<option>Reef Rider</option>';
      crewCell += '<option>Wisp</option>';
      crewCell += '<option>Zhonghu Player</option>';
      crewCell += '<option>Gu Bodyguard</option>';
      crewCell += '<option>Stargazer</option>';
      crewCell += '<option>Azure Golem</option>';
      crewCell += '<option>Kharidian Exile</option>';
      crewCell += '</select>';
      crewCell += '</div>';
      crewCell += '<div style="width:125px; height:2px; clear:both"></div>';
      crewCell += '<div style="float:left;">';
      crewCell += '<img id="crew'+$i+'i" src="'+Path+'Pop_Crew_None.png" width="35" height="35" class="crew-image">';
      crewCell += '</div>';
      crewCell += '<div style="float:right; text-align:right;">';
      crewCell += '<label for="crew'+$i+'m">M:</label>';
      crewCell += '<input type="text" name="crew'+$i+'m" id="crew'+$i+'m" class="pop-number pop-bottom1"><br />';
      crewCell += '<label for="crew'+$i+'c">C:</label>';
      crewCell += '<input type="text" name="crew'+$i+'c" id="crew'+$i+'c" class="pop-number">';
      crewCell += '</div>';
      crewCell += '<div style="width:100%; padding-top:1px; clear:both;">';
      crewCell += '<span style="float:left"><label for="crew'+$i+'f">F:</label>';
      crewCell += '<input type="checkbox" name="forcecrew" id="crew'+$i+'f" class="force" /></span>';
      crewCell += '<span style="float:right"><label for="crew'+$i+'s">S:</label>';
      crewCell += '<input type="text" name="crew'+$i+'s" id="crew'+$i+'s" class="pop-number"></span>';
      crewCell += '</div>';
      crewCell += '<div style="width:100%; padding-top:1px; clear:both;">';
      crewCell += '<span style="float:left"><input id="traitCrew'+$i+'" type="button" style="width:42px; margin:0; padding:0; height:23px;" value="Trait"></span>';
      crewCell += '<span style="float:left"><input type="button" name="crew'+$i+'u" class="crewLevel" id="crew'+$i+'u" value="L+" data-crew-number="'+$i+'" style="width: 26px;"></span>';
      crewCell += '<span style="float:right"><label for="crew'+$i+'l">L:</label>';
      crewCell += '<input type="text" name="crew'+$i+'l" id="crew'+$i+'l" class="pop-number"></span>';
      crewCell += '</div>';
  
      crewCell += getTraitPopupCrew($i);
  
      crewCell += '</td>';
      return crewCell;
  }
  
  function getCaptainData(captain) {
      var captainData = new Object();
      captainData.selected = $("#cap"+captain).hasClass('selecteditem');
      captainData.forced = $("#cap"+captain).hasClass('forceditem');
      captainData.currentship = $("#cap"+captain).attr('data-current-ship');
      captainData.active = $("#cap"+captain+"a").is(':checked');
      captainData.force = $("#cap"+captain+"f").is(':checked');
      captainData.name = $("#cap"+captain+"n").val();
      captainData.number = $("#cap"+captain+"n").attr('data-captain-number')
      captainData.level = $("#cap"+captain+"l").val();
      captainData.morale = $("#cap"+captain+"m").val();
      captainData.combat = $("#cap"+captain+"c").val();
      captainData.seafaring = $("#cap"+captain+"s").val();
  //    captainData.traitLeader = $("#traitLeader"+captain).is(':checked');
  //    captainData.traitTactician = $("#traitTactician"+captain).is(':checked');
  //    captainData.traitSeafriend = $("#traitSeafriend"+captain).is(':checked');
  //    captainData.traitGloombringer = $("#traitGloombringer"+captain).is(':checked');
  //    captainData.traitLiability = $("#traitLiability"+captain).is(':checked');
  //    captainData.traitStormMagnet = $("#traitStormMagnet"+captain).is(':checked');
      captainData.trait1 = $("#trait1cap"+captain).val();
      captainData.trait2 = $("#trait2cap"+captain).val();
      captainData.trait3 = $("#trait3cap"+captain).val();
      captainData.trait4 = $("#trait4cap"+captain).val();
      captainData.trait1index = $("#trait1cap"+captain).prop("selectedIndex");
      captainData.trait2index = $("#trait2cap"+captain).prop("selectedIndex");
      captainData.trait3index = $("#trait3cap"+captain).prop("selectedIndex");
      captainData.trait4index = $("#trait4cap"+captain).prop("selectedIndex");
      return captainData;
  }
  
  function putCaptainData(captainData) {
      $("#cap"+captainData.number).removeClass("selecteditem");
      $("#cap"+captainData.number).removeClass("forceditem");
      if (captainData.selected) {
          $("#cap"+captainData.number).addClass("selecteditem");
      }
      if (captainData.forced) {
          $("#cap"+captainData.number).addClass("forceditem");
      }
      $("#cap"+captainData.number).attr('data-current-ship', getIntOrZero(captainData.currentship));
      $("#cap"+captainData.number+" img.shipimage").attr('src',Path+'Pop_Ship_'+getIntOrZero(captainData.currentship)+'.png');
      if(captainData != 0)
      {
          $("#cap"+captainData.number+"a").attr('checked', captainData.active == true);
          $("#cap"+captainData.number+"f").attr('checked', captainData.force == true);
          $("#cap"+captainData.number+"n").val(captainData.name);
          $("#cap"+captainData.number+"l").val(getIntOrZero(captainData.level));
          $("#cap"+captainData.number+"m").val(getIntOrZero(captainData.morale));
          $("#cap"+captainData.number+"c").val(getIntOrZero(captainData.combat));
          $("#cap"+captainData.number+"s").val(getIntOrZero(captainData.seafaring));
          var traitIndex = 0;
          if (captainData.traitLeader == true) {
              traitIndex++;
              $("#trait"+traitIndex+"cap"+captainData.number).val("Leader")
          }
          if (captainData.traitTactician == true) {
              traitIndex++;
              $("#trait"+traitIndex+"cap"+captainData.number).val("Tactician")
          }
          if (captainData.traitSeafriend == true) {
              traitIndex++;
              $("#trait"+traitIndex+"cap"+captainData.number).val("Seafriend")
          }
          if (captainData.traitGloombringer == true) {
              traitIndex++;
              $("#trait"+traitIndex+"cap"+captainData.number).val("Gloombringer")
          }
          if (captainData.traitLiability == true) {
              traitIndex++;
              $("#trait"+traitIndex+"cap"+captainData.number).val("Liability")
          }
          if (captainData.traitStormMagnet == true) {
              traitIndex++;
              $("#trait"+traitIndex+"cap"+captainData.number).val("Storm Magnet")
          }
      
          if (traitIndex == 0) {
              $("#trait1cap"+captainData.number).val(captainData.trait1);
              $("#trait2cap"+captainData.number).val(captainData.trait2);
              $("#trait3cap"+captainData.number).val(captainData.trait3);
              $("#trait4cap"+captainData.number).val(captainData.trait4);
          }
      }
  }
  
  function getCrewData(crew) {
      var crewData = new Object();
      crewData.selected = $("#crew"+crew).hasClass('selecteditem');
      crewData.forced = $("#crew"+crew).hasClass('forceditem');
      crewData.currentship = $("#crew"+crew).attr('data-current-ship')
      crewData.active = $("#crew"+crew+"a").is(':checked');
      crewData.force = $("#crew"+crew+"f").is(':checked');
      crewData.select = $("#crew"+crew+"z").val();
      crewData.selectindex = $("#crew"+crew+"z").prop("selectedIndex");
      crewData.number = $("#crew"+crew+"z").attr('data-crew-number')
      crewData.level = $("#crew"+crew+"l").val();
      crewData.morale = $("#crew"+crew+"m").val();
      crewData.combat = $("#crew"+crew+"c").val();
      crewData.seafaring = $("#crew"+crew+"s").val();
      crewData.trait1 = $("#trait1crew"+crew).val();
      crewData.trait2 = $("#trait2crew"+crew).val();
      crewData.trait3 = $("#trait3crew"+crew).val();
      crewData.trait4 = $("#trait4crew"+crew).val();
      crewData.trait1index = $("#trait1crew"+crew).prop("selectedIndex");
      crewData.trait2index = $("#trait2crew"+crew).prop("selectedIndex");
      crewData.trait3index = $("#trait3crew"+crew).prop("selectedIndex");
      crewData.trait4index = $("#trait4crew"+crew).prop("selectedIndex");
      return crewData;
  }
  
  function putCrewData(crewData) {
      $("#crew"+crewData.number).removeClass("selecteditem");
      $("#crew"+crewData.number).removeClass("forceditem");
      if (crewData.selected) {
          $("#crew"+crewData.number).addClass("selecteditem");
      }
      if (crewData.forced) {
          $("#crew"+crewData.number).addClass("forceditem");
      }
      $("#crew"+crewData.number).attr('data-current-ship', getIntOrZero(crewData.currentship));
      $("#crew"+crewData.number+" img.shipimage").attr('src',Path+'Pop_Ship_'+getIntOrZero(crewData.currentship)+'.png');
      $("#crew"+crewData.number+"a").attr('checked', crewData.active == true);
      $("#crew"+crewData.number+"f").attr('checked', crewData.force == true);
      $("#crew"+crewData.number+"z").val(crewData.select);
      $("#crew"+crewData.number+"l").val(getIntOrZero(crewData.level));
      $("#crew"+crewData.number+"m").val(getIntOrZero(crewData.morale));
      $("#crew"+crewData.number+"c").val(getIntOrZero(crewData.combat));
      $("#crew"+crewData.number+"s").val(getIntOrZero(crewData.seafaring));
      $("#trait1crew"+crewData.number).val(crewData.trait1);
      $("#trait2crew"+crewData.number).val(crewData.trait2);
      $("#trait3crew"+crewData.number).val(crewData.trait3);
      $("#trait4crew"+crewData.number).val(crewData.trait4);
  }
  
  function saveCalculatorData() {
      if (typeof(localStorage) === 'undefined') {
          return;
      }
  
      localStorage.setItem('saveVoyageData', JSON.stringify(getVoyageData()));
      localStorage.setItem('saveCaptainData', JSON.stringify(getAllCaptainData()));
      localStorage.setItem('saveCrewData', JSON.stringify(getAllCrewData()));
      localStorage.setItem('saveShipUpdates', JSON.stringify(getShipUpdates()));
  }
  
  function getVoyageData() {
  
      var saveVoyageData = new Object();
      saveVoyageData.moraleTarget = $("#morale").val();
      saveVoyageData.combatTarget = $("#combat").val();
      saveVoyageData.seafaringTarget = $("#seafaring").val();
      saveVoyageData.minCrew = $("#minCrew").is(':checked');
      saveVoyageData.shipwright = $("#shipwright").val();
      return saveVoyageData;
  }
  
  function getAllCaptainData() {
      var saveCaptainData = new Object();
      var captainArray = new Array();
      for (captain=1; captain<=5; captain++) {
          captainArray.push(getCaptainData(captain));
      }
      saveCaptainData.captainArray = captainArray;
      return saveCaptainData;
  }
  
  function getAllCrewData() {
      var saveCrewData = new Object();
      saveCrewData.crewtoggle = $("#crewtoggle").val();
      var crewArray = new Array();
      for (crewNum=1; crewNum<=25; crewNum++) {
          crewArray.push(getCrewData(crewNum));
      }
      saveCrewData.crewArray = crewArray;
      return saveCrewData;
  }
  
  function getShipUpdates() {
      var saveShipUpdates = new Object();
      var ramUpdates = new Array();
      $("input[name=ram]").each(function(index) {
          ramUpdates[index] = $(this).is(':checked');
      });
      var deckUpdates = new Array();
      $("input[name=deck]").each(function(index) {
          deckUpdates[index] = $(this).is(':checked');
      });
      var hullUpdates = new Array();
      $("input[name=hull]").each(function(index) {
          hullUpdates[index] = $(this).is(':checked');
      });
      saveShipUpdates.ramUpdates = ramUpdates;
      saveShipUpdates.deckUpdates = deckUpdates;
      saveShipUpdates.hullUpdates = hullUpdates;
      saveShipUpdates.hideUpgrades = $("#hideupgrades").is(":checked");
      return saveShipUpdates;
  }
  
  function getAllDataAsJson() {
      var allData = new Object();
      allData.voyageData = getVoyageData();
      allData.captainData = getAllCaptainData();
      allData.crewData = getAllCrewData();
      allData.shipUpdates = getShipUpdates();
      return JSON.stringify(allData);
  }
  
  function loadCalculatorData() {
      if (typeof(localStorage) === 'undefined') {
          $("#ram0").attr('checked', true);
          $("#deck0").attr('checked', true);
          $("#hull0").attr('checked', true);
          return;
      }
      
      setVoyageData(JSON.parse(localStorage.getItem('saveVoyageData')));
      setCaptainData(JSON.parse(localStorage.getItem('saveCaptainData')));
      setCrewData(JSON.parse(localStorage.getItem('saveCrewData')));
      setShipUpdates(JSON.parse(localStorage.getItem('saveShipUpdates')));
  }
  
  function setVoyageData(saveVoyageData) {
      if(saveVoyageData == null)
      {
          $("#morale").val(0);
          $("#combat").val(0);
          $("#seafaring").val(0);
          $("#shipwright").val(0);
      }
      else
      {
          $("#morale").val(getIntOrZero(saveVoyageData.moraleTarget));
          $("#combat").val(getIntOrZero(saveVoyageData.combatTarget));
          $("#seafaring").val(getIntOrZero(saveVoyageData.seafaringTarget));
          $("#minCrew").attr('checked', saveVoyageData.minCrew);
          $("#shipwright").val(saveVoyageData.shipwright);
      }		
  }
  
  function setCaptainData(saveCaptainData) {
      if(saveCaptainData != null)
      {
          $.each(saveCaptainData.captainArray, function(index, captainData) {
              putCaptainData(captainData);
          });	
      }
  }
  
  function setCrewData(saveCrewData) {
      if(saveCrewData != null)
      {
          $("#crewtoggle").attr('checked', saveCrewData.crewtoggle);
          $.each(saveCrewData.crewArray, function(index, crewData) {
              putCrewData(crewData);
          });
      }
  }
  
  function setShipUpdates(saveShipUpdates) {
      if(saveShipUpdates != null)
      {
          $.each(saveShipUpdates.ramUpdates, function(index, isChecked) {
              $("#ram"+index).attr('checked', isChecked);
          });
          $.each(saveShipUpdates.deckUpdates, function(index, isChecked) {
              $("#deck"+index).attr('checked', isChecked);
          });
          $.each(saveShipUpdates.hullUpdates, function(index, isChecked) {
              $("#hull"+index).attr('checked', isChecked);
          });
          $("#hideupgrades").attr('checked', saveShipUpdates.hideUpgrades);
          showUpgrades(saveShipUpdates.hideUpgrades);
      }
  }
  
  function loadAllData(parsedData) {
      console.log("2");
      setVoyageData(parsedData.voyageData);
      setCaptainData(parsedData.captainData);
      setCrewData(parsedData.crewData);
      setShipUpdates(parsedData.shipUpdates);
      setAllCrewImages();
  }
  
  function eraseCalculatorData() {
      if (typeof(localStorage) === 'undefined') {
          return;
      }
      localStorage.setItem('saveVoyageData', '');
      localStorage.setItem('saveCaptainData', '');
      localStorage.setItem('saveCrewData', '');
      localStorage.setItem('saveShipUpdates', '');
  }
  
  function displayWarning() {
      if (typeof(localStorage) === 'undefined') {
          return;
      }
      if (localStorage.getItem('hidePopWarning')) {
          $('#warning').hide();
      } else {
          $("#warning").html("<p><b>Note:</b> The update of Jan 7th 2014 has changed the stats of the 'Oxhead and Horseface' crew member. Please make sure to manually update the stats of any of these crew members that you have available on your crew in this calculator. <br><i>Click on this message to hide it forever</i></p>");
          $("#warning").css('background-color', 'red');
          $("#warning").css('color', 'white');
          $("#warning").css('padding', '12px');
          $('#warning').show();
      }
  }