import { Survey } from '@shared/typeorm/entities/Survey';
import { ISurveyDTO } from 'dtos/ISurveyDTO';
import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/typeorm/dataSource';
import { ISurveyRepository } from '../ISurveyRepository';

export class SurveyRepository implements ISurveyRepository {
  private queryRunner: Repository<Survey>;

  constructor() {
    this.queryRunner = dataSource.getRepository(Survey);
  }

  async create(survey_question: string): Promise<void> {
    const createdSurvey = await this.queryRunner.create({
      question: survey_question,
    });

    await this.queryRunner.save(createdSurvey);
  }

  async findAll(): Promise<ISurveyDTO[]> {
    return this.queryRunner.find();
  }

  async findById(id: string): Promise<ISurveyDTO> {
    const [survey] = await this.queryRunner.find({ where: { id } });

    return survey;
  }

  async delete(id: string): Promise<void> {
    await this.queryRunner.delete(id);
  }

  async findByQuestion(question: string): Promise<ISurveyDTO> {
    const [survey] = await this.queryRunner.find({ where: { question } });

    return survey;
  }
}
