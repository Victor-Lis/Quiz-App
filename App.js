import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes';

import AuthProvider from './src/contexts/auth';
import QuestsProvider from './src/contexts/quest';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <QuestsProvider>

          <StatusBar backgroundColor='#FFF' barStyle="dark-content"/>
          <Routes/>

        </QuestsProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
