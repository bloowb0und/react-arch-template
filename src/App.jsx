import {Route, Routes} from "react-router-dom";

import "@/assets/styles/resetStyles.css";
import "@/assets/styles/global.css";

import MainLayout from "@/components/MainLayout.jsx";
import MainPage from "@/pages/MainPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/" element={<MainPage />} />
			</Route>
		</Routes>
	)
}

export default App