function dropMenuSelectFile() {
    document.getElementById('selectFile').classList.toggle('show');
    document.getElementById('overlay').classList.toggle('show');
}

function dropMenuSelectQuestion() {
    document.getElementById('selectQuestion').classList.toggle('show');
    document.getElementById('overlay').classList.toggle('show');
}

const fileSystem = window.localStorage.getItem('file-system') || 'fs-json';
document.getElementById(fileSystem).classList.add('selected');

const fileTopic = window.localStorage.getItem('file-topic') || 'qu4';
document.getElementById(fileTopic).classList.add('selected');


function selectFileSystem(selectedItem) {
    window.localStorage.setItem('file-system', selectedItem);
    document.querySelector('#selectFile>.selected').classList.remove('selected');
    document.getElementById(selectedItem).classList.add('selected');
}



function selectFileTopic(selectedItem) {
    window.localStorage.setItem('file-topic', selectedItem);
    document.querySelector('#selectQuestion>.selected').classList.remove('selected');
    document.getElementById(selectedItem).classList.add('selected');
}



function closeDropDown () {
    let dropdowns = document.getElementsByClassName("dropdown__content");
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    document.getElementById('overlay').classList.remove('show');
}
