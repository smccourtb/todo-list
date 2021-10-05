import {Task} from "./index.js"

const TodoCreator = () => {
    const main = document.querySelector(".content");
    const form = document.createElement("form");

    // create an input element for title
    const tLabel = document.createElement('label');
    const tInput = document.createElement('input');
    tLabel.setAttribute("for", 'title')
    tInput.setAttribute("type", "text");
    tInput.setAttribute("name", "title");
    tInput.setAttribute('id', "title")
    tInput.setAttribute("placeholder", 'What do you need to do?');
    //create an input element for description
    const dInput = document.createElement('input');
    dInput.setAttribute("type", "text");
    dInput.setAttribute("name", "Description");
    dInput.setAttribute("placeholder", 'Additional info')
    //create an input element for due date
    const dDInput = document.createElement('input');
    dDInput.setAttribute("type", "date");
    dDInput.setAttribute("name", "Due Date");
    //create input element for priority
    const pInput = document.createElement('select');
    // pInput.setAttribute("size", "3");
    pInput.setAttribute("id", "priority");
    pInput.setAttribute("name", "priority");
    for (let i of ["low", "medium", "high"]) {
        const option = document.createElement('option');
        option.setAttribute("value", i);
        option.innerHTML = i;
        if(i === "low") {
            option.setAttribute("selected", i);
        }
        pInput.append(option);
    }
    const submit = document.createElement('input')
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "Add")

    // add all generated DOM elements into form element
    for( let i of [tLabel, tInput, dInput, dDInput, pInput, submit]) {
        form.append(i);
    }
    // add the form to the main page
    main.append(form)
}

const projectWindow = () => {
    const main = document.querySelector(".content")
    const display = document.createElement("div")
    
}


const projectHeader = (projectName) => {
    const main = document.querySelector(".content")
    const header = document.createElement("div");
    const title = document.createElement("div")
    const label = document.createElement("h5")
    label.innerHTML = projectName;
    title.append(label)
    header.append(title)
    main.append(header)
}

const todoAdder = () => {
    const main = document.querySelector(".content")
    const box = document.createElement('div')
    const task = new Task
    //create a new todo
    //add it to project list
}
export {taskCreator, projectHeader}