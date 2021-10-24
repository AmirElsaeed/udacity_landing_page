/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

buildNav();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createLlink(textNode, sectionId){
    let a = document.createElement('a'); 
    let link = document.createTextNode(textNode);
    a.appendChild(link);
    a.href = "#"+sectionId;
    a.classList.add('menu__link');

    return a;
}

function buildNav(){
    for(const section of sections){
        const li = document.createElement('li');
        li.setAttribute('data-nav', section.id);
        navbarList.appendChild(li);

        let textNode = section.getAttribute('data-nav');
        let sectionId = section.id;
        let a = createLlink(textNode, sectionId);
        
        li.appendChild(a);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event and set sections and nav items as active

window.addEventListener('scroll', function(){
    for(const section of sections){
        const rect = section.getBoundingClientRect(); // get section dimentions
        const navItem = document.querySelector(`[data-nav=${section.id}]`);
        
        if(rect.top > 0 && rect.top < 300){
            section.classList.add('your-active-class');
            navItem.classList.add('active-nav-link');
            navItem.firstElementChild.style.color="#fff";
        }else{
            section.classList.remove('your-active-class');
            navItem.classList.remove('active-nav-link');
            navItem.firstElementChild.style.color="#000";
        }
    }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click

navbarList.addEventListener("click", function(e){
    e.preventDefault();
    const dataNav = e.target.parentElement.getAttribute("data-nav");
    console.log(dataNav);
    const sectionId = document.getElementById(dataNav);
    sectionId.scrollIntoView({behavior: "smooth", block: "center"});
});