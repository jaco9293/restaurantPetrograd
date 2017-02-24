window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");

    // læs data ind fra JSON
    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);


}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);

}

function visProdukt(produkt) {
    console.log(produkt);
    // Klon template
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);

    // Indsæt data i klon
    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;
    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;

    klon.querySelector(".data_billede").src = "/imgs/small/" + produkt.billede + "-sm.jpg";
    if (produkt.udsolgt == false) {
        //produktet er udsolgt
        //produktet er ikke udsolgt
        var udsolgttekst = klon.querySelector(".udsolgttekst");
        udsolgttekst.parentNode.removeChild(udsolgttekst);
    } else {
        klon.querySelector(".pris").classList.add("udsolgt");
    }
    if (produkt.udsolgt == true || produkt.rabatsats == 0) {
        //der er ikke rabat, satsen fjernes
        var rabatpris = klon.querySelector(".rabatpris");
        rabatpris.parentNode.removeChild(rabatpris);
    } else {
        klon.querySelector(".pris").classList.add("udsolgt");
    }



    // append klon til .produkt_liste
    // document.querySelector(".forretter").appendChild(klon);

    document.querySelector("." + produkt.kategori).appendChild(klon);



}
