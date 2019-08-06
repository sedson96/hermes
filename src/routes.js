import React from "react"
import {Switch, Route} from "react-router-dom"

import LandingMain from "./components/Landing/LandingMain"
import LoginMain from "./components/Login/LoginMain";
import ShopMain from "./components/Shop/ShopMain";

export default (
    <Switch>
        <Route path="/login" component={LoginMain} />
        <Route path="/:id" component={ShopMain} />
        <Route path="/" component={LandingMain} />
    </Switch>
)