import React, { SFC } from 'react';
import { AppBar as MuiAppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';


const AppBar: SFC<{}> = () => {
  return (
    <MuiAppBar>
      <Toolbar>
      </Toolbar>
    </MuiAppBar>
  );
};
export default AppBar;
