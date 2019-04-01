var div = document.getElementById('someDiv');
var opacity = 1;
var fader = setInterval(function(){

    opacity -= 0.1;
    if (opacity >= 0 ){
        div.style.opacity = opacity;

    }else {
        clearInterval(fader);
    }


},100) ;