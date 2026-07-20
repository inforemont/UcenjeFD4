// uvjetno grananje if


// if radi s boolean tip podataka

const uvjet = false  // zamjenili smo true u false

// osnovna if sintaksa - ima samo if granu

if(uvjet){  // u if granu se ulazi ako je uvjet true
    console.log('uvjet je true')
}

// moze se napisati i if (uvjet==true) ali nije potrebno jer je on boolean tip i ako stavis samo uvjet znaci da ako je true , a ako je false onda nece izvesti taj if


//ako se if odnosi na samo jednu liniju ne trebaju viticaste zagrade {}


if(uvjet)
    console.log('uvjet je true')

    console.log('i ovo želim ispisati kada je uvjet true')   // kad je uvjet false onda ce ispisati ovaj drugi console log jer on u stvari uopce nije pod if , jer nema viticastih

    //to gore je bila osnovna ili minimalna sintaksa, a sada ide ona koja sadrzi i else odnosno standarda


    if(uvjet){
        //true grana
        console.log('dobro je')

    }
    else{
        //false grana 
        console.log('nije dobro')
    }


    //puna sintaksa

    const ocjena=5

    if(ocjena===1)
    {
        console.log('Nedovoljan')

    }

    else if(ocjena===2)
    {
        console.log('Dovoljan')
    }

     else if(ocjena===3)
    {
        console.log('Dobar')
    }

     else if(ocjena===4)
    {
        console.log('Vrlo dobar')
    }

     else if(ocjena===5)
    {
        console.log('Odlican')
    }

    //else if moze biti koliko god zelimo za svaki pojedini uvjet

    else{
        console.log('broj nije ocjena')
    }

    // logicki operatori AND , OR i NOT 

    if(ocjena>1 && ocjena <=5)
    {
        console.log('ocjena je valjana')
    }

    if(ocjena<=1 || ocjena >5)
    {
        console.log('ocjena nije valjana')
    }

    if(!(ocjena<=1 || ocjena >5))
    {
        console.log('ocjena je valjana na drugi nacin')
    }

    // ternarni operator ?:  to je inline if
    if(ocjena>=1 && ocjena<=5)
    {
        console.log('Ocjena je valjana')
    }
    else{
        console.log('Nije ocjena')


    }

    //kada if i else

    console.log(ocjena>=1  && ocjena<=5 ? 'ocjena je valjana inline ' : 'Nije ocjena inline')

    const ime=''  // string

    if(ime==='')
    {
        console.log('ime nema vrijednost')
    }

    // if(!ime){
    //console.log('ime nema vrijednost')}
    // else{ console.log(ime)}

    // falsy broj: 0, NaN, undefined, null
    // falsy string: '', undefined,null
    // falsy objekt: null, undefined

    const b=Number('aaaa')
    console.log(b)

    if(!b)
    {
        console.log('niste unjeli broj')
    }

    //truly

    const x=12

    if(x){ // zaboravio9 staviti>=18
        console.log('punoljetan je')


    }






