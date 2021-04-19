class onScroll {
    constructor() {
        this.menuDesktop = document.querySelector('.menu-desktop');
    }

    scrollSpy() {
        var prevScrollpos = window.pageYOffset;

        window.onscroll = () => {
            
        var currentScrollPos = window.pageYOffset;
            if(prevScrollpos > currentScrollPos){
                this.menuDesktop.style.top = "0";
            } else {
                this.menuDesktop.style.top = "-99.39px";
            }
                prevScrollpos = currentScrollPos;
        }
    }
}

class windowReload {
    constructor() {
        this.logoDesktop = document.querySelector('.logo-desktop');
    }

    reloadPage() {
        this.logoDesktop.addEventListener('click', () => {
            window.location.reload();
        });
    }
}

class hamburgerMenu {
    constructor() {
        this.navToggle = document.querySelector('.menu-mobile .menu-mobile-nav');
        this.nav = document.querySelector('.menu-mobile .navbar-mobile');
    }

    doToggle() {
        let menuToggle = (e) => {
            e.preventDefault();

            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }

        this.navToggle.addEventListener('click', e => menuToggle(e));
    }
}

class openProjects {
    constructor() {
        this.project1 = document.getElementById('project1');
        this.project2 = document.getElementById('project2');
        this.project3 = document.getElementById('project3');
    }

    openLinks(url1, url2, url3) {
        this.project1.addEventListener('click', () => window.open(url1));
        this.project2.addEventListener('click', () => window.open(url2));
        this.project3.addEventListener('click', () => window.open(url3));
    }
}

const initScroll = new onScroll;
const initReload = new windowReload;
const initHamburger = new hamburgerMenu;
const initProjects = new openProjects;


initScroll.scrollSpy();
initReload.reloadPage();
initHamburger.doToggle();
initProjects.openLinks("https://lukaofirst.github.io/instagram-clone/", "https://lukaofirst.github.io/spotify-clone/", "https://lukaofirst.github.io/tinder-clone/");


AOS.init();
