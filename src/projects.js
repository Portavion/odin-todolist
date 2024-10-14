export { Project };

class Project {
    constructor (projectName) {
        this.name = projectName;
        this.todoItems = [];
    }

    addTodoItem (todoItem) {
        this.todoItems.push(todoItem);
    }

    removeTodo (todoToRemove) {
        const index = this.todoItems.indexOf(todoToRemove);
        if (index > -1) {
            this.todoItems.splice(index, 1);
        }
    }

}