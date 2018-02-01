import React from 'react';
import { Accordion } from 'semantic-ui-react';

const AccordionTitleCheckbox = ({children, ...rest}) => (
  <Accordion.Title {...rest}>
    <div style={{'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'}}>
      {children}
    </div>
  </Accordion.Title>
);

export default AccordionTitleCheckbox;
