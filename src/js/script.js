const taskInput = document.getElementById('inputBtn')
const addBtn = document.getElementById('addBtn')
const delAllBtn = document.getElementById('delAllBtn')
const taskList = document.getElementById('list')


function addTask(event) {
    event.preventDefault()
    taskInput.classList.remove('error')
    taskInput.placeholder = 'Nova tarefa..'

    const taskText = taskInput.value.trim()

    if (!taskText) {
        taskInput.placeholder = 'Digite algo antes!'
        taskInput.classList.add('error')
        return
    }

    const div = document.createElement('div')
    div.classList.add('div-list')
    const listPai = document.createElement('li')
    const listItem = document.createElement('li')
    const dellItemList = document.createElement('button')
    const span = document.createElement('span')

    dellItemList.classList.add('delete-button')
    dellItemList.textContent = 'X'
    span.textContent = taskText

    taskList.appendChild(listItem)
    listItem.appendChild(div)
    div.appendChild(span)
    div.appendChild(dellItemList)

    taskInput.value = ''

    span.addEventListener('click', () => {
        span.classList.toggle('complete')
    })

    dellItemList.addEventListener('click', () => {
        listItem.remove()
    })

}


function deleteAllTask(event) {
    event.preventDefault()
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

}


addBtn.addEventListener('click', addTask)
delAllBtn.addEventListener('click', deleteAllTask)

