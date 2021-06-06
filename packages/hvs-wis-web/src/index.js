import "./public-path";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";
import App from "App";
import "lib/i18n";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
