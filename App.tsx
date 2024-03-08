// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import MainScreenStackNavigation from './src/Navigations/MainScreenStack';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainScreenStackNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
