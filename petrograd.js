window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");

    visProdukt();

}

function visProdukt() {
    // Klon template
    var klon = document.querySelector("produkt_template").content.cloneNode(true);

    // Indsæt data i klon

    // append klon til .produkt_liste
    documnet.querySelector(".produktliste") appendChild(klon);


}
