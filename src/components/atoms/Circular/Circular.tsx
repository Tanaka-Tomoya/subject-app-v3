import React, { FC } from 'react';
import styled from 'styled-components';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';

const Circular: FC<{}> = () => <CircularProgress color="primary" />;

const CircularProgress = styled(MuiCircularProgress)``;

export default Circular;
