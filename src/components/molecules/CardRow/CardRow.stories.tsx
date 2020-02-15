import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import CardRow, { CardRowProps } from './CardRow';

const stories = storiesOf('CardRow', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });

const cardRow: CardRowProps = {
  cardRowElements: {
    elements: [
      {
        blockName: 'I_B',
      },
      {
        blockName: 'I_B',
      },
      {
        blockName: 'I_B',
      },
      {
        blockName: 'I_B',
      },
      {
        blockName: 'I_B',
      },
    ],
  },
  cardActions: {
    onIconClick: () => {},
    onActionAreaClick: () => {},
  },
};

stories.add('CardRow', () => (
  <CardRow
    cardRowElements={cardRow.cardRowElements}
    cardActions={cardRow.cardActions}
  />
));
