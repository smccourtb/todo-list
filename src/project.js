const Project = (title) => {
    let name = title;
    let taskList = [];
    let completedTasks = [];
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
    const addToCompleted = (task) => {
        completedTasks.push(task);
    }
    const getCompleted = () => {
        return completedTasks;
    }
    return {getName, taskList, addTask, removeTask, completedTasks, addToCompleted, getCompleted};
    
};

export {Project}