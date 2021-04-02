var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
            
    var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos){
            document.querySelector('.menu-desktop').style.top = "0";
        } else {
            document.querySelector('.menu-desktop').style.top = "-99.39px";
        }
            prevScrollpos = currentScrollPos;
}

function refresh(){
    location.reload();
}

(function() {

    var hamburger = {
      navToggle: document.querySelector('.menu-mobile .menu-mobile-nav'),
      nav: document.querySelector('.menu-mobile .navbar-mobile'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    
  
}());

var project1 = document.getElementById('project1');
var project2 = document.getElementById('project2');
var project3 = document.getElementById('project3');


project1.addEventListener('click', function(){
    window.open("https://lukaofirst.github.io/instagram-clone/");
})

project2.addEventListener('click', function(){
    window.open("https://lukaofirst.github.io/spotify-clone/");
})

project3.addEventListener('click', function(){
    window.open("https://lukaofirst.github.io/tinder-clone/");
})


AOS.init();
