console.log("Project working")
var tasks = []
console.log(tasks)
const addTask = ()=>{
    
    let name = document.querySelector('#task-Name').value
    let desc = document.querySelector('#task-desc').value
    if(localStorage.getItem('tasks')==null)
    {
        tasks = []
        tasks.push([name,desc]);
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push([name,desc]);
        localStorage.setItem('tasks',JSON.stringify(tasks))
        
    }
    updateTasks()
}
const deleteTask = (index)=>{
    tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.splice(index,1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    updateTasks()
}
const updateTasks = ()=>{
    tasksContainer = document.getElementById('tasks-container')
    tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks!=null){
        str = ''
        tasks.forEach((element,index) => {
            str += `
            <div class="card my-4">
            <div class="card-header">
            ${index+1}
            </div>
            <div class="card-body">
            <h5 class="card-title">${element[0]}</h5>
            <p class="card-text">${element[1]}</p>
            <button onclick=deleteTask(${index}) class="btn btn-danger">Delete</button>
            </div>
            </div>
            `
        });
        tasksContainer.innerHTML = str
    }
}
updateTasks()

