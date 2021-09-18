window.onload = function() 
{
pantalla = document.getElementById("screen");
}
var isMarch6 = false; 
var acumularTime6 = 0;

function start6 () {
 if (isMarch6 == false) { 
    let billar = document.getElementById('imagen6');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeInicial6 = new Date();
    control6 = setInterval(cronometro6,10);
    isMarch6 = true;
    }
 }
 
function cronometro6 () { 
 timeActual6 = new Date();
 acumularTime6 = timeActual6 - timeInicial6;
 acumularTime26 = new Date();
 acumularTime26.setTime(acumularTime6); 
 cc = Math.round(acumularTime26.getMilliseconds()/10);
 ss = acumularTime26.getSeconds();
 mm = acumularTime26.getMinutes();
 hh = acumularTime26.getHours()-18;
 if (cc < 10) {cc = "0"+cc;}
 if (ss < 10) {ss = "0"+ss;} 
 if (mm < 10) {mm = "0"+mm;}
 if (hh < 10) {hh = "0"+hh;}
 screen6.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
 }

function stop6 () { 
 if (isMarch6 == true) {
    let billar = document.getElementById('imagen6');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
    clearInterval(control6);
    isMarch6 = false;
    }     
if (isMarch6 == false){
    var newb6 = 0;
        var pagar6 = 0;
        if (acumularTime6 <= 0)
        {
            newb6 = acumularTime6/3600000;
            pagar = newb6 * 1.2;
        }
        screen16.innerHTML = "$" +pagar, "." ;
    }
}
 

function resume6 () {
 if (isMarch6 == false) {
    let billar = document.getElementById('imagen6');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeActu26 = new Date();
    timeActu26 = timeActu26.getTime();
    acumularResume6 = timeActu26-acumularTime6;
    
    timeInicial6.setTime(acumularResume6);
    control6 = setInterval(cronometro6,10);
    isMarch6 = true;
    }     
 }

function reset6 () {
 if (isMarch == true) {
    let billar = document.getElementById('imagen6');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
       clearInterval(control6);
       isMarch6 = false;
       }
    acumularTime6 = 0;
    screen6.innerHTML = "00 : 00 : 00 : 00";
    }