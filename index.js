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
// let prenom = 'Je m\'appelle Yo';
// let age = 39;
// let age2 = '39';

// document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom;
// document.getElementById('p2').innerHTML = 'Type age : ' + typeof age;
// document.getElementById('p3').innerHTML = 'Type de age2 : ' + typeof age2;

// console.log(prenom);
// console.log(age);
// console.log(age2);

// //___________________Variables.02_____________________________________________
// * Boolean 
// let vrai = true;
// let faux = false;

// let resultat = 8 > 4;

// document.getElementById('p4').innerHTML = 'Type de vrai ' + typeof vrai
// console.log(resultat);

// //___________________Variables.02_____________________________________________
// * Null et Undefined. 
// let nul = null;
// let ind;

// document.getElementById('p5').innerHTML = 'Type de nul ' + typeof nul;
// document.getElementById('p6').innerHTML = 'Type de ind ' + typeof ind;

// console.log(nul);
// console.log(ind);

// //___________________Operateurs.00_____________________________________________

// let x = 2;
// let y = 3;
// let z = 4;

// let a = x + 1; // * a stocke 2 + 1 = 3. 
// let b = x + y; // * b stocke 2 + 3 = 5.
// let c = x - y; // * c stocke 2 - 3 = -1.
// let d = x * y; // * d stocke 2 * 3 = 6. 
// let e = x / y; // * e stocke 2 / 3. 
// let f = 5 % 3; // * f stocke le reste de la division euclidienne 5 par 3. 
// let g = x ** 3; // * g stocke 2^3 = 2 * 2 * 2 = 8. 

//  * On affiche les résultats dans une boite de d'alerte (popup) en utilisant l'opérateur 
// * de concaténation "+". On retourne à la ligne dans l'affichage avec "\n" 
// alert('a contient : ' + a +
//     '\nb contient : ' + b +
//     '\nc contient : ' + c +
//     '\nd contient : ' + d +
//     '\ne contient : ' + e +
//     '\nf contient : ' + f +
//     '\ng contient : ' + g);

// //___________________Operateurs.01_____________________________________________

// let r = 1 - 2 - 3; // * Calcule (1 - 2) - 3 = (- 1) - 3 = -4. 
// let s = 1 - (2 - 3); // * Calcule 1 - (2 - 3) = 1 - (- 1) = 1 + 1 = 2.
// let t = 2 ** 3 ** 2; // * Calcule 3 ** 2 = 3 * 3 = 9 puis 2 ** 9 = 512. 

// * Nous affichons les résultats dans une boite d'alerte en utilisant l'opérateur 
// * de concaténation "+". Nous retournons à la ligne dans l'affichage avec "\n" 

// alert('r contient : ' + r +
//     '\ns contient : ' + s +
//     '\nt contient : ' + t);

// //___________________Operateurs.02________JS_chapitre.3________________________

// let u = 2; // * u stocke 2.
// let v = 10; // * v stocke 10.

// * Nous ajoutons la valeur stockée précédemment par u (2) puis nous affectons 
// * le résultat à u. u stocke désormais 2 + 3 = 5 
// u += 3;

// * Nous multiplions la valeur de v (10) par celle de u (2) puis nous affectons 
// * le résultat à v. v stocke désormais 10 * 5 = 50. 
// v *= u;

// alert('u stocke : ' + u + '\nv stocke : ' + v);

// //___________________Operateurs.03_____________________________________________

// let h = 38 + 1; // * Le signe "+" est ici un opérateur arithmétique.
// let i = 'Bonjour';
// let j = h + 'ans'; // * Le signe "+" ici est un opérateur de concaténation. 

// alert(i + ', je m\'appelle Yo, j\'ai ' + j);

// //___________________Operateurs.04_____________________________________________

// let o = 5;
// let p = 50;

// alert('o contient ' + o +
//     '\np contient ' + p +
//     '\nLeur somme vaut ' + (o + p));

// alert(`o contient ${o} 
//     p contient ${p}
//     Leur somme vaut ${o + p}`);

// //___________________Operateurs.05_____________________________________________

const nickName = 'Maverick';
const age3 = 39;

console.log(nickName);


