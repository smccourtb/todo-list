// holds task data
const Task = (title = "", completed=false) => {
    const getTitle =  () => title;
    const setTitle = (newTitle) => title = newTitle;
    const getCompleted = () => completed;
    const setCompleted = (done) => completed = done;

    return {
        getTitle, setTitle, getCompleted, setCompleted
    }
};

export default Task;
