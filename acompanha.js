//selectors
const afazerentrada = document.querySelector(".afazer-entrada");
const afazerbotao = document.querySelector(".afazer-botao");
const afazerlista = document.querySelector(".afazer-lista");



//event listerns
afazerbotao.addEventListener("click",addafazer);
todo-lista.addEventListener('click',deleteCheck);
//functions
function addafazer(event){
    event.preventDefault();

    const afazerdiv = document.createElement("div");
    afazerdiv.classList.add("afazer");
    const novoafazer = document.createElement("li");
    novoafazer.innerText=afazerentrada.value;
    novoafazer.classList.add("afazer-item");
    afazerdiv.appendChild(novoafazer);
    
    const trashButton = document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    afazerdiv.appendChild(trashButton);
    afazerlista.appendChild(afazerdiv);

    const completeButton = document.createElement('button');
    completeButton.innerHTML='<i class="fas fa-check"></i>'
    completeButton.classList.add("complete-btn");
    afazerdiv.appendChild(completeButton);
    afazerlista.appendChild(afazerdiv);
    afazerentrada.value = "";
}
function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        item.remove();
    }

}
