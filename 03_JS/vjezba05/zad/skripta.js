const rezultat=document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click',()=>{
    rezultat.innerHTML=''

    // idem pokupiti vrijednost koje je unio korisnik (String)

    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak').value

    if(zadatak ==='1'){  
        //počinje prvi zadatak

        if(!aString){ //falsy, aString===''
            rezultat.innerHTML='Unesite vrijednost A'
            rezultat.style.color='red'
            return // prekida izvodjenje click funkcije - short curcuiting    
        }

        const a=Number(aString)

        if(!a){
            //falsy, a je NaN

            rezultat.innerHTML='A nije broj'
            rezultat.style.color='red'
            return
        }

        // ovdje sam 100% siguran da mi je A broj

        if(!bString){
            rezultat.innerHTML='Unesite vrijednost B'
            rezultat.style.color='red'
            return
        }

         const b=Number(bString)

        if(!b){
            //falsy, B je NaN

            rezultat.innerHTML='B nije broj'
            rezultat.style.color='red'
            return
        }

        // ovdje sam 100% siguran da su A i B brojevi :)

        //rezultat.innerHTML=a>b? a:b
        if(a===b){
            rezultat.innerHTML='brojevi su jednaki'
        }
        else if(a>b){
            rezultat.innerHTML=a 
        }
        else
            rezultat.innerHTML=b 
        rezultat.style.color='green'
        

    //rezultat.innerHTML= a===b? 'jednaki su' a>b : a :b
        //završava prvi zadatak


    }

    if(zadatak==='2'){
        //počinje drugi zadatak



        // završava drugi zadatak
    }

     if(zadatak==='3'){
        //počinje treći zadatak



        // završava treći zadatak
    }


    //završava click funkcija
})

