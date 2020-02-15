import React, { SFC } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import Typography from '@/atoms/Typography/Typography';

export interface TimeColumnElementProps {
  period: string;
  additionalPeriod?: string;
  time?: string;
}

const TimeColumnElement: SFC<TimeColumnElementProps> = (
  props: TimeColumnElementProps,
) => (
  <ElementContainer>
    <Container height={40}>
      <Period
        fontSize={20}
        text={props.additionalPeriod}
        color={theme.palette.grey[500]}
      />
    </Container>

    <Container height={40}>
      <Time fontSize={20} text={props.time} />
    </Container>

    <Container height={20}>
      <Period
        fontSize={20}
        text={props.period}
        color={theme.palette.grey[500]}
      />
    </Container>
  </ElementContainer>
);

const Container = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}%`};
  vertical-align: middle;
`;

const ElementContainer = styled.div`
  width: 56px;
  height: 13.5%;
`;

const Period = styled(Typography)`
  text-align: center;
`;

const Time = styled(Typography)`
  text-align: center;
`;

export default TimeColumnElement;
