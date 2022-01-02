function dropMenuSelectFile() {
    document.getElementById('selectFile').classList.toggle('show');
}

function dropMenuSelectQuestion() {
    document.getElementById('selectQuestion').classList.toggle('show');
}

/*window.onclick = function(event) {
    if (!event.target.matches('dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown--content");
        for (let i = 0; i < dropdowns.length; i++) {
           let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}*/
window.onclick = ('click', function(event) {
    let e=document.getElementsByClassName('dropdown__dropbtn');
    if (!e.contains(event.target)) e.style.display='none';
});
