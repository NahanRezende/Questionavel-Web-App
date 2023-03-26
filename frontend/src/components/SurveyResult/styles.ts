import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  color: #1b2838;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #1b2838;
  color: #fff;
  border-radius: 1rem;
  margin-bottom: 0.5rem;

  &:hover {
    transform: scaleX(0.95);
    transition: 0.5s;
    background: ${shade(0.2, '#1b2838')};
  }
`;

export const Header = styled.h2`
  font-weight: 900;
`;
