let nav = document.querySelector("nav ul");
let modal = document.querySelector(".egg_modal");
let totalEggs = 5;
window.localStorage["eggsClicked"] = window.localStorage["eggsClicked"] || 0;

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
        window.localStorage["eggsClicked"] = parseInt(window.localStorage["eggsClicked"]) + 1;
        console.log(window.localStorage["eggsClicked"])
        if (window.localStorage["eggsClicked"] === totalEggs) {
            modal.style.height = (document.height || document.body.offsetHeight) + "px";
            modal.firstElementChild.style.top = (window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop) + "px";
            modal.classList.remove("hide");
        }

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

window.onunload = () => {
    // Clear the local storage
    delete window.localStorage['eggsClicked'];
}
