import React from 'react';
import SidebarNav from './SidebarNav/SidebarNav';
import Routes from './Routes/Routes';
import { Grid } from 'semantic-ui-react';
import './App.css';

const AppLayout = () => (
  <Grid className='mgn-0 pd-0' stackable>
    <Grid.Column stretched={true} className='mgn-0 pd-0' width={1}>
      <SidebarNav />
    </Grid.Column>
    <Grid.Column className='mgn-0 pd-0 ht-100pct' width={15}>
      <div className='ht-100pct'>
        <Routes />
      </div>
    </Grid.Column>
  </Grid>
);

export default AppLayout;
