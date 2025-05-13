import 'css\style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
        <!-- <button class="btntest">bouton</button> -->
        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="/index.html">À propos</a></li>
            <li><a href="/destination.html">Destination</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>
    `
// * script mobile menu
document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu') as HTMLDivElement;
    const links = document.getElementById('navLinks') as HTMLUListElement;
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });
});
