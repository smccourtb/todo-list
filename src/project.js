const Project = (title) => {
    let name = title;
    let taskList = [];
    let completedTasks = [];
    const addTask = (task) => {
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
    const getTaskInfo = (taskName) => {
        for (let task of taskList) {
            if (task.getTitle() === taskName) {
                return task;
            }
        };
    }
    return {
        name,
        getName,
        taskList,
        addTask,
        removeTask,
        completedTasks,
        addToCompleted,
        getCompleted,
        getTaskInfo
    };

};

export {
    Project
}