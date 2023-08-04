import {View, Text} from 'react-native';
import React from 'react';
import MainStack from './src/navigation/index';
import {store }from './src/Redux/Store/index';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};
export default App;
