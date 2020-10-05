import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Layouts/Footer";
import { Header } from "./Components/Layouts/Header";
import { User } from "./Pages/User";
import { Product } from "./Pages/Product";
import styled from "styled-components";

const WrapBody = styled.div`
  margin-top: 97px;
`;

function App() {
  return (
    <WrapBody>
      <Header />
      <Switch>
        <Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/user" component={User}></Route>
          <Route exact path="/product/:id" component={Product}></Route>
        </Route>
      </Switch>
      <Footer />
    </WrapBody>
  );
}

export default App;
