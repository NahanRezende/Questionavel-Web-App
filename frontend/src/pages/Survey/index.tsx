import React, { useEffect, useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/all';
import { useHistory, useParams } from 'react-router-dom';
import { Container, InsideContainer, Counter } from './styles';
import api from '../../services/api';
import { ReturnButton } from '../../components/ReturnButton';
import SurveyModal from '../../components/SurveyModal';

interface ISurvey {
  id: string;
  question: string;
  created_at: Date;
}

export const Survey: React.FunctionComponent = () => {
  const [surveys, setSurveys] = useState<ISurvey>();

  const history = useHistory();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    api
      .get(`/survey/${id}`)
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => console.error(error));
  }, [surveys, id]);

  const handleReturn = () => {
    history.push('/list-surveys');
  };

  return (
    <Container>
      <Counter>
        <ReturnButton type="button" onClick={handleReturn}>
          <BiLeftArrowAlt color="#f7feff" />
        </ReturnButton>
        <h1>Pesquisa</h1>
      </Counter>
      {surveys ? (
        <InsideContainer>
          <SurveyModal survey={surveys} key={surveys.id} />
        </InsideContainer>
      ) : (
        <InsideContainer>
          <p>Não há surveys ainda</p>
        </InsideContainer>
      )}
    </Container>
  );
};
