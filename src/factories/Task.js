// holds task data

const Task = (newTitle = "", taskId, isCompleted=false) => {
    let title = newTitle;
    let completed = isCompleted;
    const id = taskId

    return { title, completed, id }
};

export default Task;
