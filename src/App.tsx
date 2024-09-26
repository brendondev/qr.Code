import type React from "react";
import "./App.css";
import QRCodeGenerator from "./components/QRCodeGenerator";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
	return (
		<div className="App">
			<QRCodeGenerator />
			<Analytics />
		</div>
	);
};

export default App;
