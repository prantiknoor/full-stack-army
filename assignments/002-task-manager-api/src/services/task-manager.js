const Task = require("../models/Task");

class TaskManager {
    constructor() {
        /**
        * @type {Object.<string, Task>}
        */
        this.tasks = {};
    }

    getAllTasks() {
        return Object.values(this.tasks);
    }

    getTaskById(id) {
        return this.tasks[id];
    }

    createTask({ title, description }) {
        const task = new Task({ title, description });
        this.tasks[task.id] = task;
        return task;
    }

    updateTask(id, body) {
        const task = this.tasks[id];
        
        if(!task) return;

        task.title = body.title ?? task.title;
        task.description = body.description ?? task.description;

        return task;
    }

    deleteTask(id) {
        if(id in this.tasks) return delete this.tasks[id];
        return false;
    }
}
