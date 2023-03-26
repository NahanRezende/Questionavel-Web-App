import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Survey } from './Survey';

@Entity('Answer')
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  answer: string;

  @Column({ default: 0 })
  answer_count: number;

  @Column()
  survey_id: string;

  @JoinColumn({ name: 'survey_id' })
  @ManyToOne(() => Survey, survey => survey.id)
  survey: Survey;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
