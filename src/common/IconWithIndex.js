import React from 'react';
import { Icon } from 'semantic-ui-react';

const IconWithIndex = ({name, onClick, index}) => (
  <div onClick={() => {onClick(index)}}>
    <Icon name={name}/>
  </div>
);

export default IconWithIndex;
