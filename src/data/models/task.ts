import {Model, Relation} from '@nozbe/watermelondb';
import action from '@nozbe/watermelondb/decorators/action';
import field from '@nozbe/watermelondb/decorators/field';
import relation from '@nozbe/watermelondb/decorators/relation';
import {Associations} from '@nozbe/watermelondb/Model';

import {TableName} from '../TableName';
import Project from './project';
export default class Task extends Model {
  static table = TableName.TASKS;

  static associations: Associations = {
    [TableName.PROJECTS]: {type: 'belongs_to', key: 'project_id'},
  };

  @field('description') description!: string;
  @field('is_done') isDone!: boolean;

  @relation(TableName.PROJECTS, 'project_id') project!: Relation<Project>;

  @action async updateTask(description: string) {
    await this.update(task => {
      task.description = description;
    });
  }

  @action async markAsDone() {
    await this.update(task => {
      task.isDone = true;
    });
  }

  @action async markAsUndone() {
    await this.update(task => {
      task.isDone = false;
    });
  }

  @action async destroy() {
    await this.markAsDeleted();
  }
}
