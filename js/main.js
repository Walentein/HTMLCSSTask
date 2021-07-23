// The debounce function receives our function as a parameter
const debounce = (fn) => {
    let frame;// This holds the requestAnimationFrame reference, so we can cancel it if we wish
    return (...params) => { // The debounce function returns a new function that can receive a variable number of arguments
        if (frame) { // If the frame variable has been defined, clear it now, and queue for next frame
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {// Queue our function call for the next frame
            fn(...params);// Call our function and pass any params we received
        });
    } 
}; 

const storeScroll = () => { // Reads out the scroll position and stores it in the data attribute so we can use it in our stylesheets
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true }); // Listen for new scroll events, here we debounce our `storeScroll` function
storeScroll();// Update scroll position for first time



//hamburger menu func
window.onload = function(){
    checkbox = document.getElementById('menuToggle');
    checkbox.addEventListener('change', e => {

        if(e.target.checked){
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

    });
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

window.addEventListener('scroll', function(){
    if (window.matchMedia('(max-width: 769px)').matches) {
        document.getElementById('menuToggle').checked = false;
        document.getElementById("nav__menu").style.visibility = "hidden";
        document.getElementById("header").style.height = "65px";
    }
}, true)