import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Login, Chat, Register } from "./pages/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Chat} />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={Register} />
      </Routes>
    </div>
  );
}

export default App;
