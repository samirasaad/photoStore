import React, { Component } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <>
      <h1>HOME PAGE</h1>
      <SearchInput />
      </>
    )
  }
}
 
export default Home;