/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SFC } from 'react';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';
import Dehaze from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';

export interface IconProps {
  iconName: 'Dehaze' | 'Search' | 'Delete';
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
}

const Icon: SFC<IconProps> = (props: IconProps) => {
  switch (props.iconName) {
    case 'Dehaze': {
      return (
        <IconButton onClick={props.onClick}>
          <Dehaze style={{ color: props.color }} />
        </IconButton>
      );
    }
    case 'Search': {
      return (
        <IconButton onClick={props.onClick}>
          <Search style={{ color: props.color }} />
        </IconButton>
      );
    }
    case 'Delete': {
      return (
        <IconButton onClick={props.onClick}>
          <Delete style={{ color: props.color }} />
        </IconButton>
      );
    }
    default: {
      return <img src="" alt="no image" />;
    }
  }
};

export default Icon;
