let chartData;
let tooltip = document.querySelector(".chartTool");
let nav = document.querySelector("nav ul");
let modal = document.querySelector(".egg_modal");
let totalEggs = 1;
window.sessionStorage["eggsClicked"] = window.sessionStorage["eggsClicked"] || 0;
window.sessionStorage["eggsHidden"] = window.sessionStorage["eggsHidden"] || JSON.stringify({
    "index": false,
    "partners": false,
    "game": false,
    "videosite": false,
    "some_content": false
});


document.addEventListener("DOMContentLoaded", function () {
    generateChart();
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


function generateChart() {
    const values = [103, 105, 103, 151, 156, 212];
    document.querySelectorAll(".bars line").forEach((bar, i) => {
        bar.setAttribute("y1", 100 - ((values[i] / 220) * 100));
        bar.setAttribute("data-value", values[i]);
        bar.addEventListener("mouseover", e => vis(e));
        bar.addEventListener("mouseout", skjul);
    });

    function vis(e) {
        tooltip.firstElementChild.textContent = e.target.dataset.value;
        tooltip.classList.remove("hide");
        window.addEventListener("mousemove", e => followMouse(e));
    }

    function followMouse(e) {
        tooltip.style.top = (e.clientY - 50) + 'px';
        tooltip.style.left = (e.clientX) + 'px';

    }

    function skjul() {
        tooltip.classList.add("hide");
        window.removeEventListener("mousemove", followMouse);
    }
}
