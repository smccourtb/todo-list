class Task {
    constructor(title, complete=false) {
        this.title = title;
        // this.description = description;
        // this.dueDate = dueDate;
        // this.priority = priority
        this.complete = complete
    };

    setTitle(newTitle) {
        this.title = newTitle
    }
    getTitle() {
        return this.title
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
    getDescription() {
        return this.description;
    }
    setDueDate(newDueDate) {
        this.dueDate = newDueDate
    }
    getDueDate() {
        return this.dueDate;
    }
    setPriority(newPriority) {
        this.priority = newPriority;
    }
    getPriority() {
        return this.priority;
    }
    markComplete() {
        this.complete = !complete
    }
};



export {Task}