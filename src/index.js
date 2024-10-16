import "./style.css";
import { TodoItem } from "./todo.js";
import { Project } from "./projects.js";
import { Workspace } from "./workspace.js";
import { UIController } from "./ui.js";


const testTodo = new TodoItem('test', 'todo pour testeer', '20-03-2025', 1);
const testTodo2 = new TodoItem('test2', 'todo pour testeer', '20-03-2025', 2);

testTodo2.check();

const defaultProject = new Project('Default Project');
const project1 = new Project('Project 1');
const project2 = new Project('Project 2');

const workspace = new Workspace('Default Workspace');

workspace.addProject(defaultProject)
workspace.addProject(project1);
workspace.addProject(project2);


defaultProject.addTodoItem(testTodo);
defaultProject.addTodoItem(testTodo2);

UIController.displayProjects(workspace.listProjects());
UIController.displayTodos(defaultProject);

createTodoForm(workspace);

document.getElementById('submit-button').addEventListener('click', () => {
    event.preventDefault();
    document.querySelector('dialog').close();

    submitTodo();
});

function submitTodo () {
    const title = document.getElementById('todoAddTitle').value;
    const description = document.getElementById('todoAddDescription').value;
    const dueDate = document.getElementById('todoAddDueDate').value;
    const priority = document.getElementById('todoAddPriority').value;
    const project = document.getElementById('projectDropdown').value;

    const projectList = workspace.listProjects();
    const newTodo = new TodoItem(title, description, dueDate, priority);

    const sel = document.getElementById('projectDropdown');
    const chosenProject = sel.options[sel.selectedIndex].text;

    for(let projectID in projectList){
        if (projectList[projectID].name === chosenProject){
            projectList[projectID].addTodoItem(newTodo);
            UIController.displayTodos(projectList[projectID]);
        }
    }




    defaultProject.addTodoItem(newTodo);
}

function createTodoForm(workspace){

    document.querySelector('.addTask').addEventListener('click', () => {
        document.getElementById('todoAddTitle').value = '';
        document.getElementById('todoAddDescription').value = '';
        document.getElementById('todoAddDueDate').valueAsDate = new Date();
        document.getElementById('todoAddPriority').value = 'p1';
        document.getElementById('projectDropdown').value ='';

        document.getElementById('projectDropdown').innerHTML = '';


        const projectList = workspace.listProjects();
        const projectDropDown = document.getElementById('projectDropdown');

        for (let projectID in projectList){
            let newProjectSelectOption = document.createElement('option')
            newProjectSelectOption.value = 'p' + projectID;

            newProjectSelectOption.appendChild(document.createTextNode(projectList[projectID].name));

            projectDropDown.appendChild(newProjectSelectOption);
        }

        document.querySelector('dialog').showModal();
    });

    document.getElementById('closeDialog').addEventListener('click', () => {
        document.querySelector('dialog').close();
    });
}

