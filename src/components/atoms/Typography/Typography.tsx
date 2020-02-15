import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography as MuiTypography, Box } from '@material-ui/core';

export interface TypographyProps {
  text: string;
  fontWeight?: string | number;
  textAlign?: string;
  fontSize?: string | number;
  color?: string;
  className?: string;
}

const Typography: FC<TypographyProps> = (props: TypographyProps) => {
  const { text, className, ...boxProps } = props;

  return (
    // コンポーネントの最初の文字は必ず大文字
    <Text component="div" className={className}>
      <Box {...boxProps}>{text}</Box>
    </Text>
  );
};

const Text = styled(MuiTypography)`
  /* text-align: center; */
`;

export default Typography;
