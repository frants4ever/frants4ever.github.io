const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const hamSpan = document.querySelectorAll(".hamburger span");
let insect = false;


hamburger.addEventListener('click', () => {
    if (!(hamburger.classList.contains("hamburger_active"))) {
        menu.classList.add("menu_active");
        hamburger.classList.add("hamburger_active");
        hamSpan.forEach(item => {
            item.classList.add("hamburger_active");
        insect = true;
        });
    }
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (insect == false) {
        if (target.classList.contains("hamburger_active") && menu.classList.contains("menu_active")) {
            menu.classList.remove("menu_active");
            hamburger.classList.remove("hamburger_active");
            hamSpan.forEach(item => {
                item.classList.remove("hamburger_active");
                console.log(item);
            });
        }
    }
    else {
        insect = false;
    }

});

menu.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains("menu_link")) {
            menu.classList.remove("menu_active");
            hamburger.classList.remove("hamburger_active");
            hamSpan.forEach(item => {
                item.classList.remove("hamburger_active");
                console.log(item);
            });
    }
});
