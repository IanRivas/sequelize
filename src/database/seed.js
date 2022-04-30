import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

Project.bulkCreate([
  {
    name: 'project 1',
    priority: 2,
    description: 'aerolab',
  },
  {
    name: 'project 2',
    priority: 4,
    description: 'coin gappy',
  },
  {
    name: 'project 3',
    priority: 5,
    description: 'meli',
  },
]);

Task.bulkCreate([
  {
    name: 'end layout',
    projectId: 1,
  },
  {
    name: 'history page',
    projectId: 1,
  },
  {
    name: 'make the grapql server',
    projectId: 2,
  },
  {
    name: 'login',
    projectId: 2,
  },
  {
    name: 'all',
    projectId: 3,
  },
]);
