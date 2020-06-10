import React from "react";
import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/raleway/Raleway-SemiBoldItalic.ttf";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
export default App;
