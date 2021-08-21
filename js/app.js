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


 
/*using forEch to create links in lists for each section  */
sec.forEach( Listing =>{

    Lists = document.createElement('li'); 
    Links = document.createElement('a');
 
// setting links name and href from (data-nav) and (id) attributes
    ItemName = Listing.getAttribute('data-nav');
    anchors = Listing.getAttribute('id');
    
// adding "class" to anchors from .css */
    Links.className ="menu__link"; 

     
    Links.textContent= ItemName;
    Links.setAttribute("href",`#${anchors}`);
   
  
   // to add a smooth scroll instead of the default
   Links.addEventListener("click" , function scrollAction(x) {
       x.preventDefault();
       Listing.scrollIntoView({behavior : "smooth"})
       });

//  links as last child of lists and so for lists as a last child of navlist
   Lists.appendChild(Links);
   navlist.appendChild(Lists);
});



// to set the viewed class as active
window.addEventListener("scroll" , inView);
function inView(){
  
    for (Listing of sec){
// get each section posision
        const sectionTopPos = Listing.getBoundingClientRect();

// to check whether the section top in view 
    if(sectionTopPos.top >= 0 && sectionTopPos.top <= 270){
     
     // set the active section as active if it dosen't have the class of activation
        if(!Listing.classList.contains("your-active-class")){
        Listing.classList.add("your-active-class");
        }
    }else {
     // remove the class of activation from sections that are not in view
      Listing.classList.remove("your-active-class");
    }
    }
}
