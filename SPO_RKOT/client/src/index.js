import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import ExternalTableStore from './store/ExternalTableStore';
import InternalTableStore from './store/InternalTableStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext()


root.render(
  <Context.Provider value={{
    externalTable: new ExternalTableStore(),
    internalTable: new InternalTableStore()

  }}>
    <App />
  </Context.Provider>
);


