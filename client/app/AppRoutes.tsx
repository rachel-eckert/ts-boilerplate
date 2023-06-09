import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "../features/home/Home";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
