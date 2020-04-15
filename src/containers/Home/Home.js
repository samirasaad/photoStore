import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';
import { searchRequest } from './../../store/actions/search';
import ImagesList from '../ImagesList/ImagesList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      photosList: []
    }
  }
  componentDidMount = () => {
    // const {searchRequest} =this.props;
    // searchRequest({query:'cars'})
  }


  componentDidUpdate = (prevProps) => {
    const { results } = this.props;
    if (prevProps.results !== this.props.results) {
      this.setState({
        photosList: results
      })
    }
  }
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchRequest } = this.props;
    searchRequest({ query: this.state.searchTerm, page: 1, per_page:5})

  }
  render() {
    const {photosList} = this.state;
    return (
      <>
        <h1>Serach for a photo</h1>
        <SearchInput handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
       {photosList.length > 0 &&
        <ImagesList photosList={photosList}/>
       }
      </>
    )
  }
}

const mapStateToProps = ({ locale: { lang }, search: { results, total, total_pages } }) => ({
  lang,
  results,
  total,
  total_pages,
})

export default connect(mapStateToProps, { searchRequest })(Home);