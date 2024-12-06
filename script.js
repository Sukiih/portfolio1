let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle('active');
};



let dark = document.querySelector("#dark");
dark.onclick = () => {
    if(dark.classList.contains("bx-moon")) {
        dark.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
    } else {
        dark.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove("active");
    }
}