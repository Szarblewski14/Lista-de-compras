const localStorageKey = "to-do-list-gn"

function validateTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById("input-task").value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask () {
    let input = document.getElementById("input-task")
    

    //validação
    if(!input.value) {
        alert("Digite um item para aparecer na sua lista")
    }

    else if (validateTask()){
        alert("Já existe esse item")
    }

    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()    
    }
    input.value = ""
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById("to-do-list")
    list.innerHTML = ""
    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]["name"]}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>Remover Item</button></li>`
    }
}

function removeItem(data) {
   
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
    
}

showValues()