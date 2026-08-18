document.write('Hello!')

// funkcionalne metode - skracuju kod, danas se standardno koriste

const korisnici =[
    // radimo niz objekata
    {  //vamo su objekti
        id:1,
        ime:'Ana',
        prezime:'Kartek',
        godine:25,
        admin:false  // na zadnje mjesto ne mora ali moze doci , 
    },
      {  // ovo je drugi objekt
        id:2,
        ime:'Karlo',
        prezime:'Kotig',
        godine:29,
        admin:false  // on isto nije admin
    },
      {  
        id:1,
        ime:'Ana',
        prezime:'Kartek',
        godine:25,
        admin:false  
    },
      {  
        id:3,
        ime:'Marko',
        prezime:'Ćutić',
        godine:45,
        admin:true  
    },
      {  
        id:4,
        ime:'Nikolina',
        prezime:'Ćutić',
        godine:49,
        admin:true 
    },
      {  
        id:5,
        ime:'Žana',
        prezime:'Đitko',
        godine:18,
        admin:false  
    }

    
]
console.table(korisnici)

//forEach()  - zamjenjuje (skracuje) for petlju


for(i=0;i<korisnici.length;i++){

    console.log(korisnici[i].ime)
}

console.log('**************************************')

korisnici.forEach(korisnik => console.log(korisnik.ime))

//moze se i ovako posto je to objekt
// korisnici.forEach(o=> console.log(`&{o.ime} ${o.prezime}`))

korisnici.forEach(o=>{
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('a')){
        oslovi += 'a gospođo'

    } else{
        oslovi+= 'i gospodine'
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
})

console.log('****************************************')

korisnici.forEach(o=> console.log(`Poštovan ${o.ime.endsWith('a')? 'a gospođo' :'i gospodine'} ${o.ime} ${o.prezime}`))

console.log('************************************')

// map()
// zelim iz niza korisnici napraviti novi niz koji ima samo imena!

const imena=korisnici.map(o=>o.ime)

console.table(imena)


console.log('*******************************************')

// funkcionalne metode se mogu lančati - vezivati tj pozivati lancano

korisnici.map(o=>o.ime).forEach(s=> console.log(s))  // to nam je dalo novi niz koji ima samo stringove i onda kazemo foreach jer unutra su stringovi


// na medium.com ima nekih shiteva sto se moze pregledati i vidjeti kako se sto radi.

// zanima nas da redefiniramo strukturu podataka sad , tamo smo imali samo svojstva, a sad nas zanima da imamo samo ime i prezime 

console.table(korisnici.map(o=>o.ime+' '+ o.prezime))

// mi cemo to sad premapirati to izmjeniti kompletnu strukturu

const mojaStruktura=korisnici.map(({id,ime,prezime})=>({sifra: id, osoba:ime+' ' + prezime }))

console.table(mojaStruktura)

console.log('*************************************')

// idemo vidjeti sta radi find()

console.log(korisnici.find(o=>o.id===3).ime) // ako stavimo jednako onda mu dodjelimo vrijednost, ako stavimo === onda usporedjujemo

console.log(korisnici.find(o=>o.admin).ime)  // to je boolean i ako ima vise rezultata onda uzme prvi 

console.log(korisnici.find(o=>o.id===13)?.ime ?? 'ne postoji')  // kod puca jer ne postoji ime, pa se tu moze staviti undefinded pa metnemo poruku.

// idemo na kompleksniji find, trazi id prema imenu i prezimenu

console.log(korisnici.find(o=> o.ime='Ana' && o.prezime==='Kartek')) // tu mozemo imati kompleksnije uvijete za find, isto mozemo staviti sta ako ne nadje ili nema itd
console.log(korisnici.find(o=> o.ime='Ana' && o.prezime==='Kartek').id)

// findIndex()

console.log(mojaStruktura.findIndex(o=>o.sifra===100===-1)) // oznacava da ne postoji , ako stavimo sifra 2 ona je na indexu 1 

// filter()

console.table(korisnici.filter(o=>o.godine>40))  // nadji mi samo korisnike kojima su godine vise od 40

//reduce() funkcionalna metoda sazeti, reducirati - izvedeni podaci zbrojeno, prosjecno itd

// sada cemo je koristiti za sumiranje

console.log(korisnici.reduce((suma,o)=> suma+o.godine,0))  // 0 je pocetna vrijednost sume

let suma=0
korisnici.forEach(o=> suma+=o.godine)
console.log(suma)

suma=0

for(let i =0;i>korisnici.length;i++){
    suma+=korisnici[i].godine
}
console.log(suma)

//some()

// ponekad zelimo provjeriti da li neceg ima ili nema, znaci barem jedan koji je admin

console.log(korisnici.some(o=>o.admin)? 'ima ADMINA': ' NEMA ADMINA')

// every()

console.log(korisnici.every(o=>o.godine>=18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni ' )









