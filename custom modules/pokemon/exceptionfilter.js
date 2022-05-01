function drawException(id, currentHour, guess){
  var displayName = "u fucked up";
  var isItShiny = false;
  var dayTime = "";

  if(currentHour >= 21){dayTime = "midnight"};
  if(currentHour < 21){dayTime = "dusk"};
  if(currentHour < 17){dayTime = "midday"};
  if(currentHour < 9){dayTime = "dawn"};
  if(currentHour < 5){dayTime = "midnight"};

  if(dayTime == ""){
    dayTime = "midday";
    console.log("didn't fetch time");
    };

    {
      if(id==29){
        if("nidoran"==guess){
          isItShiny = true
        }
        name = "nidoranf";
        displayName = "Nidoran";
      }
      if(id==32){
        if("nidoran"==guess){
          isItShiny = true
        }
        name = "nidoranm";
        displayName = "Nidoran";

      }
      if(id==201){
        if("unown"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(28);

         if(isItShiny==true){
           if(variant== 1){
             name = "unown-a";
             displayName = "Unown";
           }
         }

         if(variant== 1){
           name = "unown";
           displayName = "Unown";
         }

         if(variant== 2){
           name = "unown-b";
           displayName = "Unown";
         }

         if(variant== 3){
           name = "unown-c";
           displayName = "Unown";
         }

         if(variant== 4){
           name = "unown-d";
           displayName = "Unown";
         }

         if(variant== 5){
           name = "unown-e";
           displayName = "Unown";
         }

         if(variant== 6){
           name = "unown-f";
           displayName = "Unown";
         }

         if(variant== 7){
           name = "unown-g";
           displayName = "Unown";
         }

         if(variant== 8){
           name = "unown-h";
           displayName = "Unown";
         }

         if(variant== 9){
           name = "unown-i";
           displayName = "Unown";
         }

         if(variant== 10){
           name = "unown-j";
           displayName = "Unown";
         }

         if(variant== 11){
           name = "unown-k";
           displayName = "Unown";
         }

         if(variant== 12){
           name = "unown-l";
           displayName = "Unown";
         }

         if(variant== 13){
           name = "unown-m";
           displayName = "Unown";
         }

         if(variant== 14){
           name = "unown-n";
           displayName = "Unown";
         }

         if(variant== 15){
           name = "unown-o";
           displayName = "Unown";
         }

         if(variant== 16){
           name = "unown-p";
           displayName = "Unown";
         }

         if(variant== 17){
           name = "unown-q";
           displayName = "Unown";
         }

         if(variant== 18){
           name = "unown-r";
           displayName = "Unown";
         }

         if(variant== 19){
           name = "unown-s";
           displayName = "Unown";
         }

         if(variant== 21){
           name = "unown-t";
           displayName = "Unown";
         }

         if(variant== 22){
           name = "unown-u";
           displayName = "Unown";
         }

         if(variant== 23){
           name = "unown-v";
           displayName = "Unown";
         }

         if(variant== 24){
           name = "unown-w";
           displayName = "Unown";
         }

         if(variant== 25){
           name = "unown-x";
           displayName = "Unown";
         }

         if(variant== 26){
           name = "unown-y";
           displayName = "Unown";
         }

         if(variant== 27){
           name = "unown-z";
           displayName = "Unown";
         }

         if(variant== 28){
           name = "unown-question";
           displayName = "Unown";
         }

         if(variant== 29){
           name = "unown-exclamation";
           displayName = "Unown";
         }
      }
      if(id==351){
        if("castform"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(4);

         if(variant== 1){
           name = "castform";
           displayName = "Castform";
         }
         if(variant== 2){
           name = "castform-sunny";
           displayName = "Castform Sunny Form";
         }
         if(variant== 3){
           name = "castform-snowy";
           displayName = "Castform Snowy Form";
         }
         if(variant== 4){
           name = "castform-rainy";
           displayName = "Castform Rainy";
         }
      }
      if(id==386){
        if("deoxys"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(4);

         if(variant== 1){
           name = "deoxys";
           displayName = "Deoxys";
         }
         if(variant== 2){
           name = "deoxys-speed";
           displayName = "Deoxys Speed";
         }
         if(variant== 3){
           name = "deoxys-defense";
           displayName = "Deoxys Defense";
         }
         if(variant== 4){
           name = "deoxys-attack";
           displayName = "Deoxys Attack";
         }
      }
      if(id==413){
        if("burmy"==guess){
          isItShiny = true
        }
        name = "burmy";
        displayName = "burmy";
      }
      if(id==422){
        if("shellos"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(2);

         if(variant== 1){
           name = "shellos";
           displayName = "Shellos";
         }
         if(variant== 2){
           name = "shellos-east";
           displayName = "Shellos";
         }
      }
      if(id==423){
        if("gastrodon"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(2);

         if(variant== 1){
           name = "gastrodon";
           displayName = "Gastrodon";
         }
         if(variant== 2){
           name = "gastrodon-east";
           displayName = "Gastrodon";
         }
      }
      if(id==479){
        if("rotom"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(6);

         if(variant== 1){
           name = "rotom";
           displayName = "Rotom";
         }
         if(variant== 2){
           name = "rotom-wash";
           displayName = "Rotom";
         }
         if(variant== 3){
           name = "rotom-mow";
           displayName = "Rotom";
         }
         if(variant== 4){
           name = "rotom-heat";
           displayName = "Rotom";
         }
         if(variant== 5){
           name = "rotom-frost";
           displayName = "Rotom";
         }
         if(variant== 6){
           name = "rotom-fan";
           displayName = "Rotom";
         }
      }
      if(id==487){
        if("giratina"==guess){
          isItShiny = true
        }
        name = "giratina";
        displayName = "Giratina";

      }
      if(id==492){
        if("shaymin"==guess){
          isItShiny = true
        }
        name = "shaymin";
        displayName = "Shaymin";

      }
      if(id==493){
        if("arceus"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(18);

         if(variant== 1){
           name = "arceus";
           displayName = "Arceus";
         }

         if(variant== 2){
           name = "arceus-bug";
           displayName = "Arceus Bug-Type";
         }

         if(variant== 3){
           name = "arceus-dark";
           displayName = "Arceus Dark-Type";
         }

         if(variant== 4){
           name = "arceus-dragon";
           displayName = "Arceus Dragon-Type";
         }

         if(variant== 5){
           name = "arceus-electric";
           displayName = "Arceus Electric-Type";
         }

         if(variant== 6){
           name = "arceus-fairy";
           displayName = "Arceus Fairy-Type";
         }

         if(variant== 7){
           name = "arceus-fighting";
           displayName = "Arceus Fighting-Type";
         }

         if(variant== 8){
           name = "arceus-fire";
           displayName = "Arceus Fire-Type";
         }

         if(variant== 9){
           name = "arceus-flying";
           displayName = "Arceus Flying-Type";
         }

         if(variant== 10){
           name = "arceus-ghost";
           displayName = "Arceus Ghost-Type";
         }

         if(variant== 11){
           name = "arceus-grass";
           displayName = "Arceus Grass-Type";
         }

         if(variant== 12){
           name = "arceus-ground";
           displayName = "Arceus Ground-Type";
         }

         if(variant== 13){
           name = "arceus-ice";
           displayName = "Arceus Ice-Type";
         }

         if(variant== 14){
           name = "arceus-poison";
           displayName = "Arceus Poison-Type";
         }

         if(variant== 15){
           name = "arceus-psychic";
           displayName = "Arceus Psychic-Type";
         }

         if(variant== 16){
           name = "arceus-rock";
           displayName = "Arceus Rock-Type";
         }

         if(variant== 17){
           name = "arceus-steel";
           displayName = "Arceus Steel-Type";
         }

         if(variant== 18){
           name = "arceus-water";
           displayName = "Arceus Water-Type";
         }
      }
      if(id==550){
        if("basculin"==guess){
          isItShiny = true
        }
        name = "basculin";
        displayName = "Basculin";
      }
      if(id==555){
        if("darmanitan"==guess){
          isItShiny = true
        }
        name = "darmanitan";
        displayName = "Darmanitan";
      }
      if(id==585){
        if("deerling"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(4);

         if(variant== 1){
           name = "deerling";
           displayName = "Deerling";
         }
         if(variant== 2){
           name = "deerling-summer";
           displayName = "Deerling";
         }
         if(variant== 3){
           name = "deerling-autumn";
           displayName = "Deerling";
         }
         if(variant== 4){
           name = "deerling-summer";
           displayName = "Deerling";
         }
      }
      if(id==586){
        if("sawsbuck"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(4);

         if(variant== 1){
           name = "sawsbuck";
           displayName = "Sawsbuck";
         }
         if(variant== 2){
           name = "sawsbuck-summer";
           displayName = "Sawsbuck";
         }
         if(variant== 3){
           name = "sawsbuck-autumn";
           displayName = "Sawsbuck";
         }
         if(variant== 4){
           name = "sawsbuck-summer";
           displayName = "Sawsbuck";
         }
      }
      if(id==641){
        if("tornadus"==guess){
          isItShiny = true
        }
        name = "tornadus";
        displayName = "Tornadus";

      }
      if(id==642){
        if("thundurus"==guess){
          isItShiny = true
        }
        name = "thundurus";
        displayName = "Thundurus";

      }
      if(id==645){
        if("landorus"==guess){
          isItShiny = true
        }
        name = "landorus";
        displayName = "Landorus";

      }
      if(id==647){
        if("keldeo"==guess){
          isItShiny = true
        }
        name = "keldeo";
        displayName = "Keldeo";

      }
      if(id==648){
        if("meloetta"==guess){
          isItShiny = true
        }
        name = "meloetta";
        displayName = "Meloetta";

      }
      if(id==666){
        if("vivillon"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(20);

         if(variant== 1){
           name = "vivillon";
           displayName = "Vivillon Meadow Pattern";
         }

         if(variant== 2){
           name = "vivillon-archipelago";
           displayName = "Vivillon Archipelago Pattern";
         }

         if(variant== 3){
           name = "vivillon-continental";
           displayName = "Vivillon Continental Pattern";
         }

         if(variant== 4){
           name = "vivillon-elegant";
           displayName = "Vivillon Elegant Pattern";
         }

         if(variant== 5){
           name = "vivillon-fancy";
           displayName = "Vivillon Fancy Pattern";
         }

         if(variant== 6){
           name = "vivillon-garden";
           displayName = "Vivillon Garden Pattern";
         }

         if(variant== 7){
           name = "vivillon-highplains";
           displayName = "Vivillon High Plains Pattern";
         }

         if(variant== 8){
           name = "vivillon-icysnow";
           displayName = "Vivillon Icy Snow Pattern";
         }

         if(variant== 9){
           name = "vivillon-jungle";
           displayName = "Vivillon Jungle Pattern";
         }

         if(variant== 10){
           name = "vivillon-marine";
           displayName = "Vivillon Marine Pattern";
         }

         if(variant== 11){
           name = "vivillon-modern";
           displayName = "Vivillon Modern Pattern";
         }

         if(variant== 12){
           name = "vivillon-monsoon";
           displayName = "Vivillon Monsoon Pattern";
         }

         if(variant== 13){
           name = "vivillon-ocean";
           displayName = "Vivillon Ocean Pattern";
         }

         if(variant== 14){
           name = "vivillon-pokeball";
           displayName = "Vivillon Pokeball Pattern";
         }

         if(variant== 15){
           name = "vivillon-polar";
           displayName = "Vivillon Polar Pattern";
         }

         if(variant== 16){
           name = "vivillon-river";
           displayName = "Vivillon River Pattern";
         }

         if(variant== 17){
           name = "vivillon-sandstorm";
           displayName = "Vivillon Sandstorm Pattern";
         }

         if(variant== 18){
           name = "vivillon-savanna";
           displayName = "Vivillon Savanna Pattern";
         }

         if(variant== 19){
           name = "vivillon-sun";
           displayName = "Vivillon Sun Pattern";
         }

         if(variant== 20){
           name = "vivillon-tundra";
           displayName = "Vivillon Tundra Pattern";
         }
      }
      if(id==681){
        if("aegislash"==guess){
          isItShiny = true
        }
        name = "aegislash";
        displayName = "Aegislash";

      }
      if(id==710){
        if("pumpkaboo"==guess){
          isItShiny = true
        }
        name = "pumpkaboo-large";
        displayName = "Pumpkaboo";

      }
      if(id==711){
        if("gourgeist"==guess){
          isItShiny = true
        }
        name = "gourgeist-large";
        displayName = "Gourgeist";

      }
      if(id==718){
        if("zygarde"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(3);

         if(variant== 1){
           name = "zygarde-10";
           displayName = "Zygarde 10%";
         }
         if(variant== 2){
           name = "zygarde";
           displayName = "Zygarde 50%";
         }
         if(variant== 3){
           name = "zygarde-complete";
           displayName = "Zygarde  :100:";
         }
      }
      if(id==720){
        if("hoopa"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(2);

         if(variant== 1){
           name = "hoopa";
           displayName = "Hoopa";
         }
         if(variant== 2){
           name = "hoopa-unbound";
           displayName = "Hoopa Unbound";
         }
      }
      if(id==741){
        if("hoopa"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(4);

         if(variant== 1){
           name = "oricorio";
           displayName = "Oricorio Baile Style";
         }
         if(variant== 2){
           name = "oricorio-pompom";
           displayName = "Oricorio Pom-Pom Style";
         }
         if(variant== 3){
           name = "oricorio-pau";
           displayName = "Oricorio Pa'u Style";
         }
         if(variant== 4){
           name = "oricorio-sensu";
           displayName = "Oricorio Sensu Style";
         }
      }
      if(id==745){
        if("lycanroc"==guess){
          isItShiny = true
        }
         if(dayTime == "midday"){
           name = "lycanroc";
           displayName = "Lycanroc";
         }
         if(dayTime == "dusk"){
           name = "lycanroc-dusk";
           displayName = "Lycanroc";
         }
       if(dayTime == "dawn"){
           name = "lycanroc-dusk";
           displayName = "Lycanroc";
         }
         if(dayTime == "midnight"){
           name = "lycanroc-midnight";
           displayName = "Lycanroc";
         }
      }
      if(id==746){
        if("wishiwashi"==guess){
          isItShiny = true
        }
        name = "wishiwashi";
        displayName = "Wishiwashi";
      }
      if(id==773){
        if("silvally"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(18);

         if(variant== 1){
           name = "silvally";
           displayName = "Silvally";
         }

         if(variant== 2){
           name = "silvally-bug";
           displayName = "Silvally Bug-Type";
         }

         if(variant== 3){
           name = "silvally-dark";
           displayName = "Silvally Dark-Type";
         }

         if(variant== 4){
           name = "silvally-dragon";
           displayName = "Silvally Dragon-Type";
         }

         if(variant== 5){
           name = "silvally-electric";
           displayName = "Silvally Electric-Type";
         }

         if(variant== 6){
           name = "silvally-fairy";
           displayName = "Silvally Fairy-Type";
         }

         if(variant== 7){
           name = "silvally-fighting";
           displayName = "Silvally Fighting-Type";
         }

         if(variant== 8){
           name = "silvally-fire";
           displayName = "Silvally Fire-Type";
         }

         if(variant== 9){
           name = "silvally-flying";
           displayName = "Silvally Flying-Type";
         }

         if(variant== 10){
           name = "silvally-ghost";
           displayName = "Silvally Ghost-Type";
         }

         if(variant== 11){
           name = "silvally-grass";
           displayName = "Silvally Grass-Type";
         }

         if(variant== 12){
           name = "silvally-ground";
           displayName = "Silvally Ground-Type";
         }

         if(variant== 13){
           name = "silvally-ice";
           displayName = "Silvally Ice-Type";
         }

         if(variant== 14){
           name = "silvally-poison";
           displayName = "Silvally Poison-Type";
         }

         if(variant== 15){
           name = "silvally-psychic";
           displayName = "Silvally Psychic-Type";
         }

         if(variant== 16){
           name = "silvally-rock";
           displayName = "Silvally Rock-Type";
         }

         if(variant== 17){
           name = "silvally-steel";
           displayName = "Silvally Steel-Type";
         }

         if(variant== 18){
           name = "silvally-water";
           displayName = "Silvally Water-Type";
         }
      }
      if(id==774){
        if("minior"==guess){
          isItShiny = true
        }
        name = "minior-meteor";
        displayName = "Minior";
      }
      if(id==778){
        if("mimikyu"==guess){
          isItShiny = true
        }
        name = "mimikyu";
        displayName = "Mimikyu";
      }
      if(id==782){
        if("jangmoo"==guess){
          isItShiny = true
        }
        if("jangmo-o"==guess){
          isItShiny = true
        }

        name = "jangmoo";
        displayName = "Jangmo-o";
      }
      if(id==783){
        if("hakamoo"==guess){
          isItShiny = true
        }
        if("hakamo-o"==guess){
          isItShiny = true
        }

        name = "hakamoo";
        displayName = "Hakamo-o";
      }
      if(id==784){
        if("kommoo"==guess){
          isItShiny = true
        }
        if("kommo-o"==guess){
          isItShiny = true
        }

        name = "kommoo";
        displayName = "Kommo-o";
      }
      if(id==800){
        if("necrozma"==guess){
          isItShiny = true
        }

         if(dayTime == "midday"){
           name = "necrozma";
           displayName = "Necrozma";
         }
       if(dayTime == "midnight"){
           name = "necrozma";
           displayName = "Necrozma";
         }
         if(dayTime == "dusk"){
           name = "necrozma-duskmane";
           displayName = "Necrozma Dusk Mane";
         }
         if(dayTime == "dawn"){
           name = "necrozma-dawnwings";
           displayName = "Necrozma Dawn Wings";
         }
      }
      if(id==845){
        if("cramorant"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(3);

         if(variant== 1){
           name = "cramorant";
           displayName = "Cramorant";
         }
         if(variant== 2){
           name = "cramorant-gulping";
           displayName = "Cramorant";
         }
         if(variant== 3){
           name = "cramorant-gorging";
           displayName = "Cramorant";
         }
      }
      if(id==849){
        if("toxtricity"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(2);

         if(variant== 1){
           name = "toxtricity";
           displayName = "Toxtricity Amped Form";
         }
         if(variant== 2){
           name = "toxtricity-lowkey";
           displayName = "Toxtricity Low Key Form";
         }

      }
      if(id==869){
        if("alcremie"==guess){
          isItShiny = true
        }
        name = "alcremie";
        displayName = "Alcremie";
      }
      if(id==875){
        if("eiscue"==guess){
          isItShiny = true
        }
        name = "eiscue";
        displayName = "Eiscue";
      }
      if(id==877){
        if("morpeko"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(2);

         if(variant== 1){
           name = "morpeko";
           displayName = "Morpeko";
         }
         if(variant== 2){
           name = "morpeko-hangry";
           displayName = "Morpeko";
         }

      }
      if(id==892){
        if("urshifu"==guess){
          isItShiny = true
        }
        name = "urshifu";
        displayName = "Urshifu";
      }
      if(id==898){
        if("calyrex"==guess){
          isItShiny = true
        }
         var variant = getRandomInt(3);

         if(variant== 1){
           name = "calyrex";
           displayName = "Calyrex";
         }
         if(variant== 2){
           name = "calyrex-ice";
           displayName = "Ice Rider Calyrex";
         }
         if(variant== 3){
           name = "calyrex-shadow";
           displayName = "Shadow Rider Calyrex";
         }
      }
    }

    return [name, displayName, isItShiny, variant];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

module.exports = { drawException };
