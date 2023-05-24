const showNavbar = ()=>{
    if(document.querySelector(".nav-links").classList.contains("hide-links"))
    {
        console.log("is hide")
        document.querySelector(".nav-links").classList.remove("hide-links");
        document.querySelector(".nav-links").classList.add("show-links");
    }else{
        console.log("is show")
        document.querySelector(".nav-links").classList.remove("show-links");
        document.querySelector(".nav-links").classList.add("hide-links");
    }
}

// document.querySelector(".nav-bars").addEventListener('click',()=>{
//     console.log("testing !");
// })