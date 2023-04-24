import { Route, Routes } from "react-router-dom";

import "@src/assets/styles/resetStyles.css";
import "@src/assets/styles/global.css";

import MainLayout from "@src/components/MainLayout.jsx";
import MainPage from "@src/pages/MainPage/MainPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
