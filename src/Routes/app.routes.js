import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Pages/Home/index';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator>
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;