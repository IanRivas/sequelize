import express from 'express';
const router = express.Router();
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from '../controllers/tasks.controller.js';

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/:id', getTask);

export default router;
