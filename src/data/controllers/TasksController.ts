import {database} from '..';
import Project from '../models/project';
import Task from '../models/task';
import {TableName} from '../TableName';

export const tasks = database.collections.get<Task>(TableName.TASKS);

export default class TasksController {
  static async toggle(task: Task) {
    await database.write(async () => {
      await task.update(task => {
        task.isDone = !task.isDone;
      });
    });
  }
}
