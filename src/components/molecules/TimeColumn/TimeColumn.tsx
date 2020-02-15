import React, { FC } from 'react';
import styled from 'styled-components';
import TimeColumnElement, {
  TimeColumnElementProps,
} from '@/molecules/TimeColumnElement/TimeColumnElement';

export interface TimeColumnProps {
  elements: TimeColumnElementProps[];
}

const TimeColumn: FC<TimeColumnProps> = (props: TimeColumnProps) => {
  const elements = props.elements.map((elem, i) => {
    if (i === 4) {
      return (
        <React.Fragment key={i}>
          <Blank />
          <TimeColumnElement
            additionalPeriod={elem.additionalPeriod}
            period={elem.period}
            time={i.toString()}
            key={i}
          />
        </React.Fragment>
      );
    }

    return (
      <TimeColumnElement
        additionalPeriod={elem.additionalPeriod}
        period={elem.period}
        time={i.toString()}
        key={i}
      />
    );
  });

  return <TimeColumnContainer>{elements}</TimeColumnContainer>;
};

const TimeColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blank = styled.div`
  height: 5%;
`;

export default TimeColumn;
