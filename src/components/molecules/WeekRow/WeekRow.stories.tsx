import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import WeekRow from './WeekRow';

const stories = storiesOf('WeekRow', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });

stories.add('曜日', () => <WeekRow />);
