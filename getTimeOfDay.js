

function getTimeOfDay(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    if(currentHour<5){
        console.log('midnight');
        return;
    }
    if(currentHour<9){
        console.log('dusk');
        return;
    }
    if(currentHour<17){
        console.log('midday');
        return;
    }
    if(currentHour<21){
        console.log('dusk');
        return;
    }
    console.log('midnight');
}
getTimeOfDay();