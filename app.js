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


 // Define Global Variables
 
const sec=document.querySelectorAll('section');
const navlist = document.getElementById('navbar__list');
/* Defining Global Variables */
 
/*using forEch to apply function list() on each section */
sec.forEach( function list (Listing){

    Lists = document.createElement('li'); 
    Links = document.createElement('a');
    
// adding "class" to anchors from .css */
    Links.className = "menu__link"; 
  
//indicate anchors' names from 'data-nav' attribute and their href from each's ID
    ItemName = Listing.getAttribute('data-nav'); 
    Links.innerHTML= ItemName;
    anchors = Listing.getAttribute('id');
    linkAnchor=Links.setAttribute('href', `#${anchors}`);
   
//  links as last child of lists
    Lists.appendChild(Links);
//  links as last child of lists
    navlist.appendChild(Lists);

    
});

// i was confused about this part, i needed to select the viewPort element to set it as Active
//  https://gist.github.com/davidtheclark/5515733 
function inView(x){
    secPosition = x.getBoundingClientRect();
    return (secPosition.top >=-20 &&
            secPosition.bottom <= 600
        ); 
}


// to make it clear which section is being viewed while scrolling through the page.
// Active section has animated Crcls around it (contains class="your-active-class").So,
// Only active section should have class="your-active-class" and when it is not active class is removed

document.addEventListener("scroll",  function (){

    for(Listing of sec){
        if((inView(Listing))=== true){
            
            while(!Listing.classList.contains("your-active-class")){
                Listing.classList.add("your-active-class");
            }
            
        }
        else 
                Listing.classList.remove("your-active-class");
    
            

        }
    }
 
);


