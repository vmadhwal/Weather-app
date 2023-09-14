let [seconds, minutes, hours]= [0,0,0]; //initializing of seconds minutes and hours
let displayTime= document.getElementById("displayTime");
let timer= null;
function stopwatch (){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            mitutes=0;
            hour++;
        }
    }
    let h= hours<10 ? "0"+ hours:hours;// used to display 2 zeros 00
    let m= minutes<10 ? "0"+ minutes:minutes;
    let s= seconds<10 ? "0"+ seconds:seconds;

    displayTime.innerHTML= h+ ":"+ m+ ":"+ s;
}
function watchStart(){//starting of the timer
    if (timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch, 1000);
}
function watchStop(){
    clearInterval(timer);

}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours]= [0,0,0];
    displayTime.innerHTML ="00:00:00";
    
}