
import * as React from 'react';
import Route from './config/Router'
import { Provider } from 'react-redux'
import configureStore from './config/Redux/configureStore'
import LottieView from 'lottie-react-native';


const store = configureStore()

class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000);
  }

  render() {
    return (
      this.state.loading ?
        <LottieView source={require('./src/animation/loading1.json')} autoPlay loop />
        :
        <Provider store={store}>
          <Route />
        </Provider>
    );
  }
}

export default App