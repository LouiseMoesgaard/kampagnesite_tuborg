let nav = document.querySelector("nav ul");

document.addEventListener("DOMContentLoaded", function(){

    if (window.screen.availWidth >= 600) {
        nav.classList.remove("hide")

    } else {
        nav.classList.add("hide")
    }

    document.querySelector(".burger").addEventListener("click", function () {
    nav.classList.remove("hide")
})

    document.querySelector(".close_burger").addEventListener("click", function () {
        nav.classList.add("hide")
    })

});


window.addEventListener("resize",function(){
    if (window.screen.availWidth >= 600) {
        nav.classList.remove("hide")

    } else {
        nav.classList.add("hide")

    }
});

