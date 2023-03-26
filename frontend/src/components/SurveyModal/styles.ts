import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 0.5rem;
  align-items: center;
  border-radius: 2rem;
  background: #1b2838;

  width: 100%;
`;

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;

  color: #fff;

  h2 {
    display: flex;
    justify-content: center;
    margin-left: 10%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    height: 100%;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 2rem;
`;

export const AnswerButton = styled.button`
  border: node;
  background: white;
  border-radius: 2rem;
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    margin-left: 1.5rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  &:hover {
    transform: scaleX(0.95);
    transition: 0.5s;
    background: ${shade(0.4, '#FFF')};
  }
`;
