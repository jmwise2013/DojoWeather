console.log("Javscript loaded...")

var temperatures = [75, 65, 80, 66, 69, 61, 78, 70];

var temperaturespans = [
    document.querySelector("#temp1"),
    document.querySelector("#temp2"),
    document.querySelector("#temp3"),
    document.querySelector("#temp4"),
    document.querySelector("#temp5"),
    document.querySelector("#temp6"),
    document.querySelector("#temp7"),
    document.querySelector("#temp8")
];

function CityAlert(){
    alert("You are changing your city.");
}

function acceptcookiepolicy(element){
    let accept = document.querySelector(element);
    accept.remove();

}

function changeCtoF(element){
    //alert('You are in degrees'+ element.value); 
    if(element.value=='F'){
        console.log('inside F');
        for(var id = 0; id < temperatures.length; id++){
            temperaturespans[id].innerHTML = temperatures[id] +'&#176';
        }

    } 
    if(element.value=='C'){
        console.log('inside C');
        for(var id = 0; id < temperatures.length; id++){
            temperaturespans[id].innerHTML = Math.round((temperatures[id]-32)*(5/9)) +'&#176';
        }
    } 
}