import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website Routes */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;