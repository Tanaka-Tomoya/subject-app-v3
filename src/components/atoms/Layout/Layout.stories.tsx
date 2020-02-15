import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import Layout from './Layout';
import theme from '../../../utils/theme';

const stories = storiesOf('Layout', module);

stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.add('Layout', () => <Layout />);
