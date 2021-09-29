import React from "react";
import { BrowserRouter } from "react-router-dom";
import Route from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/auth";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
