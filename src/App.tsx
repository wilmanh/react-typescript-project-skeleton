// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./assets/scss/App.scss";
import "./i18n";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Config } from "./utils/constants.config";
import { reducers } from "./store/reducers";

import * as Routes from "./routes";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store);

const App = (): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={Config.PUBLIC_PATH}>
        <Switch>
          <Route exact path="/" component={Routes.Component} />
          <Route exact path="/button" component={Routes.Button} />
          <Route exact path="/input" component={Routes.Input} />
          <Route exact path="/textarea" component={Routes.TextArea} />
          <Route exact path="/select" component={Routes.Select} />
          <Route exact path="/radio" component={Routes.Radio} />
          <Route exact path="/checkbox" component={Routes.Checkbox} />
          <Route exact path="/upload" component={Routes.Upload} />
          <Route exact path="/box" component={Routes.Box} />
          <Route exact path="/content" component={Routes.Content} />
          <Route exact path="/notification" component={Routes.Notification} />
          <Route exact path="/progress-bar" component={Routes.ProgressBar} />
          <Route exact path="/breadcrumb" component={Routes.Breadcrumb} />
          <Route exact path="/tag" component={Routes.Tag} />
          <Route
            exact
            path="/image-container"
            component={Routes.ImageContainer}
          />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
