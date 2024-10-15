import "./style.css";
import { TodoItem } from "./todo.js";
import { Project } from "./projects.js";
import { Workspace } from "./workspace.js";
import { UIController } from "./ui.js";


const testTodo = new TodoItem('test', 'todo pour testeer', '20-03-2025', 1);
const testTodo2 = new TodoItem('test2', 'todo pour testeer', '20-03-2025', 1);

const defaultProject = new Project('Default Project');
const project1 = new Project('Project 1');
const project2 = new Project('Project 2');

const workspace = new Workspace('Default Workspace');

workspace.addProject(defaultProject)
workspace.addProject(project1);
workspace.addProject(project2);


defaultProject.addTodoItem(testTodo);
defaultProject.addTodoItem(testTodo2);

//defaultProject.removeTodo(testTodo2);

console.log(workspace.listProjects());
// console.log(defaultProject.listTodos());

UIController.displayProjects(workspace.listProjects());

