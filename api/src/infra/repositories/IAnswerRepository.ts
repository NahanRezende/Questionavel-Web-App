import { IAnswerDTO } from 'dtos/IAnswerDTO';

export interface IAnswerRepository {
  create(survey_id: string, answer: string): Promise<void>;
  findAll(): Promise<IAnswerDTO[]>;
  findAllAnswersBySurveyId(id: string): Promise<IAnswerDTO[]>;
  findById(id: string): Promise<IAnswerDTO>;
  delete(id: string): Promise<void>;
  updateAnswer(answer: IAnswerDTO): Promise<void>;
}
