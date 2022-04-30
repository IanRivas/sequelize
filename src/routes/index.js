import express from 'express';
const router = express.Router();
import projectsRouter from './projects.routes.js';
import tasksRouter from './tasks.routes.js';

router.use('/projects', projectsRouter);
router.use('/tasks', tasksRouter);

export default router;
