import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {
  try {
    const allProjects = await Project.findAll();
    res.json(allProjects);
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    res.json(project);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    console.log(newProject);
    res.json(newProject);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.update(req.body, {
      where: {
        id,
      },
    });
    res.json(project);
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({ where: { projectId: id } });
    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};
