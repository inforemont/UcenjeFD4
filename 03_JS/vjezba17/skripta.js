
// "stara funkcija"

function primjer(prvi, drugi){
console.log(prvi, drugi)
}

primjer('Edunova','Osijek') //stara funkcija 

function dugiPoziv(){ //stara funkcija koja ima svoje izvođenje i radi sinkrono - funkcija čekanja
    let i=0
    console.log(new Date())
    // setTimeout mi simulira dohvaćanje sadržaja s backenda (API)
    setTimeout(() => { // koristi funkciju koja je ponuđena, ne drugu
        // ovdje pišemo što će se napraviti nakon što istekne vrijeme
        console.log(++i, new Date())


        setTimeout(() => {
            console.log(++i, new Date())

            setTimeout(() => {
                console.log(++i, new Date())
            }, 1000);


        }, 2000);


    }, 5000); // 5000 ms = S s - u konzoli nakon što istekne vrijeme pokazuje novo vrijeme npr 5 sati, drugo je 5 sati i 5 sekundi
}

dugiPoziv()

// async/await

async function cekaj(ms){
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(`Završio za ${ms/1000} sekundi`)
    }, ms);
  })  
}

async function izvedi(){
    let odgovor = await cekaj(5000)
    console.log(odgovor)

    for(let i = 0; i < 10; i++){
        console.log(await cekaj((i+1)*1000))
    }

}

// ovo ovdje je top level module

izvedi()  //ovdje mogu i ne moram navesti await zato što sam u top level module

// IIFE funkcija - standardni načiin, a ako hoćemo na početku radimo iduće
;(async () => {     //; označava da je prethodni izraz završio a stavljan je ovdje jer ne koristimo ; bez nje nismo dobili da piše hello iife
    console.log('Hello IIFE')
    const url = 'https://dog.ceo/api/breeds/image/random'
    await fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        document.getElementById('slika').src = json.message
    })
    .catch(rejected => {
        alert('Imamo problema s učitanjem sadržaja')
    })

})() // ove zadnje dvije () znače izvedi
