const fs = require('fs');

var storageStructure = {
    'timestamp':0,'inventory':[]
}

var storageEntry={
    'id':-1,'count':1,'variant':-1,'isShiny':false
}

store('187',1,1,true);

getTimestamp('187',print);

function store(userID,pokemonID,pokemonVariant,pokemonIsShiny){
    var path = './data/'+userID+'.json';
    storageEntry.id=pokemonID;
    storageEntry.variant=pokemonVariant;
    storageEntry.isShiny=pokemonIsShiny;
    fs.readFile(path, 'utf8', function (err, data) {
        if(data==undefined){
            data = storageStructure;
        }
        else{
            data = JSON.parse(data);
        }
        data.timestamp=Date.now();
        var alreadyExists=false;
        data.inventory.forEach(element => {
            if(element.id==storageEntry.id&&element.variant==storageEntry.variant&&element.isShiny==storageEntry.isShiny){
                element.count++;
                alreadyExists=true;
            }
        });
        if(!alreadyExists){
            data.inventory.push(storageEntry);
        }
        fs.writeFile(path, JSON.stringify(data), function(err, result) {
           if(err) console.log('error', err);
         });
    });
}

function getTimestamp(userID,callback){
    var path = './data/'+userID+'.json';
    fs.readFile(path,'utf-8',function(err,data){
        if(data==undefined){
            callback(Date.now()-10800000);
        }
        else 
        callback(JSON.parse(data).timestamp);
    })
}

function print(value){
    console.log(value);
}