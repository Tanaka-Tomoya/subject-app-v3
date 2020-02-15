import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import Typography from '@/atoms/Typography/Typography';

const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const WeekRow = () => {
  return (
    <Container>
      {week.map((elem, i) => (
        <DayOfTheWeek key={i}>
          <Typography
            text={elem}
            fontSize={20}
            color={theme.palette.text.primary}
          />
        </DayOfTheWeek>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 35px;
  width: 100%;
`;
const DayOfTheWeek = styled.div`
  text-align: center;
  flex-grow: 1;
`;

export default WeekRow;
