import React from 'react';
import HomeNavigation from './src/components/Home/views/HomeNavigation'
import { Provider } from 'react-redux'
import configureStore from "./src/store/configureStore"

const store = configureStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeNavigation />
      </Provider>
    );
  }
}
