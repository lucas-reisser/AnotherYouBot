var Discord = require('discord.io');

var logger = require('winston');

var https = require('https');

var auth = require('./auth.json');

var adminID = auth.adminID;

const exceptionHandler = require("./custom modules/pokemon/exceptionfilter.js");
var blackJson = require('./custom modules/pokemon/blacklist.json');
var blacklist = blackJson.blacklist;

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

console.log("Connected and logged in as: " + bot.username + " | " + bot.id);

});

bot.on('message', async function (user, userID, channelID, message, evt) {

if (message.substring(0, 1) == '-') {
  var args = message.substring(1).split(' ');
  var cmd = args[0];
  var mention = '<@'+userID+'>';
  args = args.splice(1);

  switch(cmd) {
    // !ping
		case 'debug':
    console.log("")
    console.log("Detected debug draw request by \"" + user + "\" | " + userID);
    if(adminID.includes(userID)){
      debugPokemon(userID,channelID);
    }
		break;
    case 'pokemon':
    console.log("")
    console.log("Detected draw request by \"" + user + "\" | " + userID);
    drawAPokemon(userID,channelID)
    break;

    case 'vallah':
    console.log("")
    console.log("Detected vallah request by \"" + user + "\" | " + userID);
    vallahBruder(userID, channelID);
    break;

		case 'bruder':
    console.log("")
    console.log("Detected bruder request by \"" + user + "\" | " + userID);
    bruderMussLos(channelID);
    break;
  }
}

//works already
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

//works already
function vallahBruder(userID, channelID){

	bot.sendMessage({
		to: channelID,
		message: 'Vallah Bruder ' + mention
	});

	logResponse("");
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
       sentPokemonURL(pokemon[0], pokemon[1], pokemon[2], id, userID, channelID, false);
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

          displayName = name[0].toUpperCase() + name.substring(1);

          sentPokemonURL(name, displayName, isItShiny, id, userID, channelID, isDebug);
          })
        })
  }

//sends draw out into the discord chat
async function sentPokemonURL(name, displayName, isItShiny, id, userID, channelID, isDebug){
  if(isItShiny){
    sendEmbedMessage(channelID, 6826080,'https://play.pokemonshowdown.com/sprites/xyani-shiny/'+name+'.gif', mention + " | ◓ You've caught a :sparkles: _shiny_ :sparkles: **" + displayName + "** GG!");
    successfulDraw(id, displayName, userID, isDebug);
  }
  else{
		sendEmbedMessage(channelID, 6826080,'https://play.pokemonshowdown.com/sprites/xyani/'+name+'.gif', mention + " | ◓ You've caught a **" + displayName + "** GG!");
		successfulDraw(id, displayName, userID, isDebug);
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
