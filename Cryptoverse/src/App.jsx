import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { Navbar, CryptoDetails, Cryptocurrencies, Home } from "./components";
import { ThemeProvider } from "./ThemeContext";
import Login from "./Login";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(""); // Store user name

  return (
    <ThemeProvider>
      <div className="app">
        {isAuthenticated && (
          <div className="navbar">
            <Navbar />
          </div>
        )}

        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                {!isAuthenticated ? (
                  <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} setUserName={setUserName} />} />
                ) : (
                  <>
                    <Route path="/" element={<Home userName={userName} />} />
                    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                    <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                  </>
                )}
              </Routes>
            </div>
          </Layout>

          {isAuthenticated && (
            <div className="footer">
              <h1 className="footer-heading">
                Beyond the Banks: The Rise of Cryptocurrency <br />
              </h1>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
