
document.write('Hello!')



//OOP objektno orjentirano programiranje



// princip klasa-objekt



// nauciti napamet sto je klasa i sto je objekt (I1 i I2)



// I1: Klasa je opisnik objekta



class Osoba {

//OOP princip ucahurivanja (encapsulation)



// 1. klasa skriva svoja svojstva, skriva ih na nacin



#ime // # oznacava da se radi o skrivenom privatnom svojstvu



 // klasa se pise sa velikim pocetnim slovima, a varijable i objekti sa malim



// objekt je instanca klase



// 2. klasa ce uciniti svoja svojstva dostupna putem get set metoda

get ime(){return this.#ime}

//set ime(ime){this.#ime=ime}

set ime(s){this.#ime=s}   // kad kazemo this mi cemo to ime postaviti kao privatno svojstvo, jedino klasa ima pristup tim svojstvima



// konstruktor koji se poziva kljucnom rjecju new

constructor(ime=''){

    this.#ime=ime

}







}







// I2 : Objekt je pojavnost ( instanca klase)

// varijabla osoba je instanca klase Osoba

const osoba=new Osoba()

osoba.ime='Pero'



const oJson={

    ime: ''

}



oJson.ime='Patricija'



console.log(osoba.ime,oJson.ime)



const o=new Osoba('Marko')  // ovdje se poziva konstruktor

console.log(o.ime)  // ovdje se poziva get



const datum= new Date(2026,0,1)

console.log(datum.toLocaleString('hr-HR'))



// OOP princip nasljedivanje



// klasa ce nasljediti metode nadklase, jedna klasa moze nasljediti samo jednu nadklasu



class Polaznik extends Osoba{

    #odradioObaveze

    get odradioObaveze(){return this.#odradioObaveze}

    set odradioObaveze(b){this.#odradioObaveze=b}

    constructor(ime='', oo=false){

        super(ime) // poziv nadklase , ime osobe prosljedjujem konstruktoru klase Osoba, on ce znati sto ce s time

        this.#odradioObaveze=oo

    }

}



const polaznik=new Polaznik()

polaznik.ime='Darija'

polaznik.odradioObaveze=true



console.log(`${polaznik.ime} ${polaznik.odradioObaveze ? 'je' : 'nije'} odradio obaveze`)



console.log(polaznik) // vamo ispisuje strukturu

console.log(`${polaznik}`)  // vamo ce ispisati da je to objekt



class Predavac extends Osoba{

    #vrsta

    get vrsta(){return this.#vrsta}

    set vrsta(s){this.#vrsta=s}

    // klasa ne mora imati konstruktor



    toString(){

        return `${this.#vrsta} ${super.ime}`

    }

}



const pr=new Predavac ()

pr.ime='Gordana'

pr.vrsta='vanjska suradnica'



console.log(`${pr}`)



// citanje o OOP principima 
// https://github.com/tjakopec/OOP_Java_PHP_PYTHON_SWIFT

// metode u klasi se koriste na objektima a ne na klasu
// ako zelimo metodu s klase koristiti direktno (samo uzvrsavfanje algoritma)
// tada ta metoda mora biti staticna - staticna oznacava da nece pamtiti stanje

//primjer:

class Pomocno{
    static slucajniBroj(odBroja=0, doBroja=0){

        // kopiramo iz vjezbe 11

        if(odBroja && doBroja){
            return(Math.random()* (doBroja-odBroja))
            //itd iskopiramo sve
        }

    }
}

console.log(Pomocno.slucajniBroj(2,8))
console.log(Pomocno.slucajniBroj(10))
console.log(Pomocno.slucajniBroj())

console.log(Math.random())
console.log(Date.now())
console.log(Array.from())











