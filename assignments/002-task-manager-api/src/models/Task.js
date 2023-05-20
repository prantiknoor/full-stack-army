const shortid = require("shortid");

class Task {
    /**
    * @param {string} title The title of the task
    * @param {string} description The description of the task
    */
    constructor(title, description) {
        this.id = shortid.generate();
        this.title = title;
        this.description = description;
    }
}

module.exports = Task;
