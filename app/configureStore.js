import { createStore, applyMiddleware } from "redux";
import App from "./reducers";
import thunk from "redux-thunk";


export default function configureStore() {
  let store = createStore(App, applyMiddleware(thunk));
  return store;
}
