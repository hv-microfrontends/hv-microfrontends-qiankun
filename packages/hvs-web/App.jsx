import React, { version as reactVersion } from "react";

import Logo from "./components/Logo";

export default class App extends React.Component {
  render() {
    return (
      <div className="root-main">
        <Logo />
        <p className="root-lib">React version: {reactVersion}</p>
      </div>
    );
  }
}
