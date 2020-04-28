import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";

import Flex from "../atoms/Flex/index";
import HomePage from "../pages/HomePage";
import Message from "../atoms/Message";
import MessageListPage from "../pages/MessageListPage";
import MessageRoute from "../MessageRoute";
import listOfGreetings from "../listOfGreetings";

const getRandomEl = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

export default function App() {
  const [lines, setLines] = useState(getRandomEl(listOfGreetings));

  return (
    <Router>
      <Switch>
        <MessageRoute exact path="/" lines={lines}>
          <HomePage />
        </MessageRoute>
        <Route exact path="/about">
          <MessageListPage />
        </Route>
      </Switch>
    </Router>
  );
}
