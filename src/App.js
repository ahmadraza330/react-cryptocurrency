import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import Navbar from "./comps/Navbar";
import HomePage from "./comps/HomePage";
import Exchange from "./comps/Exchange";
import CryptoCurrencies from "./comps/CryptoCurrencies";
import CryptoDetail from "./comps/CryptoDetail";
import News from "./comps/News";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout className="routes">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/exchanges" component={Exchange} />
            <Route path="/cryptoCurrencies" component={CryptoCurrencies} />
            <Route path="/crypto/:coinId" component={CryptoDetail} />
            <Route path="/news" component={News} />
          </Switch>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAligin: "center" }}
          >
            Cryptoverse <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
