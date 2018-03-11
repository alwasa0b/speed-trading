import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import main from "./sagas";
import createSocketIoMiddleware from "redux-socket.io";
import { userConstants, actions, messages } from "./constants";
import { composeWithDevTools } from "redux-devtools-extension";
import io from "socket.io-client";
let socket = io("http://localhost:3001");
let socketIoMiddleware = createSocketIoMiddleware(socket, "SERVER/");
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware, socketIoMiddleware))
);

sagaMiddleware.run(main);



export default store;
