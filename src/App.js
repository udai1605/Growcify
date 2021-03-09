import {Provider} from 'react-redux';
import Store from './redux/Store.js';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'
function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter basename="/">
          <Routes />
      </BrowserRouter>{' '}
    </Provider>
  );
}

export default App;
