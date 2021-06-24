'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html">𝙼𝚊𝚝𝚝 𝚝𝚎𝚛 𝚂𝚝𝚎𝚎𝚐𝚎</a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html"><b>Home();</b></a></li>
 <!--  <li class="nav-item"><a class="nav-link" href="experience.html"><b>Experience();</b></a></li> -->
   <li class="nav-item"><a class="nav-link" href="projects.html"><b>Projecten();</b></a></li>
 <!--  <li class="nav-item"><a class="nav-link" href="education.html"><b>Education();</b></a></li> -->
   <li class="nav-item"><a class="nav-link" href="ownprojects.html"><b>Eigen Projecten();</b></a></li>
  </ul>
</div>
</nav>`);

let footer = $(`
<footer class="footer">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-20 col-md-12 mb-4 mb-md-0 justify-content-center">
        <p class="tag" >"Develop a passion for learning. If you do, you will never cease to grow."<br>
        </p>  
      </div>
        <div class="col-lg-20 col-md-12 mb-4 mb-md-0">
      </div>
    </div>
  </div>
</footer>
`);



// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});

// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});

// Navbar current page highlight

let loader = document.querySelector('.loader-container');

window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappear")
}
$(function(){
  $('a.nav-link').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});

//function to remove underline on hover

$(document).ready(function(){

  $("a.nav-link").hover(
       function () {
         $(this).removeClass("current-link");
       },
       function () {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current-link');
        }
      }
  );
});
