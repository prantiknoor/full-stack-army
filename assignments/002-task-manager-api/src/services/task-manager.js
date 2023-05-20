const Task = require("../models/Task");
const myDB = require("./my-db");

class TaskManager {
    constructor() {
        /**
        * @type {Object.<string, Task>}
        */
        this.tasks = {};
    
        myDB.readTasks().then((data) => this.tasks = data);
    }

    getAllTasks() {
        return Object.values(this.tasks);
    }

    getTaskById(id) {
        return this.tasks[id];
    }

    createTask({ title, description }) {
        const task = new Task(title, description);
        this.tasks[task.id] = task;

        myDB.updateTasks(this.tasks);

        return task;
    }

    updateTask(id, body) {
        const task = this.tasks[id];
        console.log(task); 
        if(!task) return;

        task.title = body.title ?? task.title;
        task.description = body.description ?? task.description;

        myDB.updateTasks(this.tasks);

        return task;
    }

    deleteTask(id) {
        if(id in this.tasks) {
            delete this.tasks[id];
            myDB.updateTasks(this.tasks);
            return true;
        }
    }
}

const taskManager = new TaskManager();

module.exports = taskManager;
