import React, { Component } from "react";

class Dashboard extends Component {
  state = {
    loading: true,
    focused: null,
    photos: [],
    topics: []
   };

  componentDidMount() {
    const focused = JSON.parse(localStorage.getItem("focused"));

    const urlsPromise = [
      "/api/photos",
      "/api/topics",
    ].map(url => fetch(url).then(response => response.json()));

    Promise.all(urlsPromise)
    .then(([photos, topics]) => {
      this.setState({
        loading: false,
        photos: photos,
        topics: topics
      });
    });

    if (focused) {
      this.setState({ focused });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.focused !== this.state.focused) {
      localStorage.setItem("focused", JSON.stringify(this.state.focused));
    }
  }

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}