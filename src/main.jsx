import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.js";

import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>
);
