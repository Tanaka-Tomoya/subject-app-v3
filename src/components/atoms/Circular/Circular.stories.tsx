import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../../../utils/theme';
import Circular from './Circular';

const stories = storiesOf('Circular', module);
stories.addDecorator(muiTheme([theme]));

stories.add('Circular', () => <Circular />);
