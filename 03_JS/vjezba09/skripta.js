// ponavljanje ( iteracija ), petlje (loops)

// u konzoli ispisati Edunova 10 puta jedno ispod drugog

console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')


//ovo gore je najgore moguce rjsenje i to cemo raditi preko petlje

// klasicna for petlja

//for(inicijalna vrijednost varijable; uvijet izlaska iz petlje; uvecanje ili umanjenje )

console.log('=========================================')

for(let i=0;i<10;i++)
{
    console.log('Edunova')
}

console.log('=========================================')


for(i=0;i<10;i++){

    console.log(`i=${i+1}`)  // trenutnoj vrijednosti i+1 samo dodajemo 1 da ne krece index od 0 vec od 1
}


console.log('=========================================')

let suma=0;

for(let i=0;i<100;i++){
    suma+=i+1
    //debugger
}


//bio mi je potreban 1 korak

console.log((100*(100+1))/2)


// nekoliko primjera šetanja s petljom

console.log('=========================================')


for(let i=10;i>0;i--){
    console.log(i)
}

console.log('=========================================')

// uvecavam za 2

for(i=7;i<20;i+=2){
    console.log(i)
}

console.log('=========================================')


//simuliramo unos od korisnika

const pocetak=7
const kraj=20
const uvecanje=2
// ovo je sintaksa kojoj tezimo - nema fiksnih vrijednosti 
for(let i=pocetak;i<kraj;i+=uvecanje)
{
    console.log(i)
}

console.log('=========================================')


// u for petlju se ne mora uci

for(let i=kraj;i<pocetak;i++) // i je 20, 20 nije manje od 7 i odma preskace for petlju
{
    console.log('ovo se ne ispisuje jer nije usao u petlju')
}

console.log('=========================================')


//ispisi parne brojeve od 1 do 50

for(let i=1;i<=50;i++) 
{
    if(i%2===0){   //koristimo %2 znaci da je ostatak sa djeljenjem sa 2 jednak 0 to su parni brojevi onda, ako nije 0 onda ih ne ispisuje
        console.log(i)
    }
}

console.log('=========================================')

// zbroji sve neparne brojeve od 7 do 77

suma=0

for(let i=7;i<=77;i++)
{
    if(i%2===1)
    {
        suma+=i
    }
    console.log(suma)

}

console.log('=========================================')


// prim broj, prosti broj, prime number

let prim=true

const broj=73779865

for(let i=2;i<broj;i++){
    if(broj%i===0)
    {
        prim=false 
        break
    }
    else if(i<10000){
        console.log(i ,'Trosimo resurse uzalud')
    }
}

console.log(prim?'PRIM' : 'NIJE PRIM')

console.log('=========================================')


//petlju mozemo preskociti (nastaviti) i nasilno prekinuti

for(let i=0;i<10;i++)
{
    if(i===3)
    {
        continue
    }

    if(i===7)
    {
        break
    }
    console.log(i)
}

console.log('=========================================')

//ugnjezdjivanje petlji

const x=25

document.write('<table>')

for(let i=1;i<=x;i++)
{

    document.write('<tr>')

        for(let j=1;j<x;j++)
        {
            document.write(`<td>${i*j}</td>`)
        }

    document.write('</tr>')
    
}

document.write('</table>')

console.log('=========================================')

const niz=['Marija', 'Zvonko', 'Ana','Miro','Tena','Ivo']

// console.log(niz[0])
// console.log(niz[1])
// console.log(niz[2])
// console.log(niz[3])
// console.log(niz[4])

for(let i=0;i>niz.length;i++)
{
    console.log(niz[i])

}

console.log('=========================================')

// kako da ispisemo imena unazad 

for(i=niz.length;i>=0;i--){
     console.log(niz[i])
}


// ovo smo kopirali iz vjezbe 7 da ne trosimo vrijeme na kucanje 

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

suma=0
for(let i=0;i<osobe.length;i++)
{
    suma+=osobe[i]?.godine?? 0

}



 console.log(suma)
// console.table(osobe)



// const suma=osobe[0].godine+osobe[1].godine+osobe[2].godine
//             +osobe[3].godine
//             +(osobe[4]?.godine ?? 0 )  // ako nema 4tog onda dodje i pita se jel ga ima i ako ga ima onda ga racuna kao 0

// console.log(suma)

suma=0

for(const o of osobe){
    suma+=o?.godine ?? 0
}

console.log(suma)   //ova donja sintaksa je ekvivalent gornjoj sintaksi

//to nije klasicni for vec skraceni foreach
//on ne moze preskakati, on mora ici redom i ne moze ici s jedne na drugu stranu

// string je niz znakova

const ime='Nina'

// ispisati znak po znak jedno ispod drugog

for(const z of ime){
    console.log(z, z.charCodeAt(0))
    document.write(`&#${z.charCodeAt(0)};`)  // html escape chart

}

// idemo vidjeti prvih 256 znakova sa beskonacnom petljom

let brojac = 0
for(;;){
    document.write('<hr><h1>')
    document.write(`&amp;#${++brojac}; &#${brojac}; <br>`)
    if(brojac>65535){
        break
    }

}
document.write('</h1>')

























