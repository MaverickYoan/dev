// _______________________________button________________________________________________

// const btn = document.querySelector('button')
// console.log(btn);

// fonction servant à ouvrir une boite de dialogue avec un message personalisé.
// btn.addEventListener("click", () => {
//     alert("Peace Or Die");
// })

// _______________________________la barre de progression________________________________________________

// * Nous récupérons la barre de progression dans le Document Object Model (DOM). 
// const progressBar = document.getElementById("percent-loaded");

// * Nous lui affectons des rôles et états ARIA affin que les outils d'assistance puissent identifier le type de widget. 
// progressBar.setAttribute("role", "progressbar");
// progressBar.setAttribute("aria-valuemin", 0);
// progressBar.setAttribute("aria-valuemax", 100);
// progressBar.setAttribute("aria-valuenow", 58);
// progressBar.setAttribute("aria-label", "Progression de la barre de progression");
// progressBar.setAttribute("aria-color", "green");

// * Nous créons une fonction qui peut être appelée à tout moment pour mettre à jour la barre de progression. 
// function updateProgress(percentComplete) {
//     progressBar.setAttribute("aria-valuenow", percentComplete);
// }

// _______________________________vidéo________________________________________________

// const tjrs = document.querySelector('.menthe')

// console.log(tjrs);

// // ___________________Variables.00_____________________________________________
// * Nous déclarons la avriable puis nous l'initialisons en même temps. 
// let prenom = 'Yo';

// * Nous déclarons la variable. 
// let monAge;
// * Puis nous initialisons la variable ensuite.
// monAge = 39;

//  * Modifions la valeur de la variable monAge par Lune qui ne sera plus Yo. 
// prenom = 'Lune';

// //___________________Variables.01_____________________________________________
// * Le \ backSlash permet d'échapper le délimiteur entourant la valeur de variable. 
let prenom = 'Je m\'appelle Yo';
let age = 39;
let age2 = '39';

document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom;
document.getElementById('p2').innerHTML = 'Type age : ' + typeof age;
document.getElementById('p3').innerHTML = 'Type de age2 : ' + typeof age2;

console.log(prenom);
console.log(age);
console.log(age2);

// //___________________Variables.02_____________________________________________
// * Boolean 
let vrai = true;
let faux = false;

let resultat = 8 > 4;

document.getElementById('p4').innerHTML = 'Type de vrai ' + typeof vrai
console.log(resultat);

// //___________________Variables.02_____________________________________________
// * Null et Undefined. 
let nul = null;
let ind;

document.getElementById('p5').innerHTML = 'Type de nul ' + typeof nul;
document.getElementById('p6').innerHTML = 'Type de ind ' + typeof ind;

console.log(nul);
console.log(ind);

// //___________________Operateurs.00_____________________________________________



