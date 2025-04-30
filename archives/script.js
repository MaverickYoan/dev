// // console.log, les chaînes de caractères et la concaténation

// // console.log('Coucou le monde ! Je suis dans le fichier script.js.')

// // console.log(3 + 2)
// // console.log(3 - 2)
// // console.log(3 * 2)
// // console.log(3 / 2)

// // console.log('3 + 2 = ' + (3 + 2))

// // les variables
// const firstName = 'Mav'

// // let age = 39
// // // NE PAS OUBLIER L'ESPACE AVANT LA VARIABLE à STOCKER pour que l'affichage des infos retournées soient clairent.
// let passion = ' et aime la Free Party'
// let ville = 'Nevers'


// let estLaBonnePersonne = true
// // let estLaBonnePersonne = false
// let estMajeur = true
// // let estMajeur = false
// let Stagiaire = true
// // let Stagiaire = false

// // // OU SINON AJOUTER L'ESPACE DANS LA DECLARATION ex: + age + " ans. ...".

// console.log(
//     "Je m'appelle " + firstName + ", j'ai " + age + " ans. J'habite " + ville + passion
// )

// // équivalent à :
// // console.log(
// //     'Je m\'appelle ' + firstName + ', j\'ai ' + age + ' ans. J\'habite ' + ville + passion
// // )

// // backticks : Alt Gr + 7 (puis espace)
// // `ok cool
// // `


// // template literals
// // console.log(`Je m'appelle ${firstName}, j'ai ${age}. J'habite ${ville}.`)
// // console.log(`Est-ce que ${firstName} est étudiant(e) ?`)


// // messageAMettreDansleP.innerText = '<strong>Hello World!</strong>'

// // messageAMettreDansleP.innerHTML = '<strong>Hello World!</strong>'

// // console.log(`Est-ce que ${firstName} est La Bonne Personne`)
// // console.log(estLaBonnePersonne ? 'Il Est La Bonne Personne' : "retry")

// // enregistrement d'une variable
// // let message = 'hello world'

// let messageGetElementById_p = document.getElementById('message')
// // let messageclassp = document.getElementByClassName('message')
// let messageQuerySelectorClass_p = document.querySelector('.message')
// let messageQuerySelectorId_p = document.querySelector('#message')



// // // penser à bien désactiver cette fonction s'il on veut que la fonction suivante s'active
// // document.body.innerHTML = 'bien'

// document.getElementById('message').innerHTML = '<strong> Welcome to all refugies. Not yet, please. Wait our signal. Peace on all of you</strong>'
// // document.getElementByClassName('message').innerHTML = '<strong>And be what you want to be</strong>'

// // // != est égal à différent

// // si la condition est ok alors l'on exécute la déclaration
// if (1 == 1) { console.log('1 est bien égal à 1') }


// // _____________________________________________________________________________

// // les variables

// let connect = true


// // les déclarations

// if (connect == true) {
//     console.log('connect')

// } else { console.log('disconnect') }

// // _____________________________________________________________________________
// let age = 50

// // if (age < 12) { console.log('Tu es un(e) enfant') }
// // else if (age <= 17) { console.log('Tu es un(e) ado') }
// // else if (age >= 39) { console.log('Tu es un(e) femme ou un homme') }


let userName = 'Bob'

function bonjour1() {
    console.log('Bonjour ' + userName)
}

bonjour1()

