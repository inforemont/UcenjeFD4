//switch je višestruko grananje
//switch radi sa svim tipovima podataka i provjerava s ===
// ono sto se moze sa switch, moze se i sa if

const ocjena = 1 // simuliramo da je korisnik unio vrijednost

switch(ocjena)
{
    case 1:
        console.log('nedovoljan')
        break
    case 2:
        console.log('dovoljan')
        break
    case 3:
        console.log('dobar')
        break
    case 4:
        console.log('vrlo dobar')
        break
    case 5:
        console.log('odlican')
        break
    default:
        console.log('unos nije ocjena')
}

const dan='Subota'

switch(dan)
{
    case 'Ponedjeljak':
    case 'Utorak':
    case 'Srijeda':
    case 'Cetvrtak':
    case 'Petak':
        console.log('Radni dan')
        break
    case 'Subota':
    case 'Nedjelja':
        console.log('Vikend')
        break
    default:
        console.log('Neispravan dan')

}




