let nav = document.querySelector("nav ul");
let modal = document.querySelector(".egg_modal");

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 600) {
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

    document.querySelector(".egg_btn").addEventListener("click", function () {
        modal.style.height = (document.height || document.body.offsetHeight) + "px";
        modal.firstElementChild.style.top = (window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop) + "px";

        modal.classList.remove("hide");

    })

    document.querySelector(".close_btn").addEventListener("click", function () {
        modal.classList.add("hide");
    })
});


window.addEventListener("resize", function () {
    if (window.innerWidth >= 600) {
        nav.classList.remove("hide")

    } else {
        nav.classList.add("hide")

    }
});
