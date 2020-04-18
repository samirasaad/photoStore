import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';
import { searchRequest } from './../../store/actions/search';
import ImagesList from '../ImagesList/ImagesList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  componentDidMount = () => {
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchRequest } = this.props;
    const {activePage,photosPerPage } =this.state;
    searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
  }

 

  render() {
    const { photosList, activePage, photosPerPage } = this.state;
    return (
      <>
        <h1>Serach for a photo</h1>
        <SearchInput handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <ImagesList photosList={photosList} />
      </>
    )
  }
}

const mapStateToProps = ({ locale: { lang }, search: { results, total, total_pages } }) => ({
  lang,
  // results,
  // total,
  // total_pages,
})

export default connect(mapStateToProps, { searchRequest })(Home);