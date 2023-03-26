import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { ISurveyRepository } from 'infra/repositories/ISurveyRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteSurveyService {
  constructor(
    @inject('SurveyRepository')
    private surveyRepository: ISurveyRepository,
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const answers = await this.answerRepository.findAllAnswersBySurveyId(id);

    answers.forEach(async answer => {
      await this.answerRepository.delete(answer.id);
    });

    await this.surveyRepository.delete(id);
  }
}
