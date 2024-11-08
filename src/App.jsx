import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import HelpPage from "./pages/HelpPage/HelpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}

export default App;
