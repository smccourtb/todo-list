const Project = (title) => {
    let name = title;
    let taskList = [];
    const addTask= (task) => {
        taskList.push(task);
    }
    const removeTask = (task) => {
        const t = taskList.indexOf(task);
        taskList.splice(t, 1);
    }
    const getName = () => {
        return name
    }
    return {getName, taskList, addTask, removeTask};
    
};

export {Project}