//operatori

// vjezba02 

// aritmetički operatori
// * - * /

// NAŠ PRVI PROGRAM
// ULAZ
const a = 7 //parseInt(prompt('Unesi prvi broj'))
const b = 3 //parseInt(prompt('Unesi drugi broj'))

// algoritam

let rez = a + b


// Izlaz 
console.log(a, '+', b, '=', rez)

console.log(`${a} + ${b} = ${rez}`) //ovo je bolje

// modulo operator (%)
// ostatak nakon cjelobrojnog djeljenja

// 9 % 2 =
// 4 * 2 = 8
// 9 - 8 = 1 ovo je rezultat

console.log(9 % 2) // 1
console.log(8 % 2) // 0

// modulo se koristi najčešće za identifikaciju parnih / neparnih brojeva

// operatori dodjele =

//rez ima vrijednost 10
rez = rez + 2

console.log(rez) // 12
// const smo mijenjali u let jer nam je izbacivao eror budući da smo imali varijablu, nju smo kasnije mijenjali u let

// kraći način
rez += 2 // ovdje ne smije biti razmak između znakova
console.log(rez)

// isto vrijedi i za  -=, *=, i /=

// vjerovali ili ne!!!
// najčešća operacija u programiranju je uvećanje varijable za 1

let i = 0 // i od increment(uvećanje)

i = i + 1 // 1

i += 1 //2

// najkraći način  ali ovdje nepotpuno iskorišten 
i ++ // 3   - ovo ne bi trebalo nikada pisati samo u redu

console.log(i)


// operatori increment ( ++ ) i decrement ( -- )
// oni imaju dvojaku ulogu
// prva uloga je korištenje a druga je uvećanje/umanjenje


i = 0

// prvo korisi pa uvećaj

console.log(i++) //  prvo koristi 0, a kasnije ju uveća ; nakon ove linije i=1

// prvbo uvećaj pa koristi
console.log(++i) // 2

// ista pravila vrijede i za --

// razg za posao
i = 2
let j = 1
i = j++ -i // 1 - 2 = -1, i = -1, j = 2
j += --i - ++j // -2 - 3 = -5, 3 + -5 = -2, i = -2 j= -3
console.log(i - j) // -2 - -3 = 1

// operatori usporedjivanja == ===
// != razlicito po vrijednosti
// !== po vrijednosti i tipu

console.log('5' !=4)  // true
console.log(5 != 5)  // faLse

console.log('5' !== 5)  //true

const uvjet = '5' !== 5

console.log('uvjet' , typeof uvjet, uvjet) // true

// <,>, <= i >=

const godine = 18

console.log(godine > 18)

console.log(godine >= 18)

// logicki operatori 

// AND , OR i NOT ( i , ili i ne )
// AND: &&, OR: II i NOT: !  

const punoljetan = godine >= 18

console.log(uvjet && punoljetan)  // false i true uvijek daje false

// vrijeda pravila booleovih tablica 

console.log(uvjet || punoljetan) // true

console.log(!uvjet)  // uvjet je prije bio false, sad ce biti true!

// operator spajanja - nadoljepljivanja concatination

// +

// kada se + koristi kod 2 broja onda se zbraja , a kada se koristi kod razlicitih tipova podataka onda se spajaju!

console.log('Pero ima '+ godine + ' godina')  // to nije pozeljan stil sintakse

console.log(`Pero ima ${godine} godina`)

const x= '7' , y= 5

console.log(x+y) // 75

console.log(parseInt(x)+parseInt(y))  // sad je izbacio 12 :)

// spread operator - operator prosirivanja  (...)

const niz = [1,2.1]
console.table(niz)
const noviniz = [0,... niz, 3]

console.table(noviniz)

console.log(noviniz)


const osoba = {

    ime: 'Pero',
    prezime: 'Peric'

}

console.table(osoba)

const polaznik ={ 
    ... osoba, edukacija: 'FD' 
}

console.table(polaznik)

// suprotno od spread je destructing operator 

const[prvi,drugi]=[1,2]
// dodijelili varijable iz niza i vrijednosti po varijablama

console.log(prvi, drugi)

// destrukcija objekta

const {prezime, ...meniBitno} = polaznik

// prezime je u ovom slucaju skart

console.table(meniBitno)

//mozemo staviti jos tamo i ime iza prezimena


// nullish calescing operator (??)

let sifra

console.log(sifra ?? 'Sifra nije postavljena')

sifra='30920230230302-230320023-2032023023-3459349493'

console.log(sifra == 'Sifra nije postavljena')

// optional chaining operator ?.

// idemo vidjeti sto radi . 

const korisnik = {

    adresa: {
        grad: 'OPsijek',
        //ulica:'Trg slobode bb'

    }
}

console.log(korisnik.adresa.grad.toUpperCase())  // tocka sluzi da pristupamo svojstvima i metodama ( funkcijama) na objektima

console.log(korisnik.adresa?.ulica?.toUpperCase() ??'Nije postavljeno')  // ?- omogucava da kod "ne pukne "

for(i=0;i<2000;i++)
    {
        console.log(i) 
    }

    







































