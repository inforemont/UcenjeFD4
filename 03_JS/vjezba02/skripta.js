const ime = 'Pero'//prompt('Unesi ime')

console.log(ime)

console.log('ime', typeof ime, ime) // ime string < onoo sto je uneseno

console.log(`Dobar dan ${ime}!!!!!`)

//tip podatka number
const unosBroj = '2026' //string

//zelim prebaciti ( konvertirati u broj)

const broj = Number(unosBroj)

console.log('unosBroj', typeof unosBroj, unosBroj)
console.log('broj', typeof broj, broj)

const pi = parseFloat('3.14')

console.log('pi', typeof pi, pi)

// tip podatka je boolean

const lv = true;  //lv je logicka vrijednost


console.log('lv', typeof lv, lv)

// ne mozemo mjenjati vrijednost konstantne samo varijable

let x = 7

console.log('x', typeof x, x)

x = 8

console.log('x', typeof x, x)

x = 'Osijek'


console.log('x', typeof x, x)


// ne mozemo staviti let x= 7 jer ga ne mozemo redeklarirati posto je gore deklariran kao varijabla ali mozemo mjenjati tip podatka i vrijednost


const vb = 17845982058748n // bigint

console.log('vb', typeof vb, vb)

// const i; const se ne moze deklarirati bez vrijednosti

let varijabla;

console.log('varijabla', typeof varijabla, varijabla)
varijabla = 10;
console.log('varijabla', typeof varijabla, varijabla)

let z, y;

z = 5;
y = 7;

varijabla = z + y;

console.log('varijabla', typeof varijabla, varijabla)

var t = 5;

t = 'Osijek';
var t = true;  // kad koristimo var onda mozemo mjenjati i redefinirati , vise se slabo koristi, ali mi smo OP pa cemo i dalje to koristiti :>D


console.log('t', typeof t, t)

//tip podatka object

// JSON --> JavaScripto Object Notation

const osoba = {
    id: 1,
    ime: 'Pero',
    visina: 182.5,
    znaProgramirati: false
}

console.log('osoba', typeof osoba /*,osoba*/) // komentar u hodu

console.table(osoba)

//tip podatka array   - niz ili polje

const niz = [2, 3, 4, 5, 6, 3, 2, 212, 557, 4]


console.log('niz',typeof niz, niz)
console.table(niz)


const json =  [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

console.table (json)

// tip podatka function

//stari nacin definiranja funkcije

function pozdrav (){
    console.log('Pozdrav iz stare funkcije')
}

console.log('pozdrav',typeof pozdrav)


// novi nacin

const pozdrav1 = ()=> console.log('Pozdrav iz nove funkcije')

console.log('pozdrav1',typeof pozdrav1)

//izvodjenje funkcija

pozdrav()
pozdrav1()


const id1 = Symbol ('edunova')  // edunova je opis ali je vrijednost jedinstvena i nije vidljiva
const id2 = Symbol ('edunova')

// = je operator dodjeljivanja

// operator usporedjivanja vrijednosti

// == provjerava po vrijednosti 
// === provjerava po tipu podatka i po vrijednosti

console.log('7' == 7) //true
console.log('7' === 7) //false
console.log(7 === 7 ) //true


console.log(id1==id2) // false
console.log(id1===id2) //false





