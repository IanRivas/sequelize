import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id',
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetId: 'id',
});
