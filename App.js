import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store/index';
import MainStack from './src/navigation/index';
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};
export default App;
