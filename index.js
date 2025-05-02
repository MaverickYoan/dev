// _______________________________button________________________________________________

// const btn = document.querySelector('button')
// console.log(btn);

// fonction servant à ouvrir une boite de dialogue avec un message personalisé.
// btn.addEventListener("click", () => {
//     alert("Peace Or Die");
// })

// _______________________________la barre de progression________________________________________________

// * Nous récupérons la barre de progression dans le Document Object Model (DOM). 
const progressBar = document.getElementById("percent-loaded");

// * Nous lui affectons des rôles et états ARIA affin que les outils d'assistance puissent identifier le type de widget. 
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);
progressBar.setAttribute("aria-valuenow", 58);
progressBar.setAttribute("aria-label", "Progression de la barre de progression");
progressBar.setAttribute("aria-color", "green");

// * Nous créons une fonction qui peut être appelée à tout moment pour mettre à jour la barre de progression. 
function updateProgress(percentComplete) {
    progressBar.setAttribute("aria-valuenow", percentComplete);
}

// _______________________________vidéo________________________________________________

const tjrs = document.querySelector('.menthe')

console.log(tjrs);

// _______________________________________________________________________________
