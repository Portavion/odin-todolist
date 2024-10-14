export { Project };

class Project {
    constructor (projectName) {
        this.name = projectName;
        this.todoItems = [];
    }

    addTodoItem (todoItem) {
        this.todoItems.push(todoItem);
    }

}