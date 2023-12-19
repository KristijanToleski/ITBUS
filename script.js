var currentDestinacija;
var currentKarta;

function DestinacijaClick(obj){
    var broj = document.getElementsByClassName("karti-info")[0].getElementsByTagName("div").length;
    for(var i = 0; i < broj; i++){
        document.getElementsByClassName("karti-info")[0].getElementsByTagName("div")[i].style.visibility = "hidden";
        document.getElementsByClassName("karti-info")[0].getElementsByTagName("div")[i].style.position = "absolute";

        document.getElementsByClassName("ul")[0].getElementsByTagName("li")[i].getElementsByTagName("button")[0].style.backgroundColor = "white";
        document.getElementsByClassName("ul")[0].getElementsByTagName("li")[i].getElementsByTagName("button")[0].style.color = "var(--glavnaBoja)";
    }

    document.getElementsByClassName("karta-cena")[0].style.visibility = "hidden";
    document.getElementById("karti-info-" + obj.id).style.position = "static";
    document.getElementById("karti-info-" + obj.id).style.visibility = "visible";
    document.getElementById(obj.id).style.backgroundColor = "var(--glavnaBoja)";
    document.getElementById(obj.id).style.color = "white";
    currentDestinacija = obj;
}

function KartaInfoClick(obj){
    // desticancija najdvac
    var temp = "";
    for(var i = 0; i<obj.innerHTML.length; i++){
        if(obj.innerHTML[i] == " ") break;
        temp += obj.innerHTML[i];
    }

    // Vreme najdvac
    var poaganje = "", pristignuvanje = "";
    var count = 0, t1, t2;
    for(var i = 0; i<obj.innerHTML.length; i++){
        if(obj.innerHTML[i] == " ") count++;

        if(count == 1) t1 = i + 1;
        if(count == 2){
            t2 = i + 1;
            poaganje = obj.innerHTML.substr(t1, t2 - t1);
        }

        if(count == 4){
            t1 = i - 4;
            pristignuvanje = obj.innerHTML.substr(t1);
        }
    }

    document.getElementsByClassName("karta-cena")[0].style.visibility = "visible";
    document.getElementById("karti").getElementsByTagName("h1")[0].innerHTML = temp;
    document.getElementById(obj.parentElement.id).style.visibility = "hidden";

    document.getElementById("poaganje").innerHTML = "Поаѓање: " + "<b>" + poaganje + "</b>";
    document.getElementById("pristignuvanje").innerHTML = "Пристигнување: " + "<b>" + pristignuvanje + "</b>";
    document.getElementById("cena").innerHTML = "Цена: " + "<b>" + obj.parentElement.className + " денари</b>";

    currentKarta = obj;
}

function VratiSeNaKartiClick(){
    DestinacijaClick(currentDestinacija);
}

function KupiSegaClick(){
    document.getElementById("buy").style.visibility = "visible";
}

function BuyExitClick(){
    document.getElementById("buy").style.visibility = "hidden";
    document.getElementById("buy").getElementsByTagName("input")[0].value = null;
    document.getElementById("buy").getElementsByTagName("input")[1].value = null;
    document.getElementById("buy").getElementsByTagName("input")[2].value = null;
    document.getElementById("buy").getElementsByTagName("input")[3].value = null;
    document.getElementById("buy").getElementsByTagName("input")[4].value = null;
}

function BuyPlatiClick(){
    var ime = document.getElementById("textBoxIme").value;
    var prezime = document.getElementById("textBoxPrezime").value;
    var brojNaKarticka = document.getElementById("textBoxKartickaBroj").value;
    var trajnostNaKarticka = document.getElementById("textBoxDatum").value;
    var CVV = document.getElementById("textBoxCVV").value;

    if((ime != null && ime != "") && (prezime != null && prezime != "") && (brojNaKarticka != null && brojNaKarticka != "") && (trajnostNaKarticka != null && trajnostNaKarticka != "") && (CVV != null && CVV != "")){
        document.getElementById("ime").innerHTML = "Име: " + ime;
        document.getElementById("prezime").innerHTML = "Презиме: " + prezime;
        document.getElementById("sifra").innerHTML = "Шифра на билет: " + Math.floor(Math.random() * 9999999999);
        document.getElementById("info").innerHTML = "Информации за билет: " + currentKarta.innerHTML;

        document.getElementById("biletIme").innerHTML = "Билет " + currentDestinacija.innerHTML;

        document.getElementById("bilet").style.zIndex = "2";
    }
}

function BiletExitClick(){
    document.getElementById("bilet").style.zIndex = "-2";
    BuyExitClick();
    VratiSeNaKartiClick();
}