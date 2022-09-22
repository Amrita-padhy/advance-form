import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Summary from "./components/Summary";
import { AppContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/summary" element={<Summary />}>
              {" "}
            </Route>{" "}
            <Route path="/form" element={<Form />}>
              {" "}
            </Route>{" "}
          </Routes>{" "}
        </BrowserRouter>{" "}
      </AppContextProvider>
    </div>
  );
}

export default App;
