let tasks = [];


function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

getTasks();

console.log("1-add task\n2-veiw tasks\n3-toggile task completion\n4-edit\n5-delete\n6-search By name\n7-exit");
let choice;
do {
    choice = prompt("please inter you choice form 1 to 7");
    choice = parseInt(choice);
    if (choice === 1) {
        let task = {
            desc: "name",
            id: 0,
            status: "incomplete"
        };
        let name = prompt("what the description of the tasck");
        task.desc = name;
        task.id = tasks.length + 1;
        tasks.push(task);
        console.log(`${task.desc}  is added`);
        saveTasksToLocalStorage();
    }
    else if (choice === 2) {
        for (let i = 0; i < tasks.length; i++) { console.log(`${i + 1} . ${tasks[i].desc} ${tasks[i].status}\n`) }
    }
    else if (choice === 3) {
        let tasckChoice = prompt("please inter the tasck number");
        tasckChoice = parseInt(tasckChoice);
        if (tasks[tasckChoice - 1].status == "complete")
            tasks[tasckChoice - 1].status = "incomplete";
        else
            tasks[tasckChoice - 1].status = "[complete]"
    console.log(`tasck status  ${tasckChoice} is changed\n`)
    saveTasksToLocalStorage();

    }

    else if (choice === 4) {
        let tasckChoice = prompt("please inter the tasck number");
        tasckChoice = parseInt(tasckChoice);
        tasks[tasckChoice - 1].desc = prompt("inter the new descreption");
        console.log(`tasck descreption of  ${tasckChoice} is altered\n`)
        saveTasksToLocalStorage();

    }
    else if (choice === 5) {
        let tasckChoice = prompt("please inter the tasck number");
        tasckChoice = parseInt(tasckChoice);
        tasks.splice(tasckChoice - 1, 1);
        console.log(`tasck ${tasckChoice} is deleted\n`)
        saveTasksToLocalStorage();
    }
    else if(choice===6)
    {
     
        let text=prompt("please inter the descreption of the tasc ");
        let foundedTascks=tasks.filter(item=> item.desc.toLocaleLowerCase().includes(text.toLocaleLowerCase() ))
        if(foundedTascks.length>0)
        {
            foundedTascks.forEach(element => {
                console.log(`${element.id} . ${element.desc} ${element.status}`)
            });
        }
        else console.log("not found")
    

    }
} while (choice != 7);