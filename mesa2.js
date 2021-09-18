window.onload = function() 
{
pantalla = document.getElementById("screen2");
}
var isMarch2 = false; 
var acumularTime2 = 0;

function inicio () {
 if (isMarch2 == false) { 
    let billar = document.getElementById('imagen2');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeInicial2 = new Date();
    control2 = setInterval(cronom,10);
    isMarch2 = true;
    }
 }
 
function cronom () { 
 timeActual2 = new Date();
 acumularTime2 = timeActual2 - timeInicial2;
 acumularTime22 = new Date();
 acumularTime22.setTime(acumularTime2); 
 cc = Math.round(acumularTime22.getMilliseconds()/10);
 ss = acumularTime22.getSeconds();
 mm = acumularTime22.getMinutes();
 hh = acumularTime22.getHours()-18;
 if (cc < 10) {cc = "0"+cc;}
 if (ss < 10) {ss = "0"+ss;} 
 if (mm < 10) {mm = "0"+mm;}
 if (hh < 10) {hh = "0"+hh;}
 screen2.innerHTML= hh+" : "+mm+" : "+ss+" : "+cc;

 }
 
function parar () { 
 if (isMarch2 == true) {
    let billar = document.getElementById('imagen2');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
    clearInterval(control2);
    isMarch2 = false;
    }     
if (isMarch2 == false){
    var newb2 = 0;
        var pagar2 = 0;
        if (acumularTime2 <= 0)
        {
            newb2 = acumularTime2/3600000;
            pagar2 = newb2 * 1.2;
        }
        screen12.innerHTML = "$" +pagar2, "." ;
    }
}

function resumen () {
 if (isMarch2 == false) {
    let billar = document.getElementById('imagen2');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeActu22 = new Date();
    timeActu22 = timeActu22.getTime();
    acumularResume2 = timeActu22-acumularTime2;
    
    timeInicial2.setTime(acumularResume2);
    control2 = setInterval(cronom,10);
    isMarch2 = true;
    }     
 }

function restablecer () {
 if (isMarch2 == true) {
    let billar = document.getElementById('imagen2');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
        clearInterval(control2);
        isMarch2 = false;
        }
     acumularTime = 0;
     screen2.innerHTML = "00 : 00 : 00 : 00";
     }

