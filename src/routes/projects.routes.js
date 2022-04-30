import express from 'express';
const router = express.Router();
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
  getProjectTasks,
} from '../controllers/projects.controller.js';

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

router.get('/:id/tasks', getProjectTasks);

export default router;
