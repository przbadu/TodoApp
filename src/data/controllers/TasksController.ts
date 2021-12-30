import {database} from '..';
import Project from '../models/project';
import Task from '../models/task';
import {TableName} from '../TableName';

export const tasks = database.collections.get<Task>(TableName.TASKS);

export default class TasksController {
  static async toggle(task: Task) {
    await database.write(async () => {
      task.isDone ? task.markAsUndone() : task.markAsDone();
    });
  }

  static async save(project: Project, description: string) {
    // await database.action(async () => {
    await project.addTask(description);
    // });
  }
}
