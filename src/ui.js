export { UIController };

const UIController = new class {
    constructor() {}
  
    displayProjects (projectList) {
        const projectContainer = document.querySelector('.my-projects');
        const projectListContainer = document.createElement('ul');
        // console.log('List of projects' + projectList);

        for (let projectID in projectList) {
            let newListItem = document.createElement('li');

            newListItem.appendChild(document.createTextNode(projectList[projectID].name));
            
            projectListContainer.appendChild(newListItem);
        }

        projectContainer.appendChild(projectListContainer);
    }
}