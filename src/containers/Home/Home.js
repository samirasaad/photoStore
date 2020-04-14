import React, { Component } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  handleChange = (e) =>{
    console.log(e.target.value);
    this.setState({
      searchTerm:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <>
        <h1>Serach for a photo</h1>
        <form onSubmit={this.handleSubmit}>
          <SearchInput handleChange={this.handleChange}/>
        </form>
      </>
    )
  }
}

export default Home;