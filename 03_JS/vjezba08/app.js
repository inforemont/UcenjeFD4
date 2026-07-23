

/* =================================================
   ZADATAK 1 — Prvi i zadnji element
   - niz se gradi od A i B (plus dva fiksna elementa radi smisla)
   Ulaz primjer: [A, 20, 30, B]
   Izlaz: Prvi: A, Zadnji: B
================================================= */


document.getElementById('zad01').addEventListener('click', () => {

   console.log("ZADATAK 1 — Prvi i zadnji element")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const ac = !a ? 'Prazno' : a
   const niz = [ac, 20, 30, !b ? 'Prazno' : b]
   console.log(niz)
   console.log(`Prvi: ${niz[0]}, Zadnji: ${niz[niz.length - 1]}`)
})


/* =================================================
   ZADATAK 2 — Siguran pristup elementu
   U danom nizu [1,2,3,4,5,6,7]
   - Ako je A broj postavi vrijednost B na taj index
   - Ako je A string u niz dodaj novi element i postavi B na taj index
================================================= */


document.getElementById('zad02').addEventListener('click', () => {

   console.log("ZADATAK 2 — Siguran pristup elementu")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [1, 2, 3, 4, 5, 6, 7]
   console.log(niz)

   // if(a===Number)
   // {
   // console.log(`A je broj, B se nalazi na indexu ${niz[a]}`)
   // }
   // else if(a||Number)
   // {
   //    niz=niz.length+1
   //    niz=[niz , ...b]
   //    console.log(`A nije broj, B se nalazi na indexu ${niz[b]}`)

   // }


   const ab = Number(a)
   if (!ab) {

      //a je string 
      niz.length = niz.length + 1
      niz[niz.length - 1] = b
   }
   else {
      //a je broj , koristimo ab
      niz[ab] = b

   }

})



/* =================================================
   ZADATAK 3 — Zamjena prva dva elementa
   Unesi podatke A i B u niz [A, B, 3]
   - ispiši niz
   - zamijeni prva dva elemente
   - ispiši niz
================================================= */


document.getElementById('zad03').addEventListener('click', () => {

   console.log("ZADATAK 3 — Zamjena prva dva elementa")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz= [a,b,3]
   //let niz = [a, b, 3]
   console.log(niz)
   //niz=[b,a,3]
   //console.log(niz)

   const x=niz[0]
   niz[0]=niz[1]
   niz[1]=x

    console.log(niz)



})



/* =================================================
   ZADATAK 4 — Dodavanje elementa prema duljini
   - niz: [A, B]
   - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
     inače → dodaj "Y" na početak
================================================= */

document.getElementById('zad04').addEventListener('click', () => {

   console.log("ZADATAK 4 — Dodavanje elementa prema duljini")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let niz=[a,b]
   console.log(niz)
   
   const ab=Number(a)   // uzeli smo broj iz stringa
   
   if(!ab&&a.length<3){

      //a je string i duljina je manja od 3

      niz.push('X')
      console.log(niz)



      niz[0]='Y'

   }
   else{
      //a je broj koristim ab
      niz=["Y",...niz]
      console.log(niz)
   }





})


/* =================================================
   ZADATAK 5 — Provjera tipa prvog elementa
   - ako je A broj 7 na prvi elementi niza podatvi true, inače 0
   - ako je B tekst Osijek na drugi element postavi B, inače 2,5
   - koristeći elemente niza ispiši kojeg su tipa
================================================= */

document.getElementById('zad05').addEventListener('click', () => {

   console.log("ZADATAK 5 — Provjera tipa elementa")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let niz=[a,b]

   if(a==='7')
   {
      niz[0]=true
      console.log(niz)
   }
   else if (b==='Osijek'){
      niz[1]='Osijek'
      console.log(niz)

   }
   else{
      niz[1]=2.5
      console.log(niz)
   }


})


/* =================================================
   ZADATAK 6 — Ukloni zadnji element 
  Vrijednosti A i B se unose u niz [A, B, 'KRAJ']
================================================= */


document.getElementById('zad06').addEventListener('click', () => {

   console.log("ZADATAK 6 — Ukloni zadnji element")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let niz=[a,b,'KRAJ']
   console.log(niz)
      niz.length=niz.length-1
      console.log(niz)

   })



/* =================================================
   ZADATAK 7 — Spoji dva niza
   - niz1: [A, 2]
   - niz2: [B, 4]
   - spajanje spreadom
================================================= */


document.getElementById('zad07').addEventListener('click', () => {

   console.log("ZADATAK 7 — Spoji dva niza")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let niz1= [a,2]
   let niz2= [b,4]
   console.log(niz1,niz2)
   let niz3=[niz1,...niz2]
   console.log(niz3)

})



/* =================================================
   ZADATAK 8 — Provjera rupe u nizu
   - napravimo niz sa "rupom" na indeksu 1:
     niz[0]=A, niz[2]=B
   - provjerimo indeks 1
================================================= */

document.getElementById('zad08').addEventListener('click', () => {

   console.log("ZADATAK 8 — Provjera rupe u nizu")
   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let niz[5]
   niz[0]=a
   niz[2]=b

   console.log(niz)



})



/* =================================================
   ZADATAK 9 — Razdvajanje prvog i ostatka
   - niz: [A, B, 7, 6]
   - destructuring [prvi, ...ostatak]
================================================= */
console.log("ZADATAK 9 — Razdvajanje prvog i ostatka")


/* =================================================
   ZADATAK 10 — prema duljini niza
   - duljinu određujemo prema A i B:
     Ako je A prazan string ili B prazan string → niz = []
     Inače ako A === B → niz = [A]
     Inače ako je B broj i B === 2 → niz = [A, B]
     Inače → niz = [A, B, "x"]
================================================= */
console.log("ZADATAK 10 — prema duljini niza")
