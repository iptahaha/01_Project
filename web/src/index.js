let tabContent = document.getElementsByClassName('container');
let tabLink = document.getElementsByClassName('nav__link');

function openTab(ev, tabName) {

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (let i = 0; i < tabLink.length; i++){
        tabLink[i].className = tabLink[i].className.replace(" nav__link--active", "")
    }
    document.getElementById(tabName).style.display = "block";
    ev.currentTarget.className += " nav__link--active";
}