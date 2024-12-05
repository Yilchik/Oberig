import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import HelpPage from "./pages/HelpPage/HelpPage";
import GratitudePage from "./pages/GratitudePage/GratitudePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/gratitude" element={<GratitudePage />} />
    </Routes>
  );
}

export default App;
