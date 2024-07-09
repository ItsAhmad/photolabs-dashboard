import React, { Component } from "react";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads"",
    value: “Lukas Souza”
  }
];

import classnames from "classnames";

class Dashboard extends Component {
  render() {
    const dashboardClasses = classnames("dashboard");

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
