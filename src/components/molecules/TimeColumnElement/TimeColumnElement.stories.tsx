import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import TimeColumnElement from './TimeColumnElement';

const stories = storiesOf('TimeColumnElement', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

stories.add('一番上がある場合', () => (
  <TimeColumnElement
    period={text('何時から？', '09:35')}
    additionalPeriod={text('何時から？', '8:40')}
    time={text('何限目？', '1')}
  />
));

stories.add('それ以外', () => (
  <TimeColumnElement
    period={text('何時から？', '09:35')}
    time={text('何限目？', '1')}
  />
));
