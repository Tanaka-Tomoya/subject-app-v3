import React, { FC, useContext } from 'react';
import { styled } from '@material-ui/core/styles';
import styledComponents from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { PageContext } from 'utils/contexts';
import Typography from '@/atoms/Typography/Typography';
import Icon from '@/atoms/Icon/Icon';
import theme from '../../../utils/theme';

export interface CardProps {
  elements: CardElements;
  actions: CardActions;
}

export interface CardElements {
  blockName: string;
}

export interface CardActions {
  onIconClick(block: string): void;
  onActionAreaClick(block: string): void;
}

const Card: FC<CardProps> = (props: CardProps) => {
  const context = useContext(PageContext);
  const { blockName } = props.elements;

  const removeSubject = block => {
    props.actions.onIconClick(block);
  };
  if (blockName === 'LHR') {
    return (
      <Container>
        <CardWrapper>
          <div>
            <Header>
              <BlockName
                text={blockName}
                fontSize={14}
                color={theme.palette.grey[500]}
              />
            </Header>
            <Content>
              <SubjectTypography
                text={blockName}
                fontSize={24}
                fontWeight="fontWeightLight"
                color={theme.palette.text.secondary}
              />
            </Content>
          </div>
        </CardWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <CardWrapper>
        <DeleteIcon>
          <Icon iconName="Delete" onClick={() => removeSubject(blockName)} />
        </DeleteIcon>
        <ActionArea onClick={() => props.actions.onActionAreaClick(blockName)}>
          <Header>
            <BlockName
              text={blockName}
              fontSize={14}
              color={theme.palette.grey[500]}
            />
          </Header>
          <Content>
            <SubjectTypography
              text={context.class[blockName]}
              fontSize={24}
              fontWeight="fontWeightLight"
              color={theme.palette.text.secondary}
            />
          </Content>
        </ActionArea>
      </CardWrapper>
    </Container>
  );
};

const Container = styledComponents(MuiCard)`
  position: relative;
  width: 100%;
  margin-left: 8px;
  &::before {
    content:"";
    display: block;
    padding-top: 55%; /* 高さを幅の75%に固定 */
  }
`;

const Header = styled(CardContent)({
  display: 'flex',
  padding: '0 0 0 8px',
});

const BlockName = styledComponents(Typography)`
  height: 100%;
  padding-top: 12px;
`;

const DeleteIcon = styledComponents.div`
  position: absolute;
  left: 75%;
  z-index: 10;
`;

const SubjectTypography = styledComponents(Typography)`
`;

const ActionArea = styled(CardActionArea)({
  height: '100%',
  padding: '0px 8px',
});

const Content = styled(CardContent)({
  height: '60px',
});

const CardWrapper = styledComponents.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export default Card;
