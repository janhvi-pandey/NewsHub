import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const apikey = "pub_508660721b0e2dc408d75d17f822b4db609f6";
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#191919";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <div>
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/home" />} />

          <Route
            exact
            path="/home"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="world"
                pageSize={8}
                country="in,de,us,ch,sg"
                category="crime,world,business,sports,lifestyle"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                pageSize={8}
                country="in,ca,us,ch,sg"
                category="business"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/education"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="education"
                pageSize={8}
                country="in,ca,us,ch,nl"
                category="education"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                pageSize={8}
                country="in,de,us,ch,no"
                category="entertainment"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                pageSize={8}
                country="in,fr,us,ch,no"
                category="health"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                pageSize={8}
                country="in,fr,us,ch,no"
                category="science"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="sports"
                pageSize={8}
                country="in,de,us,tw,no"
                category="sports"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="technology"
                pageSize={8}
                country="de,in,us,kr,cn"
                category="technology"
                language="en"
              />
            }
          />
          <Route
            exact
            path="/tourism"
            element={
              <News
                mode={mode}
                toggleMode={toggleMode}
                setProgress={setProgress}
                apikey={apikey}
                key="tourism"
                pageSize={8}
                country="in,us,ch,de,fr"
                category="tourism"
                language="en"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
