import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemePrivider';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


