import React from "react";
import { hot } from "react-hot-loader";
import Layout from "./components/Layout";

const App = () => (
  <Layout>
    <h1>Hello World!</h1>
  </Layout>
);

export default hot(module)(App);
