import React from 'react';
import Panel from './Panel';

const dashboardClasses = classnames("dashboard", {
  "dashboard--focused": this.state.focused
 });

 selectPanel = (id) => {
  this.setState(prev => ({
    focused: prev.focused !== null ? null : id
  }))
};


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
    label: "User with the least uploads",
    value: "Lukas Souza"
  }
];

const Dashboard = () => {
  return (
    <main>
      Panels
    </main>
  );
};

const panels = (this.state.focused ? data.filter(panel => this.state.focused === panel.id) : data)
   .map(panel => (
    <Panel
     key={panel.id}
     id={panel.id}
     label={panel.label}
     value={panel.value}
     onSelect={this.selectPanel}
    />
   ));

export default Dashboard;
