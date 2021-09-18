window.onload = function() 
{
pantalla = document.getElementById("screen5");
}
var isMarch5 = false; 
var acumularTime5 = 0;

function start5 () {
 if (isMarch5 == false) { 
    let billar = document.getElementById('imagen5');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeInicial5 = new Date();
    control5 = setInterval(cronometro5,10);
    isMarch5 = true;
    }
 }
 
function cronometro5 () { 
 timeActual5 = new Date();
 acumularTime5 = timeActual5 - timeInicial5;
 acumularTime25 = new Date();
 acumularTime25.setTime(acumularTime5); 
 cc = Math.round(acumularTime25.getMilliseconds()/10);
 ss = acumularTime25.getSeconds();
 mm = acumularTime25.getMinutes();
 hh = acumularTime25.getHours()-18;
 if (cc < 10) {cc = "0"+cc;}
 if (ss < 10) {ss = "0"+ss;} 
 if (mm < 10) {mm = "0"+mm;}
 if (hh < 10) {hh = "0"+hh;}
 screen5.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
 }

function stop5 () { 
 if (isMarch5 == true) {
    let billar = document.getElementById('imagen5');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
    clearInterval(control5);
    isMarch5 = false;
    }     
if (isMarch5 == false){
    var newb5 = 0;
        var pagar5 = 0;
        if (acumularTime5 <= 0)
        {
            newb5 = acumularTime5/3600000;
            pagar5 = newb5 * 1.2;
        }
        screen15.innerHTML = "$" +pagar5, "." ;
    }
}
  

function resume5 () {
 if (isMarch5 == false) {
    let billar = document.getElementById('imagen5');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeActu25 = new Date();
    timeActu25 = timeActu25.getTime();
    acumularResume5 = timeActu25-acumularTime5;
    
    timeInicial5.setTime(acumularResume5);
    control5 = setInterval(cronometro5,10);
    isMarch5 = true;
    }     
 }

function reset5 () {
 if (isMarch5 == true) {
    let billar = document.getElementById('imagen5');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
       clearInterval(control5);
       isMarch5 = false;
       }
    acumularTime5 = 0;
    screen5.innerHTML = "00 : 00 : 00 : 00";
    }