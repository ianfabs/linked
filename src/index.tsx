import * as React from "react";
import * as ReactDOM from "react-dom";

declare namespace JSX {
  interface IntrinsicElements {
    Container: { card?: boolean }
  }
}

import './index.less';
import App from "./App";

ReactDOM.render(<App/>, document.getElementById("app"));
