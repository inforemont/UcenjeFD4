
const isDev = true // sa true pokazuje brojeve, kad smo promijenili u false više se nisu pojavljivali u function log (poruka)



//funkcija je skup naredbi s određenom svrhom, s ciljem višestrukog poziva
// dry - don't repeat yourself
// ''klasične funkcije
// 2 koraka rada s funkcijama: definicija i pozivanje


// 1. funkcija ne prima parametre i ne vrća vrijednost - void

// "klasična" funkcija se može pozvati neovisno gdje je definirana
odradi()

//1.1 definicija
function odradi(){
    let i = 0
    i += 3
console.log('poziv funkcije 1. odradi', i)
}
// 1.2 poziv funkcije
odradi()

document.getElementById('gumb2').addEventListener('click',odradi)

document.getElementById('gumb3').addEventListener('click',function(){
    console.log('Poziv iz bezimene funkcije')
})

// 2. prima parametre, ne vraća vrijednost
//2.1. definicija
function parniBrojevi(odBroja, doBroja){  // odBroja, doBroja su parametri i odvajaju se zarezom //prvi parametar je string drugi je function
    for(let i = odBroja; i <= doBroja; i++){
        if( i % 2 === 0){
            console.log(i)
        }
    }
}

parniBrojevi(2,8)
parniBrojevi(100,110)

// korisni primjer 2. vrste funkcije

function log(poruka){
    if(!isDev){
        return  // prekida izvođenje funkcije - short curcuiting
    }
    console.log('\n') // alt gr + Q je escape znak, a \n je novi red
    console.log('+-------------------+')
    console.log(poruka)
    console.log('+-------------------+')
}

log ('testiranje log funkcije')

log('Edunova')

// 3. ne prima parametre, vraća vrijednost
//3.1. definicija
/**
 * Funkcija radi kako je opisano
 * - bez parametara decimalni slučajni broj između 0 i 1
 * * - jedan parametar cijeli broj od 0 do parametra
 * * - dva parametar cijeli broja između prvog i drugog parametra
 * @param {*} odBroja 
 * @param {*} doBroja 
 * @returns slučajni broj
 */
function slucajniBroj(odBroja=0, doBroja=0){ // opcionalni parametri: kada varijabli dodjelim zadanu vrijednost
    if(odBroja && doBroja){ // koristim truely
        return (Math.random()*(doBroja - odBroja) + odBroja).toFixed(0)
    }
    if(odBroja && !doBroja){ // poslao si prvi parametar, nisi poslao drugi parametar
        return (Math.random()*odBroja).toFixed(0)
    }
    
    
    return Math.random()
}

//3.2. poziv
slucajniBroj() // funckija se izvela i rezultat funkcije je ''bačen u vjetar''
/**
 * ova varijabla mi služi za ...
 */
const sb = slucajniBroj()
log(sb)

log(slucajniBroj())

for(let i=0;i<6;i++){
    console.log(slucajniBroj(1,45))
}

log(slucajniBroj(20))

// 4. prima parametre, vraca vrijednost

// 4.1 definicija

function zbrojPrimBrojeva(odBroja,doBroja, ispis=false){
    let suma=0; prim=false
    for(let i=odBroja;i<=doBroja;i++)
    {
    if(i<2){
        continue
    }
    prim=true
    for(let j=2;j<i;j++)
    {
        if(i%j===0)
        {
            prim=false
            break
        }
    }
    if(prim)
    {
        if(ispis)
        {
            console.log(i)
        }
        suma+=i
    }
}

return suma
}

log(zbrojPrimBrojeva(-2,10)) //17

log(zbrojPrimBrojeva(100,120,true))

const ime='pero'

// 4, slucaj
log(ime.charCodeAt(0))  // izbaciti ce kod u ASCII tablici pod tim brojem 112 - malo p , da stavimo 1 onda ce izbaciti od malo e kod.

// 3. slucaj

log(ime.toUpperCase()) //

//2. slucaj - prima parametre ne vraca vrijednost

console.log('Primio parametar a nije vratio vrijednost')

//1. slucaj

// Obrada dogadjaja na stranici

// rekurzija je kada funkcija zove samu sebe uz uvijet prekida rekurzije
// u rekurziji treba paziti na stackoverflow

function zbroji(broj){
    if(broj===1){
        return 1
    }
    return broj+zbroji(broj-1)

}

log(zbroji(100))

//"moderne" funkicje - arrow

// definicija

const hello=() => log('Arrow hello')  // pozivamo je sa log(hello())
//poziv
log(hello())

const brojevi=(a,b) =>{
    const c=a+b 
    return[a,b,c]

}

log(brojevi(1,2));

// IIFE - funkcija - detaljnije citati o tome

(()=>{
console.log('Funkcija koja se nakon definiranja odmah pozove')  // to je bezimena funkcija
})  ()  // moramo prije prijasnje funkcije staviti ; pa se onda ova sama pozove













