import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from './App.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <BrowserRouter basename='LOGIN'> */}
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
)
