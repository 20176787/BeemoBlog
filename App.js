import React from 'react';
import {View} from 'react-native';
import NavigationService from './NavigationService';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import LoginScreen from './src/page/LoginScreen';
import AppContainer from './src/router/StackNavigator/AppContainer';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </PaperProvider>
  );
}
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1289ff',
    accent: '#f1c40f',
  },
  fonts: {
    // regular: { fontFamily: 'open-sans' },
    medium: {fontFamily: 'open-sans-bold'},
    light: {fontFamily: 'open-sans-light'},
  },
};
