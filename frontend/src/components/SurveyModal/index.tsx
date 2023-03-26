import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TbTrashX } from 'react-icons/tb';
import {
  Container,
  TitleContainer,
  AnswerContainer,
  AnswerButton,
} from './styles';
import api from '../../services/api';

type Answer = {
  id: string;
  survey_id: string;
  answer: string;
  answer_count: number;
  created_at: Date;
};

type Survey = {
  id: string;
  question: string;
  created_at: Date;
};

type Props = {
  survey: Survey;
};

type Results = {
  question: string;
  answers: {
    id: string;
    answer: string;
    surveyId: string;
    count: number;
    percent: number;
    isCurrentAccountAnswered: boolean;
  }[];
};

const SurveyModal = ({ survey }: Props): JSX.Element => {
  const [answers, setAnswers] = useState<Answer[]>();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`answer/all/${survey.id}`)
      .then(response => {
        setAnswers(response.data);
      })
      .catch(e => console.error(e));
  }, [survey.id, answers]);

  const handleAnswer = (id: string) => {
    api.put(`/answer/${id}`);

    history.push('/list-surveys');
  };

  const handleDelete = (id: string) => {
    api.delete(`/survey/${id}`);

    history.push('/');
  };

  return (
    <Container>
      <TitleContainer>
        <h2>{survey.question}</h2>

        <button type="button" onClick={() => handleDelete(survey.id)}>
          <TbTrashX color="red" />
        </button>
      </TitleContainer>
      {answers &&
        answers.map(answer => (
          <AnswerContainer key={answer.id}>
            <AnswerButton onClick={() => handleAnswer(answer.id)}>
              <h1>{answer.answer}</h1>
              <h2>Votes: {answer.answer_count}</h2>
            </AnswerButton>
          </AnswerContainer>
        ))}
    </Container>
  );
};

export default SurveyModal;
