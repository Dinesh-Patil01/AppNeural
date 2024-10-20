const express = require("express");
const router = express.Router();
const Task = require("../model/task.model")

router.get("/", async(req,res)=>{
    res.send("from router")
})
// POST route to add a new task
router.post("/addTask", async (req, res) => {
    const { id, title, description, status } = req.body; // Removed id from req.body

    try {
        const existingTask = await Task.findOne({ id: id }); // Await the database call

        // Check if the task with the given ID already exists
        if (existingTask) {
            return res.status(400).json({
                message: `Id ${id} is already present. Please try a different ID.`
            });
        }

        // Create a new task instance
        const task = new Task({
            id,
            title,
            description,
            status
        });

        // Save the task to the database
        const savedTask = await task.save();

        return res.status(201).json({
            message: "New task added successfully!",
            task: savedTask // Return the created task
        });
    } catch (error) {
        return res.status(500).json({
            message: `Error adding new task: ${error.message}`
        });
    }
});


// GET route to fetch all tasks
router.get('/getTasks', async (req, res) => {
    try {
        // Fetch all tasks
        const tasks = await Task.find();

        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found" });
        }

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
});



// GET route to fetch task by ID
router.get('/getTasks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Fetch the task using findById method
        const taskExist = await Task.findById(id);

        if (!taskExist) {
            return res.status(404).json({ msg: "Task not found" });
        }

        res.status(200).json(taskExist);
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error: error.message });
    }
});

  
// PUT route to edit an existing task by ID
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { id: id }, // Use _id for MongoDB document ID
            { $set: { title, description, status } },
            { new: true } // Return the updated task document
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", updatedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error: error.message });
    }
});


// DELETE route to delete a task by ID
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the task by _id
        const deletedTask = await Task.findOneAndDelete({ id: id });

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: 'Task deleted successfully', deletedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
});


module.exports = router;


