let displayBlock;
let displayNone;

const toggle = () => {
    const btn = document.querySelector(".bi.bi-list");
    const menu = document.querySelector(".listnav");
    const cancel = document.querySelector(".bi.bi-x-circle-fill");
    const overlayShadow = document.querySelector(".overlay-shadow");
    const displayChild = () => {
        displayNone = "none";
        displayBlock = "block";
    }; displayChild();
    btn.addEventListener("click", () => {
        menu.style.opacity = 1;
        menu.style.visibility = "visible";
        setTimeout(() => {
            overlayShadow.style.display = "block";
            menu.classList.add("active");
            cancel.style.display = displayBlock;
        }, 500)
    });
    cancel.addEventListener("click", () => {
        setTimeout(() => {
            cancel.style.display = "none";
            menu.classList.remove("active");
            overlayShadow.style.display = displayNone;
        }, 500)
    });
}; toggle();


function userIndicator() {
    const indicatorReturn = () => {
        const itemOne = ".table-row-section";
        const itemTwo = ".res-wrap";
        return { itemOne, itemTwo };
    }
    const { itemOne, itemTwo } = indicatorReturn();
    const newItems = () => {
        const returndata = document.querySelectorAll(itemOne);
        const returndataSelf = document.querySelectorAll(itemTwo);
        returndata.forEach((mainitems, mainindex) => {
            mainitems.addEventListener('click', () => {
                returndata.forEach((itembreak) => {
                    itembreak.classList.remove("focus-active");
                });
                mainitems.classList.add("focus-active");
                returndataSelf.forEach((itemdef) => {
                    itemdef.classList.remove("focus-active");
                });
                returndataSelf[mainindex].classList.add("focus-active");
            });
        });
    }
    newItems();
}
userIndicator();


function toggleClass() {
    const constData = () => {
        const sunSelected = ".bi-cloud-moon-fill";
        const nowBody = ".new-body";
        return { sunSelected, nowBody };
    };
    const { sunSelected, nowBody } = constData();
    const classListBody = () => {
        const iconSun = document.querySelector(sunSelected);
        const newBodycontainer = document.querySelector(nowBody);
        const isDarkMode = localStorage.getItem("darkMode");
        if (isDarkMode === "true") {
            newBodycontainer.classList.add("container-body");
            var replaceIcon = iconSun;
            replaceIcon.classList.add("bi-sun-fill");
        }
        iconSun.addEventListener("click", () => {
            if (newBodycontainer.classList.contains("container-body")) {
                newBodycontainer.classList.remove("container-body");
                replaceIcon.classList.remove("bi-sun-fill");
                replaceIcon.classList.add("bi-cloud-moon-fill");
                localStorage.setItem("darkMode", "false");
            } else {
                newBodycontainer.classList.add("container-body");
                replaceIcon.classList.add("bi-sun-fill");
                localStorage.setItem("darkMode", "true");
            }
        });
    };
    classListBody();
}
toggleClass();
