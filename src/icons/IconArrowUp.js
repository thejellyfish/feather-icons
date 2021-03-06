import React from 'react';
import Icon from '../Icon';

/* eslint-disable react/jsx-props-no-spreading */
export default function IconArrowUp(props) {
  return (
    <Icon {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </Icon>
  );
}
