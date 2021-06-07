import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

function domElementGetter({ container }) {
  return container
    ? container.querySelector("#root")
    : document.querySelector("#root");
}

export async function bootstrap() {
  console.log(`app bootstraped`);
}

export async function mount(props) {
  ReactDOM.render(<App {...props} />, domElementGetter(props));
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(domElementGetter(props));
}

if (!window.__POWERED_BY_QIANKUN__) {
  ReactDOM.render(<App />, domElementGetter({}));
}
