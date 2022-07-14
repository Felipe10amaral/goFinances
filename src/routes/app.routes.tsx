import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Dashboard} from '../screens/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return(
     
      <Navigator>
        <Screen 
          name='Listagem'
          component={Dashboard}
        />
        <Screen 
          name='Cadastrar'
          component={Dashboard}
        />
        <Screen 
          name='Resumo'
          component={Dashboard}
        />
       </Navigator>
     
    );
}