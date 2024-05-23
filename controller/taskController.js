const Tasks = require("../models/TaskModel")
const Project = require("../models/projectsModal")
const asyncHandler = require("express-async-handler")
const postTaskController = asyncHandler(async (req, res) => {
    
    try {
        const tasks = new Tasks(req.body);
        const createdTask = await tasks.save();
        const project = await Project.findById(req.body.project);
        console.log(project)
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        project.tasks.push(createdTask._id);
        await project.save();
        
        res.status(201).json(createdTask);
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

const getTaskController = asyncHandler(async (req, res) => {
    try {

        const tasks = await Tasks.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = { postTaskController, getTaskController }
