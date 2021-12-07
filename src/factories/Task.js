// holds task data
const Task = (newTitle = "", isCompleted=false) => {
    let title = newTitle;
    let completed = isCompleted;

    return { title, completed }
};

export default Task;
