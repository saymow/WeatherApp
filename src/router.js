import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./componentes/searcher"
import MainPage from "./pages/main"
import ResultPage from "./pages/result"

const Routes = () => (
    <BrowserRouter>
      <Header />
      <Switch >
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/result/:title" component={ResultPage}></Route>
      </Switch>
    </BrowserRouter>
)

export default Routes