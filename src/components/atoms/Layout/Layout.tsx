import React, { FC } from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout: FC = () => (
  <CssBaseline>
    <Container>
      <Header />
      <Main>
        <TimeTable />
        <SubjectList />
      </Main>
    </Container>
  </CssBaseline>
);
// 中身の要素の幅が最低どのくらい必要かわからないので、保留。
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f6f6f4;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: white;
  border: solid 1px black;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

const TimeTable = styled.div`
  width: 70%;
  min-width: 700px;
  background-color: white;
  border: solid 1px black;
`;

const SubjectList = styled.div`
  width: 30%;
  min-width: 300px;
  background-color: white;
  border: solid 1px black;
`;

export default Layout;
