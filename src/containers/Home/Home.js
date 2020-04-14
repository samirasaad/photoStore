import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';
import {searchRequest} from './../../store/actions/search';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  componentDidMount = () =>{
    const {searchRequest} =this.props;
    searchRequest({query:'cars'})
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

const mapStateToProps = ({locale:{lang}}) =>({
lang:lang
})

export default connect(mapStateToProps,{searchRequest})(Home);