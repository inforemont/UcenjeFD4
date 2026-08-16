

const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    // početak 1     , a i b  su string
    //1. Ispiši apsolutnu vrijednost razlike brojeva A i B.
    if(!a||!b){
      rezultat.innerHTML='Obavezan unos a i b'
      return
    }
    const brojA=Number(a)
    const brojB=Number(b)
    if(!brojA)
    {
      rezultat.innerHTML='a nije broj'
      return
    }
    if(!brojB)
    {
      rezultat.innerHTML='b nije broj'
      return
    }
    let suma=0
    suma=brojA-brojB
    if(suma<0)
    {
      suma=suma*(-1)
      rezultat.innerHTML=(suma)
      return

    }
    else if(suma>=0){
      rezultat.innerHTML=(suma)
      return
    }

    //imamo fdunkciju gotovu rezultat.innerHTML = Math.abs(brojA-brojB)
    





    // kraj 1
  },
  z2: (a, b) => {
    console.log('Zadatak 2');
    // početak 2
    // 2. Ispiši veći broj od dva unesena cijela broja A i B.

     if(!a||!b){
      rezultat.innerHTML='Obavezan unos a i b'
      return
    }
    const brojA=Number(a)
    const brojB=Number(b)
    if(!brojA)
    {
      rezultat.innerHTML='a nije broj'
      return
    }
    if(!brojB)
    {
      rezultat.innerHTML='b nije broj'
      return
    }

    if(brojA>brojB)
    {
      rezultat.innerHTML=(brojA)
      return
    }
    else if(brojA===brojB)
    {
      rezultat.innerHTML='Brojevi su jednaki'
      return
    }
    else
    {
      rezultat.innerHTML=(brojB)
      return
    }








    // kraj 2
  },
  z3: (a, b) => {
    console.log('Zadatak 3');
    // početak 3 
//3. U rezultatu napravi onoliko div elemenata koliko je uneseno u polje A te svaki drugi div ima boju pozadine definiranu u polju B.
    
if(!a||!b){
      rezultat.innerHTML='Obavezan unos a i b'
      return
    }
    const brojA=Number(a)
    const brojB=Number(b)
    if(!brojA)
    {
      rezultat.innerHTML='a nije broj'
      return
    }

    const brojDivova =Number(a)

    if(!brojDivova){
      rezultat.innerHTML='a nije broj'
      return
    }

    if(brojDivova<1)
    {
      rezultat.innerHTML='broj divova nije ispravan'
      return
    }
    else if(brojDivova>100)
    {
      rezultat.innerHTML='broj divova nije ispravan'
      return
    }


    let divovi = ""
    for(let i=0; i<brojDivova; i++){

      if(i%2===0){   // u b moramo staviti #2ecc71 
        divovi += `
        
        <div style="background-color: ${b}">  
        &nbsp;
        
        </div>`
      }
      else{
        divovi+='<div> &nbsp</div>'
      }



    }
  
    rezultat.innerHTML= divovi

    // kraj 3
  },
  z4: (a, b) => {
    console.log('Zadatak 4');
    // početak 4
    //4. Ako ostane polje A i B prazno u rezultat upišite dva emojia po vlastitom izboru

    if(!a||!b){
      rezultat.innerHTML='\u{1F606}  \u{1F642} '
      return
    }
    const brojA=Number(a)
    const brojB=Number(b)
    if(!brojA)
    {
      rezultat.innerHTML='a nije broj'
      return
    }
    if(!brojB)
    {
      rezultat.innerHTML='b nije broj'
      return
    }

    if(brojA>brojB)
    {
      rezultat.innerHTML=(brojA)
      return
    }
    else
    {
      rezultat.innerHTML=(brojB)
    }


    // kraj 4
  },
  z5: (a, b) => {
    console.log('Zadatak 5');
    // početak 5
    //5. Osmislite zadatak sami i realizirajte ga



    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
