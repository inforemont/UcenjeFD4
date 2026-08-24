document.write('Hello!')

// generator funkcije su posebna vrsta funkcije koje se mogu zaustaviti i nastaviti

// * oznacava generator

function* primjerGenerator(){
    console.log('Pocetak rada generator')
    yield true // 1. pauza - vracam boolean true
    yield 2.7 // 2. pauza, vracam broj
    yield {ime: 'Pero', godine:27 } // 3. pauza , vracam objekt ime
    return 'Gotov'
}

// ovdje se funkcija ne izvrsava
const generator=primjerGenerator()  // konzola ostaje prazna

// dolazak generatora do 1. pauze

console.log(generator.next())

console.log(generator.next().value)

console.log(generator.next().value.ime)

console.log(generator.next())

const g2=primjerGenerator()

let g;
do{
g=g2.next()
console.log(g.value)

}while(!g.done)

function* sljedeciID(){
    let id=1
    while(true){
        yield `ID_${id++}`
    }
}
const id=sljedeciID()

console.log('ovdje nesto drugo radim')

for(let i=0;i<10;i++){
    console.log(id.next().value)
}

function* razgovor (){
    let odgovor
    
    while(true){
        odgovor=yield 'kako se zoves?'
        console.log(`generator kaze: Drago mi je, ${odgovor}`)
    }
}

const chat=razgovor()

// prvo moramo pokrenuti generator 

console.log(chat.next().value)
console.log(chat.next('marko').value)
console.log(chat.next('Marija').value)






