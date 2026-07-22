// nizovi, polja, arrays
// nizovi su strukture podataka
// niz omogućuje više vrijednosti u jednu varijablu

// prazan niz
const prazanNiz = []

console.log(prazanNiz)

// svaki niz ima dužinu
console.log(prazanNiz.length)

// moram pohraniti 12 prosječnih temperatura od siječnja do prosinca u Osijeku
const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8,] // nakon zadnjeg elemnta može i ne mora ići zarez

console.log(temp)
console.table(temp)
// indeks uvijek kreće od 0/nula u programiranju zato što nizovi kreću s indeksom 0
console.log(temp[0])

// zadnji element niza
console.log(temp[temp.length-1]) 

// ispisati vrijednost 27
console.log(temp[5]) // ako želimo da u indeksu ispiše vrijednost 27 jer je on na 5. mjestu

// moguće je mijenjati vrijednosti elemenenata niza jer niz kao niz ne možemo mijenjati

temp[5] = 28 // mijenjamo 27 u 28
console.table(temp)

temp.length=10
console.table(temp)

temp.length = temp.length + 1
console.log(temp)
console.log(temp[temp.length-1])
temp[20]=77
console.log(temp) // kad prebacimo iz lenght u log onda će nam pisati prazno naKON ŠTO IMAMO PRIKAZANU ZADNJU VRIJEDNOST

const mjesta = [
    'Osijek', // indeks 0
    'Zagreb', // 1
    'Split',  // 2 itd
    'Zadar',
    'Dubrovnik',
    'Šibenik'
]

console.table(mjesta)

const grad = document.getElementById('grad') // ovime smo smanjili pisanje donje sintakse

grad.innerHTML = mjesta[2]

grad.addEventListener('click',()=>{
    grad.innerHTML = mjesta[0] //  radimo ovako jež želimo kliknemo na Split učita Osijek
})

//niz može imati bilo koji tip podatka
// ponavljanje tipova podatak

const ptp = [
    'Edunova', // string
    18, // number
    18.99, // number
    18n, // bigint
    true, // boolean
    [], // array
    undefined,
    null, // stanje
    {ime: 'Pero'}, // objekt
    ()=>{}, // funkcija
    Symbol('id')


]
console.table(ptp)
console.log(ptp[8])
console.log(ptp[8].ime)
console.log(ptp[9]['ime']) // ovo nećemo korisiti


const osobe=[

    {
        ime:'Tomislav',
        prezime:'Jakopec',
        godine:45
    },

    {
        ime:'Lepomir',
        prezime:'Smaug',
        godine:3

    },
    {
        ime:'Macana',
        prezime:'Cicko',
        godine:8
    },
    {
        ime:'Lenka',
        prezime:'Mačkalenka',
        godine:1
    }
]

console.table(osobe)

const suma=osobe[0].godine+osobe[1].godine+osobe[2].godine
            +osobe[3].godine
            +(osobe[4]?.godine ?? 0 )  // ako nema 4tog onda dodje i pita se jel ga ima i ako ga ima onda ga racuna kao 0

console.log(suma)

// destrukcija - s lijeve strane = stavlja u [] varijable

const niz= [10,20,30]

console.log(niz)

const[n1, n2] =niz // u varijable n1 stavi vrijednost prvog elementa, u n2 stavi vrijednost drugog elementa niza

console.log(n1,n2)

niz.length=0

const[x1=1,x2=2] = niz
console.log(x1 , x2)

//spread operator ...

const brojevi=[1,2,3]

const nijeKopija = brojevi // ovo nije kopiranje, vec je kreiranje reference na niz brojeva 

nijeKopija[0]=7

console.log(brojevi)

// niz se kopira s spread operatorom

const pravaKopija =[... brojevi]

pravaKopija[0] =9
console.log(brojevi, pravaKopija)

//kombinacija destrukcija i prosirenje

const[t1,...t2] =brojevi   //t1 uzima vrijednost iz prvog elementa brojevi, a t2 postaje niz s ostalim elementima iz niza brojeva
console.log(t1,t2)


//spajanje nizova

const temp1 =['A', 'B' , 'C', 'D']
const temp2 = ['D', 'E']

const spojeno = [...temp1,...temp2]

console.log(spojeno)

//ovo gore su sve jednodimenzionalni nizovi odnosno liste

//u JS ES6 postoje i visedimenzionalni nizovi ;D


const tablica =[
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
]

//prvo se ispisuje red pa onda kolona  zelimo ispisati broj 6
console.log(tablica[1][2])









