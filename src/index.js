import "./style.css";
import { TodoItem } from "./todo.js";


let test = new TodoItem('test', 'todo pour testeer', '20-03-2025', 1);

console.log(test);

test.title = 'yooooo';

console.log(test);
