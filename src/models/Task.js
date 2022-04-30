import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Task = sequelize.define('tasks', {
  name: { type: DataTypes.STRING, allowNull: false },
  done: { type: DataTypes.BOOLEAN, defaultValue: false },
});
