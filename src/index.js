const newTaskForm = document.getElementById("create-task-form")
const taskPriorityDropdown = document.getElementById("task-priority")


let priority = "medium"
taskPriorityDropdown.onchange = (event) => {
  priority = event.target.value
  console.log(priority)
}


newTaskForm.onsubmit = ( e ) => {
  e.preventDefault()
  const li = document.createElement("li")
  li.textContent = newTaskForm[ "new-task-description"].value

  if (priority === 'medium')
    li.style.color = 'yellow'
  else if (priority === 'high')
    li.style.color = 'red'
  else if (priority === 'low')
    li.style.color = 'green'


  const deleteBtn = document.createElement("button")
  deleteBtn.onclick = () => li.remove()
  deleteBtn.textContent = "X"

  li.appendChild(deleteBtn)
  
  const taskUL = document.getElementById("tasks")

  taskUL.appendChild(li)

  newTaskForm.reset()

}

const mediumPriority = document.createElement("option")
mediumPriority.textContent = "Medium"
mediumPriority.style.color = "yellow"
mediumPriority.value = "medium"

taskPriorityDropdown.appendChild(mediumPriority)

const highPriority = document.createElement("option")
highPriority.textContent = "High"
highPriority.style.color = "red"
highPriority.value = "high"

taskPriorityDropdown.appendChild(highPriority)

const lowPriority = document.createElement("option")
lowPriority.textContent = "Low"
lowPriority.style.color = "green"
lowPriority.value = "low"

taskPriorityDropdown.appendChild(lowPriority)
