var setDateTime = new Date("Apr 21 2019, 16:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = setDateTime - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/(1000));

    document.getElementById("demo").innerHTML= days + "Day" + " : " + hours + "Hrs" + " : " + minutes + "Min" + " : " + seconds + "Sec";

    if(distance<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML= "Wish You Happy RamNavmi Puja";
    }
},1000);

function mail(){
    window.open("mailto:someone@example.com");
    }
//"mailto:someone@example.com?Subject=Hello%20again" target="_top"

