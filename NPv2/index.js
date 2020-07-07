
//transforms burger menu to X onclick
/*$("#wrapper").click(function() {
	$(".menu").toggleClass("close");
});

 //Side Nav Reveal Function

let toggleNavStatus = false;

let toggleNav = function () {
    let getSideNav = document.querySelector(".nav-sidebar");
    
    if (toggleNavStatus === false) {
    getSideNav.style.visibility = "visible";

    toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSideNav.style.visibility = "";
    
        toggleNavStatus = false; 
}
}


/* When the user clicks on the "projects" button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the projects dropdown if the user clicks outside of it
  /* window.onclick = function(e) {
   if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
*/
 


// Global Variables

let creative = document.getElementById("creative");
let producer = document.getElementById("producer");
let project = document.getElementById("project");
let manager = document.getElementById("manager");
let uxui = document.getElementById("uxui");
let designer = document.getElementById("designer");


// Text transformation on hover
function changeColorPm() {
  producer.style.color = 'transparent';
  producer.style.webkitTextStroke = '1.5px black';
  designer.style.color = 'transparent';
  designer.style.webkitTextStroke = '1.5px black';
  project.style.color = 'black';
  project.style.webkitTextStroke = '0';
}

function changeColorXd() {
  producer.style.color = 'transparent';
  producer.style.webkitTextStroke = '1.5px black';
  manager.style.color = 'transparent';
  manager.style.webkitTextStroke = '1.5px black';
  uxui.style.color = 'black';
  uxui.style.webkitTextStroke = '0';
}

function changeColorCp() {
  manager.style.color = 'transparent';
  manager.style.webkitTextStroke = '1.5px black';
  designer.style.color = 'transparent';
  designer.style.webkitTextStroke = '1.5px black';
  creative.style.color = 'black';
  creative.style.webkitTextStroke = '0';
}

function defaultStyle() {
  creative.style.color = 'transparent';
  creative.style.webkitTextStroke = "1.5px black";
  producer.style.color = 'black';
  producer.style.webkitTextStroke = '0';
  project.style.color = 'transparent';
  project.style.webkitTextStroke = "1.5px black";
  manager.style.color = 'black';
  manager.style.webkitTextStroke = '0';
  uxui.style.color = 'transparent';
  uxui.style.webkitTextStroke = "1.5px black";
  designer.style.color = 'black';
  designer.style.webkitTextStroke = '0';
}

//Animation Start Delay
document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}


//Add ! to SayHi

function sayHi() {
  var cta = document.getElementById('sayhi');
  var exclamation = document.createTextNode('!');
  var aboutPage = document.getElementById('about');

  if (document.head.contains(aboutPage) === true) {
    cta.innerHTML = " SAY Hi!";
  } else {
    cta.appendChild(exclamation);
  }
}

//Remove ! from SayHi

function sayBye () {
  var cta = document.getElementById('sayhi');
  var aboutPage = document.getElementById('about');

  if (document.head.contains(aboutPage) === true) {
    cta.innerHTML = " SAY Hi.";
  } else {
    cta.innerHTML = "SAY Hi";
  }
}


//About Page Buttons functions

window.onload = document.getElementById('aboutMeButton').focus();

//global variables
var aboutMe = document.getElementById('aboutMe');
var aboutSite = document.getElementById('aboutSite');
var aboutNoble = document.getElementById('aboutNoble');
var aboutMeButton = document.getElementById('aboutMeButton');
var aboutSiteButton = document.getElementById('aboutSiteButton');
var aboutNobleButton = document.getElementById('aboutNobleButton');


aboutMeButton.addEventListener('click', function() {
  aboutMe.style.display = 'block';
  aboutSite.style.display = 'none';
  aboutNoble.style.display = 'none';
  aboutMeButton.classList.add("active");
  aboutSiteButton.classList.remove("active");
  aboutNobleButton.classList.remove("active");
} )

aboutNobleButton.addEventListener('click', function() {
  aboutMe.style.display = 'none';
  aboutSite.style.display = 'none';
  aboutNoble.style.display = 'block';
  aboutNobleButton.classList.add("active");
  aboutMeButton.classList.remove("active");
  aboutSiteButton.classList.remove("active");
} )

aboutSiteButton.addEventListener('click', function() {
  aboutMe.style.display = 'none';
  aboutSite.style.display = 'block';
  aboutNoble.style.display = 'none';
  aboutSiteButton.classList.add("active");
  aboutMeButton.classList.remove("active");
  aboutNobleButton.classList.remove("active");
} )
