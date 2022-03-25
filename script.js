var YtreEl = document.getElementById("Ytre");
var IndreEl = document.getElementById("Indre");
var LengdeEl = document.getElementById("Lengde");
var Sekk = 12500;


function Utregning() {
    var ytreRadius = YtreEl.value /2;
    var ytreGrunnflate = Math.PI*(ytreRadius*ytreRadius);
    var ytreVolum = Math.round(ytreGrunnflate*LengdeEl.value);
    console.log(ytreVolum + "cm^2")

    var indreRadius = IndreEl.value /2;
    var indreGrunnflate = Math.PI*(indreRadius*indreRadius);
    var indreVolum = parseInt(indreGrunnflate*LengdeEl.value);
    console.log(indreVolum + "cm^2")

    var betongVolum = ytreVolum - indreVolum;
    console.log(betongVolum + "cm^3")

    var forhold = betongVolum / Sekk;
    var pris = forhold * 89;
    console.log(parseInt(pris) + "kr")

};