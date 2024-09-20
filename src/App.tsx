import type React from "react";
import "./App.css";
import QRCodeGenerator from "./components/QRCodeGenerator";

const App: React.FC = () => {
	return (
		<div className="App">
			<QRCodeGenerator />
		</div>
	);
};

export default App;
