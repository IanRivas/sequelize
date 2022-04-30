import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const tasks = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    res.json(task);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    //update retorn how many rows where updated
    const howMany = await Task.update(req.body, {
      where: { id },
    });
    res.json(howMany);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Task.destroy({
      where: { id },
    });
    console.log(result);
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
