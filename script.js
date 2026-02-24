let tarefa = document.getElementById("tarefa")
let botaoSalvar = document.getElementById("salvar")
let cardTarefasSalvas = document.getElementById("tarefasSalvas")

let tarefasSalvas = []

botaoSalvar.addEventListener("click", function(e){
    e.preventDefault()
    if (tarefa.ariaValueMax.trim() !== "") {
        tarefasSalvas.push(tarefa.ariaValueMax.trim())
        atualizarTarefas()
        tarefa.value = ""

    }
})