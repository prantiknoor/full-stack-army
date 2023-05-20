const router = require("express").Router();
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require("../controllers");

router.route('/tasks')
    .get(getAllTasks)
    .post(createTask);

router.route('/tasks/:taskId')
    .get(getTaskById)
    .patch(updateTask)
    .delete(deleteTask);

module.exports = router;
