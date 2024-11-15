function loop(){
    var i = 0;
    var text = '';

    while (i < 21) {
    text += "<br>The loop: " + i; i++
    }
    document.getElementById("loops").innerHTML = text;
}