const Project = (title) => {
    let name = title;
    let project = [];
    const addTodo = (todo) => {
        project.push(todo);
    }
    const removeTodo = (todo) => {
        const t = project.indexOf(todo);
        project.splice(t, 1);
    }
    return {name, project, addTodo, removeTodo};
    
};

export {Project}