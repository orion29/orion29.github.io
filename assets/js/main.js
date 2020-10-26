//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="black">
<div class="nav-wrapper">
    <!-- <a href="#!" class="brand-logo"><img src="assets/images/John-Doe1.png"></a> -->
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <!-- <li><a class="white-text" href="research.html">Research</a></li> -->
        <li><a class="white-text" href="education.html">Education</a></li>
        <!--  <li><a class="white-text" href="index.html">Blog</a></li> -->
        <li><a class="white-text" href="assets/Kunal_Jethuri.pdf" target="_blank">My Resume</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<!-- <li><a href="research.html">Research</a></li> -->
<li><a href="education.html">Education</a></li>
<!-- <li><a href="index.html">Blog</a></li> -->
<li><a href="assets/Kunal_Jethuri.pdf" target="_blank">My Resume</a></li>


<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">

      <div class="col-lg-7 col-md-6 pt-3" >
        
      <h4 class="webintern_footer_title h4" >
      <small style="font-size:1.6vw">  Connect </small>
    </h4>
    
      <div class="col-sm-6 col-md-7">
        <a class="webintern-footer-logo" href="#">
         <!-- <center><img src="assets/images/John-Doe1.png"style="width: 220px;"/></center> -->
        </a>
        <div class="simple-text text-center dark padding-sm">
          
        <div class="empty-space xs-25 sm-25"><br></div>
      </div>
    </div>
    <!-- Social media icons for footer -->

<div class="social-icons-footer">
  
  <a class="social-icon-footer linkedin" href="https://www.linkedin.com/in/kunal-jethuri-900a85181/" target="_blank" rel="author">
    <i class="fab fa-linkedin-in"></i>
      </a>
  <a class="social-icon-footer kaggle" href="https://www.kaggle.com/orion29" target="_blank" rel="author">
    <i class="fab fa-kaggle"></i>
      </a>
  <a class="social-icon-footer github" href="https://www.github.com/orion29" target="_blank" rel="author">
    <i class="fab fa-github"></i>
      </a>
      <a class="social-icon-footer twitter" href="" target="_blank" rel="author">
    <i class="fab fa-twitter"></i>
      </a>
  <br>
<p style="color:white;><a href=" "></a></p>
</div>
    </div>

      <div class="col-sm-6 col-md-5 pt-3 footer-2">
      <h4 class="webintern_footer_title h4" >
      <small style="font-size:1.6vw">  CONTACT </small>
    </h4>

    <div class="empty-space xs-25 sm-25"><br><br></div>
    <div class="social-icons-footer">

<a class="social-icon-footer linkedin" href="https://mail.google.com/mail/?view=cm&fs=1&to=kunal.jethuri@gmail.com" target="_blank" rel="author">
<i class="fab fa-google-plus-g"></i>
    </a>

<br>
<p style="color:white;><a href=" "></a></p>
</div>
    </div>
  </div>
  <!-- Social media icons for footer -->








  </div>
    </div>
  </div>
</div>
<div class="tt-copy">
  <div class="container col-sm-6">
   <!-- <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>-->
  </div>
</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

var checkbox = document.querySelector('input[name=theme]');
if(checkbox)
 {
 checkbox.addEventListener('change', function(){
   if(this.checked)
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'dark')
   }
   else
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'light')
   }
 });

 let trans = () => {
   document.documentElement.classList.add('transition');
   window.setTimeout(() => {
     document.documentElement.classList.remove('transition')
   }, 1000)
 }}
