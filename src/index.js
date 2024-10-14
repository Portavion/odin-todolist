import "./style.css";
import { TodoItem } from "./todo.js";
import { Project } from "./projects.js";


const test = new TodoItem('test', 'todo pour testeer', '20-03-2025', 1);
const project = new Project('Default Project');



test.title = 'yooooo';

project.addTodoItem(test);

console.log(project);

