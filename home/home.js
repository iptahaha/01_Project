let buttonEdit = document.getElementById('edit_user');
let buttonSave = document.getElementById('save_user');
let spanEdit = document.getElementById('span-edit');
let inputEdit = document.getElementById('input-edit')

buttonEdit.addEventListener('click', function () {
    buttonSave.style.display = 'block';
    buttonEdit.style.display = 'none';

    spanEdit.innerHTML = `<input type="text" id="input-edit"/>`
});

buttonSave.addEventListener('click', function (){
    buttonSave.style.display = 'none';
    buttonEdit.style.display = 'block';

});
