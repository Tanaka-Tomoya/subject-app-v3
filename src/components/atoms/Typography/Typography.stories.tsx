import React from 'react';
import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, text } from '@storybook/addon-knobs';
import theme from '../../../utils/theme';
import Typography from './Typography';

const stories = storiesOf('Typography', module);
stories.addDecorator(muiTheme([theme]));
stories.addParameters({ info: { inline: true } });
stories.addDecorator(withKnobs);

// 白は#fafafa
stories.add('ヘッダー', () => (
  <Typography
    text={text('テキスト', 'ヘッダー')}
    fontWeight="fontWeightBold"
    fontSize={34}
    color={text('カラー', theme.palette.text.primary)}
  />
));
stories.add('科目名', () => (
  <Typography
    text={text('テキスト', '科目名')}
    fontSize={34}
    color={text('カラー', theme.palette.secondary.main)}
  />
));
stories.add('時間・曜日', () => (
  <Typography text={text('テキスト', 'Mon')} fontSize={20} />
));
stories.add('科目一覧', () => (
  <Typography
    text={text('テキスト', '科目一覧')}
    fontSize={20}
    fontWeight="fontWeightBold"
  />
));
stories.add('ブロック', () => (
  <Typography
    text={text('テキスト', 'I_A')}
    fontSize={14}
    color={text('カラー', theme.palette.grey[500])}
  />
));
stories.add('必修', () => (
  <Typography
    text={text('テキスト', '必修')}
    fontSize={14}
    color={text('カラー', theme.palette.secondary.main)}
  />
));
