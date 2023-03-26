import { Answer } from '@shared/typeorm/entities/Answer';
import { IAnswerDTO } from 'dtos/IAnswerDTO';
import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/typeorm/dataSource';
import { IAnswerRepository } from '../IAnswerRepository';

export class AnswerRepository implements IAnswerRepository {
  private queryRunner: Repository<Answer>;

  constructor() {
    this.queryRunner = dataSource.getRepository(Answer);
  }

  async create(survey_id: string, answer: string): Promise<void> {
    const createdAnswer = await this.queryRunner.create({ answer, survey_id });

    await this.queryRunner.save(createdAnswer);
  }

  async findAll(): Promise<IAnswerDTO[]> {
    return this.queryRunner.find();
  }

  async findAllAnswersBySurveyId(survey_id: string): Promise<IAnswerDTO[]> {
    return this.queryRunner.find({ where: { survey_id } });
  }

  async findById(id: string): Promise<IAnswerDTO> {
    const [answer] = await this.queryRunner.find({ where: { id } });

    return answer;
  }

  async delete(id: string): Promise<void> {
    await this.queryRunner.delete(id);
  }

  async updateAnswer(answer: IAnswerDTO): Promise<void> {
    await this.queryRunner.save(answer);
  }
}
