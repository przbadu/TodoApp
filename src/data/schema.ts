import {appSchema, tableSchema} from '@nozbe/watermelondb/Schema';
import {TableName} from './TableName';

export const todoSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TableName.PROJECTS,
      columns: [
        {name: 'name', type: 'string'},
        {name: 'color', type: 'string'},
      ],
    }),
    tableSchema({
      name: TableName.TASKS,
      columns: [
        {name: 'description', type: 'string'},
        {name: 'is_done', type: 'boolean'},
        {name: 'project_id', type: 'string', isIndexed: true},
      ],
    }),
  ],
});
