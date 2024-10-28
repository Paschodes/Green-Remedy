import { Route, Routes } from "react-router-dom";
import Landing from "./modules/landingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
