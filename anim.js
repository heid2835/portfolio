$(window).on("load", mobilecheck);



function mobilecheck() {
    console.log("find device");

    if ($(window).width() <= 750) {
        mobilStartFunc();
    } else {
        startFunc();
    }
}

function mobilStartFunc() {
    console.log("Mobil, Kort frem");
    $("#kortinfo").show;
    $("#kortet").addClass("mpos1");
    $("#kortto").addClass("mpos5");
    $("#korttre").addClass("mpos6");
    $("#kortfire").addClass("mpos2");
    $("#kortfem").addClass("mpos3");
    $("#kortseks").addClass("mpos4");
    $("#kortsyv").addClass("mpos7");
    $("#kortotte").addClass("mpos8");
    $("#kortni").addClass("mpos9");

    $("#et").addClass("hidepos");
    $("#to").addClass("hidepos");
    $("#tre").addClass("hidepos");
    $("#fire").addClass("hidepos");
    $("#fem").addClass("hidepos");
    $("#seks").addClass("hidepos");
    $("#syv").addClass("hidepos");
    $("#otte").addClass("hidepos");
    $("#ni").addClass("hidepos");


}

function startFunc() {

    console.log("Computer, Kort frem");
    $("#kortinfo").hide;
    $("#kortet").addClass("pos1");
    $("#kortto").addClass("pos5");
    $("#korttre").addClass("pos6");
    $("#kortfire").addClass("pos2");
    $("#kortfem").addClass("pos3");
    $("#kortseks").addClass("pos4");
    $("#kortsyv").addClass("pos7");
    $("#kortotte").addClass("pos8");
    $("#kortni").addClass("pos9");

    $("#kortet").removeClass("kortethover");
    $("#kortto").removeClass("korttohover");
    $("#korttre").removeClass("korttrehover");
    $("#kortfire").removeClass("kortfirehover");
    $("#kortfem").removeClass("kortfemhover");
    $("#kortseks").removeClass("kortsekshover");
    $("#kortsyv").removeClass("kortsyvhover");
    $("#kortotte").removeClass("kortottehover");
    $("#kortni").removeClass("kortnihover");

    $("#et").addClass("hidepos");
    $("#to").addClass("hidepos");
    $("#tre").addClass("hidepos");
    $("#fire").addClass("hidepos");
    $("#fem").addClass("hidepos");
    $("#seks").addClass("hidepos");
    $("#syv").addClass("hidepos");
    $("#otte").addClass("hidepos");
    $("#ni").addClass("hidepos");


    $("#kortet").on("click", KortEtFunc);
    $("#kortto").on("click", KortToFunc);
    $("#korttre").on("click", KortTreFunc);
    $("#kortfire").on("click", KortFireFunc);
    $("#kortfem").on("click", KortFemFunc);
    $("#kortseks").on("click", KortSeksFunc);
    $("#kortsyv").on("click", KortSyvFunc);
    $("#kortotte").on("click", KortOtteFunc);
    $("#kortni").on("click", KortNiFunc);


}

function KortEtFunc() {
    console.log("kort til top");
    $("#kortet").addClass("pos1move");
    $("#kortet").removeClass("pos1");
    $("#kortet").on("animationend", KortEtTekst);

}

function KortEtTekst() {
    console.log("Tekst frem");
    $("#kortet").removeClass("pos1move");
    $("#kortet").addClass("kortethover");
    $("#et").removeClass("hidepos");
    $("#et").on("click", startFunc);
}

function KortToFunc() {
    console.log("kort til top");
    $("#kortto").addClass("pos5move");
    $("#kortto").removeClass("pos5");
    $("#kortto").on("animationend", KortToTekst);

}

function KortToTekst() {
    console.log("Tekst frem");
    $("#kortto").removeClass("pos5move");
    $("#kortto").addClass("korttohover");
    $("#to").removeClass("hidepos");
    $("#to").on("click", startFunc);
}

function KortTreFunc() {
    console.log("kort til top");
    $("#korttre").addClass("pos6move");
    $("#korttre").removeClass("pos6");
    $("#korttre").on("animationend", KortTreTekst);

}

function KortTreTekst() {
    console.log("Tekst frem");
    $("#korttre").removeClass("pos6move");
    $("#korttre").addClass("korttrehover");
    $("#tre").removeClass("hidepos");
    $("#tre").on("click", startFunc);
}

function KortFireFunc() {
    console.log("kort til top");
    $("#kortfire").addClass("pos2move");
    $("#kortfire").removeClass("pos2");
    $("#kortfire").on("animationend", KortFireTekst);

}

function KortFireTekst() {
    console.log("Tekst frem");
    $("#kortfire").removeClass("pos2move");
    $("#kortfire").addClass("kortfirehover");
    $("#fire").removeClass("hidepos");
    $("#fire").on("click", startFunc);
}

function KortFemFunc() {
    console.log("kort til top");
    $("#kortfem").addClass("pos3move");
    $("#kortfem").removeClass("pos3");
    $("#kortfem").on("animationend", KortFemTekst);

}

function KortFemTekst() {
    console.log("Tekst frem");
    $("#kortfem").removeClass("pos3move");
    $("#kortfem").addClass("kortfemhover");
    $("#fem").removeClass("hidepos");
    $("#fem").on("click", startFunc);
}

function KortSeksFunc() {
    console.log("kort til top");
    $("#kortseks").addClass("pos4move");
    $("#kortseks").removeClass("pos4");
    $("#kortseks").on("animationend", KortSeksTekst);

}

function KortSeksTekst() {
    console.log("Tekst frem");
    $("#kortseks").removeClass("pos4move");
    $("#kortseks").addClass("kortsekshover");
    $("#seks").removeClass("hidepos");
    $("#seks").on("click", startFunc);
}

function KortSyvFunc() {
    console.log("kort til top");
    $("#kortsyv").addClass("pos7move");
    $("#kortsyv").removeClass("pos7");
    $("#kortsyv").on("animationend", KortSyvTekst);

}

function KortSyvTekst() {
    console.log("Tekst frem");
    $("#kortsyv").removeClass("pos7move");
    $("#kortsyv").addClass("kortsyvhover");
    $("#syv").removeClass("hidepos");
    $("#syv").on("click", startFunc);
}

function KortOtteFunc() {
    console.log("kort til top");
    $("#kortotte").addClass("pos8move");
    $("#kortotte").removeClass("pos8");
    $("#kortotte").on("animationend", KortOtteTekst);

}

function KortOtteTekst() {
    console.log("Tekst frem");
    $("#kortotte").removeClass("pos8move");
    $("#kortotte").addClass("kortottehover");
    $("#otte").removeClass("hidepos");
    $("#otte").on("click", startFunc);
}

function KortNiFunc() {
    console.log("kort til top");
    $("#kortni").addClass("pos9move");
    $("#kortni").removeClass("pos9");
    $("#kortni").on("animationend", KortNiTekst);

}

function KortNiTekst() {
    console.log("Tekst frem");
    $("#kortni").removeClass("pos9move");
    $("#kortni").addClass("kortnihover");
    $("#ni").removeClass("hidepos");
    $("#ni").on("click", startFunc);
}
