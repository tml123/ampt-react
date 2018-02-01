import React from 'react';
import { Accordion } from 'semantic-ui-react';

const AccordionContentFlex = (props) => (
  <Accordion.Content active={true}>
    <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
    </div>
  </Accordion.Content>
);
