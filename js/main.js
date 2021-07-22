// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
        cancelAnimationFrame(frame);
    }
    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
    });
  
    } 
}; 
// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}
// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true }); 
// Update scroll position for first time
storeScroll();



//hamburger menu func
function hamburger(){
    if (document.getElementById("menuToggle").checked == true) {
        document.getElementById("nav__menu").style.visibility = "visible";
        if(window.scrollY>0){
            if(window.matchMedia('(max-width: 450px)')){
                document.getElementById("header").style.height = "180px";
            }else{
                document.getElementById("header").style.height = "150px";
            }
        }
    } 
    else {
        document.getElementById("nav__menu").style.visibility = "hidden";
        document.getElementById("header").style.height = "65px";
    }
}

window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
        document.getElementById('menuToggle').checked = false;
        document.getElementById("header").style.height = "65px";
        document.getElementById("nav__menu").style.visibility = "visible";
    }
    else{
        document.getElementById("nav__menu").style.visibility = "hidden";
    }
}, true);