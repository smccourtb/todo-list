const Task = (title = "", completed=false) => {
    return {
        title: title,
        completed: completed,
        getTitle: () => title,
        setTitle: (newTitle) => title = newTitle,
        getCompleted: () => completed,
        setCompleted: (done) => completed = done
    }
};

export default Task;
