const asyncHandler = require("express-async-handler")
const Projects = require("../models/projectsModal")
const getProjectController=asyncHandler(async(req,res) =>{
    try {
    
        const projects = await Projects.find().populate('tasks');
        res.json(projects);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

const postProjectController=asyncHandler(async(req,res) =>{
    const project = new Projects(req.body);
    console.log(project)
    try {
        const createdProject = await project.save();
        res.status(201).json(createdProject);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

const getProjectControllerById = asyncHandler(async (req, res) => {
    try {
      const project = await Projects.findById(req.params.id).populate('tasks');
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({ message: error.message });
    }
  });

 const deleteProjectController =asyncHandler( async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProject = await Projects.findByIdAndDelete(id);
  
      if (!deletedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
     
      await Task.deleteMany({ _id: { $in: deletedProject.tasks } });
  
      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      console.error('Error deleting project:', error);
      res.status(500).json({ message: error.message });
    }
  });

  const updateProjectController = asyncHandler( async (req, res) => {
    try {
      const { id } = req.params;
      
  
      const updatedProject = await Projects.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedProject) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.json(updatedProject);
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(400).json({ message: error.message });
    }
  });
  

  


module.exports={getProjectController,postProjectController,getProjectControllerById,deleteProjectController,updateProjectController}