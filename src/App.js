import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import Content from "./containers/Content";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
// import { logger } from "redux-logger";

// createSagaMiddware tạo ra middware nằm giữa action và reducer
const sagaMiddware = createSagaMiddleware();

// applyMiddleware khởi tạo saga trong store
const store = createStore(allReducers, applyMiddleware(sagaMiddware));

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

// hàm run sẽ gom các object được định nghĩa trong hàm rootSaga
sagaMiddware.run(rootSaga);
export default App;
