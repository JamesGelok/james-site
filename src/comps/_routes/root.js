import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useState } from "react";

import Flex from "../atoms/Flex/index";
import Message from "../atoms/Message";
import MessageListPage from "../pages/MessageListPage";
import MessageRoute from "../MessageRoute";
import listOfGreetings from "../listOfGreetings";

const getRandomEl = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

export default function App() {
  const [lines, setLines] = useState(getRandomEl(listOfGreetings));
  // useInterval(() => {
  //   setLines(getRandomEl(listOfGreetings));
  // }, 2000);

  return (
    <Router>
      <Switch>
        <MessageRoute exact path="/" lines={lines}>
          <h1>This is the home page</h1>
          <Link to="/about">about</Link>
        </MessageRoute>
        <Route exact path="/about">
          <MessageListPage />
        </Route>
      </Switch>
    </Router>
  );
}
