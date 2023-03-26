import { ISurveyDTO } from 'dtos/ISurveyDTO';

export interface ISurveyRepository {
  create(survey_question: string): Promise<void>;
  findAll(): Promise<ISurveyDTO[] | undefined>;
  findById(id: string): Promise<ISurveyDTO | undefined>;
  delete(id: string): Promise<void>;
  findByQuestion(question: string): Promise<ISurveyDTO>;
}
