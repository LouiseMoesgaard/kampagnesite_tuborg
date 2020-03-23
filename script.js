let nav = document.querySelector("nav ul");
let modal = document.querySelector(".egg_modal");
let totalEggs = 3;
window.sessionStorage["eggsClicked"] = window.sessionStorage["eggsClicked"] || 0;
window.sessionStorage["eggsHidden"] = window.sessionStorage["eggsHidden"] || JSON.stringify({
    "index": false,
    "partners": false,
    "game": false,
    "videosite": false,
    "some_content": false
});


document.addEventListener("DOMContentLoaded", function () {
    let eggsHidden = JSON.parse(window.sessionStorage["eggsHidden"]);
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

    let location = window.location.pathname.substr(1, window.location.pathname.indexOf("."));
    if (eggsHidden[location]) {
        document.querySelector(".egg_btn").classList.add("hide");
    }

    document.querySelector(".egg_btn").addEventListener("click", function () {
        if (!eggsHidden[location]) {
            eggsHidden[location] = true;
            this.classList.add("hide");
            window.sessionStorage["eggsHidden"] = JSON.stringify(eggsHidden)
        }
        window.sessionStorage["eggsClicked"] = parseInt(window.sessionStorage["eggsClicked"]) + 1;

        console.log(window.sessionStorage["eggsClicked"]);
        if (parseInt(window.sessionStorage["eggsClicked"]) === totalEggs) {
            modal.style.height = (document.height || document.body.offsetHeight) + "px";
            modal.firstElementChild.style.top = (window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop) + "px";
            modal.classList.remove("hide");
        }
        console.log(parseInt(window.sessionStorage["eggsClicked"]) === totalEggs);

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
