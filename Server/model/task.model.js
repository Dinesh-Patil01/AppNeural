const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "Active" }
})

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;