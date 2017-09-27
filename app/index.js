import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);

if (module.hot) {
	module.hot.accept();
}