import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    loading: true
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}