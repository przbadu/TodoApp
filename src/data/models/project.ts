import {Q, Model, Query} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';
import field from '@nozbe/watermelondb/decorators/field';
import children from '@nozbe/watermelondb/decorators/children';
import lazy from '@nozbe/watermelondb/decorators/lazy';
import action from '@nozbe/watermelondb/decorators/action';

import {TableName} from '../TableName';
import Task from './task';

// TODO: remove it, it is temporary fix
export type projectProps = {
  id: string;
  name: string;
  color: string | undefined;
  tasksCount: number;
};

export default class Project extends Model {
  static table = TableName.PROJECTS;

  static associations: Associations = {
    [TableName.TASKS]: {
      type: 'has_many',
      foreignKey: 'task_id',
    },
  };

  @field('name') name!: string;
  @field('color') color?: string;

  @children(TableName.TASKS) tasks!: Query<Task>;

  /// list of completed tasks
  @lazy completedTasks = this.tasks.extend(Q.where('completed', true));

  /// list of incomplete tasks
  @lazy incompleteTasks = this.tasks.extend(Q.where('completed', false));

  @action async save(name: string, color?: string) {
    await this.collections.get<Project>(TableName.PROJECTS).create(project => {
      project.name = name;
      project.color = color;
    });
  }

  @action async modify(name: string) {
    await this.update(project => {
      project.name = name;
    });
  }

  @action async createTask(description: string, isDone: boolean) {
    await this.collections.get<Task>(TableName.TASKS).create(task => {
      task.project.set(this);
      task.description = description;
      task.isDone = isDone || false;
    });
  }

  @action async destroy() {
    // markAllAsDeleted() to make it syncable
    await this.tasks.markAllAsDeleted();
    // markAsDeleted() to make it syncable
    await this.markAsDeleted();
  }
}
