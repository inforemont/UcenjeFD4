document.write('Hello')


// radimo Try Catch - meahinzam osiguranja da nam program ne pukne!
// da nam omoguci obradu greske ( iznimke - exception )

// console.log('Pocetak')

// const i=7
// const rezultat=i+varijabla

// console.log(rezultat)
// console.log('Kraj')

try{

    // ovdje se uvijek pokusa sve izvesti kako je navedeno
    // ovdje netko moze baciti ( throw ) gresku (iznimku)

    console.log('Pocetak')
    const i=7
    const rezultat=i+varijabla
    console.log(rezultat)
 




}catch(e){

    // kad se tamo baci greska, tu ju hvatamo ( odnosno iznimku )
    console.log('Greska')
    console.log(e.name)
    console.log(e.message)
    console.error(e)


}

   console.log('Kraj')

   console.log('2. primjer-bolji')

   const i=7
   let rezultat=0 //zelimo ga koristiti i u try i u catch i izvan toga

try {  // try je uvijek izvodi
    rezultat=i+varijabla
    
} catch{  // izvodi se u slucaju greske
    rezultat=i+1  // +1 je sadrzajni dio , 
    
} finally{  // uvijek se izvodi
console.log(rezultat)

}

console.log('Kraj primjer 2')

// bacanje greske
/**
 * @throws Ukoliko je broj manji od 0 odma baca gresku
 * @param {*} broj 
 * @returns 
 */

function korijen(broj){
    if(broj<0)
        throw new Error ('Ne mogu izvaditi 2. korijen')
    return Math.sqrt(broj)

}
try {
    console.log(korijen(-9))
    
} catch (error) {
    console.log(error.message)
}



console.log('Nastavak')

// jedan zgodan primjer - losa sintaksa 

function rekurzija(){
    let a=1, b=2, c=3, d=4, e=5
    let s='neki dugi tekst da napunimo memoriju'
    brojac++
    rekurzija()
}

let brojac=0

console.time('rekurzija')
try {
    rekurzija()
} catch (error) {
    console.log('Stog napunjen nakon broja poziva:', brojac)
}
console.timeEnd('rekurzija')












