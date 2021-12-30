import {database} from '../';
import Project from '../models/project';
import {TableName} from '../TableName';

export const projects = database.collections.get<Project>(TableName.PROJECTS);

export default class ProjectsController {
  static async save(name: string, color?: string) {
    await database.write(async () => {
      await projects.create(project => {
        project.name = name;
        project.color = color;
      });
    });
  }
}
