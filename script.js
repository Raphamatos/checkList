let contador = 0;

const input = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const zoneTask = document.getElementById("zone-list");
const delet = document.querySelector(".delet");

// adiciona evento de adicionar task ao btnAdd
btnAdd.addEventListener('click', addTask);
input.addEventListener('keyup', function(event){
    //enter
    if (event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})

function addTask() {
  //pegar o valor digitado no input
  let valorInput = input.value;
  // se não for vazio, nem nulo, nem indefinido
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;
    let newItem = `<div id="${contador}" class="item">
<div class="item-icon" onclick="markTask(${contador})">
    <i id="icon-${contador}" class="fa-regular fa-circle"></i>
</div>
<div class="item-name" onclick="markTask(${contador})">
    ${valorInput}
</div>
<div class="item-button">
    <button onclick="deletar(${contador})" class="delet" > <i class="fa-regular fa-trash-can"></i> Deletar</button>
</div>
</div>`;
//adicionar novo intem
zoneTask.innerHTML += newItem;
//zerar o campo
input.value = '';
input.focus();
zoneTask.style.display = 'flex';
  }
}
function markTask(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe =="item"){
        item.classList.add('clicked');
        var icon = document.getElementById('icon-'+id);
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-circle-check');
        icon.classList.add('fa-solid');
        item.parentNode.appendChild(item);
    } else{
        item.classList.remove('clicked');
        var icon = document.getElementById('icon-'+id);
        icon.classList.add('fa-circle');
        icon.classList.remove('fa-circle-check');
        icon.classList.remove('fa-solid');
    }
}

function deletar(id){
    var task = document.getElementById(id);
    task.remove();
}



