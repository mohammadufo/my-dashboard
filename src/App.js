import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Components/common/Header";
import FirstContent from "./contents/Home/FirstContent";
import Tarakonesh from "./contents/Tarakonesh/Tarakonesh";
import MainMenu from "./Menu/Menu";
import Plagins from "./contents/Plugins/plagin";
import CodeGetter from "./contents/codePazirande/CodeGetter";
import CardBank from "./contents/cardBank/cardBank";
import HelpUser from "./contents/help/helps";
import Karmozd from "./contents/karmozd/karmozd";
import EhrazHoviat from "./contents/EhrazHoviat/EhrazHoviat";
import Support from "./contents/Support/Support";
import Register from "./Register/Register";
import Transfor from "./contents/Transfor/Transfor";
import Login from './Login/Login';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-2">
          <MainMenu />
        </div>
        <div className="col-12 col-lg-10 mt-3">
          <Header />
          <div className="tab-content">
            <Route path="/" exact component={FirstContent} />
            <Route path="/tarakonesh" component={Tarakonesh} />
            <Route path="/plagin" component={Plagins} />
            <Route path="/cardbank" component={CardBank} />
            <Route path="/helpuser" component={HelpUser} />
            <Route path="/karmozd" component={Karmozd} />
            <Route path="/codegetter" component={CodeGetter} />
            <Route path="/ehraz" component={EhrazHoviat} />
            <Route path="/support" component={Support} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/transfor" component={Transfor} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
