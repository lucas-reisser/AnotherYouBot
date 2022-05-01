var Discord = require('discord.io');

var logger = require('winston');

var https = require('https');

var auth = require('./auth.json');
var adminID = auth.adminID;

const exceptionHandler = require("./custom modules/pokemon/exceptionfilter.js");
var blackJson = require('./custom modules/pokemon/blacklist.json');
var blacklist = blackJson.blacklist;

var body = require("./custom modules/body.json");
var singleParts = body.singleParts;
var multipleParts = body.multipleParts;
var adjectives = body.adjectives;

var sadmemes = require('./custom modules/sadmemes.json');
var sadge = sadmemes.memes;
var emojis = sadmemes.emojis;

const { copyFileSync } = require('fs');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

var cooldownPerPerson = {};

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.token,
autorun: true

});

bot.on('ready', function (evt) {

console.log("Connected and logged in as: " + bot.username);

});

bot.on('message', async function (user, userID, channelID, message, evt) {

if (message.substring(0, 1) == '-') {
  var args = message.substring(1).split(' ');
  var cmd = args[0];
  var mention = '<@'+userID+'>';
  args = args.splice(1);

  switch(cmd) {
    case 'am':
    console.log("")
    console.log("Detected \"am\" request by \"" + user + "\" | " + userID);
    checkMessage(channelID);
    break;

    case 'bing':
    console.log("")
    console.log("Detected bing request by \"" + user + "\" | " + userID);
    bingChilling(channelID);
    break;

    case 'bruder':
    console.log("")
    console.log("Detected bruder request by \"" + user + "\" | " + userID);
    bruderMussLos(channelID);
    break;

		case 'debug':
    console.log("")
    console.log("Detected debug draw request by \"" + user + "\" | " + userID);
    if(adminID.includes(userID)){
      debugPokemon(userID,channelID);
    }
		break;

    case 'fact':
    console.log("")
    console.log("Detected fact request by \"" + user + "\" | " + userID);
    randomFact(channelID);
    break;

    case 'fade':
    console.log("")
    console.log("Detected fade request by \"" + user + "\" | " + userID);
    fadeGif(channelID);
    break;

    case 'help':
    console.log("")
    console.log("Detected help request by \"" + user + "\" | " + userID);
    helpRequest(channelID);
    break;

    case 'match':
    console.log("")
    console.log("Deteced match request by \"" + user + "\" | " + userID);
    matchMaker(channelID, message);
    break;

    case 'meme':
    console.log("");
    console.log("Deteced meme request by \"" + user + "\" | " + userID);
    pickMeme(channelID);
    break;

    case 'pokemon':
    console.log("")
    console.log("Detected draw request by \"" + user + "\" | " + userID);
    drawAPokemon(userID,channelID)
    break;

    case 'pp':
    console.log("")
    console.log("Deteced pp size request by \"" + user + "\" | " + userID);
    ppSize(channelID);
    break;

    case 'sad':
    console.log("")
    console.log("Detected sad request by \"" + user + "\" | " + userID);
    dontBeSad(channelID);
    break;

    case 'thirst':
    console.log("")
    console.log("Detected thirst request by \"" + user + "\" | " + userID);
    thirstBot(channelID);
    break;

    case 'vallah':
    console.log("")
    console.log("Detected vallah request by \"" + user + "\" | " + userID);
    vallahBruder(userID, channelID);
    break;

    case 'valoranked':
    console.log("")
    console.log("Detected sad request by \"" + user + "\" | " + userID);
    dontBeSad(channelID);
    break;
  }
}

function bruderMussLos(channelID){

	var tmp = getRandomInt(2);
	var selectedMessage = "";

	if(tmp==1){
		selectedMessage = "muss los :man_running:";
	}
	else{
		selectedMessage = "was los :man_shrugging:";
	}

	bot.sendMessage({
    to: channelID,
    message: selectedMessage
  });

	logResponse("");
}

function vallahBruder(userID, channelID){

	bot.sendMessage({
		to: channelID,
		message: 'Vallah Bruder ' + mention
	});

	logResponse("");
}

function checkMessage(channelID){
  var rawMessage = message.substring(1).split(' ');
  rawMessage[1] = rawMessage[1].toLowerCase();
  rawMessage[2] = rawMessage[2].toLowerCase();

  if(rawMessage[1] == "i")
  {
    if(rawMessage[2] == "uwu?" || rawMessage[2] == "uwu")
    {
      var uwuValue = getRandomInt(100);
      var emoji = "";

      if(uwuValue <= 100){emoji = ":pleading_face:"};
      if(uwuValue <= 80){emoji = ":relieved:"};
      if(uwuValue <= 60){emoji = ":hushed:"};
      if(uwuValue <= 40){emoji = ":cry:"};
      if(uwuValue <= 20){emoji = ":sob:"};

      sendEmbedMessage(channelID, 10485800, "" , "you are " + uwuValue + "% uwu " + emoji);

      logResponse(" with " + uwuValue + "% uwu");
    }
  }
}

function bingChilling(channelID){
  sendEmbedMessage(channelID, 16777215,"https://i1.sndcdn.com/artworks-7phBaUdSuSD2OydH-SmAgcg-t500x500.jpg", "");
  logResponse("");
}

function thirstBot(channelID){
  var rawMessage = message.substring(1).split(' ');
  var newMention = mention;
  if (rawMessage[1] != null){
    newMention = rawMessage[1];
  }
  var singleOrMultiple = getRandomInt(4);

  if(singleOrMultiple != 4){
    var chosenPart = singleParts[getRandomInt(singleParts.length - 1)];
    var chosenAdjective = adjectives[getRandomInt(adjectives.length - 1)];

    sendEmbedMessage(channelID, 16738231, "", newMention + ", your " + chosenPart + " is so " + chosenAdjective + " :smirk: :sweat_drops:");
    logResponse(" with " + chosenPart + " and " + chosenAdjective);
  }

  if(singleOrMultiple == 4){
    var chosenPart = multipleParts[getRandomInt(multipleParts.length - 1)];
    var chosenAdjective = adjectives[getRandomInt(adjectives.length - 1)];

    sendEmbedMessage(channelID, 16738231, "", newMention + ", your " + chosenPart + " are so " + chosenAdjective + " :smirk: :sweat_drops:");
    logResponse(" with " + chosenPart + " and " + chosenAdjective);
  }
}

function ppSize(channelID){
  var size = getRandomInt(3429);
  var calcSize = size / 100;
  var emoji = emojis[getRandomInt(emojis.length - 1)];
  sendEmbedMessage(channelID, 0, "", mention + ", your pp messures " + calcSize + "cm " + emoji);
  logResponse(" with " + calcSize + "cm");
}

function fadeGif(channelID){
  sendEmbedMessage(channelID, 0, "https://media.discordapp.net/attachments/960937562816512040/968626424242110474/superUniqueClip.gif", "");
  logResponse("");
}

function helpRequest(channelID){
  var newMessage = "-am i uwu or -am i uwu? | tells you your uwu level\n";
  newMessage += "\n -bing | shows you wide cena eating some bing chilling\n";
  newMessage += "\n -bruder | tells your either \"muss los\" or \"was los\"\n";
  newMessage += "\n -fact | shows you a random fact\n";
  newMessage += "\n -fade | shows you fade's skillcap\n";
  newMessage += "\n -help | shows you this list\n";
  newMessage += "\n -match | tag someone to find out your match rate\n";
  newMessage += "\n -pokemon | (work in progress) draw a pokemon. if you add a pokemon name, you guess to draw it. if you're right, you get it shiny\n";
  newMessage += "\n -pp | tells you your dicksize\n";
  newMessage += "\n -sad or -valoranked | shows you a \"don't be sad\"-meme\n";
  newMessage += "\n -thirst | makes the bot thirst for you\n";
  newMessage += "\n -vallah | tells you \"vallah bruder\"\n";

  sendEmbedMessage(channelID, 0, "", newMessage);
  logResponse("");
}

function dontBeSad(channelID){
  var randomMeme = sadge[getRandomInt(sadge.length - 1)];
  sendEmbedMessage(channelID, 9830400,randomMeme, "");
  logResponse("");
}

function matchMaker(channelID, message){
  var rawMessage = message.substring(1).split(' ');
  var newMention = mention;
  var matchLevel = getRandomInt(100);
  if (rawMessage[1] != null){
    newMention = rawMessage[1];

    if(mention != newMention){
      sendEmbedMessage(channelID, 0, "", mention + " and " + newMention + "! You two match " + matchLevel + "%");
      logResponse(" with match");
    }
    else {
      sendEmbedMessage(channelID, 0, "", mention + " and " + newMention + "! You match yourself by 100%");
      logResponse(" with matching himself");
    }
  }
  else {
    sendEmbedMessage(channelID, 0, "", "Seems like, you don't want to match anyone");
    logResponse(" without match");
  }
}

//draw a pokemon (wip)
async function drawAPokemon(userID,channelID){

  var lastTimestamp = getCooldownForUser(userID);

  if(lastTimestamp==null){
    lastTimestamp = Date.now()-10800000;
  }

  var rawMessage = message.substring(1).split(' ');
  var guess = "";

  if(rawMessage[1]!=null){
    guess = rawMessage[1].toLowerCase();
  }

  if(Date.now()-lastTimestamp>10800000||lastTimestamp<0){
     var isItShiny = false;
     var id = getRandomPokemonID();

     if(checkForException(id) == true){
       var currentDate = new Date();
       var currentHour = currentDate.getHours();
       var pokemon = exceptionHandler.drawException(id, currentHour, guess);
       sentPokemonURL(pokemon[0], pokemon[1], pokemon[2], id, pokemon[3], userID, channelID, false);
     }
     else {
       getPokemonName(id, guess, userID, channelID, false);
     }
   }
   else{
     sendEmbedMessage(channelID, 3289650,"", "You have to wait another "+ millisToNormalTimeString(10800000-(Date.now()-lastTimestamp)) + " :smiling_face_with_tear:");
     logResponse(" with waiting time");
   }
 }

//draw a specific pokemon without cooldown (admin only) (wip)
async function debugPokemon(userID,channelID){

   var rawMessage = message.substring(1).split(' ');

   var guess = "";

   if(rawMessage[2]!=null){
     guess = rawMessage[2].toLowerCase();
   }

   if(rawMessage[1]!=null){
     var id = rawMessage[1];
     if(checkForException(id) == true){
       var currentDate = new Date();
       var currentHour = currentDate.getHours();
       var pokemon = exceptionHandler.drawException(id, currentHour, guess);
       sentPokemonURL(pokemon[0], pokemon[1], pokemon[2], id, userID, channelID, true);
     }
     else {
       getPokemonName(id, guess, userID, channelID, true);
     }
   }
   else{
     bot.sendMessage({
       to: channelID,
       message: 'enter valid id'
      });
      logResponse(" with \"enter valid id\"");
    }
  }

//checks if pokemon is on the blacklist, generates guess and hour (wip)
function checkForException(id){
  if(blacklist.includes(id)){
    return true;
  }
  else{
    return false;
  }
}

function randomFact(channelID){
  var fact;

  https.get('https://uselessfacts.jsph.pl/random.json?language=en',(res)=>{
      res.setEncoding('utf8');
      let returnData = '';

      res.on('data',(chunk)=>{
          returnData += chunk;
      })

      res.on('end',()=>{
          var obj = JSON.parse(returnData);
          fact = obj.text;

      sendEmbedMessage(channelID, 0, "", fact);
      logResponse(" with \"" + fact + "\"");
      })
    })
}

//gets pokemon name from pokeapi.co and checks if the guess was right
async function getPokemonName(id, guess,userID,channelID,isDebug){
      var name;
      var displayName;
      https.get('https://pokeapi.co/api/v2/pokemon/'+id,(res)=>{
          res.setEncoding('utf8');
          let returnData = '';

          res.on('data',(chunk)=>{
              returnData += chunk;
          })

          res.on('end',()=>{
              var obj = JSON.parse(returnData);
              name = obj.name;


  				if(name==guess){
            var isItShiny = true
  				}
          else {
            var isItShiny = false
          }

          displayName = name[0].toUpperCase() + name.substring(1);

          sentPokemonURL(name, displayName, isItShiny, id, 0, userID, channelID, isDebug);
          })
        })
  }

//sends draw out into the discord chat
async function sentPokemonURL(name, displayName, isItShiny, id, variant, userID, channelID, isDebug){
  if(isItShiny){
    sendEmbedMessage(channelID, 6826080,'https://play.pokemonshowdown.com/sprites/xyani-shiny/'+name+'.gif', mention + " | ◓ You've caught a :sparkles: _shiny_ :sparkles: **" + displayName + "** GG!");
    successfulDraw(id, displayName, userID, isDebug);
    var newCooldown = getCooldownForUser(userID);
    console.log("Save file: " + userID + " | " + id + " | " + variant + " | " + isItShiny + " | " + newCooldown);
  }
  else{
		sendEmbedMessage(channelID, 6826080,'https://play.pokemonshowdown.com/sprites/xyani/'+name+'.gif', mention + " | ◓ You've caught a **" + displayName + "** GG!");
		successfulDraw(id, displayName, userID, isDebug);
    var newCooldown = getCooldownForUser(userID);
    console.log("Save file: " + userID + " | " + id + " | " + variant + " | " + isItShiny + " | " + newCooldown);
  }
}

//sends out any embed message
function sendEmbedMessage(channelID, color, image, description){
  bot.sendMessage({
    to: channelID,
    message: '', // You can also send a message with the embed.
    embed:{
      color: color,
      footer: {text: ''},
      image: {url: image},
      description: description
    }
  });
}

function successfulDraw(id, correctedName, userID, isDebug){
	if(isDebug==false){
    setNewCooldownTimestampForUser(userID);
  }
	logResponse(" with " + id + " | " + correctedName);
}

function logResponse(logMessage){
	console.log("Responded" + logMessage);
}

function getRandomPokemonID(){
	return getRandomInt(898);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getCooldownForUser(userID){
    for(var key in cooldownPerPerson) {
        if(key==userID){
            return cooldownPerPerson[userID];
        }
    }
    return false;
 }

function setNewCooldownTimestampForUser(userID){
    cooldownPerPerson[userID] = Date.now();
 }

function millisToNormalTimeString(millis){
    let seconds = Math.floor(millis/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);

    minutes = minutes%60;
    seconds = seconds%60;

    return hours+":"+minutes+":"+seconds;
}

});
