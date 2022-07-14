import React from 'react';
import theme from './src/global/styles/theme';
import { Register } from './src/screens/Register';
import {ThemeProvider} from 'styled-components';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins';
import {NavigationContainer} from '@react-navigation/native';


import * as SplashScreen from 'expo-splash-screen';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();


  return (
    <ThemeProvider theme={theme}>
      
        <Register />
     
      
    </ThemeProvider>
  )
    
}


