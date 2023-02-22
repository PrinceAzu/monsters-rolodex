import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox'


class App extends Component{
  state = {
    gods: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({gods: users}));
  }

  onChangeHandler = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { gods, searchField } = this.state;
    const filteredGods = gods.filter(god => 
      god.name.includes(searchField) 
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search gods" onChangeHandler={this.onChangeHandler} />
        <CardList gods={filteredGods} />
      </div>
    );
  }
}

export default App;
 