import React, { FC } from 'react';
import styled from 'styled-components';
import Card, { CardElements, CardActions } from '@/molecules/Card/Card';

export interface CardRowProps {
  cardRowElements: CardRowElements;
  cardActions: CardActions;
}

export interface CardRowElements {
  elements: CardElements[];
}

const CardRow: FC<CardRowProps> = (props: CardRowProps) => {
  return (
    <Container>
      {props.cardRowElements.elements.map((card, i) => (
        <Card elements={card} actions={props.cardActions} key={i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default CardRow;
