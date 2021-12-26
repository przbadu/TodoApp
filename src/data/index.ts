import Database from '@nozbe/watermelondb/Database';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {todoSchema} from './schema';
import Project from './models/project';
import Task from './models/task';

const adapter = new SQLiteAdapter({
  schema: todoSchema,
  dbName: 'todoapp',
  // migrations, // uncomment this once you start adding migrations
});

export const database = new Database({
  adapter,
  modelClasses: [Project, Task],
});
