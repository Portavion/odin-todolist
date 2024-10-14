export { Workspace };

class Workspace {
    constructor (workspaceName) {
        this.name = workspaceName;
        this.projects = [];
    }

    addProject (newProject) {
        this.projects.push(newProject);
    }
}