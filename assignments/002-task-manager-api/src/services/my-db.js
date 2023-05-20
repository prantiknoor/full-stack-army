const fs = require("fs/promises");
const path = require("path");

const DB_PATH = path.resolve('data', 'tasks.json');

class MyDB {
    async readTasks() {
        const raw = await fs.readFile(DB_PATH);
        const tasks = JSON.parse(raw);
        return tasks;
    }

    async updateTasks(tasks) {
        await fs.writeFile(DB_PATH, JSON.stringify(tasks));
        return true;
    }
}

const myDB = new MyDB();

module.exports = myDB; 
