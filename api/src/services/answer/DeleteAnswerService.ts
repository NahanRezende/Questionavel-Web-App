import { IAnswerRepository } from 'infra/repositories/IAnswerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteAnswerService {
  constructor(
    @inject('AnswerRepository')
    private answerRepository: IAnswerRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.answerRepository.delete(id);
  }
}
