import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Sidebar";
import RecomandVideos from "./components/recomdvideo/RecomandVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/sarchpage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <h1>search page</h1>
            <div className="app_Page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <h1>home page</h1>

            <div className="app_Page">
              <Sidebar />
              <RecomandVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
