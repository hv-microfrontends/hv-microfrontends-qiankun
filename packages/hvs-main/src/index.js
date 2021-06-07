import "lib/i18n";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";
import { registerMicroApps, start, initGlobalState } from "qiankun";
import App from "App";

const globalStateActions = initGlobalState({
  theme: "dawn",
  isOpen: false,
});

ReactDOM.render(
  <App {...globalStateActions} />,
  document.getElementById("main-app")
);

registerMicroApps([
  {
    name: "hvs-wis-web",
    entry: "//localhost:3001",
    container: "#sub-app",
    activeRule: "/settings",
    props: {
      basename: "/settings",
    },
  },
]);

// Start sub micro apps
start({ sandbox: false });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
