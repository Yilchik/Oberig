import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
