import React from 'react';

export default class AllItems extends React.Component{

  getInitialState() {
        return { items: [] }
    }

  render() {
    return (
      <div>
        <h1>All items component</h1>
      </div>
    );
  }
};