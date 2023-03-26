import React, { useCallback, useEffect, useState } from 'react';
import { TbTrashX } from 'react-icons/all';
import { useHistory } from 'react-router-dom';
import { Container, TitleContainer, Button, Header } from './styles';
import api from '../../services/api';

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

const SurveyResult = ({ survey }: Props): JSX.Element => {
  const [results, setResults] = useState<Results>();

  const history = useHistory();

  useEffect(() => {
    api
      .get(`surveys/${survey.id}/results`)
      .then(response => {
        setResults(response.data);
      })
      .catch(e => console.error(e));
  }, [survey.id]);

  const handleRedirect = useCallback(
    async (id: string) => {
      history.push(`/survey/${id}`);
    },
    [history, survey.id],
  );

  return (
    <Container>
      <TitleContainer>
        <Button type="button" onClick={() => handleRedirect(survey.id)}>
          <Header>{survey.question}</Header>
        </Button>
      </TitleContainer>
    </Container>
  );
};

export default SurveyResult;
