let tabContent = document.getElementsByClassName('tab-content');
let tabLink = document.getElementsByClassName('tab-link');
let link = document.querySelector('link[rel=import]');

function openTab(ev, tabName) {

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    for (let i = 0; i < tabLink.length; i++){
        tabLink[i].className = tabLink[i].className.replace(" active", "")
    }
    document.getElementById(tabName).style.display = "block";
    ev.currentTarget.className += " active";
}
