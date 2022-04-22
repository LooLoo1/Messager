import { Routing } from "pages";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</div>
	);
}

export default App;
