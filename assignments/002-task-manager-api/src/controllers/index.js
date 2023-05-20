const taskManager = require("../services/task-manager");
const { HttpError } = require("../utils");

const getAllTasks = (_req, res) => {
    const tasks = taskManager.getAllTasks();
    res.status(200).json(tasks);
}

const getTaskById = (req, res) => {
    const task = taskManager.getTaskById(req.params.taskId);
    if(!task) throw new HttpError(404, "No task found");
    res.status(200).json(task);
}

const createTask = (req, res) => {
    const { title, description } = req.body;

    if(!title || !description) {
        throw new HttpError(400, "Invalid input");
    }

    const task = taskManager.createTask({ title, description });
    res.status(201).json(task);
}

const updateTask = (req, res) => {
    const body = req.body;
    if(!body) throw new HttpError(400, "Invalid input");

    const task = taskManager.updateTask(req.params.taskId, body);

    if(!task) throw new HttpError(404, "No task found");

    res.status(200).json(task);
}

const deleteTask = (req, res) => {
    const status = taskManager.deleteTask(req.params.taskId);
    if(status) return res.status(204).end();
    throw new HttpError(404, "No task found");
}
module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}

