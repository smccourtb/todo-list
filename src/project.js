const Project = (title) => {
    let name = title;
    let project = [];
    const addTask= (task) => {
        project.push(task);
    }
    const removeTask = (task) => {
        const t = project.indexOf(task);
        project.splice(t, 1);
    }
    const getName = () => {
        return name
    }
    return {getName, project, addTask, removeTask};
    
};

export {Project}