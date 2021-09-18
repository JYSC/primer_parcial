window.onload = function() 
{
pantalla = document.getElementById("screen3");
}
var isMarch3 = false; 
var acumularTime3 = 0;

function iniciar () {
 if (isMarch3 == false) { 
    let billar = document.getElementById('imagen3');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeInicial3 = new Date();
    control3 = setInterval(cronom3,10);
    isMarch3 = true;
    }
 }
 
function cronom3 () { 
 timeActual3 = new Date();
 acumularTime3 = timeActual3 - timeInicial3;
 acumularTime23 = new Date();
 acumularTime23.setTime(acumularTime3); 
 cc = Math.round(acumularTime23.getMilliseconds()/10);
 ss = acumularTime23.getSeconds();
 mm = acumularTime23.getMinutes();
 hh = acumularTime23.getHours()-18;
 if (cc < 10) {cc = "0"+cc;}
 if (ss < 10) {ss = "0"+ss;} 
 if (mm < 10) {mm = "0"+mm;}
 if (hh < 10) {hh = "0"+hh;}
 screen3.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
 
 }
 
function para () { 
 if (isMarch3 == true) {
    let billar = document.getElementById('imagen3');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
    clearInterval(control3);
    isMarch3 = false;
    }     
if (isMarch3 == false){
    var newb3 = 0;
        var pagar3 = 0;
        if (acumularTime3 <= 0)
        {
            newb3 = acumularTime3/3600000;
            pagar3 = newb3 * 1.2;
        }
        screen13.innerHTML = "$" +pagar3, "." ;
    }
}
 

function resu () {
 if (isMarch3 == false) {
    let billar = document.getElementById('imagen3');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeActu23 = new Date();
    timeActu23 = timeActu23.getTime();
    acumularResume3 = timeActu23-acumularTime3;
    
    timeInicial3.setTime(acumularResume3);
    control3 = setInterval(cronom3,10);
    isMarch3 = true;
    }     
 }

function resta () {
 if (isMarch3 == true) {
    let billar = document.getElementById('imagen3');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
        clearInterval(control3);
        isMarch3 = false;
        }
     acumularTime = 0;
     screen3.innerHTML = "00 : 00 : 00 : 00";
     }

