let sideNav = document.getElementById("navbar");
let menuBtn = document.getElementById("container");

menuBtn.addEventListener("click", onClick, false);
window.addEventListener("resize", onResize, false);

function onClick(){     
    if (sideNav.style.marginLeft == "0px") {
    sideNav.style.marginLeft="-250px";           
    } else {
        sideNav.style.marginLeft="0px";                
    }
}

function onResize(){    
    if(window.innerWidth > 768){
        sideNav.style.marginLeft="0px";
    } else {
        sideNav.style.marginLeft="-250px";
    }
}






