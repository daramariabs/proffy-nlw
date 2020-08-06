//procurar o botão
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    console.log("hello word")
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo
    fields.forEach(function(field){
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

