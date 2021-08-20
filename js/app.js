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
const fragment = document.createDocumentFragment();
/* Defining Global Variables */
 
/*using forEch to apply function list() on each section */
sec.forEach( Listing =>{

    ItemName = Listing.getAttribute('data-nav');
    anchors = Listing.getAttribute('id');

    Lists = document.createElement('li'); 
    Links = document.createElement('a');
    
// adding "class" to anchors from .css */
    Links.classList.add("menu__link"); 
  
//indicate anchors' names from 'data-nav' attribute and their href from each's ID
     
    Links.textContent= ItemName;
    Links.href = `#${anchors}`;
   
  
   // to add a smooth scroll instead of the default
   Links.addEventListener("click" , x => {
       x.preventDefault();
       Listing.scrollIntoView({behavior : "smooth"})
   });

//  links as last child of lists
   Lists.appendChild(Links);
   fragment.appendChild(Lists);
});
navlist.appendChild(fragment);



// to set the viewed class as active
window.addEventListener("scroll" , activeClass);
function activeClass(){
    sec.forEach(Listing =>{

// getting all links, their names and their top position
        const allLinks = document.querySelectorAll("a.menu__link");
        const ItemName = Listing.getAttribute('data-nav');
        const sectionTopPos = Listing.getBoundingClientRect().top;
        
// to check whether the section in view
    if(sectionTopPos >= 0 && sectionTopPos <= 270){
        Listing.classList.add("your-active-class");

        // to check whether the link matches the section name or not and select the active section as active
        allLinks.forEach(Links => {
            if(Links.textContent === ItemName){
                Links.classList.add("your-active-class");
            }else {
                Links.classList.remove("your-active-class");
            }
             })
        }else {
            Listing.classList.remove("your-active-class");
        }
    })
}
