import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Logo,
  Title,
  Description,
  ButtonContainer,
  SecondDescription,
} from './styles';
import MainLogo from '../../assets/main_logo.png';
import ButtonDashboard from '../../components/ButtonDashboard';

export const DashBoard: React.FC = () => {
  const history = useHistory();

  const handleCreate = () => {
    history.push('/create-survey');
  };

  const handleList = () => {
    history.push('/list-surveys');
  };

  return (
    <Container>
      <Logo src={MainLogo} />
      <Title>Questionável</Title>
      <Description>
        Um aplicativo simples que permite que você crie livremente uma pesquisa
        ou responda a uma das muitas pesquisas que temos.
      </Description>
      <SecondDescription>
        Comece a gastar seu tempo agora mesmo.
      </SecondDescription>
      <ButtonContainer>
        <ButtonDashboard type="button" onClick={handleCreate}>
          criar
        </ButtonDashboard>
        <ButtonDashboard type="button" onClick={handleList}>
          listar
        </ButtonDashboard>
      </ButtonContainer>
    </Container>
  );
};
