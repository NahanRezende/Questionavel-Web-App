import { config } from 'dotenv';
import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container';
import { app } from '@shared/app';
import { dataSource } from './shared/typeorm/dataSource';

config();

dataSource.initialize().then(() => {
  app.listen(4003, () => {
    return console.log('Server started on port 4003.');
  });
});
