function zadatak1() {
    console.log("Svjetlana Todoric")
}

function zadatak2() {
    var imeiprezime = "Svjetlana Todoric"
    console.log(imeiprezime)
}


function zadatak3(br1, br2) {

    zbir = br1 + br2
    console.log("Zbir: " + zbir)
    razlika = br1 - br2
    console.log("Razlika: " + razlika)
    proizvod = br1 * br2
    console.log("Proizvod: " + proizvod)
    kolicnik = br1 / br2
    console.log("Kolicnik: " + kolicnik)
    ostatak = br1 % br2
    console.log("Ostatak: " + ostatak)
}


function zadatak4(broj1, broj2, broj3, broj4, broj5) {

    zbir = broj1 + broj2 + broj3 + broj4 + broj5
    console.log("Zbir: " + zbir)
    razlika = broj1 - broj2 - broj3 - broj4 - broj5
    console.log("Razlika: " + razlika)
    proizvod = broj1 * broj2 * broj3 * broj4 * broj5
    console.log("Proizvod: " + proizvod)
}

function zadatak5() {
    var ime = "Svjetlana"
    var prezime = "Todoric"
    console.log(ime + prezime)
    console.log(ime + " " + prezime)
}

function zadatak6(danUSedmici) {
    /*
    if (danUSedmici == 1) {
     console.log("Ponedjeljak")
     } else if (danUSedmici == 2) {
     console.log("Utorak")
     } else if (danUSedmici == 3) {
     console.log("Srijeda")
     } else if (danUSedmici == 4) {
     console.log("Cetvrtak")
     } else if (danUSedmici == 5) {
     console.log("Petak")
     } else if (danUSedmici == 6) {
     console.log("Subota")
     } else if (danUSedmici == 7) {
     console.log("Nedjelja")
     } else {
     console.log("Greska")
    }
    */

    switch (danUSedmici) {
        case 1:
            console.log("Ponedjeljak")
            break
        case 2:
            console.log("Utorak")
            break
        case 3:
            console.log("Srijeda")
            break
        case 4:
            console.log("Cetvrtak")
            break
        case 5:
            console.log("Petak")
            break
        case 6:
            console.log("Subota")
            break
        case 7:
            console.log("Nedjelja")
            break
        default:
            console.log("Greska")
    }
}

function zadatak7(x) {
    if (x % 2 == 0) {
        console.log("Broj je paran")
    } else {
        console.log("Broj je neparan")
    }
}

function zadatak8(broj) {
    if (broj % 3 == 0 && broj % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (broj % 3 == 0) {
        console.log("Fizz")
    } else if (broj % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log("Broj nije djeljiv ni sa 3 ni sa 5")
    }
}

function zadatak9(sek) {
    var dani =Math.floor(sek /(60 * 60 * 24))
    console.log("Broj dana: " + dani)
    var sati = Math.floor(sek % (60*60*24)/ (60*60))
    console.log("Broj sati: " + sati)
    var minute = Math.floor(sek %(3600) / 60)
    console.log("Broj minuta: " + minute)
    var sekunde = Math.floor(sek % 60)
    console.log("Broj sekundi: " + sekunde)
    }
    