window.onload = function() 
{
pantalla = document.getElementById("screen4");
}
var isMarch4 = false; 
var acumularTime4 = 0;

function iniciar4 () {
 if (isMarch4 == false) { 
    let billar = document.getElementById('imagen4');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeInicial4 = new Date();
    control4 = setInterval(cronom4,10);
    isMarch4 = true;
    }
 }
 
function cronom4 () { 
 timeActual4 = new Date();
 acumularTime4 = timeActual4 - timeInicial4;
 acumularTime24 = new Date();
 acumularTime24.setTime(acumularTime4); 
 cc = Math.round(acumularTime24.getMilliseconds()/10);
 ss = acumularTime24.getSeconds();
 mm = acumularTime24.getMinutes();
 hh = acumularTime24.getHours()-18;
 if (cc < 10) {cc = "0"+cc;}
 if (ss < 10) {ss = "0"+ss;} 
 if (mm < 10) {mm = "0"+mm;}
 if (hh < 10) {hh = "0"+hh;}
 screen4.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
 
 }
 
function para4 () { 
 if (isMarch4 == true) {
    let billar = document.getElementById('imagen4');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
    clearInterval(control4);
    isMarch4 = false;
    }     
if (isMarch4 == false){
    var newb4 = 0;
        var pagar4 = 0;
        if (acumularTime4 <= 0)
        {
            newb4 = acumularTime4/3600000;
            pagar4 = newb4 * 1.2;
        }
        screen14.innerHTML = "$" +paga4r, "." ;
    }
}
  

function resu4 () {
 if (isMarch4 == false) {
    let billar = document.getElementById('imagen4');
    if(billar.src.match("billar1"))
    {
       billar.src = "billar2.gif"
    }
    else
    {
        billar.src = "billar1.PNG"
    }
    timeActu24 = new Date();
    timeActu24 = timeActu24.getTime();
    acumularResume4 = timeActu24-acumularTime4;
    
    timeInicial4.setTime(acumularResume4);
    control4 = setInterval(cronom4,10);
    isMarch4 = true;
    }     
 }

function resta4 () {
 if (isMarch4 == true) {
    let billar = document.getElementById('imagen4');
        if(billar.src.match("billar"))
        {
            billar.src = "billar1.PNG"
        }
        else
        {
             billar.src = "billar2.gif"
        }
        clearInterval(control4);
        isMarch4 = false;
        }
     acumularTime = 0;
     screen4.innerHTML = "00 : 00 : 00 : 00";
     }

