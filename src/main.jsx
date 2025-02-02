import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("wp_quiz")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
