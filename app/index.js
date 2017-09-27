import React from "react";
import {render} from "react-dom";

import Layout from "./Layout";

const app = document.getElementById('app');
render(<Layout/>, app);

if (module.hot) {
	module.hot.accept();
}