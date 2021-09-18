    window.onload = function() 
    {
    pantalla = document.getElementById("screen");
    }
    var isMarch = false; 
    var acumularTime = 0;

    function start () {
     if (isMarch == false) { 
        let billar = document.getElementById('imagen1');
        if(billar.src.match("billar1"))
        {
           billar.src = "billar2.gif"
        }
        else
        {
            billar.src = "billar1.PNG"
        }
        timeInicial = new Date();
        control = setInterval(cronometro,10);
        isMarch = true;
        }
     }
     
    function cronometro () { 
     timeActual = new Date();
     acumularTime = timeActual - timeInicial;
     acumularTime2 = new Date();
     acumularTime2.setTime(acumularTime); 
     cc = Math.round(acumularTime2.getMilliseconds()/10);
     ss = acumularTime2.getSeconds();
     mm = acumularTime2.getMinutes();
     hh = acumularTime2.getHours()-18;
     if (cc < 10) {cc = "0"+cc;}
     if (ss < 10) {ss = "0"+ss;} 
     if (mm < 10) {mm = "0"+mm;}
     if (hh < 10) {hh = "0"+hh;}
     screen1.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
     }

    function stop () { 
        
     if (isMarch == true) {
        let billar = document.getElementById('imagen1');
            if(billar.src.match("billar"))
            {
                billar.src = "billar1.PNG"
            }
            else
            {
                 billar.src = "billar2.gif"
            }
        clearInterval(control);
        isMarch = false;
        }     
    if (isMarch == false){
        var newb = 0;
        var pagar = 0;
        if (acumularTime <= 0)
        {
            newb = acumularTime/3600000;
            pagar = newb * 1.2;
        }
        screen11.innerHTML = "$" +pagar, "." ;
    }
}

    function resume () {
     if (isMarch == false) {
        let billar = document.getElementById('imagen1');
        if(billar.src.match("billar1"))
        {
           billar.src = "billar2.gif"
        }
        else
        {
            billar.src = "billar1.PNG"
        }
        timeActu2 = new Date();
        timeActu2 = timeActu2.getTime();
        acumularResume = timeActu2-acumularTime;
        
        timeInicial.setTime(acumularResume);
        control = setInterval(cronometro,10);
        isMarch = true;

        }     
     }

    function reset () {
     if (isMarch == true) {
        let billar = document.getElementById('imagen1');
            if(billar.src.match("billar"))
            {
                billar.src = "billar1.PNG"
            }
            else
            {
                 billar.src = "billar2.gif"
            }
           clearInterval(control);
           isMarch = false;
           }
        acumularTime = 0;
        newa = 0;
        screen1.innerHTML = "00 : 00 : 00 : 00";
        }
     
    